import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, Tag, ArrowRight, Bell } from 'lucide-react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const NewsBlog = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

    const blogPosts = [
        { id: 1, title: 'Welcome to École Louis Legrand', excerpt: 'We are excited to announce the launch of our new online school platform...', category: 'announcement', date: '2024-09-01', image: '/assets/images/blog/post1.jpg' },
        { id: 2, title: 'Tips for Success in Online Learning', excerpt: 'Discover strategies to excel in your online courses and make the most of your education...', category: 'education', date: '2024-09-15', image: '/assets/images/blog/post2.jpg' },
        { id: 3, title: 'Meet Our OCT-Certified Teachers', excerpt: 'Get to know the dedicated educators who make learning at ELL exceptional...', category: 'faculty', date: '2024-10-01', image: '/assets/images/blog/post3.jpg' }
    ];

    const categories = ['all', 'announcement', 'education', 'faculty', 'student-success', 'events'];
    const filteredPosts = selectedCategory === 'all' ? blogPosts : blogPosts.filter(post => post.category === selectedCategory);

    const announcements = [
        { date: 'Dec 15, 2024', title: 'Winter 2025 Semester Registration Now Open', description: 'Enroll now for our Winter 2025 semester starting January 15th' },
        { date: 'Dec 10, 2024', title: 'Holiday Break Schedule', description: 'Office closed December 22 - January 2. Emergency support available.' },
        { date: 'Dec 1, 2024', title: 'New Scholarship Opportunities Available', description: 'Apply for our Academic Excellence and International Student scholarships' }
    ];

    return (
        <div className="news-blog-page">
            <Helmet>
                <title>News & Blog | École Louis Legrand</title>
                <meta name="description" content="Stay updated with the latest news, announcements, and educational insights from École Louis Legrand." />
            </Helmet>

            <Header />

            <section className="hero-section bg-pattern pt-20">
                <div className="hero-overlay"></div>
                <div className="relative z-10 container-custom py-24 md:py-32">
                    <motion.div initial="hidden" animate="visible" variants={fadeInUp} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto text-center text-white">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 text-shadow-lg">News & Blog</h1>
                        <p className="text-xl md:text-2xl text-gray-100 text-shadow">Stay Updated with École Louis Legrand</p>
                    </motion.div>
                </div>
            </section>

            <section className="section bg-white">
                <div className="container-custom">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="card p-8 md:p-12 mb-12 bg-gradient-to-br from-primary-50 to-secondary-50">
                        <div className="inline-block bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">Featured</div>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gray-900">The Future of Online Education is Here</h2>
                        <p className="text-gray-600 mb-2 flex items-center gap-2">
                            <Calendar size={18} />
                            Published on December 15, 2024 | By Admin
                        </p>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            École Louis Legrand is revolutionizing online education by combining the rigor of the Ontario curriculum with cutting-edge technology and personalized learning approaches. Read about our vision for the future...
                        </p>
                        <a href="/blog/featured-post" className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all group">
                            Read Full Article
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>

                    <div className="mb-8">
                        <h3 className="text-2xl font-heading font-bold mb-4 text-gray-900">Filter by Category:</h3>
                        <div className="flex flex-wrap gap-3">
                            {categories.map(cat => (
                                <button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-6 py-2 rounded-full font-semibold transition-all ${selectedCategory === cat ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                                    {cat.charAt(0).toUpperCase() + cat.slice(1).replace('-', ' ')}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPosts.map((post, idx) => (
                            <motion.article key={post.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }} whileHover={{ y: -8 }} className="card overflow-hidden group">
                                <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 relative">
                                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-primary-600 flex items-center gap-1">
                                        <Tag size={14} />
                                        {post.category}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <p className="text-sm text-gray-600 mb-2 flex items-center gap-2">
                                        <Calendar size={16} />
                                        {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                    </p>
                                    <h3 className="text-xl font-heading font-bold mb-3 text-gray-900 group-hover:text-primary-600 transition-colors">{post.title}</h3>
                                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                                    <a href={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all group/link">
                                        Read More
                                        <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </motion.article>
                        ))}
                    </div>

                    {filteredPosts.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-gray-600 text-lg">No posts found in this category. Check back soon!</p>
                        </div>
                    )}
                </div>
            </section>

            <section className="section bg-gradient-to-br from-gray-50 to-primary-50">
                <div className="container-custom">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gray-900">Recent Announcements</h2>
                    </motion.div>

                    <div className="max-w-4xl mx-auto space-y-6">
                        {announcements.map((announcement, idx) => (
                            <motion.div key={idx} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }} className="card p-6 hover:shadow-large transition-shadow">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                                        <Bell size={24} className="text-primary-600" />
                                    </div>
                                    <div className="flex-grow">
                                        <p className="text-sm text-primary-600 font-semibold mb-1">{announcement.date}</p>
                                        <h4 className="text-xl font-heading font-bold mb-2 text-gray-900">{announcement.title}</h4>
                                        <p className="text-gray-600">{announcement.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-700 text-white bg-pattern">
                <div className="container-custom">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-shadow-lg">Stay Informed</h2>
                        <p className="text-xl mb-8 text-gray-100">Subscribe to our newsletter for the latest updates, educational tips, and announcements</p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                            <input type="email" placeholder="Enter your email address" required className="flex-grow px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white" />
                            <button type="submit" className="btn bg-white text-primary-700 hover:bg-gray-100 px-8 py-4 font-bold">Subscribe</button>
                        </form>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default NewsBlog;
