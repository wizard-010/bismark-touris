// assets/blog.js
// Blog pagination and featured post functionality for Bismark Touris

document.addEventListener('DOMContentLoaded', function() {
    const blogContainer = document.getElementById('blogContainer');
    const featuredContainer = document.getElementById('featuredPostContainer');
    
    if (!blogContainer) return;
    
    // ========== BLOG POSTS DATABASE (All 27 posts) ==========
    const allPosts = [
        { title: "How Starlink satellite internet is revolutionizing tourism in Papua New Guinea - from remote eco-lodges in Milne Bay to dive resorts in East New Britain, connectivity transforms guest experiences, operations, and safety.", url: "blog-posts/starlink-png-tourism.html", date: "April 27, 2026", readTime: "15 min read", excerpt: "For decades, the single greatest obstacle to tourism development in Papua New Guinea was not dangerous roads, tribal conflict, or even the high cost of flights. It was the inability to send an email. In a world where travelers demand instant connectivity—to post Instagram stories, check work emails, or video call anxious family members—PNG's remote eco-lodges and dive resorts existed in a frustrating digital blackout. Satellite phones offered voice but no data. Mobile networks stopped at the edge of Port Moresby. The result was a tourism industry that punched below its weight, unable to compete with Bali, Fiji, or Thailand for the lucrative work-from-paradise market. Then came Starlink. Since its official launch in Papua New Guinea in late 2024, SpaceX's low-earth-orbit satellite internet constellation has begun quietly rewriting the rules of PNG tourism. From the muck diving sites of Milne Bay to the volcanic slopes of East New Britain, from the remote surf breaks of Bougainville to the birdwatching lodges of the Highlands, Starlink dishes are appearing on rooftops—bringing 150+ Mbps internet to places that previously struggled to send a text message.", category: "Travel Tips", tags: ["Cyclone Maila", "Starlink", "Tourism Impact", "Policy Analysis", "Black Market", "PNG Economy"], featured: false, dateSort: "2026-04-27" },
        { title: "Paradise Lost and Regained: The Devastating Impact of Cyclone Maila on Tourism in Papua New Guinea", url: "blog-posts/maila.html", date: "April 27, 2026", readTime: "15 min read", excerpt: "In early April 2026, the South Pacific experienced one of its most powerful meteorological events in recent years. Severe Tropical Cyclone Maila, a slow-moving behemoth that at its peak reached a destructive Category Five intensity, carved a path of destruction through the Solomon Sea. For the tourism industry of Papua New Guinea (PNG)—a sector already navigating the complex waters of international travel advisories and logistical challenges—the cyclone was nothing short of a body blow.", category: "Travel Tips", tags: ["Cyclone Maila", "Tourism Impact", "Policy Analysis", "Black Market", "PNG Economy"], featured: false, dateSort: "2026-04-27" },
        { title: "Madang Betelnut Ban: The Hidden Impact on Tourism & Business", url: "blog-posts/madang-buai-arrests.html", date: "April 1, 2026", readTime: "9 min read", excerpt: "Madang's betelnut ban was meant to create cleaner streets, but a decade later, the prohibition has spawned an underground black market. This in-depth analysis explores how criminal elements have infiltrated the trade, creating safety concerns for tourists and driving legitimate vendors into poverty—ultimately harming the very tourism industry the ban was meant to protect.", category: "Travel Tips", tags: ["Madang", "Betelnut", "Tourism Impact", "Policy Analysis", "Black Market", "PNG Economy"], featured: false, dateSort: "2026-04-01" },
        { title: "Exploring the Active Volcano: A Visit to Mt. Tavurvur", url: "blog-posts/mt-tavurvur.html", date: "March 15, 2026", readTime: "8 min read", excerpt: "Standing at the foot of an active volcano is a humbling experience. Mt. Tavurvur, located just outside Rabaul, is one of Papua New Guinea's most iconic volcanic sites. The hike up to the observatory offers breathtaking views of the surrounding bay and the volcano's smoking crater. Local guides share stories of past eruptions and the resilience of the Rabaul community.", category: "Volcano", tags: ["Volcano", "Mt Tavurvur", "Rabaul"], featured: false, dateSort: "2026-03-15" },
        { title: "The Hidden History: Exploring WWII Japanese Tunnels", url: "blog-posts/wwii-japanese-tunnels.html", date: "March 5, 2026", readTime: "6 min read", excerpt: "Beneath the hills of Rabaul lies a network of tunnels that tell a powerful story of World War II. These underground passages, carved by hand by Japanese soldiers, offer a glimpse into a challenging chapter of our history. Our guides lead you through the dark corridors, sharing firsthand accounts passed down through generations.", category: "History", tags: ["WWII History", "Rabaul", "Tunnels"], featured: false, dateSort: "2026-03-05" },
        { title: "Welcoming Cruise Ship Visitors: A Day in Kokopo", url: "blog-posts/cruise-ship-kokopo.html", date: "February 22, 2026", readTime: "6 min read", excerpt: "When a cruise ship docks at Simpson Harbour, it's always an exciting day in Kokopo. From traditional welcoming ceremonies to showcasing our best markets and attractions, here's what we share with our visitors from around the world. The vibrant energy of the local community shines through as we guide guests through the best experiences.", category: "Travel Tips", tags: ["Kokopo", "Cruise", "Travel Tips"], featured: false, dateSort: "2026-02-22" },
        { title: "A Journey to Bitapaka War Cemetery: Remembering Heroes", url: "blog-posts/bitapaka-war-cemetery.html", date: "February 10, 2026", readTime: "4 min read", excerpt: "Bitapaka War Cemetery is a place of quiet reflection and remembrance. As we walk among the graves of soldiers who fought in World War II, we honor their sacrifice and reflect on the importance of peace. This sacred site, maintained by the Commonwealth War Graves Commission, tells stories of courage and loss.", category: "History", tags: ["WWII History", "Bitapaka", "Rabaul"], featured: false, dateSort: "2026-02-10" },
        { title: "Supporting Local Communities: Our School Visits", url: "blog-posts/school-visits.html", date: "January 28, 2026", readTime: "5 min read", excerpt: "At Bismark Touris, we believe in giving back. One of our most meaningful initiatives is visiting local schools with our guests. From donating supplies to sharing cultural exchange, these moments create lasting connections. Our travelers leave with hearts full of gratitude after meeting the bright students of East New Britain.", category: "Cultural Experiences", tags: ["Community", "Schools", "Giving Back"], featured: false, dateSort: "2026-01-28" },
        { title: "Bird Watching in Western Province: Ecoregions Guide", url: "blog-posts/bird-watching-western-province-ecoregions.html", date: "March 28, 2026", readTime: "7 min read", excerpt: "Western Province is home to some of the most diverse bird species in Papua New Guinea. From birds of paradise to rare parrots, discover the best spots for bird watching. Our expert guides know exactly where to find the elusive species that make this region a paradise for birders.", category: "Wildlife", tags: ["Bird Watching", "Western Province", "Nature"], featured: false, dateSort: "2026-03-28" },
        { title: "Bird Watching at Walindi: Huon Peninsula Adventures", url: "blog-posts/bird-watching-walindi-huon-peninsula.html", date: "March 27, 2026", readTime: "6 min read", excerpt: "The Huon Peninsula offers incredible bird watching opportunities. Join us as we explore the forests and coastal areas teeming with unique bird species. From the majestic crowned pigeon to the colorful parrots, every turn reveals new wonders.", category: "Wildlife", tags: ["Bird Watching", "Walindi", "Huon Peninsula"], featured: false, dateSort: "2026-03-27" },
        { title: "Bird Watching at Ambua Lodge: Hela Province", url: "blog-posts/bird-watching-ambua-lodge-hela-province.html", date: "March 26, 2026", readTime: "6 min read", excerpt: "Ambua Lodge is a premier destination for bird watchers. Located in the highlands of Hela Province, it offers access to some of Papua New Guinea's most spectacular birdlife. The lodge's elevated position provides breathtaking views and incredible birding opportunities.", category: "Wildlife", tags: ["Bird Watching", "Ambua Lodge", "Hela"], featured: false, dateSort: "2026-03-26" },
        { title: "Mount Wilhelm Trekking & Goroka Show 2026", url: "blog-posts/mount-wilhelm-trekking-goroka-show-2026.html", date: "March 25, 2026", readTime: "9 min read", excerpt: "Combine the challenge of trekking Mount Wilhelm with the cultural spectacle of the Goroka Show. Here's everything you need to know for this incredible adventure. From altitude preparation to festival logistics, our comprehensive guide ensures you don't miss a moment.", category: "Trekking", tags: ["Mount Wilhelm", "Goroka Show", "Trekking"], featured: false, dateSort: "2026-03-25" },
        { title: "Asaro Mudmen: The Legend Behind the Masks", url: "blog-posts/asaro-mudmen-goroka-show.html", date: "March 25, 2026", readTime: "5 min read", excerpt: "The Asaro Mudmen are one of Papua New Guinea's most iconic cultural groups. Discover the legend behind the eerie masks and their performances at the Goroka Show. These traditional warriors share stories that have been passed down for centuries.", category: "Cultural Festival", tags: ["Asaro Mudmen", "Culture", "Goroka"], featured: false, dateSort: "2026-03-25" },
        { title: "Lae War Memorial: A Tribute to the Fallen", url: "blog-posts/lae-war-memorial.html", date: "March 25, 2026", readTime: "4 min read", excerpt: "The Lae War Memorial stands as a tribute to those who served in World War II. Learn about its history and significance. This solemn site reminds us of the sacrifices made for freedom.", category: "History", tags: ["WWII History", "Lae", "War Memorial"], featured: false, dateSort: "2026-03-25" },
        { title: "Goroka Show 2026: September 11–13 — Complete Guide to PNG's Most Spectacular Tribal Gathering", url: "blog-posts/goroka-show-2026-dates.html", date: "March 24, 2026", readTime: "10 min read", excerpt: "Papua New Guinea's most spectacular tribal gathering returns September 11–13, 2026! Over 100 tribes gather in the Eastern Highlands for three days of traditional sing-sings, elaborate body paint, and ancient ceremonies. Complete guide with dates, travel tips, and accommodation advice.", category: "Cultural Festival", tags: ["Goroka Show", "Cultural Festival", "Highlands"], featured: true, dateSort: "2026-03-24" },
        { title: "Village Homestays in Tufi: The Ultimate Guide to Authentic PNG Cultural Experiences", url: "blog-posts/village-homestays-tufi.html", date: "March 24, 2026", readTime: "8 min read", excerpt: "Experience authentic village life in the stunning Tufi Fjords. Complete guide to homestays, cultural immersion, traditional hospitality, and what to expect when staying with local families in Oro Province.", category: "Cultural Experiences", tags: ["Tufi", "Homestay", "Culture"], featured: false, dateSort: "2026-03-24" },
        { title: "Hiking the Kokoda Trail Cost 2026: Complete Guide to Trekking Prices & Budget Planning", url: "blog-posts/kokoda-trail-cost.html", date: "March 24, 2026", readTime: "9 min read", excerpt: "Detailed breakdown of Kokoda Trail trekking costs. Compare budget vs premium operators, understand what's included, hidden expenses, and plan your budget for Papua New Guinea's historic trek.", category: "Trekking", tags: ["Kokoda Trail", "Trekking", "Budget"], featured: false, dateSort: "2026-03-24" },
        { title: "Bird of Paradise Watching Tours PNG: The Ultimate Guide to Nature's Most Spectacular Dancers", url: "blog-posts/bird-of-paradise.html", date: "March 24, 2026", readTime: "10 min read", excerpt: "Complete guide to Bird of Paradise watching in Papua New Guinea. Best locations, species, seasons, photography tips, and expert advice for the world's premier birding destination.", category: "Wildlife", tags: ["Birds of Paradise", "Wildlife", "Photography"], featured: false, dateSort: "2026-03-24" },
        { title: "PNG Diving Liveaboards: The Ultimate Guide to Papua New Guinea's Underwater Paradise", url: "blog-posts/png-diving-liveaboards.html", date: "March 24, 2026", readTime: "12 min read", excerpt: "Complete guide to liveaboard diving in Papua New Guinea. Best vessels, itineraries, marine life encounters, diving seasons, and expert tips for the world's most biodiverse underwater destination.", category: "Diving", tags: ["Diving", "Liveaboard", "Underwater"], featured: false, dateSort: "2026-03-24" },
        { title: "Kokoda Track Trekking: The Ultimate Guide to PNG's Historic Trail of Courage", url: "blog-posts/kokoda-track-trekking.html", date: "March 24, 2026", readTime: "11 min read", excerpt: "Complete guide to trekking the Kokoda Track. History, fitness preparation, costs, best seasons, and what to expect on this 96km journey through Papua New Guinea's rugged Owen Stanley Range.", category: "Trekking", tags: ["Kokoda Trail", "History", "Trekking"], featured: false, dateSort: "2026-03-24" },
        { title: "The Baining Fire Dance: Walking Through Embers Under Moonlight", url: "blog-posts/baining-fire-dance.html", date: "March 24, 2026", readTime: "7 min read", excerpt: "Step into the darkness of the Baining Mountains, where ancient spirits come alive through fire. A journey into one of Papua New Guinea's most sacred cultural ceremonies.", category: "Cultural Experiences", tags: ["Baining", "Fire Dance", "Culture"], featured: false, dateSort: "2026-03-24" },
        { title: "The Day the Earth Roared: Remembering the 1994 Rabaul Volcanic Eruption", url: "blog-posts/rabaul-volcanic-eruption-1994.html", date: "March 15, 2026", readTime: "12 min read", excerpt: "September 19, 1994. The day twin volcanoes Vulcan and Tavurvur erupted simultaneously, forever changing the landscape of East New Britain and the lives of its people.", category: "Volcano", tags: ["Rabaul", "Volcano", "History"], featured: false, dateSort: "2026-03-15" },
        { title: "Tufi Fjords: Hammerhead Sharks & Moray Eels", url: "blog-posts/tufi-fjords-hammerhead-sharks-moray-eels.html", date: "April 1, 2026", readTime: "6 min read", excerpt: "Discover the underwater wonders of Tufi Fjords. From hammerhead sharks to colorful moray eels, the diving here is world-class. The pristine waters of this remote location offer encounters with marine life found nowhere else.", category: "Diving", tags: ["Tufi", "Diving", "Sharks"], featured: false, dateSort: "2026-04-01" },
        { title: "Lark Force Wilderness Track: East New Britain", url: "blog-posts/lark-force-wilderness-track-east-new-britain.html", date: "March 31, 2026", readTime: "7 min read", excerpt: "The Lark Force Wilderness Track offers a challenging hike through East New Britain's jungle, following the footsteps of WWII soldiers. This historic trek combines adventure with profound historical significance.", category: "History", tags: ["Lark Force", "Hiking", "WWII History"], featured: false, dateSort: "2026-03-31" },
        { title: "Muck Diving in Milne Bay: Original PNG", url: "blog-posts/muck-diving-milne-bay-original-png.html", date: "March 30, 2026", readTime: "6 min read", excerpt: "Milne Bay is a paradise for muck diving enthusiasts. Discover rare critters and unique marine life in these pristine waters. Every dive reveals something new in this biodiversity hotspot.", category: "Diving", tags: ["Muck Diving", "Milne Bay", "Marine Life"], featured: false, dateSort: "2026-03-30" },
        { title: "Luxury Boat Tours with Melanesian Tourist Services", url: "blog-posts/luxury-boat-tours-melanesian-tourist-services-madang.html", date: "March 29, 2026", readTime: "5 min read", excerpt: "Experience luxury boat tours in Madang with Melanesian Tourist Services. Explore islands, reefs, and coastal villages in style. This is the ultimate way to experience PNG's stunning coastline.", category: "Travel Tips", tags: ["Madang", "Boat Tours", "Luxury"], featured: false, dateSort: "2026-03-29" }
    ];
    
    // ========== SORT POSTS BY DATE (NEWEST FIRST) ==========
    function sortPostsByDate(posts) {
        return [...posts].sort((a, b) => {
            const dateA = new Date(a.dateSort || a.date);
            const dateB = new Date(b.dateSort || b.date);
            return dateB - dateA;
        });
    }
    
    const sortedPosts = sortPostsByDate(allPosts);
    
    // Find featured post
    let featuredPost = sortedPosts.find(post => post.featured === true);
    if (!featuredPost) {
        featuredPost = sortedPosts[0];
    }
    
    // ========== RENDER FEATURED POST ==========
    function renderFeaturedPost() {
        if (!featuredContainer) return;
        
        featuredContainer.innerHTML = `
            <div class="featured-card">
                <div class="featured-badge">FEATURED</div>
                <h2><a href="${featuredPost.url}">${escapeHtml(featuredPost.title)}</a></h2>
                <div class="blog-meta">
                    <span><i class="far fa-calendar-alt"></i> ${featuredPost.date}</span>
                    <span><i class="far fa-clock"></i> ${featuredPost.readTime}</span>
                    <span><i class="fas fa-tag"></i> ${featuredPost.category}</span>
                </div>
                <p>${escapeHtml(featuredPost.excerpt)}</p>
                <a href="${featuredPost.url}" class="read-more">Read the Complete Guide →</a>
            </div>
        `;
    }
    
    // ========== UPDATE STATS BAR WITH TOTAL POSTS COUNT ==========
    function updateStatsBar() {
        const totalPostsSpan = document.getElementById('totalPostsCount');
        if (totalPostsSpan) {
            totalPostsSpan.textContent = sortedPosts.length;
        }
    }
    
    // ========== PAGINATION VARIABLES ==========
    let currentPage = 1;
    let currentCategory = null;
    let currentSearch = "";
    const postsPerPage = 5;
    
    // ========== HELPER FUNCTIONS ==========
    function getFilteredPosts() {
        let filtered = [...sortedPosts];
        // Exclude featured post from regular listing
        filtered = filtered.filter(post => post.url !== featuredPost.url);
        
        if (currentCategory) {
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
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }
    
    function updateCategoryCounts() {
        const categories = {
            'Cultural Festival': 0,
            'Trekking': 0,
            'Diving': 0,
            'Wildlife': 0,
            'History': 0,
            'Cultural Experiences': 0,
            'Volcano': 0,
            'Travel Tips': 0
        };
        
        sortedPosts.forEach(post => {
            if (post.url !== featuredPost.url && categories[post.category] !== undefined) {
                categories[post.category]++;
            }
        });
        
        document.getElementById('cat-cultural') && (document.getElementById('cat-cultural').textContent = `(${categories['Cultural Festival']})`);
        document.getElementById('cat-trekking') && (document.getElementById('cat-trekking').textContent = `(${categories['Trekking']})`);
        document.getElementById('cat-diving') && (document.getElementById('cat-diving').textContent = `(${categories['Diving']})`);
        document.getElementById('cat-wildlife') && (document.getElementById('cat-wildlife').textContent = `(${categories['Wildlife']})`);
        document.getElementById('cat-history') && (document.getElementById('cat-history').textContent = `(${categories['History']})`);
        document.getElementById('cat-cultural-exp') && (document.getElementById('cat-cultural-exp').textContent = `(${categories['Cultural Experiences']})`);
        document.getElementById('cat-volcano') && (document.getElementById('cat-volcano').textContent = `(${categories['Volcano']})`);
        document.getElementById('cat-travel') && (document.getElementById('cat-travel').textContent = `(${categories['Travel Tips']})`);
    }
    
    function renderTagCloud() {
        const tagCount = {};
        sortedPosts.forEach(post => {
            if (post.url !== featuredPost.url) {
                post.tags.forEach(tag => {
                    tagCount[tag] = (tagCount[tag] || 0) + 1;
                });
            }
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
                    currentSearch = tagLink.getAttribute('data-tag');
                    currentCategory = null;
                    currentPage = 1;
                    const searchInput = document.getElementById('searchInput');
                    if (searchInput) searchInput.value = currentSearch;
                    renderBlogPosts();
                    
                    document.querySelectorAll('.categories-list a').forEach(a => a.classList.remove('active'));
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
        
        let controls = '<div class="pagination-controls">';
        if (currentPage > 1) {
            controls += `<button class="pagination-btn" data-page="${currentPage - 1}"><i class="fas fa-chevron-left"></i> Previous</button>`;
        }
        for (let i = 1; i <= totalPages; i++) {
            if (i === currentPage) {
                controls += `<button class="page-number active" data-page="${i}">${i}</button>`;
            } else if (Math.abs(i - currentPage) <= 2 || i === 1 || i === totalPages) {
                controls += `<button class="page-number" data-page="${i}">${i}</button>`;
            } else if (Math.abs(i - currentPage) === 3) {
                controls += `<span class="pagination-ellipsis">...</span>`;
            }
        }
        if (currentPage < totalPages) {
            controls += `<button class="pagination-btn" data-page="${currentPage + 1}">Next <i class="fas fa-chevron-right"></i></button>`;
        }
        controls += '</div>';
        
        controlsContainer.innerHTML = controls;
        
        document.querySelectorAll('#paginationControls button[data-page]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const page = parseInt(btn.getAttribute('data-page'));
                if (!isNaN(page) && page !== currentPage) {
                    currentPage = page;
                    renderBlogPosts();
                    window.scrollTo({ top: 400, behavior: 'smooth' });
                }
            });
        });
    }
    
    function renderBlogPosts() {
        const filteredPosts = getFilteredPosts();
        const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
        if (currentPage > totalPages && totalPages > 0) currentPage = 1;
        
        const start = (currentPage - 1) * postsPerPage;
        const pagePosts = filteredPosts.slice(start, start + postsPerPage);
        
        const container = document.getElementById('blogContainer');
        if (!container) return;
        
        // Update page info
        const pageInfo = document.getElementById('pageInfo');
        if (pageInfo && filteredPosts.length > 0) {
            const startNum = (currentPage - 1) * postsPerPage + 1;
            const endNum = Math.min(currentPage * postsPerPage, filteredPosts.length);
            pageInfo.innerHTML = `<p>Showing ${startNum}-${endNum} of ${filteredPosts.length} posts</p>`;
        } else if (pageInfo) {
            pageInfo.innerHTML = '<p>No blog posts found.</p>';
        }
        
        let html = '';
        pagePosts.forEach(post => {
            html += `
                <article class="blog-post">
                    <h2><a href="${post.url}">${escapeHtml(post.title)}</a></h2>
                    <div class="blog-meta">
                        <span><i class="far fa-calendar-alt"></i> ${post.date}</span>
                        <span><i class="far fa-user"></i> By Local Guide</span>
                        <span><i class="far fa-clock"></i> ${post.readTime}</span>
                        <span><i class="fas fa-tag"></i> ${post.category}</span>
                    </div>
                    <p>${escapeHtml(post.excerpt)}</p>
                    <a href="${post.url}" class="read-more">Read More →</a>
                </article>
            `;
        });
        
        if (pagePosts.length === 0) {
            html = '<div class="blog-post"><p>No blog posts found. Try a different search or category.</p></div>';
        }
        
        container.innerHTML = html;
        
        // Add pagination controls after the posts
        const paginationContainer = document.getElementById('paginationControls');
        if (paginationContainer) {
            renderPaginationControls(totalPages);
        }
    }
    
    // ========== FILTER BUTTONS FUNCTIONALITY ==========
    function setupFilterButtons() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        if (filterBtns.length === 0) return;
        
        filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const filter = btn.getAttribute('data-filter');
                
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                if (filter === 'all') {
                    currentCategory = null;
                    currentSearch = "";
                    const searchInput = document.getElementById('searchInput');
                    if (searchInput) searchInput.value = "";
                }
                
                currentPage = 1;
                renderBlogPosts();
            });
        });
    }
    
    // ========== EVENT LISTENERS ==========
    function setupEventListeners() {
        const categoryLinks = document.querySelectorAll('.categories-list a');
        categoryLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const category = link.getAttribute('data-category');
                currentCategory = category === currentCategory ? null : category;
                currentSearch = "";
                currentPage = 1;
                const searchInput = document.getElementById('searchInput');
                if (searchInput) searchInput.value = "";
                renderBlogPosts();
                
                categoryLinks.forEach(a => a.classList.remove('active'));
                if (currentCategory) link.classList.add('active');
                
                const filterBtns = document.querySelectorAll('.filter-btn');
                filterBtns.forEach(btn => {
                    if (btn.getAttribute('data-filter') === 'all') {
                        btn.classList.add('active');
                    } else {
                        btn.classList.remove('active');
                    }
                });
            });
        });
        
        const searchForm = document.getElementById('searchForm');
        if (searchForm) {
            searchForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const searchInput = document.getElementById('searchInput');
                if (searchInput) {
                    currentSearch = searchInput.value.trim();
                    currentCategory = null;
                    currentPage = 1;
                    renderBlogPosts();
                    
                    document.querySelectorAll('.categories-list a').forEach(a => a.classList.remove('active'));
                    
                    const filterBtns = document.querySelectorAll('.filter-btn');
                    filterBtns.forEach(btn => {
                        if (btn.getAttribute('data-filter') === 'all') {
                            btn.classList.add('active');
                        } else {
                            btn.classList.remove('active');
                        }
                    });
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
    updateStatsBar();
    renderBlogPosts();
    setupEventListeners();
    setupFilterButtons();
});
