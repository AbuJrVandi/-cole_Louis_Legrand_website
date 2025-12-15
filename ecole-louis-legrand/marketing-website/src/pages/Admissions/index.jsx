import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
    FileText,
    UserPlus,
    BookCheck,
    CreditCard,
    Router,
    CheckCircle2
} from 'lucide-react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CTAButtons from '../../components/CTAButtons/CTAButtons';

const Admissions = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    const enrollmentSteps = [
        {
            icon: FileText,
            title: 'Complete Application',
            description: 'Fill out our online application form with student information'
        },
        {
            icon: UserPlus,
            title: 'Submit Documents',
            description: 'Provide transcripts, ID, and any required supporting documents'
        },
        {
            icon: BookCheck,
            title: 'Course Selection',
            description: 'Work with an academic advisor to choose your courses'
        },
        { icon: CreditCard, title: 'Payment & Enrollment', description: 'Complete payment and receive your learning portal access' },
        { icon: Router, title: 'Start Learning', description: 'Begin your courses on the semester start date' }
    ];

    const deadlines = [
        { semester: 'Fall Semester', applyBy: 'August 15', starts: 'September' },
        { semester: 'Winter Semester', applyBy: 'December 15', starts: 'January' },
        { semester: 'Spring Semester', applyBy: 'March 15', starts: 'April' },
        { semester: 'Summer Semester', applyBy: 'June 15', starts: 'July' }
    ];

    return (
        <div className="admissions-page">
            <Helmet>
                <title>Admissions | École Louis Legrand</title>
                <meta name="description" content="Learn how to apply to École Louis Legrand. View admission requirements, deadlines, and enrollment process." />
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
                            Admissions
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-100 text-shadow">
                            Join École Louis Legrand - Your Journey Starts Here
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* How to Enroll Section */}
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
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 gradient-text">
                            How to Enroll
                        </h2>
                        <p className="text-xl text-gray-600">
                            Starting your journey with École Louis Legrand is simple
                        </p>
                    </motion.div>

                    <div className="max-w-4xl mx-auto space-y-6">
                        {enrollmentSteps.map((step, index) => {
                            const IconComponent = step.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="card p-6 md:p-8 group hover:shadow-large transition-shadow"
                                >
                                    <div className="flex items-center gap-6">
                                        <div className="flex-shrink-0">
                                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold text-2xl">
                                                {index + 1}
                                            </div>
                                        </div>
                                        <div className="flex-grow">
                                            <h3 className="text-2xl font-heading font-bold mb-2 flex items-center gap-3 text-gray-900">
                                                <IconComponent size={28} className="text-primary-600" />
                                                {step.title}
                                            </h3>
                                            <p className="text-gray-600 text-lg">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Admission Requirements Section */}
            <section className="section bg-gradient-to-br from-gray-50 to-primary-50">
                <div className="container-custom">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gray-900">
                            Admission Requirements
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="card p-8"
                        >
                            <h3 className="text-2xl font-heading font-bold mb-4 text-primary-600">
                                Elementary Students (Grades 1-8)
                            </h3>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 size={20} className="text-green-600 mt-1 flex-shrink-0" />
                                    <span>Proof of age (birth certificate or passport)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 size={20} className="text-green-600 mt-1 flex-shrink-0" />
                                    <span>Previous school records (if applicable)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 size={20} className="text-green-600 mt-1 flex-shrink-0" />
                                    <span>Parent/guardian contact information</span>
                                </li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="card p-8"
                        >
                            <h3 className="text-2xl font-heading font-bold mb-4 text-secondary-600">
                                High School Students (Grades 9-12)
                            </h3>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 size={20} className="text-green-600 mt-1 flex-shrink-0" />
                                    <span>Official transcripts from previous schools</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 size={20} className="text-green-600 mt-1 flex-shrink-0" />
                                    <span>Proof of identity and age</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 size={20} className="text-green-600 mt-1 flex-shrink-0" />
                                    <span>English language proficiency (for international students)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 size={20} className="text-green-600 mt-1 flex-shrink-0" />
                                    <span>Parent/guardian consent (for students under 18)</span>
                                </li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="card p-8"
                        >
                            <h3 className="text-2xl font-heading font-bold mb-4 text-accent-600">
                                International Students
                            </h3>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 size={20} className="text-green-600 mt-1 flex-shrink-0" />
                                    <span>All of the above requirements</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 size={20} className="text-green-600 mt-1 flex-shrink-0" />
                                    <span>Passport copy</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 size={20} className="text-green-600 mt-1 flex-shrink-0" />
                                    <span>English proficiency test scores (if applicable)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 size={20} className="text-green-600 mt-1 flex-shrink-0" />
                                    <span>Translated and notarized transcripts (if not in English)</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Application Deadlines Section */}
            <section className="section bg-white">
                <div className="container-custom">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gray-900">
                            Application Deadlines
                        </h2>
                        <p className="text-xl text-gray-600">
                            We accept applications year-round with rolling admissions
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {deadlines.map((deadline, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                whileHover={{ y: -8 }}
                                className="card p-6 text-center"
                            >
                                <h3 className="text-xl font-heading font-bold mb-3 text-gray-900">
                                    {deadline.semester}
                                </h3>
                                <p className="text-sm text-gray-600 mb-2">Apply by:</p>
                                <p className="text-lg font-bold text-primary-600 mb-2">{deadline.applyBy}</p>
                                <p className="text-sm text-gray-600">Starts: {deadline.starts}</p>
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
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-shadow-lg">
                            Ready to Apply?
                        </h2>
                        <p className="text-xl mb-10 text-gray-100">
                            Start your application today or schedule a consultation with our admissions team
                        </p>
                        <CTAButtons
                            primaryLabel="Start Application"
                            primaryLink="/portal/apply"
                            secondaryLabel="Schedule Consultation"
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

export default Admissions;
