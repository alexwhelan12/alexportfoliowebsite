import { LuGraduationCap } from "react-icons/lu";
import React from "react";
import { link } from "fs";

const projects = [{
    title: "Solar Car Helios Telemetry Dashboard",
    description: "With over 100,000 mothly active bot users, Gippity AI is the most popular AI platform for developers.",
    image: "/images/Helios-telemetry.gif",
    link: "https://telemetry-beta.calgarysolarcar.ca/",
    techStack: [{id:1, name: "Tailwind CSS", designation: "Styling", image:"/images/tailwind-svgrepo-com.svg"},
        {id:2, name: "Next.js", designation: "React Framework", image:"/images/react-logo-svgrepo-com.svg"},
        {id:3, name: "TypeScript", designation: "Logic", image:"/images/typescript-logo-svgrepo-com.svg"}],
},
{
    title: "Handheld Video Game Console",
    description: "With over 100,000 mothly active bot users, Gippity AI is the most popular AI platform for developers.",
    image: "/images/HandheldVideoGameConsole.png",
    link: undefined,
    techStack: [{id:1, name: "C language", designation: "Arduino", image:"/images/c.svg"}]
},
{
    title: "Automated, Self Sustaining Garden",
    description: "With over 100,000 mothly active bot users, Gippity AI is the most popular AI platform for developers.",
    image: "/images/SelfSustainingGarden.png",
    link: undefined,
    techStack: [{id:1, name: "C language", designation: "Arduino", image:"/images/c.svg"},]
},
{
    title: "Disaster Relief Program",
    description: "With over 100,000 mothly active bot users, Gippity AI is the most popular AI platform for developers.",
    image: "/linear.webp",
    link: undefined,
    techStack: [{id:1, name: "Java", designation: "OOP", image:"/images/java.svg"},
        {id:2, name: "PostgreSQL", designation: "Database", image:"/images/postgresql.svg"},]
},
{
    title: "Flight Information Interface",
    description: "With over 100,000 mothly active bot users, Gippity AI is the most popular AI platform for developers.",
    image: "/linear.webp",
    link: undefined,
    techStack: [{id:1, name: "C++", designation: "Logic", image:"/images/cpp.svg"}]
},
{
    title: "More Projects Coming Soon...",
    description: "With over 100,000 mothly active bot users, Gippity AI is the most popular AI platform for developers.",
    image: "/linear.webp",
    link: undefined,
    techStack: [],
}];


export default projects;