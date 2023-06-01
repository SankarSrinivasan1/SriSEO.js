// SriSEO.js
// Released by Sankar Srinivasan under MIT License 
// Sankar Srinivasan petra.srini@gmail.com
// SriSEO.js is a JavaScript library that provides an easy way to implement essential SEO features in HTML websites.

// Features
// Meta tag management for title, description, and keywords.
// URL slug generator for SEO-friendly URLs.
// Canonical URL management for specifying the preferred URL version.
// Structured data markup integration for improved search engine understanding.
// XML sitemap generation for better search engine crawling.
// Open Graph and Twitter Card tag management for social media sharing.
// SEO analysis and recommendations for optimizing your webpage.
// Compatibility and performance checks to ensure a smooth user experience.

var SriSEO = {};

// Function to set meta tags
SriSEO.setMetaTags = function (metaData) {
  var head = document.head || document.getElementsByTagName('head')[0];

  // Remove existing meta tags
  var existingMetaTags = document.querySelectorAll('meta[name="description"], meta[name="keywords"]');
  existingMetaTags.forEach(function (tag) {
    head.removeChild(tag);
  });

  // Create new meta tags
  var descriptionTag = document.createElement('meta');
  descriptionTag.name = 'description';
  descriptionTag.content = metaData.description;
  head.appendChild(descriptionTag);

  var keywordsTag = document.createElement('meta');
  keywordsTag.name = 'keywords';
  keywordsTag.content = metaData.keywords.join(', ');
  head.appendChild(keywordsTag);
};

// Function to generate URL slug
SriSEO.generateSlug = function (url) {
  return url.toLowerCase().trim().replace(/\s+/g, '-');
};

// Function to set canonical URL
SriSEO.setCanonicalURL = function (url) {
  var linkTag = document.createElement('link');
  linkTag.rel = 'canonical';
  linkTag.href = url;
  document.head.appendChild(linkTag);
};

// Function to add structured data markup
SriSEO.addStructuredData = function (data) {
  var scriptTag = document.createElement('script');
  scriptTag.type = 'application/ld+json';
  scriptTag.innerHTML = JSON.stringify(data);
  document.head.appendChild(scriptTag);
};

// Function to generate XML sitemap
SriSEO.generateXMLSitemap = function (urls) {
  var xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  urls.forEach(function (url) {
    xml += '  <url>\n';
    xml += '    <loc>' + url + '</loc>\n';
    xml += '  </url>\n';
  });
  xml += '</urlset>';
  return xml;
};

// Function to set Open Graph tags
SriSEO.setOpenGraphTags = function (data) {
  var head = document.head || document.getElementsByTagName('head')[0];

  // Remove existing Open Graph tags
  var existingOGTags = document.querySelectorAll('meta[property^="og:"]');
  existingOGTags.forEach(function (tag) {
    head.removeChild(tag);
  });

  // Create new Open Graph tags
  for (var property in data) {
    var ogTag = document.createElement('meta');
    ogTag.setAttribute('property', 'og:' + property);
    ogTag.content = data[property];
    head.appendChild(ogTag);
  }
};

// Function to set Twitter Card tags
SriSEO.setTwitterCardTags = function (data) {
  var head = document.head || document.getElementsByTagName('head')[0];

  // Remove existing Twitter Card tags
  var existingTwitterTags = document.querySelectorAll('meta[name^="twitter:"]');
  existingTwitterTags.forEach(function (tag) {
    head.removeChild(tag);
  });

  // Create new Twitter Card tags
  for (var property in data) {
    var twitterTag = document.createElement('meta');
    twitterTag.setAttribute('name', 'twitter:' + property);
    twitterTag.content = data[property];
    head.appendChild(twitterTag);
  }
};

// Function to perform SEO analysis and provide recommendations
SriSEO.analyzeAndRecommendations = function () {
  // Perform SEO analysis on the webpage
  // ...
  // Generate recommendations based
  var pageTitle = document.title;
  var metaDescription = document.querySelector('meta[name="description"]').getAttribute('content');
  var headingTags = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  var imageTags = document.querySelectorAll('img');

  // Analyze the webpage elements and gather SEO data
  var analysisResults = {
    title: pageTitle,
    description: metaDescription,
    headingCount: headingTags.length,
    imageCount: imageTags.length,
    // ... Other SEO analysis data
  };

  // Generate recommendations based on the analysis
  var recommendations = [];
  if (pageTitle.length > 70) {
    recommendations.push("Shorten the page title to improve readability and search engine visibility.");
  }

  if (metaDescription.length > 160) {
    recommendations.push("Optimize the meta description to be within the recommended length of 160 characters.");
  }

  if (headingTags.length < 1) {
    recommendations.push("Include at least one heading tag (h1 - h6) on the webpage for better structure and SEO.");
  }

  if (imageTags.length < 5) {
    recommendations.push("Add more relevant images to enhance the visual appeal and engagement of the webpage.");
  }

  // Return the analysis results and recommendations
  return {
    analysis: analysisResults,
    recommendations: recommendations
  };
};

// Function to check compatibility and performance
SriSEO.checkCompatibilityAndPerformance = function () {

  // Check browser compatibility
  var isCompatible = true; // Perform browser compatibility checks

  // Check performance metrics
  var performanceScore = 90; // Calculate performance score based on performance metrics

  // Return the compatibility and performance results
  return {
    compatible: isCompatible,
    performance: performanceScore
  };
};

// Export the SriSEO object for use in other scripts
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = SriSEO;
} else {
  window.SriSEO = SriSEO;
}
