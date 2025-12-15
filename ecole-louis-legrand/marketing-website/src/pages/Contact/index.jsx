import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageSquare, Clock, Send } from 'lucide-react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '', lastName: '', email: '', phone: '', inquiryType: 'general', subject: '', message: ''
    });

    const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
    };

    const contactInfo = [
        { icon: Phone, title: 'Phone', details: ['+1 (XXX) XXX-XXXX', '+1 (XXX) XXX-XXXX'], hours: 'Mon-Fri: 9am - 5pm EST' },
        { icon: Mail, title: 'Email', details: ['info@ecolelouislegrand.com', 'admissions@ecolelouislegrand.com'], hours: 'Response within 24 hours' },
        { icon: MapPin, title: 'Address', details: ['École Louis Legrand', 'Address Line 1', 'City, Province, Postal Code'], hours: '' },
        { icon: MessageSquare, title: 'Live Chat', details: ['Available during business hours'], hours: '', button: 'Start Chat' }
    ];

    return (
        <div className="contact-page">
            <Helmet>
                <title>Contact Us | École Louis Legrand</title>
                <meta name="description" content="Get in touch with École Louis Legrand. Contact our admissions team, ask questions, or schedule a consultation." />
            </Helmet>

            <Header />

            <section className="hero-section bg-pattern pt-20">
                <div className="hero-overlay"></div>
                <div className="relative z-10 container-custom py-24 md:py-32">
                    <motion.div initial="hidden" animate="visible" variants={fadeInUp} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto text-center text-white">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 text-shadow-lg">Contact Us</h1>
                        <p className="text-xl md:text-2xl text-gray-100 text-shadow">We're Here to Help - Get in Touch Today</p>
                    </motion.div>
                </div>
            </section>

            <section className="section bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {contactInfo.map((info, idx) => {
                            const IconComponent = info.icon;
                            return (
                                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }} whileHover={{ y: -8 }} className="card p-6 text-center group">
                                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 p-4 mb-4 mx-auto group-hover:scale-110 transition-transform">
                                        <IconComponent size={32} className="text-white" />
                                    </div>
                                    <h3 className="text-xl font-heading font-bold mb-3 text-gray-900">{info.title}</h3>
                                    <div className="space-y-1 text-gray-600 mb-2">
                                        {info.details.map((detail, didx) => <p key={didx}>{detail}</p>)}
                                    </div>
                                    {info.hours && <p className="text-sm text-gray-500">{info.hours}</p>}
                                    {info.button && <button className="mt-3 btn btn-primary text-sm">{info.button}</button>}
                                </motion.div>
                            );
                        })}
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                            <h2 className="text-4xl font-heading font-bold mb-6 gradient-text">Send Us a Message</h2>
                            <p className="text-lg text-gray-600 mb-8">Fill out the form below and our team will respond promptly</p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
                                        <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required className="input" />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
                                        <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required className="input" />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="input" />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="input" />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="inquiryType" className="block text-sm font-semibold text-gray-700 mb-2">Inquiry Type *</label>
                                    <select id="inquiryType" name="inquiryType" value={formData.inquiryType} onChange={handleChange} required className="input">
                                        <option value="general">General Inquiry</option>
                                        <option value="admissions">Admissions</option>
                                        <option value="programs">Program Information</option>
                                        <option value="fees">Fees & Payment</option>
                                        <option value="technical">Technical Support</option>
                                        <option value="scholarship">Scholarships</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">Subject *</label>
                                    <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="Brief description of your inquiry" required className="input" />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="6" placeholder="Please provide details about your inquiry..." required className="input"></textarea>
                                </div>

                                <motion.button type="submit" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn btn-primary w-full justify-center group">
                                    <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                                    Send Message
                                </motion.button>
                            </form>
                        </motion.div>

                        <div className="space-y-8">
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="card p-8">
                                <h3 className="text-2xl font-heading font-bold mb-6 text-gray-900 flex items-center gap-3">
                                    <Clock size={28} className="text-primary-600" />
                                    Office Hours
                                </h3>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-2">Admissions Office</h4>
                                        <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM EST</p>
                                        <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM EST</p>
                                        <p className="text-gray-600">Sunday: Closed</p>
                                    </div>
                                    <div className="border-t border-gray-200 pt-4">
                                        <h4 className="font-semibold text-gray-900 mb-2">Student Support</h4>
                                        <p className="text-gray-600">Monday - Friday: 8:00 AM - 8:00 PM EST</p>
                                        <p className="text-gray-600">Saturday - Sunday: 10:00 AM - 4:00 PM EST</p>
                                    </div>
                                    <div className="border-t border-gray-200 pt-4">
                                        <h4 className="font-semibold text-gray-900 mb-2">Technical Support</h4>
                                        <p className="text-gray-600">24/7 Email Support</p>
                                        <p className="text-gray-600">Live Chat: Mon-Fri 9:00 AM - 9:00 PM EST</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.2 }} className="card p-8 bg-gradient-to-br from-primary-50 to-secondary-50">
                                <h3 className="text-2xl font-heading font-bold mb-4 text-gray-900">Quick Answers</h3>
                                <p className="text-gray-700 mb-4">Looking for immediate answers? Check out our FAQ:</p>
                                <div className="flex flex-wrap gap-3">
                                    {['How to Enroll', 'Course Info', 'Technical Support', 'Payment & Fees', 'OSSD Requirements'].map((topic, idx) => (
                                        <a key={idx} href={`/faq#${topic.toLowerCase().replace(/ /g, '-')}`} className="px-4 py-2 bg-white rounded-lg text-primary-600 font-semibold hover:shadow-md transition-shadow">
                                            {topic}
                                        </a>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.3 }} className="card p-8">
                                <h3 className="text-2xl font-heading font-bold mb-4 text-gray-900">Our Location</h3>
                                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                                    <MapPin size={48} className="text-gray-400" />
                                    <p className="text-gray-600 ml-3">Map will be embedded here</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Contact;
