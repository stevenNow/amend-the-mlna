import React from 'react';

// --- 1. Updated Static Survey Data ---
const surveyData = [
    // Consolidated "Yes" votes for the largest impact bar
    { label: 'Yes (22 lots)', percent: 68.75, color: 'bg-green-600', text: 'text-green-600' },
    
    // Remaining categories
    { label: 'Maybe (4 lots)', percent: 12.5, color: 'bg-yellow-400', text: 'text-yellow-400' },
    { label: 'No Response (6 lots)', percent: 18.75, color: 'bg-gray-400', text: 'text-gray-400' },
];

// --- 2. Bar Chart Component ---
const SurveyBarChart = () => (
    <div className="bg-white p-6 rounded-2xl card-shadow mb-12 border border-gray-100">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2 text-center">
            Homeowner Support for Rental Amendments
        </h3>
        {/* Updated summary text to reflect actual data */}
        <p className="text-gray-600 mb-6 text-center">
            "Would you support updating HOA bylaws for rental properties to protect neighborhood safety, maintain property values, and ensure consistent rule enforcement?"
        </p>
        
        <div className="space-y-4">
            {surveyData.map((item, index) => (
                <div key={item.label} className="flex items-center">
                    {/* Label Column (25% width) */}
                    <div className="w-1/4 text-sm font-medium text-gray-700 pr-4">
                        {item.label} {/* Show only the label (Yes, Maybe, No) */}
                    </div>
                    
                    {/* Bar and Percentage Column (75% width) */}
                    <div className="w-3/4 flex items-center">
                        {/* The Bar */}
                        <div className="h-4 flex-grow rounded-full overflow-hidden bg-gray-200 mr-3">
                            <div 
                                style={{ width: `${item.percent}%` }}
                                className={`h-full ${item.color} transition-all duration-700 ease-out`}
                            ></div>
                        </div>
                        
                        {/* Percentage Text */}
                        <div className={`text-base font-bold w-12 ${item.text} text-right`}>
                            {item.percent}%
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <p className="text-xs text-gray-500 mt-4 text-right">
            Survey based on 32 total lots.
        </p>
    </div>
);

// --- 3. HomeView Component (Updated) ---
const HomeView = () => (
    <section id="home-view">
        {/* Advocacy Header (No change) */}
        <div className="bg-blue-600 text-white py-12 px-4 sm:px-6 lg:px-8 text-center rounded-2xl mb-10">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl sm:text-5xl font-extrabold mb-3 leading-tight">
                    Preserve Mallard Lake with Rental Amendments
                </h2>
                <p className="text-xl opacity-90 mt-4 max-w-2xl mx-auto">
                    Secure our property values and preserve the quality of life in our community.
                </p>
            </div>
        </div>

        {/* 🚀 NEW SURVEY BAR CHART SECTION 🚀 */}
        <SurveyBarChart />
        {/* End New Section */}

        <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Rental Amendments?</h3>


        {/* Pillars Grid (No change below this line) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Pillar 1: Financial Protection */}
            <div className="bg-white p-6 rounded-2xl card-shadow border-t-4 border-blue-500 hover:shadow-xl transition duration-300">
                <div className="text-4xl mb-4 text-blue-600">💰</div>
                <h4 className="text-xl font-bold mb-3">1. Maximize Property Value & Sale Potential</h4>
                <p className="text-gray-600">
                    Too many rentals can reduce lender confidence and lower appraisals by signaling a less stable, less invested community.
                </p>
                <ul className="list-disc list-inside text-sm text-gray-600 mt-3 space-y-1">
                    <li>Higher owner-occupancy supports stronger comps and appraisal values.</li>
                    <li>Stable, owner-occupied communities attract conventional, value-preserving buyers.</li>
                    <li>Neglected maintenance lowers property values and neighborhood pride.</li>
                    <li>Rental limits help protect property values, standards, and homeowner investments.</li>
                </ul>
            </div>

            {/* Pillar 2: Community Stability & Safety */}
            <div className="bg-white p-6 rounded-2xl card-shadow border-t-4 border-green-500 hover:shadow-xl transition duration-300">
                <div className="text-4xl mb-4 text-green-600">🏡</div>
                <h4 className="text-xl font-bold mb-3">2. Ensure Long-Term Stability, Safety, and Accountability</h4>
                <p className="text-gray-600">
                    Communities with invested homeowners are safer, more accountable, and more stable over time.
                </p>
                <ul className="list-disc list-inside text-sm text-gray-600 mt-3 space-y-1">
                    <li>Owner-occupants are invested in long-term upkeep and rule compliance.</li>
                    <li>High rental turnover can reduce accountability and increase safety concerns.</li>
                    <li>More transient tenancy is often linked to police reports and documented safety issues.</li>
                    <li>Lower turnover means familiar neighbors, stronger engagement, and shared responsibility.</li>
                    <li>Stable, owner-occupied communities experience fewer rule violations and conflicts.</li>
                </ul>
            </div>

            {/* Pillar 3: Controlling Our Future (UPDATED) */}
            <div className="bg-white p-6 rounded-2xl card-shadow border-t-4 border-indigo-500 hover:shadow-xl transition duration-300">
                <div className="text-4xl mb-4 text-indigo-600">🏞️</div>
                <h4 className="text-xl font-bold mb-3">3. Protect the Lake Area</h4>
                <p className="text-gray-600">
                    Our lake makes this neighborhood desirable—not just to families, but to investors and short-term rental operators. Without protections, it risks becoming a commercial destination instead of a residential community.
                </p>
                <ul className="list-disc list-inside text-sm text-gray-600 mt-3 space-y-1">
                    <li>Prevent short-term rentals and commercial use from disrupting the residential atmosphere.</li>
                    <li>Protect the peace, privacy, and character of lakefront homes.</li>
                    <li>Preserve the quality and enjoyment of shared amenities like the lake.</li>
                </ul>
            </div>
        </div>

    </section>
);

export default HomeView;