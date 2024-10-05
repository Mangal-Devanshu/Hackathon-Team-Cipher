import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import GroupForm from "../components/GroupForm";
import SwipeCards from "../components/SwipeCards";
import CommitmentCardForm from "../components/CommitmentCardForm"; // Ensure this path is correct

export function Component() {
    const [selectedGroup, setSelectedGroup] = useState(null);
    const [commitments, setCommitments] = useState([]);
    const [newCommitment, setNewCommitment] = useState({ title: "", description: "", password: "" });

    const handleSelectGroup = (group, commitments) => {
        setSelectedGroup(group);
        setCommitments(commitments); // Update commitments based on the selected group
    };

    const handleCommitmentSubmit = async (e) => {
        e.preventDefault();
        // Add logic to post new commitment, this is placeholder:
        console.log("New commitment submitted:", newCommitment);
        // Reset commitment form after submission
        setNewCommitment({ title: "", description: "", password: "" });
    };

    return (
        <div className="h-full flex flex-col">
            {/* Full-width Card container for search bar and forms */}
            <div className="p-4 bg-black border border-blue-700 shadow-lg rounded-lg w-full mx-auto my-4">
                {/* Dashboard Title */}
                <h1 className="text-3xl font-semibold text-white mb-4 text-center">Dashboard</h1>

                {/* Flex container for SearchBar and GroupForm */}
                <div className="flex justify-between">
                    {/* SearchBar on the left */}
                    <div className="w-1/3 p-2">
                        <SearchBar onSelectGroup={handleSelectGroup} />
                    </div>

                    {/* Forms on the right */}
                    <div className="w-2/3 flex flex-col gap-2 p-2">
                        {/* GroupForm */}
                        <div className="bg-black p-3g">
                            <GroupForm />
                        </div>

                        {/* Commitment Form */}
                        {selectedGroup && (
                            <div className="bg-black p-3">
                                <CommitmentCardForm
                                    newCommitment={newCommitment}
                                    setNewCommitment={setNewCommitment}
                                    handleSubmit={handleCommitmentSubmit}
                                    selectedGroup={selectedGroup}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* SwipeCards taking up the remaining space */}
            <div className="flex-grow">
                <SwipeCards commitments={commitments} selectedGroup={selectedGroup} />
            </div>
        </div>
    );
}

Component.displayName = "DashboardComponent";
