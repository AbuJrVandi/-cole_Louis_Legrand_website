import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
    BookOpen,
    Award,
    CheckCircle,
    FileText,
    GraduationCap,
    Users,
    Globe,
    TrendingUp
} from 'lucide-react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CTAButtons from '../../components/CTAButtons/CTAButtons';

const OssdCurriculum = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    const requirements = [
        { icon: BookOpen, label: '30 Credits', description: '18 compulsory + 12 optional credits' },
        { icon: FileText, label: 'OSSLT', description: 'Ontario Secondary School Literacy Test' },
        { icon: Users, label: '40 Hours', description: 'Community involvement activities' }
    ];

    const subjects = [
        { icon: BookOpen, name: 'English', color: 'from-blue-500 to-cyan-500' },
        { icon: Award, name: 'Mathematics', color: 'from-purple-500 to-pink-500' },
        { icon: GraduationCap, name: 'Sciences', color: 'from-green-500 to-emerald-500' },
        { icon: Globe, name: 'Social Studies', color: 'from-orange-500 to-red-500' },
        { icon: Users, name: 'Arts', color: 'from-yellow-500 to-orange-500' },
        { icon: TrendingUp, name: 'Technology', color: 'from-indigo-500 to-purple-500' },
        { icon: CheckCircle, name: 'Physical Education', color: 'from-red-500 to-pink-500' },
        { icon: Globe, name: 'Languages', color: 'from-cyan-500 to-blue-500' }
    ];

    const benefits = [
        { icon: Globe, title: 'Global Recognition', description: 'Accepted by universities worldwide' },
        { icon: GraduationCap, title: 'University Pathways', description: 'Direct entry to Canadian and international universities' },
        { icon: Award, title: 'Quality Education', description: "Based on Ontario's world-class curriculum" },
        { icon: TrendingUp, title: 'Credit Flexibility', description: 'Transfer credits from previous schools' }
    ];

    return (
        <div className="ossd-curriculum-page">
            <Helmet>
                <title>OSSD Curriculum | École Louis Legrand</title>
                <meta name="description" content="Learn about the Ontario Secondary School Diploma (OSSD) curriculum and requirements at École Louis Legrand." />
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
                            Ontario Secondary School Diploma (OSSD)
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-100 text-shadow">
                            Earn a Recognized Canadian High School Diploma Online
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* What is OSSD Section */}
            <section className="section bg-white">
                <div className="container-custom">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInUp}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 gradient-text">
                            What is the OSSD?
                        </h2>
                        <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                            <p>
                                The Ontario Secondary School Diploma (OSSD) is a prestigious
                                credential recognized worldwide. It demonstrates that students have
                                met the rigorous standards set by the Ontario Ministry of Education.
                            </p>
                            <p>
                                Students must earn a minimum of 30 credits, including 18 compulsory
                                credits and 12 optional credits, complete 40 hours of community
                                involvement, and pass the Ontario Secondary School Literacy Test (OSSLT).
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* OSSD Requirements Section */}
            <section className="section bg-gradient-to-br from-gray-50 to-primary-50">
                <div className="container-custom">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInUp}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gray-900">
                            OSSD Requirements
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {requirements.map((req, index) => {
                            const IconComponent = req.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -8 }}
                                    className="card p-8 text-center group"
                                >
                                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 p-5 mb-6 mx-auto group-hover:scale-110 transition-transform">
                                        <IconComponent size={40} className="text-white" />
                                    </div>
                                    <h3 className="text-3xl font-heading font-bold mb-2 text-gray-900">
                                        {req.label}
                                    </h3>
                                    <p className="text-gray-600">
                                        {req.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Compulsory Credits Section */}
            <section className="section bg-white">
                <div className="container-custom">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInUp}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-center gradient-text">
                            Compulsory Credits (18 Total)
                        </h2>
                        <div className="card p-8 md:p-10">
                            <ul className="space-y-4 text-lg text-gray-700">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="text-primary-600 mt-1 flex-shrink-0" size={24} />
                                    <span>4 credits in English (1 per grade)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="text-primary-600 mt-1 flex-shrink-0" size={24} />
                                    <span>3 credits in Mathematics (at least 1 in Grade 11 or 12)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="text-primary-600 mt-1 flex-shrink-0" size={24} />
                                    <span>2 credits in Science</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="text-primary-600 mt-1 flex-shrink-0" size={24} />
                                    <span>1 credit in Canadian History</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="text-primary-600 mt-1 flex-shrink-0" size={24} />
                                    <span>1 credit in Canadian Geography</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="text-primary-600 mt-1 flex-shrink-0" size={24} />
                                    <span>1 credit in the Arts</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="text-primary-600 mt-1 flex-shrink-0" size={24} />
                                    <span>1 credit in Health and Physical Education</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="text-primary-600 mt-1 flex-shrink-0" size={24} />
                                    <span>1 credit in French as a Second Language</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="text-primary-600 mt-1 flex-shrink-0" size={24} />
                                    <span>0.5 credit in Career Studies</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="text-primary-600 mt-1 flex-shrink-0" size={24} />
                                    <span>0.5 credit in Civics</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="text-primary-600 mt-1 flex-shrink-0" size={24} />
                                    <span>3 additional credits (1 from each group)</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Course Offerings Section */}
            <section className="section bg-gradient-to-br from-gray-50 to-secondary-50">
                <div className="container-custom">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInUp}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gray-900">
                            Our OSSD Course Offerings
                        </h2>
                        <p className="text-xl text-gray-600">
                            We offer a comprehensive range of OSSD-approved courses across all subject areas
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {subjects.map((subject, index) => {
                            const IconComponent = subject.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    whileHover={{ scale: 1.05 }}
                                    className="card p-6 text-center group"
                                >
                                    <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${subject.color} p-3 mb-3 mx-auto group-hover:scale-110 transition-transform`}>
                                        <IconComponent size={32} className="text-white" />
                                    </div>
                                    <p className="font-semibold text-gray-900">{subject.name}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="section bg-white">
                <div className="container-custom">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInUp}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gray-900">
                            Benefits of the OSSD
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => {
                            const IconComponent = benefit.icon;
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
                                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 p-4 mb-4 mx-auto group-hover:scale-110 transition-transform">
                                        <IconComponent size={32} className="text-white" />
                                    </div>
                                    <h3 className="text-xl font-heading font-bold mb-2 text-gray-900">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {benefit.description}
                                    </p>
                                </motion.div>
                            );
                        })}
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
                            Start Your OSSD Journey Today
                        </h2>
                        <p className="text-xl mb-10 text-gray-100">
                            Explore our course catalog and connect with an academic advisor
                        </p>
                        <CTAButtons
                            primaryLabel="View Course Catalog"
                            primaryLink="/programs"
                            secondaryLabel="Contact an Advisor"
                            secondaryLink="/contact"
                            variant="centered"
                        />
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default OssdCurriculum;
