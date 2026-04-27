// assets/blog.js
// Blog pagination and featured post functionality for Bismark Touris

document.addEventListener('DOMContentLoaded', function() {
    const blogContainer = document.getElementById('blogContainer');
    const featuredContainer = document.getElementById('featuredPostContainer');
    
    if (!blogContainer) {
        console.warn('Blog container not found - check that blog.html has <div id="blogContainer">');
        return;
    }
    
    // ========== BLOG POSTS DATABASE (All 28 posts - fixed paths) ==========
    const allPosts = [
        { title: "How Starlink satellite internet is revolutionizing tourism in Papua New Guinea", url: "blog-posts/starlink-png-tourism.html", date: "April 27, 2026", readTime: "10 min read", excerpt: "For decades, the single greatest obstacle to tourism development in Papua New Guinea was not dangerous roads, tribal conflict, or even the high cost of flights. It was the inability to send an email. Then came Starlink. Since its official launch in Papua New Guinea in late 2024, SpaceX's low-earth-orbit satellite internet constellation has begun quietly rewriting the rules of PNG tourism, bringing 150+ Mbps internet to places that previously struggled to send a text message.", category: "Travel Tips", tags: ["Starlink", "Technology", "Connectivity"], featured: false, dateSort: "2026-04-27" },
        
        { title: "Paradise Lost and Regained: The Devastating Impact of Cyclone Maila on Tourism in Papua New Guinea", url: "blog-posts/maila.html", date: "April 27, 2026", readTime: "12 min read", excerpt: "In early April 2026, the South Pacific experienced one of its most powerful meteorological events in recent years. Severe Tropical Cyclone Maila, a slow-moving behemoth that at its peak reached a destructive Category Five intensity, carved a path of destruction through the Solomon Sea. For the tourism industry of Papua New Guinea, the cyclone was nothing short of a body blow.", category: "Travel Tips", tags: ["Cyclone Maila", "Climate", "Disaster"], featured: true, dateSort: "2026-04-27" },
        
        { title: "Madang Betelnut Ban: The Hidden Impact on Tourism & Business", url: "blog-posts/madang-buai-arrests.html", date: "April 1, 2026", readTime: "9 min read", excerpt: "Madang's betelnut ban was meant to create cleaner streets, but a decade later, the prohibition has spawned an underground black market. This in-depth analysis explores how criminal elements have infiltrated the trade, creating safety concerns for tourists and driving legitimate vendors into poverty.", category: "Travel Tips", tags: ["Madang", "Betelnut", "Policy"], featured: false, dateSort: "2026-04-01" },
        
        { title: "Tufi Fjords: Hammerhead Sharks & Moray Eels", url: "blog-posts/tufi-fjords-hammerhead-sharks-moray-eels.html", date: "April 1, 2026", readTime: "6 min read", excerpt: "Discover the underwater wonders of Tufi Fjords. From hammerhead sharks to colorful moray eels, the diving here is world-class. The pristine waters of this remote location offer encounters with marine life found nowhere else.", category: "Diving", tags: ["Tufi", "Diving", "Sharks"], featured: false, dateSort: "2026-04-01" },
        
        { title: "Lark Force Wilderness Track: East New Britain", url: "blog-posts/lark-force-wilderness-track-east-new-britain.html", date: "March 31, 2026", readTime: "7 min read", excerpt: "The Lark Force Wilderness Track offers a challenging hike through East New Britain's jungle, following the footsteps of WWII soldiers. This historic trek combines adventure with profound historical significance.", category: "History", tags: ["Lark Force", "Hiking", "WWII"], featured: false, dateSort: "2026-03-31" },
        
        { title: "Muck Diving in Milne Bay: Original PNG", url: "blog-posts/muck-diving-milne-bay-original-png.html", date: "March 30, 2026", readTime: "6 min read", excerpt: "Milne Bay is a paradise for muck diving enthusiasts. Discover rare critters and unique marine life in these pristine waters. Every dive reveals something new in this biodiversity hotspot.", category: "Diving", tags: ["Muck Diving", "Milne Bay", "Marine Life"], featured: false, dateSort: "2026-03-30" },
        
        { title: "Luxury Boat Tours with Melanesian Tourist Services", url: "blog-posts/luxury-boat-tours-melanesian-tourist-services-madang.html", date: "March 29, 2026", readTime: "5 min read", excerpt: "Experience luxury boat tours in Madang with Melanesian Tourist Services. Explore islands, reefs, and coastal villages in style. This is the ultimate way to experience PNG's stunning coastline.", category: "Travel Tips", tags: ["Madang", "Boat Tours", "Luxury"], featured: false, dateSort: "2026-03-29" },
        
        { title: "Bird Watching in Western Province: Ecoregions Guide", url: "blog-posts/bird-watching-western-province-ecoregions.html", date: "March 28, 2026", readTime: "7 min read", excerpt: "Western Province is home to some of the most diverse bird species in Papua New Guinea. From birds of paradise to rare parrots, discover the best spots for bird watching.", category: "Wildlife", tags: ["Bird Watching", "Western Province", "Nature"], featured: false, dateSort: "2026-03-28" },
        
        { title: "Bird Watching at Walindi: Huon Peninsula Adventures", url: "blog-posts/bird-watching-walindi-huon-peninsula.html", date: "March 27, 2026", readTime: "6 min read", excerpt: "The Huon Peninsula offers incredible bird watching opportunities. Join us as we explore the forests and coastal areas teeming with unique bird species.", category: "Wildlife", tags: ["Bird Watching", "Walindi", "Huon Peninsula"], featured: false, dateSort: "2026-03-27" },
        
        { title: "Bird Watching at Ambua Lodge: Hela Province", url: "blog-posts/bird-watching-ambua-lodge-hela-province.html", date: "March 26, 2026", readTime: "6 min read", excerpt: "Ambua Lodge is a premier destination for bird watchers. Located in the highlands of Hela Province, it offers access to some of Papua New Guinea's most spectacular birdlife.", category: "Wildlife", tags: ["Bird Watching", "Ambua Lodge", "Hela"], featured: false, dateSort: "2026-03-26" },
        
        { title: "Mount Wilhelm Trekking & Goroka Show 2026", url: "blog-posts/mount-wilhelm-trekking-goroka-show-2026.html", date: "March 25, 2026", readTime: "9 min read", excerpt: "Combine the challenge of trekking Mount Wilhelm with the cultural spectacle of the Goroka Show. Here's everything you need to know for this incredible adventure.", category: "Trekking", tags: ["Mount Wilhelm", "Goroka Show", "Trekking"], featured: false, dateSort: "2026-03-25" },
        
        { title: "Asaro Mudmen: The Legend Behind the Masks", url: "blog-posts/asaro-mudmen-goroka-show.html", date: "March 25, 2026", readTime: "5 min read", excerpt: "The Asaro Mudmen are one of Papua New Guinea's most iconic cultural groups. Discover the legend behind the eerie masks and their performances at the Goroka Show.", category: "Cultural Festival", tags: ["Asaro Mudmen", "Culture", "Goroka"], featured: false, dateSort: "2026-03-25" },
        
        { title: "Lae War Memorial: A Tribute to the Fallen", url: "blog-posts/lae-war-memorial.html", date: "March 25, 2026", readTime: "4 min read", excerpt: "The Lae War Memorial stands as a tribute to those who served in World War II. Learn about its history and significance.", category: "History", tags: ["WWII", "Lae", "War Memorial"], featured: false, dateSort: "2026-03-25" },
        
        { title: "Goroka Show 2026: September 11–13 — Complete Guide to PNG's Most Spectacular Tribal Gathering", url: "blog-posts/goroka-show-2026-dates.html", date: "March 24, 2026", readTime: "10 min read", excerpt: "Papua New Guinea's most spectacular tribal gathering returns September 11–13, 2026! Over 100 tribes gather in the Eastern Highlands for three days of traditional sing-sings, elaborate body paint, and ancient ceremonies.", category: "Cultural Festival", tags: ["Goroka Show", "Cultural Festival", "Highlands"], featured: false, dateSort: "2026-03-24" },
        
        { title: "Village Homestays in Tufi: The Ultimate Guide to Authentic PNG Cultural Experiences", url: "blog-posts/village-homestays-tufi.html", date: "March 24, 2026", readTime: "8 min read", excerpt: "Experience authentic village life in the stunning Tufi Fjords. Complete guide to homestays, cultural immersion, traditional hospitality, and what to expect when staying with local families.", category: "Cultural Experiences", tags: ["Tufi", "Homestay", "Culture"], featured: false, dateSort: "2026-03-24" },
        
        { title: "Hiking the Kokoda Trail Cost 2026: Complete Guide to Trekking Prices & Budget Planning", url: "blog-posts/kokoda-trail-cost.html", date: "March 24, 2026", readTime: "9 min read", excerpt: "Detailed breakdown of Kokoda Trail trekking costs. Compare budget vs premium operators, understand what's included, hidden expenses, and plan your budget.", category: "Trekking", tags: ["Kokoda Trail", "Trekking", "Budget"], featured: false, dateSort: "2026-03-24" },
        
        { title: "Bird of Paradise Watching Tours PNG: The Ultimate Guide", url: "blog-posts/bird-of-paradise.html", date: "March 24, 2026", readTime: "10 min read", excerpt: "Complete guide to Bird of Paradise watching in Papua New Guinea. Best locations, species, seasons, photography tips for the world's premier birding destination.", category: "Wildlife", tags: ["Birds of Paradise", "Wildlife", "Photography"], featured: false, dateSort: "2026-03-24" },
        
        { title: "PNG Diving Liveaboards: The Ultimate Guide to Papua New Guinea's Underwater Paradise", url: "blog-posts/png-diving-liveaboards.html", date: "March 24, 2026", readTime: "12 min read", excerpt: "Complete guide to liveaboard diving in Papua New Guinea. Best vessels, itineraries, marine life encounters, and expert tips for the world's most biodiverse underwater destination.", category: "Diving", tags: ["Diving", "Liveaboard", "Underwater"], featured: false, dateSort: "2026-03-24" },
        
        { title: "Kokoda Track Trekking: The Ultimate Guide to PNG's Historic Trail of Courage", url: "blog-posts/kokoda-track-trekking.html", date: "March 24, 2026", readTime: "11 min read", excerpt: "Complete guide to trekking the Kokoda Track. History, fitness preparation, costs, best seasons, and what to expect on this 96km journey through PNG's rugged Owen Stanley Range.", category: "Trekking", tags: ["Kokoda Trail", "History", "Trekking"], featured: false, dateSort: "2026-03-24" },
        
        { title: "The Baining Fire Dance: Walking Through Embers Under Moonlight", url: "blog-posts/baining-fire-dance.html", date: "March 24, 2026", readTime: "7 min read", excerpt: "Step into the darkness of the Baining Mountains, where ancient spirits come alive through fire. A journey into one of Papua New Guinea's most sacred cultural ceremonies.", category: "Cultural Experiences", tags: ["Baining", "Fire Dance", "Culture"], featured: false, dateSort: "2026-03-24" },
        
        { title: "The Day the Earth Roared: Remembering the 1994 Rabaul Volcanic Eruption", url: "blog-posts/rabaul-volcanic-eruption-1994.html", date: "March 15, 2026", readTime: "12 min read", excerpt: "September 19, 1994. The day twin volcanoes Vulcan and Tavurvur erupted simultaneously, forever changing the landscape of East New Britain and the lives of its people.", category: "Volcano", tags: ["Rabaul", "Volcano", "History"], featured: false, dateSort: "2026-03-15" },
        
        { title: "Exploring the Active Volcano: A Visit to Mt. Tavurvur", url: "blog-posts/mt-tavurvur.html", date: "March 15, 2026", readTime: "8 min read", excerpt: "Standing at the foot of an active volcano is a humbling experience. Mt. Tavurvur, located just outside Rabaul, is one of Papua New Guinea's most iconic volcanic sites.", category: "Volcano", tags: ["Volcano", "Mt Tavurvur", "Rabaul"], featured: false, dateSort: "2026-03-15" },
        
        { title: "The Hidden History: Exploring WWII Japanese Tunnels", url: "blog-posts/wwii-japanese-tunnels.html", date: "March 5, 2026", readTime: "6 min read", excerpt: "Beneath the hills of Rabaul lies a network of tunnels that tell a powerful story of World War II. These underground passages, carved by hand by Japanese soldiers, offer a glimpse into a challenging chapter of our history.", category: "History", tags: ["WWII", "Rabaul", "Tunnels"], featured: false, dateSort: "2026-03-05" },
        
        { title: "Welcoming Cruise Ship Visitors: A Day in Kokopo", url: "blog-posts/cruise-ship-kokopo.html", date: "February 22, 2026", readTime: "6 min read", excerpt: "When a cruise ship docks at Simpson Harbour, it's always an exciting day in Kokopo. From traditional welcoming ceremonies to showcasing our best markets and attractions.", category: "Travel Tips", tags: ["Kokopo", "Cruise", "Travel Tips"], featured: false, dateSort: "2026-02-22" },
        
        { title: "A Journey to Bitapaka War Cemetery: Remembering Heroes", url: "blog-posts/bitapaka-war-cemetery.html", date: "February 10, 2026", readTime: "4 min read", excerpt: "Bitapaka War Cemetery is a place of quiet reflection and remembrance. As we walk among the graves of soldiers who fought in World War II, we honor their sacrifice.", category: "History", tags: ["WWII", "Bitapaka", "Rabaul"], featured: false, dateSort: "2026-02-10" },
        
        { title: "Supporting Local Communities: Our School Visits", url: "blog-posts/school-visits.html", date: "January 28, 2026", readTime: "5 min read", excerpt: "At Bismark Touris, we believe in giving back. One of our most meaningful initiatives is visiting local schools with our guests. From donating supplies to sharing cultural exchange.", category: "Cultural Experiences", tags: ["Community", "Schools", "Giving Back"], featured: false, dateSort: "2026-01-28" }
    ];
    
    // Sort posts by date (newest first)
    function sortPostsByDate(posts) {
        return [...posts].sort((a, b) => new Date(b.dateSort) - new Date(a.dateSort));
    }
    
    const sortedPosts = sortPostsByDate(allPosts);
    
    // Find featured post (first one with featured: true)
    let featuredPost = sortedPosts.find(post => post.featured === true);
    if (!featuredPost && sortedPosts.length > 0) {
        featuredPost = sortedPosts[0];
    }
    
    // Filter out featured post from main list
    const regularPosts = sortedPosts.filter(post => post.url !== featuredPost?.url);
    
    // Pagination variables
    let currentPage = 1;
    let currentCategory = null;
    let currentSearch = "";
    const postsPerPage = 6;
    
    // Helper functions
    function escapeHtml(str) {
        if (!str) return '';
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }
    
    function getFilteredPosts() {
        let filtered = [...regularPosts];
        
        if (currentCategory) {
            filtered = filtered.filter(post => post.category === currentCategory);
        }
        
        if (currentSearch.trim() !== "") {
            const searchLower = currentSearch.toLowerCase().trim();
            filtered = filtered.filter(post => 
                post.title.toLowerCase().includes(searchLower) || 
                post.excerpt.toLowerCase().includes(searchLower) ||
                post.tags.some(tag => tag.toLowerCase().includes(searchLower))
            );
        }
        
        return filtered;
    }
    
    function renderFeaturedPost() {
        if (!featuredContainer || !featuredPost) return;
        
        featuredContainer.innerHTML = `
            <div class="featured-card">
                <div class="featured-badge"><i class="fas fa-star"></i> FEATURED ARTICLE</div>
                <h2><a href="${featuredPost.url}">${escapeHtml(featuredPost.title)}</a></h2>
                <div class="blog-meta">
                    <span><i class="far fa-calendar-alt"></i> ${featuredPost.date}</span>
                    <span><i class="far fa-clock"></i> ${featuredPost.readTime}</span>
                    <span><i class="fas fa-tag"></i> ${featuredPost.category}</span>
                </div>
                <p>${escapeHtml(featuredPost.excerpt.substring(0, 300))}${featuredPost.excerpt.length > 300 ? '...' : ''}</p>
                <a href="${featuredPost.url}" class="read-more">Read Full Article →</a>
            </div>
        `;
    }
    
    function updateCategoryCounts() {
        const categories = {
            'Cultural Festival': 'cat-cultural',
            'Trekking': 'cat-trekking',
            'Diving': 'cat-diving',
            'Wildlife': 'cat-wildlife',
            'History': 'cat-history',
            'Cultural Experiences': 'cat-cultural-exp',
            'Volcano': 'cat-volcano',
            'Travel Tips': 'cat-travel'
        };
        
        const counts = {};
        Object.keys(categories).forEach(cat => counts[cat] = 0);
        
        regularPosts.forEach(post => {
            if (counts[post.category] !== undefined) {
                counts[post.category]++;
            }
        });
        
        for (const [category, elementId] of Object.entries(categories)) {
            const element = document.getElementById(elementId);
            if (element) {
                element.textContent = `(${counts[category] || 0})`;
            }
        }
    }
    
    function renderTagCloud() {
        const tagCount = {};
        regularPosts.forEach(post => {
            post.tags.forEach(tag => {
                tagCount[tag] = (tagCount[tag] || 0) + 1;
            });
        });
        
        const sortedTags = Object.entries(tagCount).sort((a, b) => b[1] - a[1]).slice(0, 12);
        const tagCloud = document.getElementById('tagCloud');
        
        if (tagCloud) {
            tagCloud.innerHTML = sortedTags.map(([tag, count]) => 
                `<a href="#" class="tag" data-tag="${tag.toLowerCase()}">${escapeHtml(tag)} (${count})</a>`
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
                    document.querySelectorAll('.filter-btn').forEach(btn => {
                        if (btn.getAttribute('data-filter') === 'all') btn.classList.add('active');
                        else btn.classList.remove('active');
                    });
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
            controls += `<button class="pagination-btn prev" data-page="${currentPage - 1}"><i class="fas fa-chevron-left"></i> Previous</button>`;
        }
        
        // Page numbers
        for (let i = 1; i <= totalPages; i++) {
            if (i === currentPage) {
                controls += `<button class="page-number active" data-page="${i}">${i}</button>`;
            } else if (i === 1 || i === totalPages || Math.abs(i - currentPage) <= 1) {
                controls += `<button class="page-number" data-page="${i}">${i}</button>`;
            } else if (Math.abs(i - currentPage) === 2) {
                controls += `<span class="pagination-ellipsis">...</span>`;
            }
        }
        
        if (currentPage < totalPages) {
            controls += `<button class="pagination-btn next" data-page="${currentPage + 1}">Next <i class="fas fa-chevron-right"></i></button>`;
        }
        
        controls += '</div>';
        controlsContainer.innerHTML = controls;
        
        // Add event listeners
        controlsContainer.querySelectorAll('[data-page]').forEach(btn => {
            btn.addEventListener('click', () => {
                const page = parseInt(btn.getAttribute('data-page'));
                if (!isNaN(page) && page !== currentPage) {
                    currentPage = page;
                    renderBlogPosts();
                    window.scrollTo({ top: 500, behavior: 'smooth' });
                }
            });
        });
    }
    
    function renderBlogPosts() {
        if (!blogContainer) return;
        
        const filteredPosts = getFilteredPosts();
        const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
        
        // Reset current page if out of bounds
        if (currentPage > totalPages && totalPages > 0) currentPage = totalPages;
        if (currentPage < 1) currentPage = 1;
        
        const start = (currentPage - 1) * postsPerPage;
        const pagePosts = filteredPosts.slice(start, start + postsPerPage);
        
        // Update page info
        const pageInfo = document.getElementById('pageInfo');
        if (pageInfo) {
            if (filteredPosts.length > 0) {
                const startNum = start + 1;
                const endNum = Math.min(start + postsPerPage, filteredPosts.length);
                pageInfo.innerHTML = `<p><i class="fas fa-newspaper"></i> Showing ${startNum}-${endNum} of ${filteredPosts.length} articles</p>`;
            } else {
                pageInfo.innerHTML = `<p><i class="fas fa-search"></i> No articles found. Try a different search or category.</p>`;
            }
        }
        
        // Update total posts count in stats bar
        const totalPostsSpan = document.getElementById('totalPostsCount');
        if (totalPostsSpan) {
            totalPostsSpan.textContent = regularPosts.length;
        }
        
        // Render posts
        let html = '';
        
        if (pagePosts.length === 0) {
            html = `
                <div class="blog-post empty-state">
                    <div class="empty-state-icon"><i class="fas fa-search"></i></div>
                    <h3>No articles found</h3>
                    <p>We couldn't find any articles matching your search. Try different keywords or browse all articles.</p>
                    <button onclick="resetSearch()" class="read-more">View All Articles</button>
                </div>
            `;
        } else {
            pagePosts.forEach(post => {
                html += `
                    <article class="blog-post">
                        <div class="post-category"><span class="category-badge">${escapeHtml(post.category)}</span></div>
                        <h2><a href="${post.url}">${escapeHtml(post.title)}</a></h2>
                        <div class="blog-meta">
                            <span><i class="far fa-calendar-alt"></i> ${post.date}</span>
                            <span><i class="far fa-clock"></i> ${post.readTime}</span>
                        </div>
                        <p>${escapeHtml(post.excerpt.substring(0, 200))}${post.excerpt.length > 200 ? '...' : ''}</p>
                        <div class="post-tags">
                            ${post.tags.slice(0, 3).map(tag => `<span class="post-tag">${escapeHtml(tag)}</span>`).join('')}
                        </div>
                        <a href="${post.url}" class="read-more">Read Full Article <i class="fas fa-arrow-right"></i></a>
                    </article>
                `;
            });
        }
        
        blogContainer.innerHTML = html;
        renderPaginationControls(totalPages);
    }
    
    // Filter buttons setup
    function setupFilterButtons() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        const categoryLinks = document.querySelectorAll('.categories-list a');
        
        filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const filter = btn.getAttribute('data-filter');
                
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                categoryLinks.forEach(a => a.classList.remove('active'));
                
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
        
        categoryLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const category = link.getAttribute('data-category');
                
                if (currentCategory === category) {
                    currentCategory = null;
                    link.classList.remove('active');
                    // Reset filter buttons to 'all'
                    filterBtns.forEach(btn => {
                        if (btn.getAttribute('data-filter') === 'all') btn.classList.add('active');
                        else btn.classList.remove('active');
                    });
                } else {
                    currentCategory = category;
                    categoryLinks.forEach(a => a.classList.remove('active'));
                    link.classList.add('active');
                    filterBtns.forEach(btn => btn.classList.remove('active'));
                }
                
                currentSearch = "";
                currentPage = 1;
                const searchInput = document.getElementById('searchInput');
                if (searchInput) searchInput.value = "";
                renderBlogPosts();
            });
        });
    }
    
    // Search form setup
    function setupSearch() {
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
                    document.querySelectorAll('.filter-btn').forEach(btn => {
                        if (btn.getAttribute('data-filter') === 'all') btn.classList.add('active');
                        else btn.classList.remove('active');
                    });
                }
            });
        }
    }
    
    // Newsletter form setup
    function setupNewsletter() {
        const newsletterForm = document.getElementById('newsletterForm');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const emailInput = newsletterForm.querySelector('input[type="email"]');
                if (emailInput && emailInput.value.trim()) {
                    alert('Thank you for subscribing! We\'ll send travel inspiration to your inbox.');
                    emailInput.value = '';
                }
            });
        }
    }
    
    // Global reset function
    window.resetSearch = function() {
        currentSearch = "";
        currentCategory = null;
        currentPage = 1;
        const searchInput = document.getElementById('searchInput');
        if (searchInput) searchInput.value = "";
        renderBlogPosts();
        document.querySelectorAll('.categories-list a').forEach(a => a.classList.remove('active'));
        document.querySelectorAll('.filter-btn').forEach(btn => {
            if (btn.getAttribute('data-filter') === 'all') btn.classList.add('active');
            else btn.classList.remove('active');
        });
    };
    
    // Initialize everything
    renderFeaturedPost();
    updateCategoryCounts();
    renderTagCloud();
    renderBlogPosts();
    setupFilterButtons();
    setupSearch();
    setupNewsletter();
    
    console.log(`Blog initialized with ${regularPosts.length} posts`);
});
