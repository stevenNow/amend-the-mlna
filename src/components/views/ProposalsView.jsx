// src/components/views/ProposalsView.js
import React from 'react';

const ProposalsView = () => (
    <section id="proposals-view">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Legal ways we can Preserve Mallard Lake North</h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Option 1: Ban */}
            <div className="bg-white p-6 rounded-2xl card-shadow border-t-4 border-blue-500 hover:shadow-xl transition duration-300">
                <div className="text-4xl mb-4 text-blue-600">🚫</div>
                <h4 className="text-xl font-bold mb-3">Option 1 - Ban Rentals</h4>
                <p className="text-gray-600">
                    There is strong precedent that supports rental bans for Illinois HOAs, even for current homes that are being rented out.
                </p>
                <ul className="list-disc list-inside text-sm text-gray-600 mt-3 space-y-1">
                    <li>Case: Apple II Condominium Ass’n v. Worth Bank and Trust Co.</li>
                    <li>Outcome: An HOA in Illinois banned rentals, including current ones, via amendment.</li>
                    <li>The amendment was upheld in court because the HOA’s Declaration did not explicitly grant the right to rent, and the HOA's right to amend the Declaration was an inherent condition of a landlord's ownership, meaning the landlord consented to potential changes when they bought.</li>
                </ul>
            </div>

            {/* Option 2: Regulate */}
            <div className="bg-white p-6 rounded-2xl card-shadow border-t-4 border-green-500 hover:shadow-xl transition duration-300">
                <div className="text-4xl mb-4 text-green-600">📋</div>
                <h4 className="text-xl font-bold mb-3">Option 2 - Regulate Rentals</h4>
                <p className="text-gray-600">
                    Our Board can adopt reasonable regulations to improve rental relations. Regulations can be enforced through fines. Fines can recur on a daily basis until conduct is corrected.
                </p>
                <br/>
                <p className="text-gray-600">
                    Unpaid fines can be enforced via:
                    <ul className="list-disc list-inside text-sm text-gray-600 mt-3 space-y-1">
                    <li><b>Liens:</b> Unpaid fines can enable liens on homes which must be paid before sale of the home.</li>
                    <li><b>Eviction:</b> Article X Section 15 of our current bylaws can enable eviction of homeowners and/or tenants.</li>
                    </ul>
                </p>
                <br/>
                <p>
                    Examples of regulations might include:
                </p>
                <ul className="list-disc list-inside text-sm text-gray-600 mt-3 space-y-1">
                    <li><b>Tenant Accountability:</b> Homeowners are responsible for tenant violations and must correct them within a specified timeframe.</li>
                    <li><b>Tenant Acknowledgment of Rules:</b> Tenants must acknowledge receipt and understanding of HOA rules prior to move-in.</li>
                    <li><b>HOA Orientation Requirement:</b> New tenants must complete an HOA orientation session within 30 days of move-in to learn about community rules and expectations.</li>
                    <li><b>Homeowner Contact Requirement:</b> Homeowners must provide a 24/7 contact for tenant-related issues.</li>
                    <li><b>Tenant Emergency Contact Update:</b> Homeowners must provide updated tenant emergency contacts.</li>
                    <li><b>Tenant Move-In/Move-Out Notification:</b> Homeowners must notify the HOA 30 days prior to tenant changes.</li>
                    <li><b>Proactive Property Maintenance:</b> Rental homeowners submit annual maintenance plans demonstrating compliance with HOA property standards.</li>
                    <li><b>Pet Restrictions:</b> Homeowners ensure tenants comply with HOA pet policies.</li>
                    <li><b>Clarifying Pond Access:</b> Our bylaws clearly state that only members can use the pond, yet rental advertisements list pond access to tenants as an amenity.</li>
                    <li><b>Certificate of Insurance:</b> Require landlords to submit a certificate of homeowner’s liability insurance with the HOA.</li>
                    <li><b>Limited Parking for Non-Owners:</b> Rental properties are limited to a maximum number of vehicles, and tenant vehicles must be registered with the HOA.</li>
                    <li><b>Rental Permit Requirement:</b> Homeowners must obtain an HOA rental permit before leasing their property. The permit must be renewed annually.</li>
                    <li><b>Security Deposit for HOA Violations:</b> Homeowners of rental properties must provide the HOA with a refundable security deposit to cover potential fines or damages caused by tenants.</li>
                    <li><b>Monthly Rental Compliance Fee:</b> Rental properties are subject to a monthly HOA compliance fee to cover the costs of additional oversight and enforcement.</li>
                    <li><b>Tenant Registration Fee:</b> Homeowners renting out properties must pay a tenant registration fee to the HOA for each new tenant. This fee covers administrative costs related to tenant oversight.</li>
                    <li><b>Annual Rental Renewal Forms:</b> Homeowners must submit an annual rental renewal form to the HOA, detailing tenant information, lease terms, and proof of compliance with HOA rules.</li>
                    <li><b>Detailed Lease Agreement Submission:</b> Homeowners must submit a copy of the tenant lease agreement to the HOA for review to ensure it includes clauses about adhering to HOA rules.</li>
                    <li><b>Increased HOA Dues for Rental Properties:</b> Rental properties are subject to higher HOA dues to cover the additional administrative and enforcement costs associated with non-owner-occupied properties.</li>
                    <li><b>Detailed Landscaping Plans:</b> Homeowners renting properties must submit an annual landscaping plan for HOA approval, detailing how the property will meet community standards.</li>
                    <li><b>Clarifying HOA Eviction Rights:</b> Ensure the HOA has clear authority under Illinois law to take enforcement action, including eviction, for tenant violations that materially impact the community.</li>
                </ul>
            </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-4xl mx-auto text-center mt-12 pt-8">
            <div className="bg-indigo-50 p-8 rounded-2xl shadow-lg border border-indigo-200">
                <h3 className="text-3xl font-extrabold text-indigo-800 mb-4">These proposals can become part of our governing documents.</h3>
                <p className="text-xl text-gray-700 mb-6 font-medium">
                    Our HOA needs to discuss these ideas and consult a lawyer to make them a reality.
                </p>
                <p className="text-2xl font-extrabold text-blue-700 mt-6">
                    Preserve What Makes Us Unique—Protect What Comes Next.
                </p>
            </div>
        </div>
    </section>
);

export default ProposalsView;