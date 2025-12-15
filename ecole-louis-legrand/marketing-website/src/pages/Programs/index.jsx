import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
    BookOpen,
    GraduationCap,
    Monitor,
    Video,
    MessageSquare,
    BarChart,
    Clock,
    Globe as GlobeIcon
} from 'lucide-react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ProgramCards from '../../components/ProgramCards/ProgramCards';
import CTAButtons from '../../components/CTAButtons/CTAButtons';

const Programs = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    const platformFeatures = [
        { icon: Monitor, title: 'Mobile-Friendly', description: 'Learn on any device, anywhere' },
        { icon: Video, title: 'Live Sessions', description: 'Real-time interaction with teachers' },
        { icon: BarChart, title: 'Progress Tracking', description: 'Monitor your academic journey' },
        { icon: MessageSquare, title: 'Discussion Forums', description: 'Collaborate with peers' },
        { icon: BookOpen, title: 'Resource Library', description: 'Access comprehensive learning materials' },
        { icon: Clock, title: '24/7 Access', description: 'Study on your schedule' }
    ];

    const semesters = [
        { name: 'Fall Semester', date: 'September 2024' },
        { name: 'Winter Semester', date: 'January 2025' },
        { name: 'Spring Semester', date: 'April 2025' },
        { name: 'Summer Semester', date: 'July 2025' }
    ];

    return (
        <div className="programs-page">
            <Helmet>
                <title>Our Programs | École Louis Legrand</title>
                <meta name="description" content="Explore our academic programs including Elementary, High School, and Online Learning options at École Louis Legrand." />
            </Helmet>

            <Header />

            {/* Hero Section */}
            <section className="hero-section bg-pattern pt-20">
                <div className="hero-overlay"></div>

                <div className="relative z-10 container-custom py-24 md:py-32">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto text-center text-white"
                    >
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 text-shadow-lg">
                            Our Academic Programs
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-100 text-shadow">
                            Flexible Learning Pathways for Every Student
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Programs Overview */}
            <section className="section bg-white">
                <div className="container-custom">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInUp}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 gradient-text">
                            Choose Your Learning Path
                        </h2>
                    </motion.div>

                    <ProgramCards />
                </div>
            </section>

            {/* Elementary Program Section */}
            <section id="elementary" className="section bg-gradient-to-br from-blue-50 to-cyan-50">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeInUp}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-gray-900">
                                Elementary School <span className="text-primary-600">(Grades 1-8)</span>
                            </h2>
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                Our elementary program builds strong foundations in core subjects
                                including Mathematics, Language Arts, Science, and Social Studies.
                                Students develop essential skills in a supportive online environment.
                            </p>

                            <h3 className="text-2xl font-heading font-bold mb-4 text-gray-900">Key Features:</h3>
                            <ul className="space-y-3 text-gray-700 mb-6">
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary-600 mt-2"></div>
                                    <span>Interactive online lessons</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary-600 mt-2"></div>
                                    <span>Engaging multimedia content</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary-600 mt-2"></div>
                                    <span>Regular progress assessments</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary-600 mt-2"></div>
                                    <span>Dedicated teacher support</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary-600 mt-2"></div>
                                    <span>Parent portal access</span>
                                </li>
                            </ul>

                            <h3 className="text-2xl font-heading font-bold mb-4 text-gray-900">Subjects Offered:</h3>
                            <div className="flex flex-wrap gap-3">
                                {['Language Arts', 'Mathematics', 'Science', 'Social Studies', 'Arts', 'Physical Education'].map((subject, idx) => (
                                    <span key={idx} className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-semibold">
                                        {subject}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="aspect-square bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-8 shadow-large flex items-center justify-center">
                                <BookOpen size={200} className="text-blue-300" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* High School Program Section */}
            <section id="high-school" className="section bg-gradient-to-br from-purple-50 to-pink-50">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative order-2 lg:order-1"
                        >
                            <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 shadow-large flex items-center justify-center">
                                <GraduationCap size={200} className="text-purple-300" />
                            </div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeInUp}
                            transition={{ duration: 0.6 }}
                            className="order-1 lg:order-2"
                        >
                            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-gray-900">
                                High School <span className="text-purple-600">(Grades 9-12)</span>
                            </h2>
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                Our high school program offers complete OSSD credit courses leading
                                to an Ontario Secondary School Diploma. Students can take individual
                                courses or complete their entire diploma online.
                            </p>

                            <h3 className="text-2xl font-heading font-bold mb-4 text-gray-900">Key Features:</h3>
                            <ul className="space-y-3 text-gray-700 mb-6">
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-purple-600 mt-2"></div>
                                    <span>Full OSSD curriculum</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-purple-600 mt-2"></div>
                                    <span>OCT-certified teachers</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-purple-600 mt-2"></div>
                                    <span>University preparation courses</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-purple-600 mt-2"></div>
                                    <span>Flexible scheduling options</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-purple-600 mt-2"></div>
                                    <span>Credit recovery and upgrading</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-purple-600 mt-2"></div>
                                    <span>Advanced Placement (AP) courses</span>
                                </li>
                            </ul>

                            <h3 className="text-2xl font-heading font-bold mb-4 text-gray-900">Popular Courses:</h3>
                            <div className="flex flex-wrap gap-3">
                                {['English (Grade 12)', 'Advanced Functions', 'Chemistry', 'Physics', 'Computer Science', 'International Business'].map((course, idx) => (
                                    <span key={idx} className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg font-semibold">
                                        {course}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Online Learning Section */}
            <section id="online" className="section bg-white">
                <div className="container-custom">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInUp}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 gradient-text">
                            Online Learning Platform
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Experience education reimagined for the digital age
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {platformFeatures.map((feature, index) => {
                            const IconComponent = feature.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -8 }}
                                    className="card p-6 text-center group"
                                >
                                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 p-4 mb-4 mx-auto group-hover:scale-110 transition-transform">
                                        <IconComponent size={32} className="text-white" />
                                    </div>
                                    <h4 className="text-xl font-heading font-bold mb-2 text-gray-900">
                                        {feature.title}
                                    </h4>
                                    <p className="text-gray-600">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Semester Dates Section */}
            <section className="section bg-gradient-to-br from-gray-50 to-primary-50">
                <div className="container-custom">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInUp}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gray-900">
                            2024-2025 Semester Start Dates
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {semesters.map((semester, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                className="card p-6 text-center"
                            >
                                <h3 className="text-2xl font-heading font-bold mb-2 text-gray-900">
                                    {semester.name}
                                </h3>
                                <p className="text-primary-600 font-semibold text-lg">
                                    {semester.date}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-700 text-white bg-pattern">
                <div className="container-custom">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInUp}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-shadow-lg">
                            Ready to Enroll?
                        </h2>
                        <p className="text-xl mb-10 text-gray-100">
                            Start your application today or explore our course catalog
                        </p>
                        <CTAButtons
                            primaryLabel="Start Application"
                            primaryLink="/admissions"
                            secondaryLabel="View Course Catalog"
                            secondaryLink="/ossd-curriculum"
                            variant="centered"
                        />
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Programs;
