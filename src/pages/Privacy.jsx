import React from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Privacy = () => {
    return (
        <section className="py-16 px-6 md:px-16 lg:px-32 mt-10">
            <div className="max-w-7xl mx-auto p-8 md:p-12">
                <div className="text-center mb-10">
                    <h1 className="text-5xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
                    <p className="text-gray-900 text-md">Last updated: {new Date().toLocaleString("default", { month: "long" })} {new Date().getFullYear()}</p>
                </div>

                <p className="mb-4 text-gray-900 text-lg text-justify">
                    At <b>Universal Repair Point</b>, we are committed to protecting your privacy. This Privacy Policy explains what information we collect, how we use it, and your rights regarding your
                    personal data.
                </p>

                <div className="space-y-6 text-gray-700">
                    <div>
                        <h2 className="text-xl font-semibold text-gray-900 mb-2">1. Information We Collect</h2>
                        <ul className="list-disc ml-6 text-gray-900 text-lg text-justify">
                            <li>Personal details (name, email, phone) when you fill out forms.</li>
                            <li>Service inquiries or booking-related data.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-gray-900 mb-2">2. How We Use Your Information</h2>
                        <ul className="text-lg list-disc ml-6 text-gray-900 text-justify">
                            <li>To respond to your inquiries and provide support.</li>
                            <li>To process service bookings and communicate updates.</li>
                            <li>To improve user experience and website performance.</li>
                            <li>To send important updates or promotions (if opted in).</li>
                        </ul>
                    </div>

                    {/* <div>
                        <h2 className="text-xl font-semibold text-gray-900 mb-2">3. Cookies</h2>
                        <p className="text-gray-900 text-lg text-justify">
                            We use cookies to personalize content and analyze traffic. You can disable cookies in your
                            browser settings, but some features may not work as intended.
                        </p>
                    </div> */}

                    <div>
                        <h2 className="text-xl font-semibold text-gray-900 mb-2">4. Data Sharing</h2>
                        <p className="text-gray-900 text-lg text-justify">
                            We do not sell or rent your personal data. We may share your information with trusted
                            partners or service providers under strict confidentiality to deliver services or as required
                            by law.
                        </p>
                    </div>

                    {/* <div>
                        <h2 className="text-xl font-semibold text-gray-900 mb-2">5. Security</h2>
                        <p className="text-gray-900 text-lg text-justify">
                            We use industry-standard security measures to protect your data. However, no method is 100%
                            secure, and we cannot guarantee absolute protection.
                        </p>
                    </div> */}

                    <div>
                        <h2 className="text-xl font-semibold text-gray-900 mb-2">6. Your Rights</h2>
                        <ul className="text-lg list-disc ml-6 text-gray-900 text-justify">
                            <li>Access the personal data we hold about you.</li>
                            <li>Request correction or deletion of your data.</li>
                            <li>Withdraw consent for promotional communications.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-gray-900 mb-2">7. Third-Party Links</h2>
                        <p className="text-gray-900 text-lg text-justify">
                            Our website may contain links to other sites. We are not responsible for their privacy
                            practices. Please review their policies separately.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-gray-900 mb-2">8. Policy Updates</h2>
                        <p className="text-gray-900 text-lg text-justify">
                            This Privacy Policy may be updated periodically. Changes will be posted here with the latest
                            effective date.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-gray-900 mb-2">9. Contact Us</h2>
                        <p className="text-gray-900 text-lg text-justify">
                            For any questions regarding this policy, please contact us at :
                            <a href="tel:8058129195" className="flex items-center gap-2 mt-2"><FaPhoneAlt /> +91-8058129195</a>
                            <a href="mailto:universalrepairpoints@gmail.com" className="flex items-center gap-2 mt-2"><FaEnvelope /> universalrepairpoints@gmail.com</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Privacy;
