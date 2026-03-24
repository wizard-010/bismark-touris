// generate-sitemap.js
// Run this script to generate sitemap.xml automatically

const fs = require('fs');
const path = require('path');

// Configuration
const siteUrl = 'https://wizard-010.github.io/bismark-touris';
const today = new Date().toISOString().split('T')[0];

// Define all pages (manually maintained for main pages)
const pages = [
    { url: '/', priority: 1.0, changefreq: 'weekly' },
    { url: '/index.html', priority: 1.0, changefreq: 'weekly' },
    { url: '/about.html', priority: 0.8, changefreq: 'monthly' },
    { url: '/products.html', priority: 0.9, changefreq: 'weekly' },
    { url: '/gallery.html', priority: 0.7, changefreq: 'monthly' },
    { url: '/blog.html', priority: 0.8, changefreq: 'weekly' },
    { url: '/contacts.html', priority: 0.8, changefreq: 'monthly' },
    { url: '/privacy.html', priority: 0.5, changefreq: 'yearly' },
];

// Function to get all blog posts from the blog-posts folder
function getBlogPosts() {
    const blogPostsDir = path.join(__dirname, 'blog-posts');
    const posts = [];
    
    if (fs.existsSync(blogPostsDir)) {
        const files = fs.readdirSync(blogPostsDir);
        files.forEach(file => {
            if (file.endsWith('.html') && file !== 'index.html') {
                // Get last modified date from file
                const stats = fs.statSync(path.join(blogPostsDir, file));
                const lastmod = stats.mtime.toISOString().split('T')[0];
                posts.push({
                    file: file,
                    lastmod: lastmod
                });
            }
        });
    }
    return posts;
}

// Generate XML
function generateSitemap() {
    const blogPosts = getBlogPosts();
    
    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
    
    // Add main pages
    pages.forEach(page => {
        xml += `
    <url>
        <loc>${siteUrl}${page.url}</loc>
        <lastmod>${today}</lastmod>
        <changefreq>${page.changefreq}</changefreq>
        <priority>${page.priority}</priority>
    </url>`;
    });
    
    // Add blog posts
    blogPosts.forEach(post => {
        xml += `
    <url>
        <loc>${siteUrl}/blog-posts/${post.file}</loc>
        <lastmod>${post.lastmod}</lastmod>
        <changefreq>never</changefreq>
        <priority>0.6</priority>
    </url>`;
    });
    
    xml += `
</urlset>`;
    
    // Write to file
    fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), xml);
    console.log(`✅ Sitemap generated successfully with ${blogPosts.length} blog posts!`);
}

// Run the generator
generateSitemap();