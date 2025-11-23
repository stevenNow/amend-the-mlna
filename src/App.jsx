// src/App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/views/HomeView';
import IncidentsView from './components/views/IncidentsView';
import ProposalsView from './components/views/ProposalsView';
import CommitteeView from './components/views/CommitteeView';
import './styles.css'; // Import the custom styles

const App = () => {
    // 1. Initialize state for the active view
    const [activeView, setActiveView] = useState('home');

    // 2. Determine initial view based on URL hash (to support deep-linking/refresh)
    useEffect(() => {
        const hash = window.location.hash.substring(1);
        const validViews = ['home', 'story', 'proposals', 'ideas'];
        if (validViews.includes(hash)) {
            setActiveView(hash);
        }
    }, []);
    
    // 3. Conditional rendering function
    const renderView = () => {
        switch (activeView) {
            case 'story':
                return <StoryView />;
            case 'proposals':
                return <ProposalsView />;
            case 'committee':
                return <CommitteeView />;
            case 'home':
            default:
                return <HomeView />;
        }
    };

    return (
        <div className="text-gray-800 pt-16">
            {/* Header passes down the view state and the function to change it */}
            <Header activeView={activeView} setActiveView={setActiveView} />

            {/* Main Content Area */}
            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {renderView()}
            </main>
            
            <Footer />
        </div>
    );
};

export default App;