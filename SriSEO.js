// SEOify.js

// Namespace for the library

var SEOify = {};

// Function to set meta tags

SEOify.setMetaTags = function (metaData) {

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

SEOify.generateSlug = function (url) {

  return url.toLowerCase().trim().replace(/\s+/g, '-');

};

// Function to set canonical URL

SEOify.setCanonicalURL = function (url) {

  var linkTag = document.createElement('link');

  linkTag.rel = 'canonical';

  linkTag.href = url;

  document.head.appendChild(linkTag);

};

// Function to add structured data markup

SEOify.addStructuredData = function (data) {

  var scriptTag = document.createElement('script');

  scriptTag.type = 'application/ld+json';

  scriptTag.innerHTML = JSON.stringify(data);

  document.head.appendChild(scriptTag);

};

// Function to generate XML sitemap

SEOify.generateXMLSitemap = function (urls) {

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

SEOify.setOpenGraphTags = function (data) {

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

SEOify.setTwitterCardTags = function (data) {

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

SEOify.analyzeAndRecommendations = function () {

  // Perform SEO analysis on the webpage

  // ...

  // Generate recommendations based

