// src/components/views/HomeView.js
import React from 'react';

const HomeView = () => (
    <section id="home-view">
        {/* Advocacy Header */}
        <div className="bg-blue-600 text-white py-12 px-4 sm:px-6 lg:px-8 text-center rounded-2xl mb-10">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl sm:text-5xl font-extrabold mb-3 leading-tight">
                    Preserve Mallard Lake. Protect Our Future. Amend the Bylaws.
                </h2>
                <p className="text-xl opacity-90 mt-4 max-w-2xl mx-auto">
                    Secure our property values and preserve the quality of life in our community.
                </p>
            </div>
        </div>

        <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Preserve Mallard Lake with Rental Amendments</h3>

        {/* Pillars Grid */}
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

        {/* Call to Action */}
        <div className="max-w-4xl mx-auto text-center mt-12 pt-8">
            <div className="bg-indigo-50 p-8 rounded-2xl shadow-lg border border-indigo-200">
                <h3 className="text-3xl font-extrabold text-indigo-800 mb-4">What You Can Do: Take Action to Preserve MLNA</h3>
                <p className="text-xl text-gray-700 mb-6 font-medium">
                    We have the power to amend our Declaration and safeguard the community's future. The process is clear and simple:
                </p>
                <ul className="space-y-3 text-left inline-block">
                    <li className="text-lg text-gray-800 font-semibold flex items-center">
                        <span className="flex-shrink-0 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">1</span>
                        Draft the necessary legal amendments and language.
                    </li>
                    <li className="text-lg text-gray-800 font-semibold flex items-center">
                        <span className="flex-shrink-0 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">2</span>
                        Achieve the required Two-Thirds (2/3) affirmative vote from the membership.
                    </li>
                    <li className="text-lg text-gray-800 font-semibold flex items-center">
                        <span className="flex-shrink-0 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">3</span>
                        Record the approved amendments with the county to make them official and legally binding.
                    </li>
                </ul>
                <p className="text-2xl font-extrabold text-blue-700 mt-6">
                    Preserve What Makes Us Unique—Protect What Comes Next.
                </p>
            </div>
        </div>
    </section>
);

export default HomeView;