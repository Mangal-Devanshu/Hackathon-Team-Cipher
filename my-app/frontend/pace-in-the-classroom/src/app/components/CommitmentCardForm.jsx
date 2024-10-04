// CommitmentCardForm.js
import React from "react";

const CommitmentCardForm = ({ newCommitment, setNewCommitment, handleSubmit, selectedGroup }) => {
    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-700 font-semibold mb-2">Title</label>
                    <input
                        type="text"
                        placeholder="Enter the title"
                        value={newCommitment.title}
                        onChange={(e) => setNewCommitment({ ...newCommitment, title: e.target.value })}
                        required
                        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-semibold mb-2">Description</label>
                    <textarea
                        placeholder="Enter the description"
                        value={newCommitment.description}
                        onChange={(e) => setNewCommitment({ ...newCommitment, description: e.target.value })}
                        required
                        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Conditionally render password field for private groups */}
                {selectedGroup?.privacy === 'private' && (
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Password</label>
                        <input
                            type="password"
                            placeholder="Enter group password"
                            value={newCommitment.password}
                            onChange={(e) => setNewCommitment({ ...newCommitment, password: e.target.value })}
                            required
                            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                )}

                <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition">
                    Add Commitment
                </button>
            </form>
        </div>
    );
};

export default CommitmentCardForm;
