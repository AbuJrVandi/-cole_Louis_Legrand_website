import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
    Globe,
    Award,
    Clock,
    Users,
    Languages,
    TrendingUp,
    ArrowRight,
    Sparkles
} from 'lucide-react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CTAButtons from '../../components/CTAButtons/CTAButtons';
import ProgramCards from '../../components/ProgramCards/ProgramCards';

const Home = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    const reasons = [
        {
            icon: Globe,
            title: 'Global Accessibility',
            description: 'Learn from anywhere in the world with our fully online platform',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            icon: Award,
            title: 'Ontario OSSD',
            description: 'Earn a recognized Canadian high school diploma',
            color: 'from-purple-500 to-pink-500'
        },
        {
            icon: Clock,
            title: 'Flexible Schedule',
            description: 'Study at your own pace with asynchronous learning options',
            color: 'from-orange-500 to-red-500'
        },
        {
            icon: Users,
            title: 'Expert Teachers',
            description: 'OCT-certified educators with proven track records',
            color: 'from-green-500 to-emerald-500'
        },
        {
            icon: Languages,
            title: 'Multilingual Support',
            description: 'Available in English, French, Spanish, Arabic, and Korean',
            color: 'from-indigo-500 to-purple-500'
        },
        {
            icon: TrendingUp,
            title: 'University Preparation',
            description: 'Pathways to top Canadian and international universities',
            color: 'from-yellow-500 to-orange-500'
        }
    ];

    return (
        <div className="home-page">
            <Helmet>
                <title>École Louis Legrand | Global Online OSSD Education</title>
                <meta name="description" content="A hybrid Canadian online school offering world-class Ontario Secondary School Diploma programs to students worldwide." />
            </Helmet>

            <Header />

            {/* Hero Section */}
            <section className="hero-section bg-pattern pt-20">
                <div className="hero-overlay"></div>

                <div className="relative z-10 container-custom py-24 md:py-32 lg:py-40">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto text-center text-white"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex flex-col items-center mb-8"
                        >
                            <img
                                src="/assets/ELL_-_Logo-removebg-preview.png"
                                alt="École Louis Legrand Logo"
                                className="h-24 sm:h-32 md:h-40 w-auto mb-4 drop-shadow-lg"
                            />
                        </motion.div>

                        <motion.h1
                            variants={fadeInUp}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 text-shadow-lg"
                        >
                            École Louis Legrand
                        </motion.h1>

                        <motion.h2
                            variants={fadeInUp}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-shadow"
                        >
                            Global Online OSSD Education Without Borders
                        </motion.h2>

                        <motion.p
                            variants={fadeInUp}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="text-lg md:text-xl mb-10 text-gray-100 max-w-3xl mx-auto leading-relaxed"
                        >
                            A hybrid Canadian online school offering world-class Ontario Secondary School Diploma programs to students worldwide.
                        </motion.p>

                        <motion.div
                            variants={fadeInUp}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <CTAButtons
                                primaryLabel="Apply Now"
                                primaryLink="/admissions"
                                secondaryLabel="Book a Free Consultation"
                                secondaryLink="/contact"
                                variant="centered"
                            />
                        </motion.div>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
                    >
                        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="section bg-white">
                <div className="container-custom">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInUp}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 gradient-text">
                            Welcome to École Louis Legrand
                        </h2>
                        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                            <p>
                                École Louis Legrand is a multicultural and innovative online school offering
                                an alternative way of completing the full OSSD curriculum. Our goal is to
                                support students and families whose educational needs might not be readily
                                met through mainstream education channels.
                            </p>
                            <p>
                                Through extensive use of educational technology, we offer students a more
                                accessible, flexible, and modern alternative to education. Our program gives
                                students the freedom to learn at their own pace and earn their credits from
                                any location and time zone of choice.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="section bg-gradient-to-br from-gray-50 to-ell-green/10">
                <div className="container-custom">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInUp}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gray-900">
                            Why Families Choose École Louis Legrand
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Discover what makes our school the preferred choice for global learners
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {reasons.map((reason, index) => {
                            const IconComponent = reason.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -8 }}
                                    className="card p-8 group"
                                >
                                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${reason.color} p-4 mb-6 group-hover:scale-110 transition-transform`}>
                                        <IconComponent size={32} className="text-white" />
                                    </div>
                                    <h3 className="text-2xl font-heading font-bold mb-3 text-gray-900">
                                        {reason.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {reason.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Programs Section */}
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
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gray-900">
                            Our Academic Programs
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Choose the right learning path for your educational journey
                        </p>
                    </motion.div>

                    <ProgramCards />
                </div>
            </section>

            {/* CTA Section */}
            <section className="section bg-gradient-to-br from-ell-green via-ell-green/90 to-ell-blue text-white bg-pattern">
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
                            Ready to Start Your Journey?
                        </h2>
                        <p className="text-xl mb-10 text-gray-100 leading-relaxed">
                            Join hundreds of students worldwide who are achieving their academic goals with École Louis Legrand
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.a
                                href="/admissions"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn bg-white text-ell-green hover:bg-ell-orange hover:text-white group inline-flex items-center justify-center"
                            >
                                Apply Now
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </motion.a>
                            <motion.a
                                href="/contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white/20 inline-flex items-center justify-center"
                            >
                                Schedule a Call
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Home;
