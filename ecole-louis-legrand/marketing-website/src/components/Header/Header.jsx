import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navigation = [
        { name: 'Home', path: '/' },
        {
            name: 'About',
            path: '/about',
            dropdown: [
                { name: 'Who We Are', path: '/about#who-we-are' },
                { name: 'Our Mission', path: '/about#mission' },
                { name: 'Our Team', path: '/about#team' },
            ]
        },
        { name: 'OSSD Curriculum', path: '/ossd-curriculum' },
        {
            name: 'Programs',
            path: '/programs',
            dropdown: [
                { name: 'Elementary', path: '/programs#elementary' },
                { name: 'High School', path: '/programs#high-school' },
                { name: 'Online Learning', path: '/programs#online' },
            ]
        },
        { name: 'Admissions', path: '/admissions' },
        { name: 'Fees & Scholarships', path: '/fees-scholarships' },
        { name: 'News & Blog', path: '/news-blog' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white shadow-lg'
                : 'bg-white/95 backdrop-blur-sm'
                }`}
        >
            {/* Top Bar */}
            <div className="bg-ell-green text-white py-2 hidden md:block">
                <div className="container-custom">
                    <div className="flex justify-between items-center text-sm">
                        <div className="flex items-center gap-6">
                            <a href="tel:+1XXXXXXXXXX" className="flex items-center gap-2 hover:text-ell-orange transition-colors">
                                <Phone size={16} />
                                <span>+1 (XXX) XXX-XXXX</span>
                            </a>
                            <a href="mailto:info@ecolelouislegrand.com" className="flex items-center gap-2 hover:text-ell-orange transition-colors">
                                <Mail size={16} />
                                <span>info@ecolelouislegrand.com</span>
                            </a>
                        </div>
                        <div className="flex items-center gap-4">
                            <a
                                href="/portal/login"
                                className="bg-white text-ell-green px-4 py-1 rounded-full font-semibold hover:bg-ell-orange hover:text-white transition-colors"
                            >
                                Learning Portal
                            </a>
                            <LanguageSwitcher />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="py-4 border-b border-gray-100">
                <div className="container-custom">
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-3 group">
                            <img
                                src="/assets/ELL_-_Logo-removebg-preview.png"
                                alt="École Louis Legrand Logo"
                                className="h-10 sm:h-12 w-auto group-hover:scale-105 transition-transform"
                            />
                            <div>
                                <h1 className="text-xl sm:text-2xl font-heading font-bold gradient-text">
                                    École Louis Legrand
                                </h1>
                                <p className="text-xs text-gray-600 hidden lg:block">Global Online OSSD Education</p>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-1">
                            {navigation.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="relative group"
                                    onMouseEnter={() => setActiveDropdown(item.name)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <Link
                                        to={item.path}
                                        className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-1 ${location.pathname === item.path
                                            ? 'text-ell-green bg-ell-green/10'
                                            : 'text-gray-700 hover:text-ell-green hover:bg-gray-50'
                                            }`}
                                    >
                                        {item.name}
                                        {item.dropdown && <ChevronDown size={16} />}
                                    </Link>

                                    {/* Dropdown Menu */}
                                    {item.dropdown && (
                                        <AnimatePresence>
                                            {activeDropdown === item.name && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-large py-2 min-w-[200px] border border-gray-100"
                                                >
                                                    {item.dropdown.map((subItem, subIdx) => (
                                                        <a
                                                            key={subIdx}
                                                            href={subItem.path}
                                                            className="block px-4 py-2 text-gray-700 hover:bg-ell-green/10 hover:text-ell-green transition-colors"
                                                        >
                                                            {subItem.name}
                                                        </a>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    )}
                                </div>
                            ))}
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-b border-gray-200 overflow-hidden"
                    >
                        <div className="container-custom py-4">
                            {/* Mobile Top Bar Info */}
                            <div className="md:hidden mb-4 pb-4 border-b border-gray-200">
                                <div className="flex flex-col gap-2 text-sm">
                                    <a href="tel:+1XXXXXXXXXX" className="flex items-center gap-2 text-gray-700">
                                        <Phone size={16} />
                                        <span>+1 (XXX) XXX-XXXX</span>
                                    </a>
                                    <a href="mailto:info@ecolelouislegrand.com" className="flex items-center gap-2 text-gray-700">
                                        <Mail size={16} />
                                        <span>info@ecolelouislegrand.com</span>
                                    </a>
                                </div>
                                <div className="mt-3 flex gap-2">
                                    <a
                                        href="/portal/login"
                                        className="btn btn-primary text-sm flex-1 justify-center"
                                    >
                                        Learning Portal
                                    </a>
                                    <div className="flex-1">
                                        <LanguageSwitcher />
                                    </div>
                                </div>
                            </div>

                            <nav className="flex flex-col gap-2">
                                {navigation.map((item, idx) => (
                                    <div key={idx}>
                                        <Link
                                            to={item.path}
                                            onClick={() => !item.dropdown && setIsMobileMenuOpen(false)}
                                            className={`block px-4 py-3 rounded-lg font-medium transition-colors ${location.pathname === item.path
                                                ? 'text-ell-green bg-ell-green/10'
                                                : 'text-gray-700 hover:bg-gray-50'
                                                }`}
                                        >
                                            {item.name}
                                        </Link>
                                        {item.dropdown && (
                                            <div className="ml-4 mt-1 mb-2 flex flex-col gap-1">
                                                {item.dropdown.map((subItem, subIdx) => (
                                                    <a
                                                        key={subIdx}
                                                        href={subItem.path}
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                        className="block px-4 py-2 text-sm text-gray-600 hover:text-ell-green hover:bg-ell-green/10 rounded-lg transition-colors"
                                                    >
                                                        {subItem.name}
                                                    </a>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </nav>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
