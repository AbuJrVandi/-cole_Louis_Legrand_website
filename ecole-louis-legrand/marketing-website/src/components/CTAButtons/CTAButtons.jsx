import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';

const CTAButtons = ({
    primaryLabel = 'Apply Now',
    primaryLink = '/portal/apply',
    secondaryLabel = 'Learn More',
    secondaryLink = '#learn-more',
    variant = 'default',
    showIcons = true
}) => {
    return (
        <div className={`flex flex-col sm:flex-row gap-4 ${variant === 'centered' ? 'justify-center' : ''}`}>
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <Link
                    to={primaryLink}
                    className="btn btn-primary group inline-flex items-center"
                >
                    {primaryLabel}
                    {showIcons && <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />}
                </Link>
            </motion.div>

            {secondaryLabel && (
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link
                        to={secondaryLink}
                        className="btn btn-secondary group inline-flex items-center"
                    >
                        {secondaryLabel}
                        {showIcons && <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />}
                    </Link>
                </motion.div>
            )}
        </div>
    );
};

export default CTAButtons;
