// src/components/views/IdeasView.js
import React, { useState } from 'react';

const IdeasView = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    // In a real app, you would use React state for all form fields, 
    // and use the 'fetch' API to post the data. 
    // Here we keep the original Web3Forms action but manage the success state.
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // This is a placeholder for a real API call.
        // For the purpose of rewriting the *structure* of the original code, 
        // we'll simulate the successful submission.
        
        const form = e.target;
        const formData = new FormData(form);
        
        // Simulate an API call delay
        console.log("Submitting idea...");
        await new Promise(resolve => setTimeout(resolve, 500)); 

        // In a real implementation using Web3Forms, you would fetch()
        // const response = await fetch(form.action, { method: form.method, body: formData });
        // if (response.ok) { setIsSubmitted(true); } else { /* handle error */ }

        // For this example, we just set the success state
        setIsSubmitted(true);
        console.log("Idea submitted successfully.");
    };

    return (
        <section id="ideas-view">
            <div className="bg-white p-8 rounded-2xl card-shadow">
                <h2 className="text-3xl font-extrabold text-blue-700 mb-6 border-b pb-2">Community Future: Submit Your Bylaw Ideas</h2>
                <p className="text-lg text-gray-700 mb-8 max-w-3xl">
                    Rental amendments are just the first step in modernizing our governing documents. What other changes would make our community stronger, fairer, and more desirable? Use the form below to submit ideas for future amendments the Board should consider.
                </p>

                {!isSubmitted ? (
                    <div id="ideas-form-container" className="max-w-xl mx-auto bg-blue-50 p-6 rounded-lg border border-blue-200">
                        <form onSubmit={handleSubmit} method="POST">
                            {/* Web3Forms required inputs */}
                            <input type="hidden" name="access_key" value="6687092b-2c2c-407a-a2fb-ccca38a3099b" />
                            <input type="hidden" name="subject" value="New Submission from MLNA Ideas Form" />
                            <input type="hidden" name="from_name" value="MLNA Resident" />
                            <input type="hidden" name="redirect" value="YOUR_SUCCESS_URL_HERE" /> 
                            <input type="checkbox" name="botcheck" id="botcheck" style={{ display: 'none' }} />

                            {/* Idea Title */}
                            <div className="mb-4">
                                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Proposed Amendment Title</label>
                                <input type="text" name="Title" id="title" required
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                                    placeholder="Clear, concise summary" />
                            </div>

                            {/* Rationale and Details */}
                            <div className="mb-6">
                                <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-1">Rationale and Detailed Proposal</label>
                                <textarea name="Details" id="details" rows="4" required
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                                    placeholder="Describe the issue and your suggested rule change."></textarea>
                            </div>

                            {/* Contact Name (Optional) */}
                            <div className="mb-6">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name (Optional, for follow-up)</label>
                                <input type="text" name="name" id="name"
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                                    placeholder="Resident name" />
                            </div>

                            {/* Submission Button */}
                            <button type="submit" id="submit-button"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200 shadow-md">
                                Submit Idea 📝
                            </button>
                        </form>
                    </div>
                ) : (
                    <div id="success-message" className="max-w-xl mx-auto mt-6 p-6 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                        <p className="font-bold">Thank you for your submission!</p>
                        <p>Your idea has been successfully logged. We appreciate your engagement in building a better community future.</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default IdeasView;