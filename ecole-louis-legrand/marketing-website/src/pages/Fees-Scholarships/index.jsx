import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { DollarSign, Award, CreditCard, Calendar } from 'lucide-react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CTAButtons from '../../components/CTAButtons/CTAButtons';

const FeesScholarships = () => {
    const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

    const scholarships = [
        { title: 'Academic Excellence Scholarship', award: 'Up to 50% tuition reduction', eligibility: 'Students with 85%+ average', color: 'from-yellow-500 to-orange-500' },
        { title: 'New Student Scholarship', award: '$500 - $1,000', eligibility: 'First-time students', color: 'from-blue-500 to-cyan-500' },
        { title: 'International Student Scholarship', award: 'Up to 30% tuition reduction', eligibility: 'International students with 80%+ average', color: 'from-purple-500 to-pink-500' },
        { title: 'Need-Based Financial Aid', award: 'Varies based on need', eligibility: 'Demonstrated financial need', color: 'from-green-500 to-emerald-500' },
        { title: 'Sibling Discount', award: '10% off per additional sibling', eligibility: 'Multiple siblings enrolled simultaneously', color: 'from-red-500 to-pink-500' },
        { title: 'Early Application Scholarship', award: '$300 - $500', eligibility: 'Apply 3+ months before semester', color: 'from-indigo-500 to-purple-500' }
    ];

    return (
        <div className="fees-scholarships-page">
            <Helmet>
                <title>Fees & Scholarships | École Louis Legrand</title>
                <meta name="description" content="Explore tuition fees, payment options, and scholarship opportunities at École Louis Legrand." />
            </Helmet>

            <Header />

            <section className="hero-section bg-pattern pt-20">
                <div className="hero-overlay"></div>
                <div className="relative z-10 container-custom py-24 md:py-32">
                    <motion.div initial="hidden" animate="visible" variants={fadeInUp} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto text-center text-white">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 text-shadow-lg">Fees & Scholarships</h1>
                        <p className="text-xl md:text-2xl text-gray-100 text-shadow">Transparent Pricing & Financial Support</p>
                    </motion.div>
                </div>
            </section>

            <section className="section bg-white">
                <div className="container-custom">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ duration: 0.6 }} className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 gradient-text">Tuition Fees</h2>
                        <p className="text-xl text-gray-600">Competitive rates with all learning materials included</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            { title: 'Elementary Courses', price: '$XXX', period: 'per course', features: ['All course materials', 'Teacher support', 'Progress tracking', 'Parent portal access'] },
                            { title: 'High School Credit', price: '$XXX', period: 'per credit (0.5 or 1.0)', features: ['OSSD-approved course', 'OCT-certified teachers', 'All learning resources', 'Official transcript', 'University preparation'], featured: true },
                            { title: 'Full OSSD Program', price: '$X,XXX', period: 'per semester (6 credits)', features: ['Complete semester package', 'Academic advising', 'University counseling', 'Priority support', 'Discounted rate'] }
                        ].map((plan, idx) => (
                            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }} className={`card p-8 ${plan.featured ? 'ring-4 ring-primary-500' : ''} relative`}>
                                {plan.featured && <div className="absolute top-0 right-0 bg-primary-600 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-bold">Most Popular</div>}
                                <h3 className="text-2xl font-heading font-bold mb-4 text-gray-900">{plan.title}</h3>
                                <div className="mb-6">
                                    <div className="text-4xl font-bold text-primary-600">{plan.price}</div>
                                    <div className="text-gray-600">{plan.period}</div>
                                </div>
                                <ul className="space-y-3">
                                    {plan.features.map((feature, fidx) => (
                                        <li key={fidx} className="flex items-start gap-2 text-gray-700">
                                            <span className="text-primary-600">✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                    <p className="text-center mt-8 text-gray-600">* Prices are in CAD. Payment plans available. Contact us for current pricing.</p>
                </div>
            </section>

            <section className="section bg-gradient-to-br from-gray-50 to-secondary-50">
                <div className="container-custom">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gray-900">Scholarships & Financial Aid</h2>
                        <p className="text-xl text-gray-600">Making quality education accessible to all</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {scholarships.map((scholarship, idx) => (
                            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }} whileHover={{ y: -8 }} className="card p-6 group">
                                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${scholarship.color} p-4 mb-4 group-hover:scale-110 transition-transform`}>
                                    <Award size={32} className="text-white" />
                                </div>
                                <h3 className="text-xl font-heading font-bold mb-2 text-gray-900">{scholarship.title}</h3>
                                <p className="text-lg font-semibold text-primary-600 mb-2">Award: {scholarship.award}</p>
                                <p className="text-gray-600">Eligibility: {scholarship.eligibility}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-700 text-white bg-pattern">
                <div className="container-custom">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-shadow-lg">Questions About Fees or Scholarships?</h2>
                        <p className="text-xl mb-10 text-gray-100">Contact our financial aid office for personalized assistance</p>
                        <CTAButtons primaryLabel="Apply for Scholarship" primaryLink="/portal/scholarship-application" secondaryLabel="Contact Financial Aid Office" secondaryLink="/contact" variant="centered" />
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default FeesScholarships;
