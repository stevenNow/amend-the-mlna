// src/components/Header.js
import React from 'react';

const Header = ({ activeView, setActiveView }) => {
    const navItems = [
        { id: 'home', label: 'Rentals' },
        { id: 'proposals', label: 'Options' },
        { id: 'committee', label: 'Committee'},
        { id: 'documents', label: 'Documents'},
    ];

    const handleClick = (viewId) => {
        setActiveView(viewId);
        // Optional: Update URL hash for sharing/bookmarking
        window.history.pushState(null, null, `#${viewId}`);
        window.scrollTo(0, 0); // Scroll to top on view switch
    };

    return (
        <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
            <div className="max-w-6xl mx-auto flex justify-between items-center py-3 px-4 sm:px-6 lg:px-8">
                <h1 className="hidden sm:block text-xl font-bold text-blue-600">Preserve Mallard Lake</h1>
                <nav className="flex space-x-2 sm:space-x-4">
                    {navItems.map((item) => (
                        <a 
                            key={item.id}
                            href={`#${item.id}`}
                            onClick={(e) => {
                                e.preventDefault();
                                handleClick(item.id);
                            }}
                            className={`nav-link px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-400 transition duration-150 ${activeView === item.id ? 'active' : ''}`}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;