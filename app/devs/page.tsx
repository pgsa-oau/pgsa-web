'use client'

import { HoverEffect } from "@/components/ui/card-hover-effect";

const DevsPage = () => {
    return (
        <div className="max-w-5xl mx-auto px-8 min-h-[80vh]">
            <HoverEffect items={team} />
        </div>
    );
}

export default DevsPage;



const team = [
    {
        title: "Taofiq Sulayman",
        description: "Frontend Engineer || Team Lead",
        link: "https://www.linkedin.com/in/taofiq-sulayman/",
        imageUrl: `https://robohash.org/${Math.floor(Math.random() * 10)}`,
    },
    {
        title: "Igbalaoluwa Rowaiye",
        description: "UI/UX Designer || Project Manager",
        link: "https://www.linkedin.com/in/igbalaoluwa-rowaiye/",
        imageUrl: `https://robohash.org/${Math.floor(Math.random() * 10)}`,
    },
    {
        title: "Oluwaseun Abolade",
        description: "Frontend Engineer",
        link: "https://www.linkedin.com/in/oluwaseun-abolade/",
        imageUrl: `https://robohash.org/${Math.floor(Math.random() * 10)}`,
    },
];
