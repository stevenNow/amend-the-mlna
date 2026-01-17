import React, { useState, useEffect } from 'react';

// Helper function to format date - still useful for presentation
const formatDate = (timestamp) => {
    if (!timestamp) return 'N/A';
    // Handle standard JavaScript Date objects
    return new Date(timestamp).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};

// =================================================================
// 1. Static Document Data
// =================================================================

const staticDocuments = [
    {
        id: '07-22-2025',
        title: 'July 2025 Board Meeting Minutes',
        date: new Date(2025, 6, 22),
        url: '/minutes/07_22_2025 Board Meeting Minutes.pdf', // Placeholder for PDF in your repo
    },
];

const bylaws =  [
    {
        id: '11-5-1999',
        title: 'Ammendment to the Bylaws of Mallard Lake North Association',
        date: new Date(1999, 11, 5),
        url: '/bylaws/1999.pdf', // Placeholder for PDF in your repo
    },
]


// =================================================================
// MinutesList Component: Renders the list of minutes with links to files
// =================================================================
const MinutesList = ({ minutes }) => (
    <div className="space-y-6">
        {minutes.length === 0 ? (
            <div className="text-center p-12 bg-gray-100 rounded-xl text-gray-500">
                No archived documents found.
            </div>
        ) : (
            minutes.map((minute) => (
                <div key={minute.id} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500 flex justify-between items-center transition duration-200 hover:shadow-lg">
                    <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold text-gray-800 mb-1">{minute.title}</h3>
                        <p className="text-sm text-blue-500">
                            Date: {formatDate(minute.date)}
                        </p>
                    </div>
                    <a
                        href={minute.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 ml-4 py-2 px-4 rounded-lg font-semibold text-white bg-green-600 hover:bg-green-700 transition-colors shadow-md"
                    >
                        View Document
                    </a>
                </div>
            ))
        )}
    </div>
);

const BylawsList = ({ bylaws }) => (
    <div className="space-y-6">
        {bylaws.length === 0 ? (
            <div className="text-center p-12 bg-gray-100 rounded-xl text-gray-500">
                No archived documents found.
            </div>
        ) : (
            bylaws.map((bylaw) => (
                <div key={bylaw.id} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500 flex justify-between items-center transition duration-200 hover:shadow-lg">
                    <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold text-gray-800 mb-1">{bylaw.title}</h3>
                        <p className="text-sm text-blue-500">
                            Date: {formatDate(bylaw.date)}
                        </p>
                    </div>
                    <a
                        href={bylaw.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 ml-4 py-2 px-4 rounded-lg font-semibold text-white bg-green-600 hover:bg-green-700 transition-colors shadow-md"
                    >
                        View Document
                    </a>
                </div>
            ))
        )}
    </div>
);

// =================================================================
// MinutesView Component: Manages state using local data only
// =================================================================
const MinutesView = () => {
    const [minutes, setMinutes] = useState([]);

    // Effect: Load static data and simulate a small loading delay
    useEffect(() => {
        // Sort the documents by date descending locally before setting the state
        const sortedDocs = staticDocuments.sort((a, b) => b.date - a.date);
        setMinutes(sortedDocs);
    }, []);

    // Render logic
    return (
        <section id="minutes-view" className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-4">
                Official Meeting Minutes & Documents
            </h1>
            <p className="text-center text-gray-600 mb-8">
                Click "View Document" to open the PDF or Word file in a new tab.
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">Archived Documents</h2>

            <div className="mb-12"> {/* Added margin bottom here */}
                <MinutesList minutes={minutes} />
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">Bylaws</h2>

            {(
                <BylawsList bylaws={bylaws} />
            )}
        </section>
    );
};
export default MinutesView;