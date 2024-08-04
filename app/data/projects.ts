import { LuGraduationCap } from "react-icons/lu";
import React from "react";
import { link } from "fs";

const projects = [{
    title: "Solar Car Helios Telemetry Dashboard",
    description: "Helios Telemetry Dashboard, a web application that displays real-time telemetry data from the solar car Helios.",
    image: "/images/Helios-telemetry.gif",
    link: "https://telemetry-beta.calgarysolarcar.ca/",
    techStack: [{id:1, name: "Tailwind CSS", designation: "Styling", image:"/images/tailwind-svgrepo-com.svg"},
        {id:2, name: "Next.js", designation: "React Framework", image:"/images/react-logo-svgrepo-com.svg"},
        {id:3, name: "TypeScript", designation: "Logic", image:"/images/typescript-logo-svgrepo-com.svg"}],
},
{
    title: "Handheld Video Game Console",
    description: "Handheld Video Game Console, a portable gaming device that allows users to play games on the go.",
    image: "/images/HandheldVideoGameConsole.png",
    link: undefined,
    techStack: [{id:1, name: "C language", designation: "Arduino", image:"/images/c.svg"}]
},
{
    title: "Automated, Self Sustaining Garden",
    description: "A project that uses an Arduino to automate the process of watering plants and generating light.",
    image: "/images/SelfSustainingGarden.png",
    link: undefined,
    techStack: [{id:1, name: "C language", designation: "Arduino", image:"/images/c.svg"},]
},
{
    title: "Disaster Relief Program",
    description: "A simple Java program that simulates a disaster relief program using Object Oriented Programming principles.",
    image: undefined,
    link: undefined,
    techStack: [{id:1, name: "Java", designation: "OOP", image:"/images/java.svg"},
        {id:2, name: "PostgreSQL", designation: "Database", image:"/images/postgresql.svg"},]
},
{
    title: "Flight Information Interface",
    description: "A C++ program that simulates a flight information interface using Object Oriented Programming principles.",
    image: undefined,
    link: undefined,
    techStack: [{id:1, name: "C++", designation: "Logic", image:"/images/cpp.svg"}]
},
{
    title: "More Projects Coming Soon...",
    description: "Stay tuned for more projects!",
    image: undefined,
    link: undefined,
    techStack: [],
}];


export default projects;