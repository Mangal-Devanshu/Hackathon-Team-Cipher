import React, { useState } from "react";
import axios from "axios";

const CommitmentCardForm = ({ selectedGroup }) => {
    const [newCommitment, setNewCommitment] = useState({
        title: "",
        description: "",
        password: "",
    });
    
    const [feedbackMessage, setFeedbackMessage] = useState(""); // State for feedback message

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Post the new commitment to the backend
            const response = await axios.post(`http://localhost:8080/groups/${selectedGroup._id}/commitments`, newCommitment);
            console.log("New commitment added:", response.data);
            setFeedbackMessage("Commitment added successfully!"); // Set success message
            // Reset commitment form after submission
            setNewCommitment({ title: "", description: "", password: "" });
        } catch (error) {
            console.error("Error adding commitment:", error);
            setFeedbackMessage("Error adding commitment. Please try again."); // Set error message
        }
    };

    return (
        <div className="max-w-full mx-auto p-6 bg-black shadow-lg rounded-lg border border-blue-700">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex gap-4 items-start">
                    {/* Title */}
                    <div className="flex-1">
                        <label className="block text-white font-semibold mb-2">Name</label>
                        <input
                            type="text"
                            placeholder="Enter the title"
                            value={newCommitment.title}
                            onChange={(e) => setNewCommitment({ ...newCommitment, title: e.target.value })}
                            required
                            className="w-full border border-gray-300 p-3 rounded-lg bg-black text-white"
                        />
                    </div>

                    {/* Description */}
                    <div className="flex-1">
                        <label className="block text-white font-semibold mb-2">Description</label>
                        <textarea
                            placeholder="Enter the description"
                            value={newCommitment.description}
                            onChange={(e) => setNewCommitment({ ...newCommitment, description: e.target.value })}
                            required
                            className="w-full border border-gray-300 p-3 rounded-lg bg-black text-white"
                            rows={1} // Adjust the height to balance the appearance
                        />
                    </div>
                </div>

                {/* Conditionally render password field for private groups */}
                {selectedGroup?.privacy === 'private' && (
                    <div className="flex-1">
                        <label className="block text-white font-semibold mb-2">Password</label>
                        <input
                            type="password"
                            placeholder="Enter group password"
                            value={newCommitment.password}
                            onChange={(e) => setNewCommitment({ ...newCommitment, password: e.target.value })}
                            required
                            className="w-full border border-gray-300 p-3 rounded-lg bg-black text-white"
                        />
                    </div>
                )}

                {/* Submit Button */}
                <div className="flex">
                    <button
                        type="submit"
                        className="w-fit bg-blue-700 text-white p-3 rounded-lg font-semibold hover:bg-blue-800 transition"
                    >
                        Add Commitment
                    </button>
                </div>
                
                {/* Feedback Message */}
                {feedbackMessage && (
                    <p className="mt-4 text-white">{feedbackMessage}</p>
                )}
            </form>
        </div>
    );
};

export default CommitmentCardForm;
