import React, { useState, useEffect } from "react";
import axios from "axios";
import CommitmentCardForm from "./CommitmentCardForm"; // Ensure the correct path

const SearchBar = ({ onSelectGroup }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState("");
    const [selectedGroup, setSelectedGroup] = useState(null);
    const [newCommitment, setNewCommitment] = useState({ title: "", description: "", password: "" });
    const [passwordVerified, setPasswordVerified] = useState(false);
    const [commitments, setCommitments] = useState([]);

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
            // Clear search results and reset state when query is empty
            setSearchResults([]);
            setSelectedGroup(null);
            setCommitments([]);
            setPasswordVerified(false);
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
        setPasswordVerified(false);
        await fetchCommitmentsForGroup(group);
    };

    const fetchCommitmentsForGroup = async (group) => {
        try {
            const response = await axios.get(`http://localhost:8080/groups/${group._id}/commitments`);
            setCommitments(response.data);
            onSelectGroup(group, response.data);
        } catch (error) {
            console.error("Error fetching commitments:", error);
        }
    };

    const handlePasswordSubmit = async () => {
        try {
            const response = await axios.post(`http://localhost:8080/groups/${selectedGroup._id}/verify-password`, { password });
            if (response.data.success) {
                setPasswordVerified(true);
                await fetchCommitmentsForGroup(selectedGroup);
            } else {
                alert("Incorrect password.");
            }
        } catch (error) {
            console.error("Error verifying password:", error);
        }
    };

    const handleCommitmentSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`http://localhost:8080/groups/${selectedGroup._id}/commitments`, newCommitment);
            setNewCommitment({ title: "", description: "", password: "" });
            await fetchCommitmentsForGroup(selectedGroup);
        } catch (error) {
            console.error("Error adding commitment:", error);
        }
    };

    return (
        <div className="container">
            <div className="row">
                {/* Search Bar & Results on the left side */}
                <div className="col-md-6">
                    <div className="search-bar mb-4">
                        <input
                            type="text"
                            placeholder="Search for groups"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="border border-gray-300 p-2 rounded-lg w-full"
                        />
                        {loading && <p>Loading...</p>}
                        <div className="search-results mt-4">
                            {Array.isArray(searchResults) && searchResults.length > 0 ? (
                                <ul>
                                    {searchResults.map((group) => (
                                        <li
                                            key={group._id}
                                            className="border p-2 rounded-lg cursor-pointer"
                                            onClick={() => handleResultClick(group)}
                                        >
                                            <h3>{group.name}</h3>
                                            <p>{group.privacy === "private" ? "Private" : "Public"}</p>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                searchQuery && !loading && <p>No groups found.</p>
                            )}
                        </div>
                        {selectedGroup && selectedGroup.privacy === "private" && (
                            <div className="password-prompt mt-4">
                                <div className="selected-group-info mb-2">
                                    <p>
                                        Selected Group: <strong>{selectedGroup.name}</strong>
                                    </p>
                                </div>
                                <input
                                    type="password"
                                    placeholder="Enter password for this group"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="border border-gray-300 p-2 rounded-lg mt-2 w-full"
                                />
                                <button
                                    onClick={handlePasswordSubmit}
                                    className="bg-blue-500 text-white p-2 rounded-lg mt-2 w-full"
                                >
                                    Submit Password
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Commitment Form on the right side */}
                <div className="col-md-6">
                    {selectedGroup && (selectedGroup.privacy === "public" || passwordVerified) ? (
                        <CommitmentCardForm
                            newCommitment={newCommitment}
                            setNewCommitment={setNewCommitment}
                            handleSubmit={handleCommitmentSubmit}
                            selectedGroup={selectedGroup}
                            commitments={commitments}
                        />
                    ) : (
                        // Hide the form if no group is selected
                        <p>No group selected or password is not verified.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
