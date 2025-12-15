import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Trophy, Globe, Lightbulb, Users as UsersIcon } from 'lucide-react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CTAButtons from '../../components/CTAButtons/CTAButtons';

const About = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    const values = [
        {
            icon: Trophy,
            title: 'Excellence',
            description: 'We maintain the highest academic standards in all our programs',
            color: 'from-yellow-500 to-orange-500'
        },
        {
            icon: Globe,
            title: 'Accessibility',
            description: 'Quality education should be available to everyone, everywhere',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            icon: Lightbulb,
            title: 'Innovation',
            description: 'We embrace technology to enhance learning experiences',
            color: 'from-purple-500 to-pink-500'
        },
        {
            icon: Heart,
            title: 'Diversity',
            description: 'We celebrate multiculturalism and global perspectives',
            color: 'from-red-500 to-pink-500'
        }
    ];

    return (
        <div className="about-page">
            <Helmet>
                <title>About Us | École Louis Legrand</title>
                <meta name="description" content="Learn about École Louis Legrand - A global online OSSD school providing world-class Canadian education." />
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
                            About École Louis Legrand
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-100 text-shadow">
                            Redefining Online Education for the Global Student
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Who We Are Section */}
            <section id="who-we-are" className="section bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeInUp}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 gradient-text">
                                Who We Are
                            </h2>
                            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                                <p>
                                    École Louis Legrand is a multicultural and innovative online school
                                    offering an alternative way of completing the full Ontario Secondary
                                    School Diploma (OSSD) curriculum. Our goal is to support students and
                                    families whose educational needs might not be readily met through
                                    mainstream education channels.
                                </p>
                                <p>
                                    At École Louis Legrand, we believe that through extensive use of
                                    educational software and technology, we are able to offer students a
                                    more accessible, flexible, and modern alternative to education. Our
                                    program gives students the freedom to learn at their own pace, to study
                                    in accordance with their schedule, availability, and ability to earn
                                    their credits from any location and time zone of choice.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="aspect-square bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-8 shadow-large">
                                <div className="h-full flex items-center justify-center">
                                    <UsersIcon size={200} className="text-primary-300" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section id="mission" className="section bg-gradient-to-br from-gray-50 to-primary-50">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeInUp}
                            transition={{ duration: 0.6 }}
                            className="card p-8 md:p-10"
                        >
                            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 p-4 mb-6">
                                <Target size={32} className="text-white" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gray-900">
                                Our Mission
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                To provide accessible, high-quality Canadian education to students
                                worldwide, empowering them to achieve their academic goals regardless
                                of geographical or circumstantial barriers.
                            </p>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeInUp}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="card p-8 md:p-10"
                        >
                            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-secondary-500 to-secondary-600 p-4 mb-6">
                                <Eye size={32} className="text-white" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gray-900">
                                Our Vision
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                To be the leading global online OSSD provider, recognized for
                                academic excellence, innovation in education technology, and
                                commitment to student success.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Values Section */}
            <section className="section bg-white">
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
                            Our Core Values
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            The principles that guide everything we do
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => {
                            const IconComponent = value.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    className="card p-6 group text-center"
                                >
                                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${value.color} p-4 mb-4 mx-auto group-hover:scale-110 transition-transform`}>
                                        <IconComponent size={32} className="text-white" />
                                    </div>
                                    <h3 className="text-xl font-heading font-bold mb-2 text-gray-900">
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {value.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Team Section Placeholder */}
            <section id="team" className="section bg-gradient-to-br from-gray-50 to-secondary-50">
                <div className="container-custom">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInUp}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-gray-900">
                            Our Team
                        </h2>
                        <p className="text-xl text-gray-700 leading-relaxed mb-8">
                            Our team consists of OCT-certified educators, technology experts, and
                            student support specialists dedicated to your success.
                        </p>
                        <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-12 border-2 border-dashed border-primary-300">
                            <UsersIcon size={80} className="text-primary-400 mx-auto mb-4" />
                            <p className="text-gray-600 text-lg">
                                Team member profiles coming soon
                            </p>
                        </div>
                    </motion.div>
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
                            Learn More About Our School
                        </h2>
                        <p className="text-xl mb-10 text-gray-100">
                            Ready to explore what École Louis Legrand has to offer?
                        </p>
                        <CTAButtons
                            primaryLabel="Schedule a Consultation"
                            primaryLink="/contact"
                            secondaryLabel="View Our Programs"
                            secondaryLink="/programs"
                            variant="centered"
                        />
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default About;
