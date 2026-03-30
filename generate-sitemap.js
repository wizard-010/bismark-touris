// generate-sitemap.js
const fs = require('fs');
const path = require('path');

// Configuration
const BASE_URL = 'https://wizard-010.github.io/bismark-touris';
const OUTPUT_FILE = './sitemap.xml';

// Get current date
function getCurrentDate() {
    return new Date().toISOString().split('T')[0];
}

// Main pages
const mainPages = [
    { url: '/', lastmod: getCurrentDate(), priority: '1.0', changefreq: 'weekly' },
    { url: '/index.html', lastmod: getCurrentDate(), priority: '1.0', changefreq: 'weekly' },
    { url: '/products.html', lastmod: getCurrentDate(), priority: '0.9', changefreq: 'weekly' },
    { url: '/gallery.html', lastmod: getCurrentDate(), priority: '0.8', changefreq: 'weekly' },
    { url: '/blog.html', lastmod: getCurrentDate(), priority: '0.9', changefreq: 'weekly' },
    { url: '/about.html', lastmod: getCurrentDate(), priority: '0.7', changefreq: 'monthly' },
    { url: '/contacts.html', lastmod: getCurrentDate(), priority: '0.7', changefreq: 'monthly' },
    { url: '/privacy.html', lastmod: getCurrentDate(), priority: '0.3', changefreq: 'yearly' },
    { url: '/terms.html', lastmod: getCurrentDate(), priority: '0.3', changefreq: 'yearly' }
];

// Service Pages
const servicePages = [
    { url: '/volcano-tours.html', date: getCurrentDate() },
    { url: '/wwii-history-tours.html', date: getCurrentDate() },
    { url: '/cultural-beach-tours.html', date: getCurrentDate() },
    { url: '/custom-tour-packages.html', date: getCurrentDate() }
];

// Blog posts - Complete list from your blog
const blogPosts = [
    // April 2026
    { url: '/blog-posts/tufi-fjords-hammerhead-sharks-moray-eels.html', date: '2026-04-01' },
    // March 2026
    { url: '/blog-posts/lark-force-wilderness-track-east-new-britain.html', date: '2026-03-31' },
    { url: '/blog-posts/muck-diving-milne-bay-original-png.html', date: '2026-03-30' },
    { url: '/blog-posts/luxury-boat-tours-melanesian-tourist-services-madang.html', date: '2026-03-29' },
    { url: '/blog-posts/bird-watching-western-province-ecoregions.html', date: '2026-03-28' },
    { url: '/blog-posts/bird-watching-walindi-huon-peninsula.html', date: '2026-03-27' },
    { url: '/blog-posts/bird-watching-ambua-lodge-hela-province.html', date: '2026-03-26' },
    { url: '/blog-posts/mount-wilhelm-trekking-goroka-show-2026.html', date: '2026-03-25' },
    { url: '/blog-posts/asaro-mudmen-goroka-show.html', date: '2026-03-25' },
    { url: '/blog-posts/lae-war-memorial.html', date: '2026-03-25' },
    { url: '/blog-posts/goroka-show-2026.html', date: '2026-03-24' },
    { url: '/blog-posts/goroka-show-2026-dates.html', date: '2026-03-24' },
    { url: '/blog-posts/village-homestays-tufi.html', date: '2026-03-24' },
    { url: '/blog-posts/kokoda-trail-cost.html', date: '2026-03-24' },
    { url: '/blog-posts/bird-of-paradise.html', date: '2026-03-24' },
    { url: '/blog-posts/png-diving-liveaboards.html', date: '2026-03-24' },
    { url: '/blog-posts/kokoda-track-trekking.html', date: '2026-03-24' },
    { url: '/blog-posts/baining-fire-dance.html', date: '2026-03-24' },
    { url: '/blog-posts/rabaul-volcanic-eruption-1994.html', date: '2026-03-15' },
    { url: '/blog-posts/mt-tavurvur.html', date: '2026-03-10' },
    { url: '/blog-posts/wwii-japanese-tunnels.html', date: '2026-03-05' },
    // February 2026
    { url: '/blog-posts/cruise-ship-kokopo.html', date: '2026-02-28' },
    { url: '/blog-posts/bitapaka-war-cemetery.html', date: '2026-02-20' },
    { url: '/blog-posts/school-visits.html', date: '2026-02-15' }
];

function generateSitemap() {
    let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
    sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
    
    // Add main pages
    mainPages.forEach(page => {
        sitemap += '    <url>\n';
        sitemap += `        <loc>${BASE_URL}${page.url}</loc>\n`;
        sitemap += `        <lastmod>${page.lastmod}</lastmod>\n`;
        sitemap += `        <changefreq>${page.changefreq}</changefreq>\n`;
        sitemap += `        <priority>${page.priority}</priority>\n`;
        sitemap += '    </url>\n';
    });
    
    // Add service pages
    servicePages.forEach(page => {
        sitemap += '    <url>\n';
        sitemap += `        <loc>${BASE_URL}${page.url}</loc>\n`;
        sitemap += `        <lastmod>${page.date}</lastmod>\n`;
        sitemap += '        <changefreq>monthly</changefreq>\n';
        sitemap += '        <priority>0.8</priority>\n';
        sitemap += '    </url>\n';
    });
    
    // Add blog posts
    blogPosts.forEach(post => {
        sitemap += '    <url>\n';
        sitemap += `        <loc>${BASE_URL}${post.url}</loc>\n`;
        sitemap += `        <lastmod>${post.date}</lastmod>\n`;
        sitemap += '        <changefreq>monthly</changefreq>\n';
        sitemap += '        <priority>0.6</priority>\n';
        sitemap += '    </url>\n';
    });
    
    sitemap += '</urlset>';
    
    // Write file
    fs.writeFileSync(path.join(__dirname, OUTPUT_FILE), sitemap, 'utf8');
    
    const totalUrls = mainPages.length + servicePages.length + blogPosts.length;
    console.log('✅ Sitemap generated successfully!');
    console.log(`📁 File: ${OUTPUT_FILE}`);
    console.log(`📊 Total URLs: ${totalUrls}`);
    console.log(`   - Main pages: ${mainPages.length}`);
    console.log(`   - Service pages: ${servicePages.length}`);
    console.log(`   - Blog posts: ${blogPosts.length}`);
}

// Run the generator
generateSitemap();
