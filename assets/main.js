// assets/main.js
// Hamburger Menu Toggle for Small Screens Only

document.addEventListener('DOMContentLoaded', function() {
    // ========== PROTECTION: Disable Right-Click ==========
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    }, false);
    
    // ========== PROTECTION: Disable Keyboard Shortcuts ==========
    document.addEventListener('keydown', function(e) {
        // Disable F12
        if (e.key === 'F12') {
            e.preventDefault();
            return false;
        }
        // Disable Ctrl+Shift+I (DevTools)
        if (e.ctrlKey && e.shiftKey && e.key === 'I') {
            e.preventDefault();
            return false;
        }
        // Disable Ctrl+Shift+J (Console)
        if (e.ctrlKey && e.shiftKey && e.key === 'J') {
            e.preventDefault();
            return false;
        }
        // Disable Ctrl+U (View Source)
        if (e.ctrlKey && e.key === 'u') {
            e.preventDefault();
            return false;
        }
        // Disable Ctrl+S (Save)
        if (e.ctrlKey && e.key === 's') {
            e.preventDefault();
            return false;
        }
    });
    
    // ========== HAMBURGER MENU FUNCTIONALITY ==========
    const hamburgerBtn = document.getElementById('hamburgerToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', function() {
            navMenu.classList.toggle('show');
            const icon = hamburgerBtn.querySelector('i');
            if (navMenu.classList.contains('show')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    navMenu.classList.remove('show');
                    const icon = hamburgerBtn.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
        
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768 && navMenu.classList.contains('show')) {
                navMenu.classList.remove('show');
                const icon = hamburgerBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // ========== VISITOR COUNTER FUNCTIONALITY (FlagCounter) ==========
    const visitorCountElement = document.getElementById('visitorCountHeader');
    
    if (visitorCountElement) {
        // Check if FlagCounter code already exists
        const existingCounter = visitorCountElement.querySelector('a');
        
        if (!existingCounter) {
            // Create FlagCounter link and image using your provided code
            const counterLink = document.createElement('a');
            counterLink.href = 'http://s01.flagcounter.com/more/5i9Z';
            counterLink.target = '_blank';
            counterLink.rel = 'noopener noreferrer';
            
            const counterImg = document.createElement('img');
            counterImg.src = 'https://s01.flagcounter.com/count2/5i9Z/bg_000000/txt_F7FF19/border_4A23CC/columns_8/maxflags_12/viewers_Who+Viewed+Our+Website+by+Country/labels_1/pageviews_1/flags_0/percent_0/';
            counterImg.alt = 'Flag Counter';
            counterImg.border = '0';
            
            counterLink.appendChild(counterImg);
            
            // Clear the element and add the counter
            visitorCountElement.innerHTML = '';
            visitorCountElement.appendChild(counterLink);
        }
    }
    
    // ========== IMAGE ALT TEXT MAPPING ==========
    const imageAltMapping = {
        "0001": "Tourists at the Rabaul Hotsprings - Mt. Tavurvur in the background",
        "0002": "Rabaul Hotsprings",
        "0003": "Tourists enjoying the views of Mt. Tavurvur from the Malmaluan Lookout",
        "0004": "Tourists at the Rabaul Hotsprings - Mt. Tavurvur in the background",
        "0005": "Tourists enjoying the views of Mt. Tavurvur from the Rabaul Volcanic Observatory Lookout",
        "0006": "WWII Japanese Tunnels - Underground passageways used during World War II",
        "0007": "Cruise Ship docked at Simpson Harbour - Passengers exploring the port",
        "0008": "Ready to explore the Rabaul Hotsprings",
        "0009": "WWII Japanese Tunnels - Underground passageways used during World War II",
        "0010": "Tourists at the Rabaul Hotsprings - Mt. Tavurvur in the background",
        "0011": "Visiting a local secondary school and donating supplies - Community engagement and support",
        "0012": "Relaxing at the Kokopo Beach Bungalows with icy cold beer (Niugini Ice)",
        "0013": "Mt. Tavurvur Volcano",
        "0014": "Tour Guides - Local experts sharing insights about the destination",
        "0015": "Bitapaka War Cemetery - Historical site with graves of soldiers",
        "0016": "Looking out to the ocean from a local resort balcony",
        "0017": "Tour Guides - Local experts sharing insights about the destination",
        "0018": "Tour Guides - Local experts sharing insights about the destination",
        "0019": "WWII Japanese Tunnels - Underground passageways used during World War II",
        "0020": "Relaxing at the Kokopo Beach Bungalows - Beachfront accommodation with stunning views",
        "0021": "Cruise Ship docked at Simpson Harbour - Passengers exploring the port",
        "0022": "Visiting a local elementary school and donating school supplies - Community engagement and support",
        "0023": "Tourists enjoying the views of Mt. Tavurvur from the Malmaluan Lookout",
        "0024": "Onboard a local tour bus",
        "0025": "Tour Guides - Local experts sharing insights about the destination",
        "0026": "Bitapaka War Cemetery - Historical site with graves of soldiers",
        "0027": "Cruise Ship docked at Simpson Harbour - Passengers exploring the port",
        "0028": "Enjoying the warm tropical waters at the Rabaul Hotsprings",
        "0029": "Tourists enjoying the views of Mt. Tavurvur from the Malmaluan Lookout",
        "0030": "Tourists at the Rabaul Hotsprings - Mt. Tavurvur in the background",
        "0031": "Kokopo Beach Bungalows - Beachfront accommodation with stunning views",
        "0032": "Tourists enjoying the views of Mt. Tavurvur from the Rabaul Volcanic Observatory Lookout",
        "0033": "Kokopo Beach Bungalows - Beachfront accommodation with stunning views",
        "0034": "Visiting a local primary school and donating school supplies - Community engagement and support",
        "0035": "Bitapaka War Cemetery - Historical site with graves of soldiers",
        "0036": "Rabaul Hotsprings with Mt. Tavurvur in the background - A relaxing escape in a volcanic setting",
        "0037": "Rapopo Plantation Resort - A tropical getaway with lush gardens and ocean views",
        "0038": "Rapopo Plantation Resort - A tropical getaway with lush gardens and ocean views",
        "0039": "Ralum Country Club - A scenic golf course with stunning views of the surrounding landscape",
        "0040": "Rapopo Plantation Resort - A tropical getaway with lush gardens and ocean views",
        "0041": "Tourists enjoying the views of Mt. Tavurvur from the Rabaul Volcanic Observatory Lookout",
        "0042": "Tour Guides with Cruise Ship in the background",
        "0043": "Tourists visiting Kokopo Technical Secondary School and donating supplies - Local community engagement",
        "0044": "Cruise Ship docked at Simpson Harbour - Passengers exploring the port",
        "0045": "Kokopo Beach Bungalows Catwalk",
        "0046": "Cruise Ship docked at Simpson Harbour - Passengers exploring the port"
    };
    
    // ========== GENERATE 46 IMAGES (0001.jpeg to 0046.jpeg) ==========
    const totalImages = 46;
    const imagePaths = [];
    
    for (let i = 1; i <= totalImages; i++) {
        const imageNumber = i.toString().padStart(4, '0');
        imagePaths.push(`img/${imageNumber}.jpeg`);
    }
    
    // ========== GALLERY GRID GENERATION WITH IN-LINE ADS ==========
    const galleryGrid = document.getElementById('galleryGrid');
    
    if (galleryGrid) {
        galleryGrid.innerHTML = '';
        
        // CONFIGURATION - REPLACE WITH YOUR ACTUAL AD SENSE SLOT IDs
        const ADSENSE_CLIENT_ID = 'ca-pub-3116480965868234';
        const INLINE_AD_SLOT_ID = '3333333333';
        const AD_POSITION_INTERVAL = 4;
        
        function createGalleryItem(path, index) {
            const imageNumber = (index + 1).toString().padStart(4, '0');
            const altText = imageAltMapping[imageNumber] || `Beautiful Destination ${imageNumber}`;
            
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            
            const img = document.createElement('img');
            img.src = path;
            img.alt = altText;
            img.loading = 'lazy';
            
            const caption = document.createElement('div');
            caption.className = 'gallery-caption';
            caption.textContent = altText;
            
            galleryItem.appendChild(img);
            galleryItem.appendChild(caption);
            
            return galleryItem;
        }
        
        function createInlineAd(adIndex) {
            const adContainer = document.createElement('div');
            adContainer.className = 'gallery-ad-item';
            adContainer.setAttribute('data-ad-index', adIndex);
            
            adContainer.innerHTML = `
                <div class="ad-label">Advertisement</div>
                <ins class="adsbygoogle"
                     style="display:block"
                     data-ad-client="${ADSENSE_CLIENT_ID}"
                     data-ad-slot="${INLINE_AD_SLOT_ID}"
                     data-ad-format="rectangle"
                     data-full-width-responsive="true"></ins>
                <div class="ad-note">Sponsored Content</div>
            `;
            
            return adContainer;
        }
        
        imagePaths.forEach((path, index) => {
            galleryGrid.appendChild(createGalleryItem(path, index));
            
            if ((index + 1) % AD_POSITION_INTERVAL === 0 && index + 1 < totalImages) {
                const adContainer = createInlineAd(Math.floor((index + 1) / AD_POSITION_INTERVAL));
                galleryGrid.appendChild(adContainer);
            }
        });
        
        setTimeout(() => {
            if (typeof adsbygoogle !== 'undefined') {
                const allAdIns = galleryGrid.querySelectorAll('.gallery-ad-item ins.adsbygoogle');
                allAdIns.forEach(() => {
                    (adsbygoogle = window.adsbygoogle || []).push({});
                });
            }
        }, 100);
    }
    
    // ========== CAROUSEL FUNCTIONALITY (for index.html only) ==========
    const carouselImage = document.getElementById('carouselImage');
    const carouselThumbs = document.getElementById('carouselThumbs');
    const carouselPrev = document.getElementById('carouselPrev');
    const carouselNext = document.getElementById('carouselNext');
    const imageCounter = document.getElementById('imageCounter');
    
    if (carouselImage && carouselThumbs) {
        let currentIndex = 0;
        
        carouselThumbs.innerHTML = '';
        
        imagePaths.forEach((path, index) => {
            const imageNumber = (index + 1).toString().padStart(4, '0');
            const img = document.createElement('img');
            img.src = path;
            img.alt = imageAltMapping[imageNumber] || `Image ${imageNumber}`;
            img.dataset.index = index;
            if (index === 0) img.classList.add('active');
            img.addEventListener('click', () => updateCarousel(index));
            carouselThumbs.appendChild(img);
        });
        
        const thumbs = document.querySelectorAll('.carousel-thumbs img');
        
        function updateCarousel(index) {
            if (index < 0) index = 0;
            if (index >= totalImages) index = totalImages - 1;
            
            currentIndex = index;
            const imageNumber = (currentIndex + 1).toString().padStart(4, '0');
            carouselImage.src = imagePaths[currentIndex];
            carouselImage.alt = imageAltMapping[imageNumber] || `Image ${imageNumber}`;
            
            if (imageCounter) {
                imageCounter.textContent = `${currentIndex + 1} / ${totalImages}`;
            }
            
            thumbs.forEach((thumb, i) => {
                if (i === currentIndex) {
                    thumb.classList.add('active');
                    thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
                } else {
                    thumb.classList.remove('active');
                }
            });
        }
        
        function nextImage() {
            let newIndex = currentIndex + 1;
            if (newIndex >= totalImages) newIndex = 0;
            updateCarousel(newIndex);
        }
        
        function prevImage() {
            let newIndex = currentIndex - 1;
            if (newIndex < 0) newIndex = totalImages - 1;
            updateCarousel(newIndex);
        }
        
        if (carouselPrev) carouselPrev.addEventListener('click', prevImage);
        if (carouselNext) carouselNext.addEventListener('click', nextImage);
        
        let autoPlayInterval;
        
        function startAutoPlay() {
            autoPlayInterval = setInterval(nextImage, 5000);
        }
        
        function stopAutoPlay() {
            if (autoPlayInterval) {
                clearInterval(autoPlayInterval);
            }
        }
        
        startAutoPlay();
        
        const carouselMain = document.querySelector('.carousel-main');
        if (carouselMain) {
            carouselMain.addEventListener('mouseenter', stopAutoPlay);
            carouselMain.addEventListener('mouseleave', startAutoPlay);
        }
    }
});
