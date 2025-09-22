"use client";

import { useState, useEffect } from "react";

export default function AnimatedRoles() {
    const [currentRole, setCurrentRole] = useState(0);
    const roles = ["FullStack Developer", "Frontend Developer", "Backend Developer", "Mobile Developer"];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <h2 className="text-2xl md:text-3xl font-medium text-gray-600">
            {roles[currentRole]}
        </h2>
    );
}
