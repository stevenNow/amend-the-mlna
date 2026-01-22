// src/components/Footer.js
import React from 'react';

const Footer = () => {
    // Get the current year
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 text-white py-6 mt-12">
            <div className="max-w-6xl mx-auto px-4 text-center text-sm">
                <p>&copy; {currentYear} Preserve Mallard Lake</p>
            </div>
        </footer>
    );
};

export default Footer;