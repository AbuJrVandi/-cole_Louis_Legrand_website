import React from 'react';
import { Link } from 'react-router-dom';
import {
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
    Mail,
    Phone,
    MapPin
} from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white">
            {/* Main Footer Content */}
            <div className="container-custom py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* School Info */}
                    <div className="col-span-1 lg:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <img
                                src="/assets/ELL_-_Logo-removebg-preview.png"
                                alt="École Louis Legrand Logo"
                                className="h-10 w-auto"
                            />
                            <h3 className="text-xl font-heading font-bold">
                                École Louis Legrand
                            </h3>
                        </div>
                        <p className="text-gray-400 mb-4 leading-relaxed">
                            A global online OSSD school providing world-class Canadian education.
                        </p>
                        <p className="text-sm text-gray-500">
                            BSID #: XXXXXX
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/about" className="text-gray-400 hover:text-ell-green transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/ossd-curriculum" className="text-gray-400 hover:text-ell-green transition-colors">
                                    OSSD Curriculum
                                </Link>
                            </li>
                            <li>
                                <Link to="/programs" className="text-gray-400 hover:text-ell-green transition-colors">
                                    Our Programs
                                </Link>
                            </li>
                            <li>
                                <Link to="/admissions" className="text-gray-400 hover:text-ell-green transition-colors">
                                    Admissions
                                </Link>
                            </li>
                            <li>
                                <Link to="/fees-scholarships" className="text-gray-400 hover:text-ell-green transition-colors">
                                    Fees & Scholarships
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Student Support */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Student Support</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="/student-support/how-to-enroll" className="text-gray-400 hover:text-ell-green transition-colors">
                                    How to Enroll?
                                </a>
                            </li>
                            <li>
                                <a href="/student-support/academic-calendar" className="text-gray-400 hover:text-ell-green transition-colors">
                                    Academic Calendar
                                </a>
                            </li>
                            <li>
                                <a href="/student-support/faq" className="text-gray-400 hover:text-ell-green transition-colors">
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a href="/student-support/testimonials" className="text-gray-400 hover:text-ell-green transition-colors">
                                    Testimonials
                                </a>
                            </li>
                            <li>
                                <a href="/portal/login" className="text-gray-400 hover:text-ell-green transition-colors">
                                    Learning Portal
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-gray-400">
                                <Phone size={18} className="mt-1 flex-shrink-0 text-ell-green" />
                                <span>+1 (XXX) XXX-XXXX</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-400">
                                <Mail size={18} className="mt-1 flex-shrink-0 text-ell-green" />
                                <span>info@ecolelouislegrand.com</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin size={18} className="mt-1 flex-shrink-0 text-ell-green" />
                                <div>
                                    <p>Address Line 1</p>
                                    <p>Address Line 2</p>
                                </div>
                            </li>
                        </ul>

                        {/* Social Links */}
                        <div className="mt-6">
                            <h5 className="text-sm font-semibold mb-3 text-white">Follow Us</h5>
                            <div className="flex gap-3">
                                <a
                                    href="#"
                                    aria-label="Facebook"
                                    className="bg-gray-800 p-2 rounded-lg hover:bg-ell-green transition-colors group"
                                >
                                    <Facebook size={20} className="text-gray-400 group-hover:text-white" />
                                </a>
                                <a
                                    href="#"
                                    aria-label="Twitter"
                                    className="bg-gray-800 p-2 rounded-lg hover:bg-ell-green transition-colors group"
                                >
                                    <Twitter size={20} className="text-gray-400 group-hover:text-white" />
                                </a>
                                <a
                                    href="#"
                                    aria-label="LinkedIn"
                                    className="bg-gray-800 p-2 rounded-lg hover:bg-ell-green transition-colors group"
                                >
                                    <Linkedin size={20} className="text-gray-400 group-hover:text-white" />
                                </a>
                                <a
                                    href="#"
                                    aria-label="Instagram"
                                    className="bg-gray-800 p-2 rounded-lg hover:bg-ell-green transition-colors group"
                                >
                                    <Instagram size={20} className="text-gray-400 group-hover:text-white" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-gray-800">
                <div className="container-custom py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm">
                            &copy; {currentYear} École Louis Legrand. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            <Link to="/privacy-policy" className="text-gray-400 hover:text-ell-green text-sm transition-colors">
                                Privacy Policy
                            </Link>
                            <Link to="/terms-conditions" className="text-gray-400 hover:text-ell-green text-sm transition-colors">
                                Terms & Conditions
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
