// assets/blog.js
// Blog pagination and featured post functionality for Bismark Touris

document.addEventListener('DOMContentLoaded', function() {
    const blogContainer = document.getElementById('blogContainer');
    const featuredContainer = document.getElementById('featuredPostContainer');
    
    if (!blogContainer) return;
    
    // ========== BLOG POSTS DATABASE (All 23 posts) ==========
    const allPosts = [
        { title: "Exploring the Active Volcano: A Visit to Mt. Tavurvur", url: "blog-posts/mt-tavurvur.html", date: "March 15, 2026", readTime: "8 min", excerpt: "Standing at the foot of an active volcano is a humbling experience. Mt. Tavurvur, located just outside Rabaul, is one of Papua New Guinea's most iconic volcanic sites. The hike up to the observatory offers breathtaking views of the surrounding bay and the volcano's smoking crater. Local guides share stories of past eruptions and the resilience of the Rabaul community.", category: "volcano", tags: ["Volcano", "Mt Tavurvur", "Rabaul"], featured: true },
        { title: "The Hidden History: Exploring WWII Japanese Tunnels", url: "blog-posts/wwii-japanese-tunnels.html", date: "March 5, 2026", readTime: "6 min", excerpt: "Beneath the hills of Rabaul lies a network of tunnels that tell a powerful story of World War II. These underground passages, carved by hand by Japanese soldiers, offer a glimpse into a challenging chapter of our history. Our guides lead you through the dark corridors, sharing firsthand accounts passed down through generations.", category: "wwii", tags: ["WWII History", "Rabaul", "Tunnels"], featured: false },
        { title: "Welcoming Cruise Ship Visitors: A Day in Kokopo", url: "blog-posts/cruise-ship-kokopo.html", date: "February 22, 2026", readTime: "6 min", excerpt: "When a cruise ship docks at Simpson Harbour, it's always an exciting day in Kokopo. From traditional welcoming ceremonies to showcasing our best markets and attractions, here's what we share with our visitors from around the world. The vibrant energy of the local community shines through as we guide guests through the best experiences.", category: "tips", tags: ["Kokopo", "Cruise", "Travel Tips"], featured: false },
        { title: "A Journey to Bitapaka War Cemetery: Remembering Heroes", url: "blog-posts/bitapaka-war-cemetery.html", date: "February 10, 2026", readTime: "4 min", excerpt: "Bitapaka War Cemetery is a place of quiet reflection and remembrance. As we walk among the graves of soldiers who fought in World War II, we honor their sacrifice and reflect on the importance of peace. This sacred site, maintained by the Commonwealth War Graves Commission, tells stories of courage and loss.", category: "wwii", tags: ["WWII History", "Bitapaka", "Rabaul"], featured: false },
        { title: "Supporting Local Communities: Our School Visits", url: "blog-posts/school-visits.html", date: "January 28, 2026", readTime: "5 min", excerpt: "At Bismark Touris, we believe in giving back. One of our most meaningful initiatives is visiting local schools with our guests. From donating supplies to sharing cultural exchange, these moments create lasting connections. Our travelers leave with hearts full of gratitude after meeting the bright students of East New Britain.", category: "community", tags: ["Community", "Schools", "Giving Back"], featured: false },
        { title: "Bird Watching in Western Province: Ecoregions Guide", url: "blog-posts/bird-watching-western-province-ecoregions.html", date: "March 28, 2026", readTime: "7 min", excerpt: "Western Province is home to some of the most diverse bird species in Papua New Guinea. From birds of paradise to rare parrots, discover the best spots for bird watching. Our expert guides know exactly where to find the elusive species that make this region a paradise for birders.", category: "tips", tags: ["Bird Watching", "Western Province", "Nature"], featured: false },
        { title: "Bird Watching at Walindi: Huon Peninsula Adventures", url: "blog-posts/bird-watching-walindi-huon-peninsula.html", date: "March 27, 2026", readTime: "6 min", excerpt: "The Huon Peninsula offers incredible bird watching opportunities. Join us as we explore the forests and coastal areas teeming with unique bird species. From the majestic crowned pigeon to the colorful parrots, every turn reveals new wonders.", category: "tips", tags: ["Bird Watching", "Walindi", "Huon Peninsula"], featured: false },
        { title: "Bird Watching at Ambua Lodge: Hela Province", url: "blog-posts/bird-watching-ambua-lodge-hela-province.html", date: "March 26, 2026", readTime: "6 min", excerpt: "Ambua Lodge is a premier destination for bird watchers. Located in the highlands of Hela Province, it offers access to some of Papua New Guinea's most spectacular birdlife. The lodge's elevated position provides breathtaking views and incredible birding opportunities.", category: "tips", tags: ["Bird Watching", "Ambua Lodge", "Hela"], featured: false },
        { title: "Mount Wilhelm Trekking & Goroka Show 2026", url: "blog-posts/mount-wilhelm-trekking-goroka-show-2026.html", date: "March 25, 2026", readTime: "9 min", excerpt: "Combine the challenge of trekking Mount Wilhelm with the cultural spectacle of the Goroka Show. Here's everything you need to know for this incredible adventure. From altitude preparation to festival logistics, our comprehensive guide ensures you don't miss a moment.", category: "culture", tags: ["Mount Wilhelm", "Goroka Show", "Trekking"], featured: false },
        { title: "Asaro Mudmen: The Legend Behind the Masks", url: "blog-posts/asaro-mudmen-goroka-show.html", date: "March 25, 2026", readTime: "5 min", excerpt: "The Asaro Mudmen are one of Papua New Guinea's most iconic cultural groups. Discover the legend behind the eerie masks and their performances at the Goroka Show. These traditional warriors share stories that have been passed down for centuries.", category: "culture", tags: ["Asaro Mudmen", "Culture", "Goroka"], featured: false },
        { title: "Lae War Memorial: A Tribute to the Fallen", url: "blog-posts/lae-war-memorial.html", date: "March 25, 2026", readTime: "4 min", excerpt: "The Lae War Memorial stands as a tribute to those who served in World War II. Learn about its history and significance. This solemn site reminds us of the sacrifices made for freedom.", category: "wwii", tags: ["WWII History", "Lae", "War Memorial"], featured: false },
        { title: "Goroka Show 2026: Complete Guide", url: "blog-posts/goroka-show-2026.html", date: "March 24, 2026", readTime: "8 min", excerpt: "The Goroka Show is Papua New Guinea's premier cultural festival. Plan your visit with our complete guide to the 2026 event. From accommodation tips to the best viewing spots, we've got you covered.", category: "culture", tags: ["Goroka Show", "Culture", "Festival"], featured: false },
        { title: "Goroka Show 2026 Dates & Schedule", url: "blog-posts/goroka-show-2026-dates.html", date: "March 24, 2026", readTime: "3 min", excerpt: "Mark your calendars! Here are the confirmed dates and schedule for the Goroka Show 2026. Plan your travel around the main events and cultural performances.", category: "culture", tags: ["Goroka Show", "Dates", "Schedule"], featured: false },
        { title: "Village Homestays in Tufi: A Cultural Immersion", url: "blog-posts/village-homestays-tufi.html", date: "March 24, 2026", readTime: "7 min", excerpt: "Experience authentic Papua New Guinean culture with a village homestay in Tufi. Learn about traditions, food, and daily life. Wake up to the sound of the ocean and share meals with welcoming local families.", category: "culture", tags: ["Tufi", "Homestay", "Culture"], featured: false },
        { title: "Kokoda Trail Cost: Budgeting Your Trek", url: "blog-posts/kokoda-trail-cost.html", date: "March 24, 2026", readTime: "6 min", excerpt: "Planning to trek the Kokoda Trail? Here's a detailed breakdown of costs, from permits to guides and accommodation. Make sure you're financially prepared for this once-in-a-lifetime journey.", category: "tips", tags: ["Kokoda Trail", "Budget", "Trekking"], featured: false },
        { title: "Birds of Paradise: A Complete Guide", url: "blog-posts/bird-of-paradise.html", date: "March 24, 2026", readTime: "8 min", excerpt: "Papua New Guinea is home to over 40 species of birds of paradise. Learn where to see them and how to photograph these magnificent creatures. Our expert guides share tips for spotting the elusive Raggiana and King of Saxony birds.", category: "tips", tags: ["Birds of Paradise", "Wildlife", "Photography"], featured: false },
        { title: "PNG Diving Liveaboards: The Ultimate Experience", url: "blog-posts/png-diving-liveaboards.html", date: "March 24, 2026", readTime: "7 min", excerpt: "Explore Papua New Guinea's underwater wonders with a diving liveaboard. From pristine reefs to WWII wrecks, here's what to expect. Experience the best dive sites in the Coral Triangle.", category: "beach", tags: ["Diving", "Liveaboard", "Underwater"], featured: false },
        { title: "Kokoda Track Trekking: Essential Guide", url: "blog-posts/kokoda-track-trekking.html", date: "March 24, 2026", readTime: "10 min", excerpt: "Prepare for the Kokoda Track with this comprehensive guide covering fitness, gear, and what to expect on the journey. This historic trail offers both physical challenge and profound connection to Australian and PNG wartime history.", category: "tips", tags: ["Kokoda Trail", "Trekking", "Fitness"], featured: false },
        { title: "Baining Fire Dance: A Spectacular Tradition", url: "blog-posts/baining-fire-dance.html", date: "March 24, 2026", readTime: "5 min", excerpt: "The Baining Fire Dance is a mesmerizing ritual from East New Britain. Learn about its cultural significance and where to witness it. This ancient tradition continues to captivate visitors from around the world.", category: "culture", tags: ["Baining", "Fire Dance", "East New Britain"], featured: false },
        { title: "Rabaul Volcanic Eruption 1994: A Survivor's Story", url: "blog-posts/rabaul-volcanic-eruption-1994.html", date: "March 15, 2026", readTime: "8 min", excerpt: "The 1994 eruption of Rabaul's volcanoes changed the region forever. Hear stories of survival and resilience from local residents. This powerful account reminds us of nature's force and the strength of community.", category: "volcano", tags: ["Rabaul", "Volcano", "History"], featured: false },
        { title: "Tufi Fjords: Hammerhead Sharks & Moray Eels", url: "blog-posts/tufi-fjords-hammerhead-sharks-moray-eels.html", date: "April 1, 2026", readTime: "6 min", excerpt: "Discover the underwater wonders of Tufi Fjords. From hammerhead sharks to colorful moray eels, the diving here is world-class. The pristine waters of this remote location offer encounters with marine life found nowhere else.", category: "beach", tags: ["Tufi", "Diving", "Sharks"], featured: true },
        { title: "Lark Force Wilderness Track: East New Britain", url: "blog-posts/lark-force-wilderness-track-east-new-britain.html", date: "March 31, 2026", readTime: "7 min", excerpt: "The Lark Force Wilderness Track offers a challenging hike through East New Britain's jungle, following the footsteps of WWII soldiers. This historic trek combines adventure with profound historical significance.", category: "wwii", tags: ["Lark Force", "Hiking", "WWII History"], featured: false },
        { title: "Muck Diving in Milne Bay: Original PNG", url: "blog-posts/muck-diving-milne-bay-original-png.html", date: "March 30, 2026", readTime: "6 min", excerpt: "Milne Bay is a paradise for muck diving enthusiasts. Discover rare critters and unique marine life in these pristine waters. Every dive reveals something new in this biodiversity hotspot.", category: "beach", tags: ["Muck Diving", "Milne Bay", "Marine Life"], featured: false },
        { title: "Luxury Boat Tours with Melanesian Tourist Services", url: "blog-posts/luxury-boat-tours-melanesian-tourist-services-madang.html", date: "March 29, 2026", readTime: "5 min", excerpt: "Experience luxury boat tours in Madang with Melanesian Tourist Services. Explore islands, reefs, and coastal villages in style. This is the ultimate way to experience PNG's stunning coastline.", category: "tips", tags: ["Madang", "Boat Tours", "Luxury"], featured: false }
    ];
    
    // Find featured post (first post with featured: true, or most recent if none)
    let featuredPost = allPosts.find(post => post.featured === true);
    if (!featuredPost) {
        featuredPost = allPosts[0];
    }
    
    // ========== RENDER FEATURED POST ==========
    function renderFeaturedPost() {
        if (!featuredContainer) return;
        
        const featuredTitle = document.getElementById('featuredTitle');
        const featuredMeta = document.getElementById('featuredMeta');
        const featuredExcerpt = document.getElementById('featuredExcerpt');
        const featuredButton = document.getElementById('featuredButton');
        
        if (featuredTitle) {
            featuredTitle.innerHTML = `<a href="${featuredPost.url}" style="color: inherit; text-decoration: none;">${escapeHtml(featuredPost.title)}</a>`;
        }
        
        if (featuredMeta) {
            featuredMeta.innerHTML = `
                <span><i class="far fa-calendar-alt"></i> ${featuredPost.date}</span>
                <span><i class="far fa-user"></i> By Local Guide</span>
                <span><i class="far fa-clock"></i> ${featuredPost.readTime} read</span>
                <span><i class="fas fa-tag"></i> ${getCategoryName(featuredPost.category)}</span>
            `;
        }
        
        if (featuredExcerpt) {
            featuredExcerpt.innerHTML = `<p>${escapeHtml(featuredPost.excerpt)}</p>`;
        }
        
        if (featuredButton) {
            featuredButton.innerHTML = `<a href="${featuredPost.url}" class="read-more" style="display: inline-block; margin-top: 1rem;">Read Full Article <i class="fas fa-arrow-right"></i></a>`;
        }
    }
    
    function getCategoryName(category) {
        const names = {
            volcano: "Volcano Tours",
            wwii: "WWII History",
            tips: "Travel Tips",
            culture: "Cultural Experiences",
            community: "Community Stories",
            beach: "Beach Destinations"
        };
        return names[category] || category;
    }
    
    // ========== PAGINATION VARIABLES ==========
    let currentPage = 1;
    let currentCategory = "all";
    let currentSearch = "";
    const postsPerPage = 5;
    
    // ========== HELPER FUNCTIONS ==========
    function getFilteredPosts() {
        let filtered = [...allPosts];
        // Exclude featured post from regular listing
        filtered = filtered.filter(post => post.url !== featuredPost.url);
        
        if (currentCategory !== "all") {
            filtered = filtered.filter(post => post.category === currentCategory);
        }
        if (currentSearch !== "") {
            const searchLower = currentSearch.toLowerCase();
            filtered = filtered.filter(post => 
                post.title.toLowerCase().includes(searchLower) || 
                post.excerpt.toLowerCase().includes(searchLower) ||
                post.tags.some(tag => tag.toLowerCase().includes(searchLower))
            );
        }
        return filtered;
    }
    
    function escapeHtml(str) {
        return str.replace(/[&<>]/g, function(m) {
            if (m === '&') return '&amp;';
            if (m === '<') return '&lt;';
            if (m === '>') return '&gt;';
            return m;
        });
    }
    
    function updateCategoryCounts() {
        const categories = ["volcano", "wwii", "tips", "culture", "community", "beach"];
        categories.forEach(cat => {
            const count = allPosts.filter(post => post.category === cat).length;
            const span = document.getElementById(`cat-${cat}`);
            if (span) span.textContent = `(${count})`;
        });
    }
    
    function renderTagCloud() {
        const tagCount = {};
        allPosts.forEach(post => {
            post.tags.forEach(tag => {
                tagCount[tag] = (tagCount[tag] || 0) + 1;
            });
        });
        const sortedTags = Object.entries(tagCount).sort((a, b) => b[1] - a[1]).slice(0, 15);
        const tagCloud = document.getElementById('tagCloud');
        if (tagCloud) {
            tagCloud.innerHTML = sortedTags.map(([tag, count]) => 
                `<a href="#" class="tag" data-tag="${tag.toLowerCase()}">${tag} (${count})</a>`
            ).join('');
            tagCloud.querySelectorAll('.tag').forEach(tagLink => {
                tagLink.addEventListener('click', (e) => {
                    e.preventDefault();
                    const tag = tagLink.getAttribute('data-tag');
                    if (tag) {
                        currentSearch = tag;
                        currentCategory = "all";
                        currentPage = 1;
                        const searchInput = document.getElementById('searchInput');
                        if (searchInput) searchInput.value = tag;
                        renderBlogPosts();
                    }
                });
            });
        }
    }
    
    function renderPaginationControls(totalPages) {
        const controlsContainer = document.getElementById('paginationControls');
        if (!controlsContainer || totalPages <= 1) {
            if (controlsContainer) controlsContainer.innerHTML = '';
            return;
        }
        
        let controls = '';
        if (currentPage > 1) {
            controls += `<a href="#" class="page-prev" data-page="${currentPage - 1}" aria-label="Previous page"><i class="fas fa-chevron-left"></i> Prev</a>`;
        }
        for (let i = 1; i <= totalPages; i++) {
            if (i === currentPage) {
                controls += `<a href="#" class="active" data-page="${i}">${i}</a>`;
            } else if (Math.abs(i - currentPage) <= 2 || i === 1 || i === totalPages) {
                controls += `<a href="#" data-page="${i}">${i}</a>`;
            } else if (Math.abs(i - currentPage) === 3) {
                controls += `<span class="pagination-dots">...</span>`;
            }
        }
        if (currentPage < totalPages) {
            controls += `<a href="#" class="page-next" data-page="${currentPage + 1}" aria-label="Next page">Next <i class="fas fa-chevron-right"></i></a>`;
        }
        
        controlsContainer.innerHTML = controls;
        document.querySelectorAll('#paginationControls a[data-page]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = parseInt(link.getAttribute('data-page'));
                if (!isNaN(page) && page !== currentPage) {
                    currentPage = page;
                    renderBlogPosts();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            });
        });
    }
    
    function renderBlogPosts() {
        const filteredPosts = getFilteredPosts();
        const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
        if (currentPage > totalPages && totalPages > 0) currentPage = 1;
        
        const start = (currentPage - 1) * postsPerPage;
        const end = start + postsPerPage;
        const pagePosts = filteredPosts.slice(start, end);
        
        const container = document.getElementById('blogContainer');
        if (!container) return;
        
        let html = '';
        pagePosts.forEach(post => {
            html += `
                <article class="blog-post">
                    <h2><a href="${post.url}">${escapeHtml(post.title)}</a></h2>
                    <div class="blog-meta">
                        <span><i class="far fa-calendar-alt"></i> ${post.date}</span>
                        <span><i class="far fa-user"></i> By Local Guide</span>
                        <span><i class="far fa-clock"></i> ${post.readTime}</span>
                        <span class="blog-category"><i class="fas fa-tag"></i> ${getCategoryName(post.category)}</span>
                    </div>
                    <p class="blog-excerpt">${escapeHtml(post.excerpt)}</p>
                    <a href="${post.url}" class="read-more">Read More <i class="fas fa-arrow-right"></i></a>
                </article>
            `;
        });
        
        if (pagePosts.length === 0) {
            html += '<p class="no-results">No blog posts found. Try a different search or category.</p>';
        }
        
        html += '<div class="pagination" id="paginationControls"></div>';
        container.innerHTML = html;
        renderPaginationControls(totalPages);
    }
    
    // ========== EVENT LISTENERS ==========
    function setupEventListeners() {
        const categoryLinks = document.querySelectorAll('#categoryList a[data-category]');
        categoryLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const category = link.getAttribute('data-category');
                currentCategory = category;
                currentSearch = "";
                currentPage = 1;
                const searchInput = document.getElementById('searchInput');
                if (searchInput) searchInput.value = "";
                renderBlogPosts();
            });
        });
        
        const searchForm = document.getElementById('searchForm');
        if (searchForm) {
            searchForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const searchInput = document.getElementById('searchInput');
                if (searchInput) {
                    currentSearch = searchInput.value.trim();
                    currentCategory = "all";
                    currentPage = 1;
                    renderBlogPosts();
                }
            });
        }
        
        const newsletterForm = document.getElementById('newsletterForm');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const emailInput = newsletterForm.querySelector('input[type="email"]');
                if (emailInput && emailInput.value) {
                    alert('Thank you for subscribing! We\'ll send travel inspiration to your inbox.');
                    emailInput.value = '';
                }
            });
        }
    }
    
    // ========== INITIALIZE ==========
    renderFeaturedPost();
    updateCategoryCounts();
    renderTagCloud();
    renderBlogPosts();
    setupEventListeners();
});
