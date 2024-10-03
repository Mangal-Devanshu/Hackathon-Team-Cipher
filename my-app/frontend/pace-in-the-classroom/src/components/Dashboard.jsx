import React, { useState } from "react";
import SearchBar from "./SearchBar";
import GroupForm from "./GroupForm";
import SwipeCards from "./SwipeCards";

const Dashboard = () => {
    const [selectedGroup, setSelectedGroup] = useState(null);
    const [commitments, setCommitments] = useState([]);

    const handleSelectGroup = (group, commitments) => {
        setSelectedGroup(group);
        setCommitments(commitments); // Update commitments based on the selected group
    };

    return (
        <div className="dashboard-container max-w-5xl mx-auto p-6 bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

            <div className="row">
                {/* Group Form on the left */}
                <div className="col-md-4">
                    <GroupForm />
                </div>

                {/* Search Bar on the right */}
                <div className="col-md-8">
                    <SearchBar onSelectGroup={handleSelectGroup} />
                </div>
            </div>

            {/* SwipeCards below the form and search bar */}
            <div className="mt-4">
                <SwipeCards commitments={commitments} selectedGroup={selectedGroup} />
            </div>
        </div>
    );
};

export default Dashboard;
