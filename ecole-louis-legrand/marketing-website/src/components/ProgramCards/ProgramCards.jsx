import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Monitor, ArrowRight } from 'lucide-react';

const ProgramCards = ({ programs }) => {
    const iconMap = {
        elementary: BookOpen,
        'high-school': GraduationCap,
        online: Monitor
    };

    const defaultPrograms = programs || [
        {
            id: 1,
            key: 'elementary',
            title: 'Elementary School',
            description: 'Grades 1-8: Building strong foundations in core subjects',
            link: '/programs#elementary',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            id: 2,
            key: 'high-school',
            title: 'High School',
            description: 'Grades 9-12: OSSD credit courses leading to diploma',
            link: '/programs#high-school',
            color: 'from-purple-500 to-pink-500'
        },
        {
            id: 3,
            key: 'online',
            title: 'Online Learning',
            description: 'Flexible, self-paced learning from anywhere in the world',
            link: '/programs#online',
            color: 'from-orange-500 to-red-500'
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
            {defaultPrograms.map(program => {
                const IconComponent = iconMap[program.key] || BookOpen;

                return (
                    <motion.div
                        key={program.id}
                        variants={item}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className="card card-hover p-6 group"
                    >
                        {/* Icon with Gradient Background */}
                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${program.color} p-4 mb-4 group-hover:scale-110 transition-transform`}>
                            <IconComponent size={32} className="text-white" />
                        </div>

                        {/* Content */}
                        <h3 className="text-2xl font-heading font-bold mb-3 text-gray-900">
                            {program.title}
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            {program.description}
                        </p>

                        {/* Link */}
                        <Link
                            to={program.link}
                            className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all group/link"
                        >
                            Learn More
                            <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                );
            })}
        </motion.div>
    );
};

export default ProgramCards;
