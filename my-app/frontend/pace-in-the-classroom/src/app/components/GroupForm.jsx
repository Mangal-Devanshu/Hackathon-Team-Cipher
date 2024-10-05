import React, { useState } from "react";
import axios from "axios";

const GroupForm = () => {
    const [groupData, setGroupData] = useState({
        name: "",
        privacy: "public",
        password: "",
    });
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState(""); // State for success message
    const [showInfo, setShowInfo] = useState(false); // State to toggle info

    const handleChange = (e) => {
        const { name, value } = e.target;
        setGroupData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/groups", groupData);
            console.log("Group created:", response.data);
            setError(""); // Clear error
            setSuccessMessage("Group created successfully!"); // Set success message
            setGroupData({ name: "", privacy: "public", password: "" }); // Reset form
        } catch (error) {
            setError(error.response?.data?.error || "Error creating group");
            setSuccessMessage(""); // Clear success message on error
        }
    };

    return (
        <div className="max-w-full mx-auto p-6 bg-black shadow-lg rounded-lg border border-blue-700">
            {/* Info button and info text */}
            {/* <div className="mb-4 flex items-center text-white">
                <button
                    onClick={() => setShowInfo(!showInfo)}
                    className="text-blue-500 border border-blue-500 rounded-full w-6 h-6 flex justify-center items-center font-semibold mr-2"
                    title="Click for more info"
                >
                    i
                </button>
                <span>Click the 'i' button for more information.</span>
            </div> */}

            {/* {showInfo && (
                <div className="mb-4 text-gray-400 text-sm">
                    Use this form to create a new group. You can choose whether the group is <strong>public</strong> or <strong>private</strong>. If the group is private, you will be required to set a password.
                </div>
            )} */}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {error && <div className="text-red-500 w-full">{error}</div>}
                {successMessage && <div className="text-green-500 w-full">{successMessage}</div>} {/* Success message */}

                <div className="flex gap-4 items-start">
                    {/* Group Name Input */}
                    <div className="flex-1">
                        <label className="block text-white font-semibold mb-2">Group Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter group name"
                            value={groupData.name}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 p-3 rounded-lg bg-black text-white"
                        />
                    </div>

                    {/* Privacy Selection */}
                    <div className="flex-1">
                        <label className="block text-white font-semibold mb-2">Privacy</label>
                        <select
                            name="privacy"
                            value={groupData.privacy}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 p-3 rounded-lg bg-black text-white"
                        >
                            <option value="public">Public</option>
                            <option value="private">Private</option>
                        </select>
                    </div>

                    {/* Password Field for Private Groups */}
                    {groupData.privacy === "private" && (
                        <div className="flex-1">
                            <label className="block text-white font-semibold mb-2">Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter password"
                                value={groupData.password}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 p-3 rounded-lg bg-black text-white"
                            />
                        </div>
                    )}
                </div>

                {/* Submit Button */}
                <div className="flex">
                    <button
                        type="submit"
                        className="w-fit bg-blue-700 text-white p-3 rounded-lg font-semibold hover:bg-blue-800 transition"
                    >
                        Create Group
                    </button>
                </div>
            </form>
        </div>
    );
};

export default GroupForm;
