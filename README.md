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
