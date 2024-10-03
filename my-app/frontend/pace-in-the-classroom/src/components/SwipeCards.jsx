import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import axios from "axios";

const SwipeCards = () => {
    const [groups, setGroups] = useState([]);
    const [selectedGroupId, setSelectedGroupId] = useState(null);
    const [commitments, setCommitments] = useState([]); // Commitments state
    const [loading, setLoading] = useState(false);

    // Array of image URLs for groups
    const imageUrls = [
        "CommitmentCardBack/1back.jpg",
        "CommitmentCardBack/2back.jpg",
        "CommitmentCardBack/3back.jpg",
        "CommitmentCardBack/4back.jpg",
        "CommitmentCardBack/5back.jpg",
        "CommitmentCardBack/6back.jpg",
        "CommitmentCardBack/7back.jpg",
    ];

    // Fetch group data from the backend
    useEffect(() => {
        const fetchGroups = async () => {
            try {
                const response = await axios.get("http://localhost:8080/groups");
                const groupsWithImages = response.data.map((group) => ({
                    ...group,
                    imgUrl: imageUrls[Math.floor(Math.random() * imageUrls.length)],
                }));
                setGroups(groupsWithImages);
            } catch (error) {
                console.error("Error fetching groups:", error);
            }
        };

        fetchGroups();
    }, []);

    const fetchCommitmentsForGroup = async (groupId) => {
        setLoading(true);
        try {
            const response = await axios.get(`http://localhost:8080/groups/${groupId}/commitments`);
            setCommitments(response.data);
        } catch (error) {
            console.error("Error fetching commitments:", error);
        } finally {
            setLoading(false);
        }
    };

    const Card = ({ _id, name, imgUrl, onClick }) => {
        const x = useMotionValue(0);
        const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);
        const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);
        const isFront = _id === groups[groups.length - 1]._id;

        const rotate = useTransform(() => {
            const offset = isFront ? 0 : _id % 2 ? 6 : -6;
            return `${rotateRaw.get() + offset}deg`;
        });

        const handleDragEnd = () => {
            if (Math.abs(x.get()) > 100) {
                setGroups((pv) => pv.filter((v) => v._id !== _id));
            }
        };

        return (
            <motion.div
                className="relative h-96 w-72 bg-white text-white rounded-lg shadow-md p-4 flex flex-col justify-between border-4 cursor-pointer"
                style={{
                    borderColor: "#0B3D91", // NASA blue color
                    x,
                    opacity,
                    rotate,
                    transition: "0.125s transform",
                }}
                animate={{
                    scale: isFront ? 1 : 0.98,
                }}
                drag={isFront ? "x" : false}
                dragConstraints={{
                    left: 0,
                    right: 0,
                }}
                onDragEnd={handleDragEnd}
                onClick={onClick} // Handle the click event
            >
                <img
                    src={imgUrl}
                    alt={name}
                    className="inset-0 absolute w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent text-white p-6 rounded-b-lg flex flex-col justify-end">
                    <h2 className="font-bold text-3xl lg:text-4xl font-serif tracking-tight leading-snug drop-shadow-md mb-2">
                        {name}
                    </h2>
                </div>
            </motion.div>
        );
    };

    // Handle clicking on a group card
    const handleCardClick = async (groupId) => {
        setSelectedGroupId(groupId);
        await fetchCommitmentsForGroup(groupId); // Fetch commitments for the clicked group
    };

    // If a group is selected, render commitment cards for that group
    if (selectedGroupId) {
        const selectedGroup = groups.find((group) => group._id === selectedGroupId);

        return (
            <div className="flex flex-col items-center">
                <h1 className="text-3xl font-bold mb-4">{selectedGroup.name} - Commitment Cards</h1>
                <div className="flex flex-wrap justify-center">
                    {commitments.length > 0 ? (
                        commitments.map((commitment) => (
                            <div key={commitment._id} className="h-96 w-72 rounded-lg shadow-lg m-4 bg-white overflow-hidden">
                                <img
                                    src={selectedGroup.imgUrl}
                                    alt={`${selectedGroup.name} Commitment Card`}
                                    className="h-48 w-full object-cover"
                                />
                                <div className="p-4">
                                    <h2 className="font-bold text-xl text-blue-600">{commitment.title}</h2>
                                    <p className="text-gray-700">{commitment.description}</p>
                                </div>

                            </div>
                        ))
                    ) : (
                        <p>No commitments found for this group.</p>
                    )}
                </div>
                <button
                    className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg"
                    onClick={() => setSelectedGroupId(null)} // Go back to group selection
                >
                    Back to Groups
                </button>
            </div>
        );
    }

    // Divide groups into columns for responsive layout
    const columns = [[], [], []];
    groups.forEach((group, index) => {
        columns[index % 3].push(group);
    });

    return (
        <div className="flex flex-col items-center">
            <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full bg-neutral-100"
            >
                {columns.map((column, columnIndex) => (
                    column.map((group) => (
                        <div key={group._id} className="flex flex-col items-center">
                            <Card
                                {...group}
                                onClick={() => handleCardClick(group._id)} // Set the selected group on click
                            />
                            <h3 className="mt-2 font-semibold text-lg text-gray-800">
                                {group.name}
                            </h3>
                        </div>
                    ))
                ))}
            </div>
        </div>
    );
};

export default SwipeCards;
