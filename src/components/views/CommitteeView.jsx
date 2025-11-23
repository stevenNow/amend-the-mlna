import React from 'react';

// Fictional data for the Committee Members
const committeeMembers = [
    {
        name: "Steve Nowicki",
        bio: "Steve is a 4-year resident who lives on Murray Ct. He acts as committee lead.",
        imageUrl: "https://placehold.co/100x100/4f46e5/ffffff?text=ET"
    },
    {
        name: "Andrew",
        bio: "Andrew.",
        imageUrl: "https://placehold.co/100x100/10b981/ffffff?text=SC"
    },
    {
        name: "Marcus Jones",
        title: "Communications Lead, Outreach & Education",
        bio: "Marcus has lived in the community for eight years and works in corporate communications. He is responsible for clear and timely communication with all homeowners, organizing the survey data, and leading the neighborhood outreach efforts.",
        imageUrl: "https://placehold.co/100x100/ef4444/ffffff?text=MJ"
    },
    {
        name: "Jennifer Lee",
        title: "Lot Survey & Data Coordinator",
        bio: "Jennifer brings a background in project management. She manages the lot survey process, ensuring that all data is collected and verified accurately. Her goal is to ensure every lot owner's voice is represented in the final vote count.",
        imageUrl: "https://placehold.co/100x100/f59e0b/ffffff?text=JL"
    },
    {
        name: "David Smith",
        title: "Community Preservation & Bylaw Specialist",
        bio: "A lifelong resident, David is passionate about protecting the natural elements of Mallard Lake, particularly the lakefront areas. He provides historical context on previous bylaw changes and advocates for preservation clauses in the amendments.",
        imageUrl: "https://placehold.co/100x100/06b6d4/ffffff?text=DS"
    }
];

const CommitteeView = () => (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
            
            {/* Committee Purpose Section */}
            <div className="text-center mb-16">
                <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
                    The Mallard Lake North Rental Committee
                </h1>
                <p className="mt-3 text-xl text-gray-600 sm:mt-4">
                    A dedicated, volunteer-led group committed to preserving the value, safety, and residential character of our community through responsible bylaw amendments.
                </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 mb-16">
                <h2 className="text-3xl font-bold text-gray-800 mb-4 border-b pb-2 text-center">Our Core Mission</h2>
                <div className="text-gray-700 space-y-4 text-lg">
                    <p>
                        The Rental Amendment Committee was formed in response to growing concerns about rental properties and their impacts on property values and safety in our neighborhood.
                    </p>
                    <ol className="list-decimal list-inside ml-4 space-y-2">
                        <li>
                            <span className="font-semibold text-blue-600">Research & Draft:</span> To thoroughly research the legal and financial implications of rental restrictions and regulations, and to draft clear, enforceable bylaw amendments that protect the interests of owner-occupants.
                        </li>
                        <li>
                            <span className="font-semibold text-blue-600">Educate & Communicate:</span> To provide all homeowners with transparent, factual information regarding the amendments, the process, and the data supporting these changes (like the lot survey).
                        </li>
                        <li>
                            <span className="font-semibold text-blue-600">Faciliate Legal Review:</span> To present reccommendations to the MLNA for final review, before our requirements are formally submitted to an attorney.
                        </li>
                    </ol>
                </div>
            </div>

            {/* Committee Members Section */}
            <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Meet the Committee Members</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {committeeMembers.map((member) => (
                    <div key={member.name} className="bg-white p-6 rounded-xl shadow-md border-t-4 border-indigo-400">
                        <div className="flex items-start space-x-4">
                            <img 
                                className="w-20 h-20 rounded-full object-cover shadow-inner"
                                src={member.imageUrl} 
                                alt={`Portrait of ${member.name}`}
                                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/100x100/9ca3af/ffffff?text=HOA" }}
                            />
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                                <p className="text-indigo-600 text-sm font-semibold">{member.title}</p>
                            </div>
                        </div>
                        <p className="mt-4 text-gray-600 text-sm leading-relaxed border-t pt-4">
                            {member.bio}
                        </p>
                    </div>
                ))}
            </div>

        </div>
    </div>
);

export default CommitteeView;