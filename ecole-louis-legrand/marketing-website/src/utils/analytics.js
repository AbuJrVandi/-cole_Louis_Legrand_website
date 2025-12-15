/**
 * Analytics Utility Functions for École Louis Legrand Marketing Website
 * Manages event tracking, page views, and user interactions
 */

/**
 * Initialize Google Analytics
 * @param {string} trackingId - GA tracking ID
 */
export const initializeGA = (trackingId) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('js', new Date());
        window.gtag('config', trackingId);
        console.log('Google Analytics initialized:', trackingId);
    }
};

/**
 * Track page view
 * @param {string} pagePath - Page path
 * @param {string} pageTitle - Page title
 */
export const trackPageView = (pagePath, pageTitle) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'page_view', {
            page_path: pagePath,
            page_title: pageTitle
        });
    }
    console.log('Page view tracked:', pagePath);
};

/**
 * Track custom events
 * @param {string} category - Event category
 * @param {string} action - Event action
 * @param {string} label - Event label (optional)
 * @param {number} value - Event value (optional)
 */
export const trackEvent = (category, action, label = null, value = null) => {
    if (typeof window !== 'undefined' && window.gtag) {
        const eventParams = {
            event_category: category,
            event_label: label,
            value: value
        };

        window.gtag('event', action, eventParams);
    }
    console.log('Event tracked:', { category, action, label, value });
};

/**
 * Track CTA button clicks
 * @param {string} buttonLabel - Button label/text
 * @param {string} buttonLocation - Where on page the button is located
 */
export const trackCTAClick = (buttonLabel, buttonLocation) => {
    trackEvent('CTA', 'click', `${buttonLabel} - ${buttonLocation}`);
};

/**
 * Track form submissions
 * @param {string} formName - Name of the form
 * @param {boolean} success - Whether submission was successful
 */
export const trackFormSubmission = (formName, success = true) => {
    const action = success ? 'submit_success' : 'submit_error';
    trackEvent('Form', action, formName);
};

/**
 * Track navigation clicks
 * @param {string} linkText - Text of the navigation link
 * @param {string} destination - Destination URL
 */
export const trackNavigation = (linkText, destination) => {
    trackEvent('Navigation', 'click', `${linkText} -> ${destination}`);
};

/**
 * Track video interactions
 * @param {string} videoTitle - Title of the video
 * @param {string} action - Action (play, pause, complete)
 */
export const trackVideoInteraction = (videoTitle, action) => {
    trackEvent('Video', action, videoTitle);
};

/**
 * Track downloads
 * @param {string} fileName - Name of downloaded file
 * @param {string} fileType - Type of file
 */
export const trackDownload = (fileName, fileType) => {
    trackEvent('Download', 'click', `${fileName} (${fileType})`);
};

/**
 * Track external link clicks
 * @param {string} url - External URL
 */
export const trackExternalLink = (url) => {
    trackEvent('External Link', 'click', url);
};

/**
 * Track search events
 * @param {string} searchTerm - Search query
 * @param {number} resultCount - Number of results returned
 */
export const trackSearch = (searchTerm, resultCount) => {
    trackEvent('Search', 'query', searchTerm, resultCount);
};

/**
 * Track language changes
 * @param {string} fromLanguage - Previous language
 * @param {string} toLanguage - New language
 */
export const trackLanguageChange = (fromLanguage, toLanguage) => {
    trackEvent('Language', 'change', `${fromLanguage} -> ${toLanguage}`);
};

/**
 * Track application process steps
 * @param {string} step - Step name/number
 * @param {string} status - completed, started, abandoned
 */
export const trackApplicationStep = (step, status) => {
    trackEvent('Application', status, step);
};

/**
 * Track user engagement time
 * @param {string} pageName - Name of the page
 * @param {number} timeInSeconds - Time spent on page
 */
export const trackEngagementTime = (pageName, timeInSeconds) => {
    trackEvent('Engagement', 'time_on_page', pageName, timeInSeconds);
};

/**
 * Track scholarship applications
 * @param {string} scholarshipType - Type of scholarship
 */
export const trackScholarshipApplication = (scholarshipType) => {
    trackEvent('Scholarship', 'application_started', scholarshipType);
};

/**
 * Track course interest
 * @param {string} courseCode - Course code or name
 * @param {string} grade - Grade level
 */
export const trackCourseInterest = (courseCode, grade) => {
    trackEvent('Course Interest', 'view', `${courseCode} - Grade ${grade}`);
};

/**
 * Track newsletter signup
 * @param {string} source - Where the signup originated
 */
export const trackNewsletterSignup = (source) => {
    trackEvent('Newsletter', 'signup', source);
};

/**
 * Track live chat interactions
 * @param {string} action - started, message_sent, ended
 */
export const trackLiveChat = (action) => {
    trackEvent('Live Chat', action);
};

/**
 * Set user properties
 * @param {Object} properties - User properties object
 */
export const setUserProperties = (properties) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('set', 'user_properties', properties);
    }
    console.log('User properties set:', properties);
};

/**
 * Track errors
 * @param {string} errorMessage - Error message
 * @param {string} errorLocation - Where the error occurred
 */
export const trackError = (errorMessage, errorLocation) => {
    trackEvent('Error', 'occurred', `${errorLocation}: ${errorMessage}`);
};

export default {
    initializeGA,
    trackPageView,
    trackEvent,
    trackCTAClick,
    trackFormSubmission,
    trackNavigation,
    trackVideoInteraction,
    trackDownload,
    trackExternalLink,
    trackSearch,
    trackLanguageChange,
    trackApplicationStep,
    trackEngagementTime,
    trackScholarshipApplication,
    trackCourseInterest,
    trackNewsletterSignup,
    trackLiveChat,
    setUserProperties,
    trackError
};
