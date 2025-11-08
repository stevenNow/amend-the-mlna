// src/components/views/StoryView.js
import React from 'react';

const StoryView = () => (
    <section id="story-view">
        <div className="bg-white p-8 rounded-2xl card-shadow">
            <h2 className="text-3xl font-extrabold text-blue-700 mb-6 border-b pb-2">Why This Matters: Our Family's Story</h2>

            <div className="md:flex md:flex-row-reverse md:gap-8 items-start">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <img src="IMG_1119.jpg" alt="A boy and his dog."
                        className="mx-auto rounded-xl shadow-lg border-4 border-gray-100 max-w-full h-auto" />
                </div>

                <div className="md:w-1/2 space-y-6 text-lg text-gray-700">
                    <p>
                        When our family moved to Mallard Lake North four years ago, we chose it for its character, stability, and natural beauty. We grew up in neighborhoods like this—places where children could ride bikes, neighbors knew each other, and families felt safe.
                    </p>
                    <p>
                        For the most part, that has been our experience. But this past year has shown us how quickly that sense of security can be shaken.
                    </p>
                    <p>
                        We’ve experienced dog attacks, threats of assault, trespassing, and harassment. Before that, we witnessed an arrest at a rental property and even saw a firearm confiscated. No family should have to go through this in their own neighborhood.
                    </p>
                    <p>
                        We love this community, and we want to protect it—for our children, and for every family who lives here. We hope you'll join us in preserving the safety, peace, and long-term value of Mallard Lake North.
                    </p>
                    <p>
                        Thank you,<br/>
                        The Nowickis
                    </p>
                </div>
            </div>
        </div>
    </section>
);

export default StoryView;