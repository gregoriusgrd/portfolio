"use client";

import { useState, useEffect } from "react";

export default function AnimatedRoles() {
    const [currentRole, setCurrentRole] = useState(0);
    const roles = ["Developer", "Designer", "Content Creator"];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <h2 className="text-2xl md:text-3xl font-medium text-gray-600">
            {roles[currentRole]}
        </h2>
    );
}
