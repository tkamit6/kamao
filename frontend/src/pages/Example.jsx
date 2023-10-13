import React from 'react';

const Links = [
    { name: "Service", link: "#service" },
    { name: "How it works?", link: "#howitworks" },
    { name: "Why Us?", link: "#whyus" },
    { name: "Projects", link: "#projects" },
];

const Navbar = () => {
    const handleNavigation = (link) => {
        const element = document.querySelector(link);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav>
            <ul>
                {Links.map((link, index) => (
                    <li key={index} onClick={() => handleNavigation(link.link)}>
                        {link.name}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
