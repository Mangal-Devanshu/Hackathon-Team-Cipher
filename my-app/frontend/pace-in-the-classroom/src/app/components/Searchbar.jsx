import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchBar = ({ onSelectGroup }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedGroup, setSelectedGroup] = useState(null);

    const debounce = (func, delay) => {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                func.apply(this, args);
            }, delay);
        };
    };

    const fetchGroups = async (query) => {
        if (!query) {
            setSearchResults([]);
            setSelectedGroup(null);
            return;
        }
        setLoading(true);
        try {
            const response = await axios.get(`http://localhost:8080/groups/search?name=${query}`);
            setSearchResults(Array.isArray(response.data) ? response.data : []);
        } catch (error) {
            console.error("Error fetching groups:", error);
            setSearchResults([]);
        } finally {
            setLoading(false);
        }
    };

    const debouncedFetchGroups = debounce(fetchGroups, 300);

    useEffect(() => {
        debouncedFetchGroups(searchQuery);
    }, [searchQuery]);

    const handleResultClick = async (group) => {
        setSelectedGroup(group);
        await fetchCommitmentsForGroup(group);
    };

    const fetchCommitmentsForGroup = async (group) => {
        try {
            const response = await axios.get(`http://localhost:8080/groups/${group._id}/commitments`);
            onSelectGroup(group, response.data);
        } catch (error) {
            console.error("Error fetching commitments:", error);
        }
    };

    return (
        <div className="search-bar-container">
            <label className="block text-white mt-2 mb-1" htmlFor="group-search-input">Add Commitment Card</label>
            <input
                type="text"
                placeholder="Search for groups"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border border-white-700 p-2 rounded-lg w-full bg-black text-white"
            />
            {loading && <p className="text-white mt-2">Loading...</p>}
            <div className="search-results mt-4">
                {Array.isArray(searchResults) && searchResults.length > 0 ? (
                    <ul>
                        {searchResults.map((group) => (
                            <li
                                key={group._id}
                                className="border border-white-700 p-2 rounded-lg cursor-pointer bg-black text-white"
                                onClick={() => handleResultClick(group)}
                            >
                                <h3 className="text-blue-500">{group.name}</h3>
                                <p>{group.privacy === "private" ? "Private" : "Public"}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    searchQuery && !loading && <p className="text-white">No groups found.</p>
                )}
            </div>
        </div>
    );
};

export default SearchBar;
