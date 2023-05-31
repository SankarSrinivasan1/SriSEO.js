# SriSEO.js is JavaScript library for Search Engine Optimization 

The objective of the "SriSEO.js" library is to provide an easy-to-use and lightweight solution **for improving the search engine visibility and optimization of HTML websites**. It aims to assist website owners, particularly those without extensive knowledge of SEO techniques, in implementing common SEO best practices without requiring deep understanding or manual intervention.

The "SriSEO.js" library aims to bridge this gap by offering a simplified approach to SEO optimization. The library focuses on enhancing the SEO aspects that can be controlled via HTML and JavaScript.

By integrating the "SriSEO.js" library into their projects, website owners can efficiently manage essential SEO elements such as **meta tags, generate clean and meaningful URLs, implement structured data markup, and ensure the proper handling of canonical URLs**. The library also offers features for **generating XML sitemaps, managing Open Graph and Twitter Card meta tags, and even providing SEO analysis and recommendations.**

Ultimately, the objective is to simplify the process of implementing SEO best practices, enabling website owners to enhance the search engine visibility and discoverability of their HTML websites.

## For Website Owners
### Installation 1

1. Download the "SriSEO.js" library file and save it in your website folder. For example mywebsite/SriSEO folder.

2. In your HTML file, include the library by adding a `<script>` tag with the `src` attribute pointing to the location of the library file. For example:
   ```html
   <script src="mywebsite/sriseo/sriseo.js"></script>
   ```
   Replace `'mywebsite/sriseo/sriseo.js'` with the actual path to the library file in your project. 

3. Place the `<script>` tag above the closing `</body>` tag to ensure that the library is loaded after the HTML content is parsed.

   ```html
   <html>
     <head>
       <!-- Your HTML head content here -->
     </head>
     <body>
       <!-- Your HTML body content here -->
       <script src="mywebsite/sriseo/sriseo.js"></script>
     </body>
   </html>
   ```

4. Once the library is included, you can start using the "SriSEO.js" functions in your website code. Refer to the **"Usage" code examples and documentation provided below for details on how to use the library's features.**

This method allows you to include the "SriSEO.js" library directly in your HTML file without relying on a build process or external module bundler. It simplifies the setup process, especially for **smaller projects or static websites.**

Remember to adjust the file path (`'mywebsite/sriseo/sriseo.js'`) based on the actual location of the library file in your project directory structure.

**Note: If you plan to use the library on multiple pages of your website, it's recommended to include the `<script>` tag in a shared HTML template or include file to ensure consistent usage across all pages.**

### Installation 2

To include the "SriSEO.js" library from a content delivery network (CDN), follow these steps:

1. In your HTML file, include the library by adding a `<script>` tag with the `src` attribute pointing to the CDN URL. 
 
 ```html
   <script src="https://sriseojs.netlify.app/sriseo.js"></script>
   ```

2. Place the `<script>` tag above the closing `</body>` tag to ensure that the library is loaded after the HTML content is parsed.

   ```html
   <html>
     <head>
       <!-- Your HTML head content here -->
     </head>
     <body>
       <!-- Your HTML body content here -->  
       <script src="https://sriseojs.netlify.app/sriseo.js"></script>
     </body>
   </html>
   ```

5. Once the library is included, you can start using the "SriSEO.js" functions in your website code. By including the "SriSEO.js" library from a CDN, you can take advantage of the network's global distribution and caching capabilities. This can result in faster loading times for your website visitors, as they can access the library from a server closer to their geographic location.

### Usage
#### Setting Meta Tags
```javascript
SriSEO.setMetaTags({
  description: 'This is the description of my webpage.',
  keywords: ['SEO', 'optimization', 'HTML', 'JavaScript']
});
```

#### Generating a URL Slug
```javascript
var url = 'https://example.com/my blog post';
var slug = SriSEO.generateSlug(url);
console.log(slug); // Output: 'https-example-com-my-blog-post'
```

#### Setting Canonical URL
```javascript
var canonicalURL = 'https://example.com/my-blog-post';
SriSEO.setCanonicalURL(canonicalURL);
```

#### Adding Structured Data Markup
```javascript
var structuredData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "My Blog Post",
  "datePublished": "2023-05-31",
  "author": {
    "@type": "Person",
    "name": "Sankar Srinivasan"
  }
};
SriSEO.addStructuredData(structuredData);
```

#### Generating XML Sitemap
```javascript
var urls = [
  'https://example.com/',
  'https://example.com/about',
  'https://example.com/products',
  'https://example.com/contact'
];
var xmlSitemap = SriSEO.generateXMLSitemap(urls);
console.log(xmlSitemap);
```

Output:
```
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://example.com/</loc>
  </url>
  <url>
    <loc>https://example.com/about</loc>
  </url>
  <url>
    <loc>https://example.com/products</loc>
  </url>
  <url>
    <loc>https://example.com/contact</loc>
  </url>
</urlset>
```

#### Setting Open Graph Tags

```javascript

SriSEO.setOpenGraphTags({

  title: 'My Blog Post',

  description: 'This is my blog post',

  image: 'https://example.com/images/my-post.jpg',

  url: 'https://example.com/my-blog-post'

});

```

#### Setting Twitter Card Tags

```javascript

SriSEO.setTwitterCardTags({

  title: 'My Blog Post',

  description: 'This is my blog post',

  image: 'https://example.com/images/my-post.jpg',

  url: 'https://example.com/my-blog-post'

});

```

#### Performing SEO Analysis and Recommendations

```javascript

var analysis = SriSEO.analyzeAndRecommendations();

console.log(analysis.analysis); // Output: Object containing SEO analysis results

console.log(analysis.recommendations); // Output: Array of recommended improvements

```

#### Checking Compatibility and Performance

```javascript

var compatibility = SriSEO.checkCompatibilityAndPerformance();

console.log(compatibility.compatible); // Output: Boolean indicating compatibility

console.log(compatibility.performance); // Output: Performance score

```

## Compatibility and Performance

The "SriSEO.js" library is compatible with modern web browsers, including **Chrome, Firefox, Safari, and Edge**. It is built with performance in mind, utilizing efficient JavaScript code execution and minimal resource consumption.


## Contact us

By utilizing this library, website owners can easily manage **meta tags, generate URL slugs, incorporate structured data markup, generate XML sitemaps, set Open Graph and Twitter Card tags, perform SEO analysis, and check compatibility and performance.**

Please note that the provided examples and usage instructions are intended as a guide, and you may need to adapt them to fit your specific project requirements and website architecture.

For more detailed information on the usage of each function and additional features, refer to the inline comments within the "SriSEO.js" library code.

Enjoy optimizing your website for improved search engine visibility and user experience with the "SriSEO.js" library!

Contact Sankar Srinivasan for feedback at petra.srini@gmail.com

Donate and encourage





******


***

## For Developers

### Installation 

Include the library is by using a module bundler like webpack or Rollup. This allows you to leverage the benefits of a module-based development approach and manage your project's dependencies more efficiently.

To include "SriSEO.js" using a module bundler, follow these steps:

1. Install the "SriSEO.js" library as a dependency in your project using npm or yarn:

   ```bash
   npm install SriSEO.js
   ```

    or

   ```bash
   yarn add SriSEO.js
   ```

2. Import the library in your JavaScript file:
   
   ```javascript
   import SriSEO from 'sriseo.js';
   ```

   If you're using a specific function from the library, you can import it directly:

   ```javascript
   import { setMetaTags, generateSlug } from 'sriseo.js';
   ```

3. Build your JavaScript bundle using the module bundler's configuration. This process may vary depending on the bundler you're using.
   For example, with webpack, you would typically have a configuration file (`webpack.config.js`) where you define the entry point and output configuration:

   ```javascript
   const path = require('path');
   module.exports = {
     entry: './src/index.js', // Replace with your entry file
     output: {
       filename: 'bundle.js',
       path: path.resolve(__dirname, 'dist'), // Replace with your output director   },
   };
   ```

4. Include the generated bundle file (`bundle.js`) in your HTML file:

   ```html
   <script src="dist/bundle.js"></script>
   ```

Using a module bundler provides the advantage of optimizing and combining multiple JavaScript files into a single bundle, which can improve loading performance on your website.

Note: Make sure to adjust the paths and file names based on your project's structure and configuration.

Remember to consult the documentation or official resources of your specific module bundler for more detailed instructions on how to include external libraries and build your project.

### Functions

#### `SriSEO.setMetaTags(metaData)`
Sets the meta tags for the webpage.
- `metaData` (Object): An object containing the metadata information.
  - `description` (String): The description of the webpage.
  - `keywords` (Array): An array of keywords relevant to the webpage.

#### `SriSEO.generateSlug(url)`
Generates a URL slug from a given URL.
- `url` (String): The URL from which to generate the slug.

#### `SriSEO.setCanonicalURL(url)`
Sets the canonical URL for the webpage.
- `url` (String): The canonical URL of the webpage.

#### `SriSEO.addStructuredData(data)`
Adds structured data markup to the webpage.
- `data` (Object): The structured data object to be added.

#### `SriSEO.generateXMLSitemap(urls)`
Generates an XML sitemap with the given URLs.
- `urls` (Array): An array of URLs to include in the sitemap.

#### `SriSEO.setOpenGraphTags(data)`
Sets the Open Graph tags for the webpage.
- `data` (Object): An object containing the Open Graph data.

#### `SriSEO.setTwitterCardTags(data)`
Sets the Twitter Card tags for the webpage.
- `data` (Object): An object containing the Twitter Card data.

#### `SriSEO.analyzeAndRecommendations()`
Performs SEO analysis on the webpage and provides recommendations based on the analysis.
- Returns an object with the following properties:
  - `analysis` (Object): An object containing the results of the SEO analysis, such as the page title, description, heading count, image count, and more.
  - `recommendations` (Array): An array of recommended SEO improvements based on the analysis.

#### `SriSEO.checkCompatibilityAndPerformance()`
Checks the browser compatibility and performance of the webpage.
- Returns an object with the following properties:
  - `compatible` (Boolean): Indicates whether the webpage is compatible with the current browser.
  - `performance` (Number): A performance score indicating the performance of the webpage.

### API Functionalities in SriSEO.js
#### Connect Google Search Console API into SriSEO.js

To connect the Google Search Console API with the "SEOify.js" library, you can follow these steps:

1. Set up a project and enable the Google Search Console API in the Google Cloud Console:

   - Go to the [Google Cloud Console](https://console.cloud.google.com/) and create a new project or select an existing one.

   - Enable the Google Search Console API for your project.

   - Create API credentials (OAuth 2.0 client ID) for your project. Note down the generated Client ID and Client Secret.

2. Authenticate and authorize the "SEOify.js" library to access the Google Search Console API:

   - In your "SEOify.js" library, implement the authentication flow using the OAuth 2.0 protocol. This typically involves redirecting the user to the Google authorization endpoint and handling the callback to obtain an access token.

   - Use the generated Client ID and Client Secret to authenticate and authorize your application to access the Google Search Console API on behalf of the user.

3. Make API requests to the Google Search Console API:

   - Once authenticated, you can use the Google API Client Library for JavaScript to make requests to the Google Search Console API endpoints.

   - Implement the desired functionality using the available API methods. For example, you can fetch search analytics data, submit sitemaps, or monitor indexing status.

Here's an example of how the code might look within the "SEOify.js" library to connect and make API requests to the Google Search Console API:

```javascript

// Initialize the Google API client library

gapi.load('client', init);

function init() {

  // Load the client library and set up the credentials

  gapi.client.init({

    clientId: 'YOUR_CLIENT_ID',

    clientSecret: 'YOUR_CLIENT_SECRET',

    discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/webmasters/v3/rest'],

    scope: 'https://www.googleapis.com/auth/webmasters.readonly',

  }).then(() => {

    // Authenticate the user

    gapi.auth2.getAuthInstance().signIn().then(() => {

      // API request example: Fetch search analytics data

      gapi.client.webmasters.searchanalytics.query({

        siteUrl: 'https://example.com',

        requestBody: {

          startDate: '2023-01-01',

          endDate: '2023-01-07',

          dimensions: ['query'],

        },

      }).then((response) => {

        const data = response.result;

        // Process the response data as needed

        console.log(data);

      }).catch((error) => {

        console.error('Error making API request:', error);

      });

    });

  });

}

```

Note: The code snippet above assumes that you have already included the necessary Google API client library and have the required authorization and authentication flow implemented.

Remember to replace `'YOUR_CLIENT_ID'` and `'YOUR_CLIENT_SECRET'` with the actual values generated in the Google Cloud Console for your project.

Consult the Google Search Console API documentation for the available endpoints, request parameters, and response formats. Modify the example code to suit your specific needs and integrate it into the appropriate sections of your "SEOify.js" library.

Ensure that you handle authentication errors, rate limits, and any potential exceptions that may occur during the API requests for a robust and reliable integration.

#### Connect Google Analytics API into SriSEO.js

To connect the Google Analytics API with the "SEOify.js" library, you can follow these general steps:

1. Set up a Google Analytics project:

   - Go to the [Google Analytics website](https://analytics.google.com) and create a new project.

   - Set up your website or app tracking by following the provided instructions.

   - Obtain the necessary credentials, including the client ID and client secret.

2. Enable the Google Analytics API:

   - Go to the [Google Cloud Console](https://console.cloud.google.com/).

   - Create a new project or select an existing project that matches your Google Analytics project.

   - Enable the Google Analytics API for your project.

   - Generate API credentials, including the API key, client ID, and client secret.

3. Authenticate and authorize the "SEOify.js" library with the Google Analytics API:

   - Implement the authentication flow, which typically involves OAuth 2.0.

   - Redirect the user to the Google OAuth consent screen to obtain authorization.

   - Retrieve the access token and refresh token after successful authorization.

4. Set up API communication in your "SEOify.js" library:

   - Utilize a suitable HTTP library or SDK to make requests to the Google Analytics API endpoints.

   - Handle authentication by providing the access token in the request headers or using the client library's authentication methods.

5. Fetch and process Google Analytics data:

   - Identify the specific data you want to retrieve from the Google Analytics API, such as pageviews, sessions, or conversion metrics.

   - Make the appropriate API requests, specifying the required parameters and dimensions.

   - Handle the API responses, parsing the returned data and extracting the relevant metrics for analysis.

Here's an example of how you can integrate the Google Analytics API into your "SEOify.js" library to fetch pageviews for a specific page:

```javascript

// Example function to fetch pageviews from Google Analytics API

function fetchPageviews(pagePath) {

  const apiKey = 'YOUR_API_KEY';

  const viewId = 'YOUR_VIEW_ID';

  const apiUrl = `https://www.googleapis.com/analytics/v3/data/ga?ids=ga:${viewId}&start-date=30daysAgo&end-date=today&metrics=ga:pageviews&dimensions=ga:pagePath&filters=ga:pagePath==${encodeURIComponent(pagePath)}&key=${apiKey}`;

  // Make the API request

  fetch(apiUrl)

    .then(response => response.json())

    .then(data => {

      // Process the Google Analytics data

      const pageviews = data.totalsForAllResults['ga:pageviews'];

      // Execute callback or update the UI with the pageviews data

      // ...

    })

    .catch(error => {

      console.error('Error fetching pageviews:', error);

    });

}

// Example usage of the fetchPageviews function

fetchPageviews('/example-page');

```

In the code snippet above, the `fetchPageviews` function makes a request to the Google Analytics API, specifying the API key, view ID, and desired parameters such as the date range, metrics, dimensions, and filters. The API responds with the pageviews data for the specified page path. You can then process this data and update the user interface or execute any necessary actions.

Remember to replace `'YOUR_API_KEY'` with your actual API key obtained from the Google Cloud Console, and `'YOUR_VIEW_ID'` with the view ID associated with your Google Analytics project. Adjust the code to match the specific API endpoints, request parameters, and response formats of the Google Analytics API.


By integrating the Google Analytics API into your "SEOify.js" library, you can provide website owners with valuable data insights, track key metrics, and offer performance analysis to help optimize their websites for better SEO.

**** Connect schema.org API into SriSEO.js

Connecting the Schema.org API with the "SEOify.js" library involves utilizing the Schema.org vocabulary and guidelines to generate structured data markup. Here's a general outline of the steps to integrate Schema.org API functionality into your "SEOify.js" library:

1. Familiarize yourself with the Schema.org documentation:

   - Visit the [Schema.org website](https://schema.org/) to explore the available schema types and properties.

   - Understand the structured data vocabulary and guidelines provided by Schema.org.

   - Determine which schema types and properties are relevant to your implementation.

2. Define functions in your "SEOify.js" library to generate structured data markup:

   - Identify the specific use cases for structured data in your library, such as adding schema for articles, products, events, or local businesses.

   - Implement functions that generate structured data markup based on the chosen schema types and properties.

   - Consider the different data formats for structured data, such as JSON-LD, Microdata, or RDFa, and decide which format to use in your library.

3. Leverage the schema types and properties in your "SEOify.js" library:

   - Use the Schema.org vocabulary to create objects and populate them with relevant properties.

   - Implement functions that allow users of your library to provide data and generate structured data markup accordingly.

   - Generate the final structured data markup based on the chosen schema type and properties.

Here's a simplified example of how you can integrate Schema.org functionality into your "SEOify.js" library:

```javascript

// Example function to generate Article structured data markup

function generateArticleStructuredData(title, description, author, datePublished) {

  const structuredData = {

    '@context': 'https://schema.org',

    '@type': 'Article',

    headline: title,

    description: description,

    author: {

      '@type': 'Person',

      name: author,

    },

    datePublished: datePublished,

  };

  return JSON.stringify(structuredData);

}

// Example usage of the generateArticleStructuredData function

const articleData = {

  title: 'Example Article',

  description: 'This is an example article.',

  author: 'John Doe',

  datePublished: '2023-05-01',

};

const articleStructuredData = generateArticleStructuredData(

  articleData.title,

  articleData.description,

  articleData.author,

  articleData.datePublished

);

console.log(articleStructuredData);

```

The code snippet above demonstrates a basic implementation of generating Article structured data markup using Schema.org vocabulary. You can expand on this concept and create additional functions for other schema types and properties based on your requirements.

Remember to consult the Schema.org documentation for the specific schema types and properties you want to include in your library. Modify the example code to suit your needs and integrate it into the appropriate sections of your "SEOify.js" library.

It's important to note that the Schema.org API itself doesn't provide specific endpoints or a server-side component. Instead, it provides a standardized vocabulary and guidelines for implementing structured data. Therefore, the integration of the Schema.org API is primarily about leveraging the schema types and properties provided by Schema.org in your library, rather than making direct API calls.

#### Connect Social Media APIs into SriSEO.js

Connecting social media platform APIs with the "SEOify.js" library allows you to integrate social media features, such as sharing buttons, social media metadata, and social media analytics. Here's a general outline of the steps to connect social media platform APIs with your "SEOify.js" library:

1. Choose the social media platforms and APIs:

   - Identify the social media platforms you want to integrate with (e.g., Facebook, Twitter, LinkedIn).

   - Research and choose the relevant APIs provided by each platform for the desired functionality (e.g., Facebook Graph API, Twitter API, LinkedIn API).

2. Register your application and obtain API credentials:

   - Create developer accounts on the respective social media platforms.

   - Register your application to obtain the necessary API credentials, such as API keys, client IDs, and client secrets.

3. Authenticate and authorize the "SEOify.js" library with the social media platform APIs:

   - Implement the authentication flow for each social media platform API.

   - Redirect the user to the respective platform's authorization endpoint and handle the callback to obtain access tokens.

   - Store the access tokens securely for subsequent API requests.

4. Implement social media functionality in your "SEOify.js" library:

   - Define functions in your library to interact with the social media platform APIs.

   - Utilize the API endpoints provided by each platform to perform actions like sharing content, retrieving social media metadata, or accessing analytics.

   - Handle API requests and responses appropriately, including error handling and rate limiting considerations.

5. Integrate social media features in your library:

   - Provide functions or methods that allow users of your library to enable social media features, such as generating share buttons or configuring social media metadata.

   - Use the social media platform APIs to fetch and display social media counts, engagement metrics, or other relevant data.

Here's an example of how you can integrate the Facebook Graph API into your "SEOify.js" library to retrieve social media metadata:

```javascript

// Example function to fetch Facebook metadata for a URL

function fetchFacebookMetadata(url) {

  const accessToken = 'YOUR_FACEBOOK_ACCESS_TOKEN';

  const apiUrl = `https://graph.facebook.com/v12.0/?id=${encodeURIComponent(url)}&access_token=${accessToken}`;

  // Make the API request

  fetch(apiUrl)

    .then(response => response.json())

    .then(data => {

      // Process the Facebook metadata

      const likes = data.likes;

      const shares = data.shares;

      const comments = data.comments;

      // Execute callback or update the UI with the metadata

      // ...

    })

    .catch(error => {

      console.error('Error fetching Facebook metadata:', error);

    });

}

// Example usage of the fetchFacebookMetadata function

fetchFacebookMetadata('https://example.com');

```

In this example, the `fetchFacebookMetadata` function makes a request to the Facebook Graph API, passing the URL for which you want to retrieve the metadata. The API responds with metadata such as the number of likes, shares, and comments for that URL. You can then process this data and update the user interface or execute any necessary actions.

Remember to replace `'YOUR_FACEBOOK_ACCESS_TOKEN'` with the actual access token obtained from the Facebook Developers platform. Adjust the code to match the specific API endpoints, request parameters, and response formats of the social media platform APIs you're integrating.

Repeat the above steps for other social media platforms and their respective APIs to incorporate additional social media functionality into your "SEOify.js" library. By connecting social media platform APIs, you can enhance your library with features that promote social sharing, improve social media engagement, and provide valuable social media insights for website owners.

#### Connect Third Party APIs into SriSEO.js

Connecting an SEO analysis API with the "SEOify.js" library involves utilizing the API's endpoints and data to perform SEO analysis on a website. Here's a general outline of the steps to integrate an SEO analysis API into your "SEOify.js" library:

1. Identify a suitable SEO analysis API:

   - Research and choose an SEO analysis API that provides the desired features and metrics.

   - Register for an API key or obtain the necessary credentials to access the API.

2. Set up API communication in your "SEOify.js" library:

   - Determine the API endpoints and request parameters required for SEO analysis.

   - Implement functions in your library to make HTTP requests to the API endpoints.

   - Handle authentication, including providing the API key or credentials in the requests.

3. Retrieve and process the SEO analysis data:

   - Make the necessary API requests to fetch the SEO analysis data for a given website or web page.

   - Parse and process the response data from the API to extract the relevant metrics and information.

   - Implement logic to interpret and analyze the SEO data to generate insights and recommendations.

4. Integrate the SEO analysis functionality into your library:

   - Define functions or methods in your "SEOify.js" library that encapsulate the SEO analysis functionality.

   - Provide user-friendly interfaces for accessing the SEO analysis features, such as analyzing a specific web page or providing an SEO score for a website.

   - Use the retrieved SEO data to generate reports, highlight areas for improvement, and offer actionable recommendations.

Here's a simplified example of how you can integrate an SEO analysis API into your "SEOify.js" library:

```javascript

// Example function to analyze a web page using an SEO analysis API

function analyzeWebPage(url) {

  const apiKey = 'YOUR_API_KEY';

  const apiUrl = `https://api.example.com/seo-analysis?url=${encodeURIComponent(url)}&apiKey=${apiKey}`;

  // Make the API request

  fetch(apiUrl)

    .then(response => response.json())

    .then(data => {

      // Process the SEO analysis data

      const seoScore = data.score;

      const issues = data.issues;

      // Generate recommendations or perform actions based on the analysis results

      // ...

      // Execute callback or update the UI with the analysis results

      // ...

    })

    .catch(error => {

      console.error('Error analyzing web page:', error);

    });

}

// Example usage of the analyzeWebPage function

analyzeWebPage('https://example.com');

```

In the code snippet above, the `analyzeWebPage` function demonstrates making a request to an SEO analysis API endpoint, passing the URL to be analyzed and the API key for authentication. Upon receiving the response, you can extract relevant metrics, such as the SEO score and identified issues. Based on the analysis results, you can generate recommendations, execute actions, and update the user interface accordingly.

Remember to replace `'YOUR_API_KEY'` with the actual API key or credentials provided by the SEO analysis API provider. Adjust the code to match the specific API endpoints, request parameters, and response formats of the chosen API.

Integrating an SEO analysis API involves understanding the API's documentation, its authentication requirements, and the data it provides. By leveraging the API's capabilities, you can enhance your "SEOify.js" library with dynamic SEO analysis features to help website owners optimize their websites effectively.
