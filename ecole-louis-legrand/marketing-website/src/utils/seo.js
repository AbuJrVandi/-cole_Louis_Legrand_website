/**
 * SEO Utility Functions for École Louis Legrand Marketing Website
 * Manages meta tags, Open Graph, Twitter Cards, and structured data
 */

/**
 * Sets the page title
 * @param {string} title - Page title
 * @param {boolean} includeSchoolName - Whether to append school name
 */
export const setPageTitle = (title, includeSchoolName = true) => {
    const schoolName = 'École Louis Legrand';
    const fullTitle = includeSchoolName ? `${title} | ${schoolName}` : title;
    document.title = fullTitle;
};

/**
 * Sets meta description tag
 * @param {string} description - Page description
 */
export const setMetaDescription = (description) => {
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
        meta = document.createElement('meta');
        meta.name = 'description';
        document.head.appendChild(meta);
    }
    meta.content = description;
};

/**
 * Sets Open Graph meta tags for social media sharing
 * @param {Object} ogData - Open Graph data
 */
export const setOpenGraphTags = (ogData) => {
    const {
        title,
        description,
        image,
        url,
        type = 'website'
    } = ogData;

    const ogTags = {
        'og:title': title,
        'og:description': description,
        'og:image': image,
        'og:url': url,
        'og:type': type,
        'og:site_name': 'École Louis Legrand'
    };

    Object.entries(ogTags).forEach(([property, content]) => {
        if (content) {
            let meta = document.querySelector(`meta[property="${property}"]`);
            if (!meta) {
                meta = document.createElement('meta');
                meta.setAttribute('property', property);
                document.head.appendChild(meta);
            }
            meta.content = content;
        }
    });
};

/**
 * Sets Twitter Card meta tags
 * @param {Object} twitterData - Twitter card data
 */
export const setTwitterCardTags = (twitterData) => {
    const {
        title,
        description,
        image,
        card = 'summary_large_image'
    } = twitterData;

    const twitterTags = {
        'twitter:card': card,
        'twitter:title': title,
        'twitter:description': description,
        'twitter:image': image
    };

    Object.entries(twitterTags).forEach(([name, content]) => {
        if (content) {
            let meta = document.querySelector(`meta[name="${name}"]`);
            if (!meta) {
                meta = document.createElement('meta');
                meta.name = name;
                document.head.appendChild(meta);
            }
            meta.content = content;
        }
    });
};

/**
 * Sets canonical URL
 * @param {string} url - Canonical URL
 */
export const setCanonicalUrl = (url) => {
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
        link = document.createElement('link');
        link.rel = 'canonical';
        document.head.appendChild(link);
    }
    link.href = url;
};

/**
 * Adds JSON-LD structured data
 * @param {Object} structuredData - Structured data object
 */
export const addStructuredData = (structuredData) => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
};

/**
 * Sets all SEO tags at once
 * @param {Object} seoData - Complete SEO data
 */
export const setSEO = (seoData) => {
    const {
        title,
        description,
        image,
        url,
        type = 'website',
        structuredData
    } = seoData;

    setPageTitle(title);
    setMetaDescription(description);
    setCanonicalUrl(url);

    setOpenGraphTags({
        title,
        description,
        image,
        url,
        type
    });

    setTwitterCardTags({
        title,
        description,
        image
    });

    if (structuredData) {
        addStructuredData(structuredData);
    }
};

/**
 * Default structured data for the organization
 */
export const getOrganizationStructuredData = () => {
    return {
        '@context': 'https://schema.org',
        '@type': 'EducationalOrganization',
        'name': 'École Louis Legrand',
        'description': 'Global online OSSD school offering Ontario Secondary School Diploma programs',
        'url': 'https://www.ecolelouislegrand.com',
        'logo': 'https://www.ecolelouislegrand.com/assets/images/logo.png',
        'contactPoint': {
            '@type': 'ContactPoint',
            'telephone': '+1-XXX-XXX-XXXX',
            'contactType': 'Admissions',
            'email': 'info@ecolelouislegrand.com',
            'availableLanguage': ['English', 'French', 'Spanish', 'Arabic', 'Korean']
        },
        'address': {
            '@type': 'PostalAddress',
            'addressCountry': 'CA',
            'addressLocality': 'City',
            'addressRegion': 'Province'
        }
    };
};

export default {
    setPageTitle,
    setMetaDescription,
    setOpenGraphTags,
    setTwitterCardTags,
    setCanonicalUrl,
    addStructuredData,
    setSEO,
    getOrganizationStructuredData
};
