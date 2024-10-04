import { useState, useMemo, useEffect } from "react";

const sections = [
    {
        title: "Introduction to PACE 🌌",
        lessons: [
            {
                title: "What is PACE?",
            },
            {
                title: "Why PACE?",
            },
        ],
    },
    /**
     * Other sections
     */
];

export default function Temp() {
    const [section, setSection] = useState(0);
    const [lesson, setLesson] = useState(0);

    const sectionTotal = useMemo(() => sections?.length, []);

    const prevSection = () => setSection((s) => s - 1);
    const nextSection = () => setSection((s) => s + 1);

    const disablePrevSection = section === 0;
    const disableNextSection = section === sectionTotal;
    const sectionContent = sections[section];

    const lessons = useMemo(() => sections[section]?.lessons, [section]);
    const lessonTotal = useMemo(() => lessons?.length, [lessons]);

    const prevLesson = () => setLesson((m) => m - 1);
    const nextLesson = () => setLesson((m) => m + 1);

    const disablePrevLesson = lesson === 0;
    const disableNextLesson = lesson === lessonTotal;
    const lessonContent = lessons[lesson];

    useEffect(() => {
        setLesson(0);
    }, [section]);

    return (
        <>
            {/** Sections Controls */}
            <button disabled={disablePrevSection} onClick={prevSection}>
                Prev Section
            </button>
            <button disabled={disableNextSection} onClick={nextSection}>
                Next Section
            </button>
            {/** Lessons Controls */}
            <button disabled={disablePrevLesson} onClick={prevLesson}>
                Prev Lesson
            </button>
            <button disabled={disableNextLesson} onClick={nextLesson}>
                Next Lesson
            </button>
        </>
    );
}