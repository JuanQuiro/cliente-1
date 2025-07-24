class n{static enableGPUAcceleration(e){e.style.transform="translateZ(0)",e.style.backfaceVisibility="hidden",e.style.perspective="1000px"}static optimizeForAnimation(e){e.style.willChange="transform, opacity, background-image"}static resetOptimization(e){e.style.willChange="auto"}}class a{heroSection;sliderDots;sliderNav;progressBar;config;currentIndex=0;autoplayInterval=null;progressInterval=null;isTransitioning=!1;preloadedImages=[];startTime=0;constructor(e,t){this.heroSection=e,this.config=t,this.currentIndex=0,n.enableGPUAcceleration(this.heroSection),n.optimizeForAnimation(this.heroSection),this.init()}async init(){console.log("🚀 Initializing slider components...");try{await this.preloadImages(),console.log("📸 Images preloaded"),this.createDots(),console.log("🔘 Dots created"),this.setupArrows(),console.log("🏹 Arrows setup"),this.setupProgressBar(),console.log("📊 Progress bar setup"),this.setSlide(0,!1),console.log("🎯 Initial slide set"),this.initializeProgressBar(),this.updateProgressBar(),console.log("📊 Progress bar initialized"),this.startAutoplay(),console.log("⏰ Autoplay started"),this.addKeyboardNavigation(),console.log("⌨️ Keyboard navigation added"),console.log("✅ Slider initialization complete!")}catch(e){console.error("❌ Error during slider initialization:",e)}}async preloadImages(){const e=this.config.images.map(t=>new Promise((r,s)=>{const i=new Image;i.onload=()=>r(i),i.onerror=s,i.src=t}));try{this.preloadedImages=await Promise.all(e)}catch(t){console.warn("Some images failed to preload:",t)}}createDots(){console.log("🔘 Creating slider dots...");let e=this.heroSection.querySelector(".slider-dots");e||(console.log("⚠️ Slider dots container not found, creating one..."),e=document.createElement("div"),e.className="slider-dots",this.heroSection.appendChild(e)),this.sliderDots=e,this.sliderDots.innerHTML="",console.log(`📊 Creating ${this.config.images.length} dots`),this.config.images.forEach((t,r)=>{const s=document.createElement("button");s.className="slider-dot",s.setAttribute("aria-label",`Go to slide ${r+1}`),s.setAttribute("data-slide",r.toString()),s.style.cssText=`
        width: 8px !important;
        height: 8px !important;
        border-radius: 50% !important;
        cursor: pointer !important;
        transition: all 0.3s ease !important;
        outline: none !important;
        padding: 0 !important;
        margin: 0 !important;
        display: block !important;
        opacity: 1 !important;
        visibility: visible !important;
      `,s.addEventListener("click",()=>{console.log(`🎯 Dot ${r+1} clicked`),this.setSlide(r,!0)}),this.sliderDots.appendChild(s),console.log(`✅ Dot ${r+1} created with inline styles`)}),this.sliderDots.style.cssText=`
      position: absolute !important;
      bottom: 20px !important;
      left: 50% !important;
      transform: translateX(-50%) !important;
      display: flex !important;
      gap: 4px !important;
      padding: 0 !important;
      background: transparent !important;
      backdrop-filter: none !important;
      border-radius: 6px !important;
      z-index: 1000 !important;
      opacity: 1 !important;
      visibility: visible !important;
    `,console.log(`🎉 All ${this.sliderDots.children.length} dots created with forced visibility!`),console.log("📍 Dots container position:",this.sliderDots.getBoundingClientRect())}setupArrows(){if(this.sliderNav=this.heroSection.querySelector(".slider-nav"),!this.sliderNav)return;const e=this.sliderNav.querySelector(".slider-arrow-prev"),t=this.sliderNav.querySelector(".slider-arrow-next");e?(console.log("🔄 Setting up prev arrow listener"),e.addEventListener("click",r=>{console.log("⬅️ Prev arrow clicked!"),r.preventDefault(),r.stopPropagation(),this.previousSlide()})):console.warn("❌ Prev arrow not found!"),t?(console.log("🔄 Setting up next arrow listener"),t.addEventListener("click",r=>{console.log("➡️ Next arrow clicked!"),r.preventDefault(),r.stopPropagation(),this.nextSlide()})):console.warn("❌ Next arrow not found!")}setupProgressBar(){if(this.progressBar=this.heroSection.querySelector(".slider-progress-bar"),console.log("🔍 Progress bar setup debug:"),console.log("- Hero section:",this.heroSection),console.log("- Progress bar element:",this.progressBar),console.log("- Progress bar exists:",!!this.progressBar),this.progressBar)console.log("- Progress bar computed styles:",window.getComputedStyle(this.progressBar)),console.log("- Progress bar initial width:",this.progressBar.style.width),console.log("- Progress bar parent:",this.progressBar.parentElement);else{console.error("❌ Progress bar element not found!");const e=document.querySelectorAll(".slider-progress-bar");console.log("- All progress bars in document:",e)}}initializeProgressBar(){console.log("🔧 Initializing progress bar with robust method...");let e=this.heroSection.querySelector(".slider-progress");e||(console.log("⚠️ Progress container not found, creating one..."),e=document.createElement("div"),e.className="slider-progress",e.style.cssText=`
        position: absolute !important;
        bottom: 0 !important;
        left: 0 !important;
        right: 0 !important;
        height: 4px !important;
        background: rgba(255, 255, 255, 0.2) !important;
        z-index: 20 !important;
        display: block !important;
        visibility: visible !important;
        opacity: 1 !important;
      `,this.heroSection.appendChild(e));let t=e.querySelector(".slider-progress-bar");t||(console.log("⚠️ Progress bar not found, creating one..."),t=document.createElement("div"),t.className="slider-progress-bar",t.style.cssText=`
        height: 100% !important;
        background: linear-gradient(90deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 1) 100%) !important;
        width: 0%;
        transition: width 0.3s ease !important;
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.5) !important;
        display: block !important;
        visibility: visible !important;
        opacity: 1 !important;
      `,e.appendChild(t)),this.progressBar=t,console.log("✅ Progress bar initialized successfully:",this.progressBar)}addKeyboardNavigation(){document.addEventListener("keydown",e=>{e.key==="ArrowLeft"?this.previousSlide():e.key==="ArrowRight"&&this.nextSlide()})}previousSlide(){console.log("🔙 previousSlide() called, current index:",this.currentIndex);const e=this.currentIndex===0?this.config.images.length-1:this.currentIndex-1;console.log("🔙 Going to previous slide:",e),this.setSlide(e,!0)}nextSlide(){console.log("🔚 nextSlide() called, current index:",this.currentIndex);const e=(this.currentIndex+1)%this.config.images.length;console.log("🔚 Going to next slide:",e),this.setSlide(e,!0)}setSlide(e,t=!1){if(this.isTransitioning||e===this.currentIndex)return;this.isTransitioning=!0,this.currentIndex,this.currentIndex=e;const r=new Image,s=this.config.images[e];r.onload=()=>{requestAnimationFrame(()=>{this.heroSection.style.backgroundImage=`url('${s}')`,this.heroSection.classList.add("transitioning"),this.updateDots(),this.updateArrows(),this.updateProgressBar(),setTimeout(()=>{this.heroSection.classList.remove("transitioning"),this.isTransitioning=!1},600)})},r.src=s,r.complete&&setTimeout(()=>r.onload?.(new Event("load")),0),t&&this.resetAutoplay()}updateArrows(){this.heroSection.querySelectorAll(".slider-arrow").forEach(t=>{t.classList.add("slide-change"),setTimeout(()=>t.classList.remove("slide-change"),300)})}updateDots(){if(!this.sliderDots)return;const e=this.sliderDots.querySelectorAll("button");console.log(`🔄 Updating dots, found ${e.length} dots, current index: ${this.currentIndex}`),e.forEach((t,r)=>{const s=t;r===this.currentIndex?(s.classList.add("active"),s.style.cssText+=`
          transform: scale(1.05) !important;
          background: rgba(255, 255, 255, 0.8) !important;
          box-shadow: 0 0 4px rgba(255, 255, 255, 0.35) !important;
        `,console.log(`⭐ Dot ${r+1} set as active`)):(s.classList.remove("active"),s.style.cssText=`
          width: 8px !important;
          height: 8px !important;
          border-radius: 50% !important;
          border: none !important;
          background: rgba(255, 255, 255, 0.4) !important;
          cursor: pointer !important;
          transition: all 0.3s ease !important;
          outline: none !important;
          padding: 0 !important;
          margin: 0 !important;
          display: block !important;
          opacity: 1 !important;
          visibility: visible !important;
        `)})}updateProgressBar(){if(console.log("🔍 updateProgressBar() called"),console.log("- Progress bar element exists:",!!this.progressBar),!this.progressBar&&(console.error("❌ Progress bar element is null/undefined!"),this.progressBar=this.heroSection.querySelector(".slider-progress-bar"),console.log("- Retry finding progress bar:",!!this.progressBar),!this.progressBar))return;const e=(this.currentIndex+1)/this.config.images.length*100;console.log("📊 Updating progress bar:"),console.log(`- Current index: ${this.currentIndex}`),console.log(`- Total images: ${this.config.images.length}`),console.log(`- Calculated percentage: ${e.toFixed(1)}%`),console.log("- Progress bar before update:",{width:this.progressBar.style.width,transition:this.progressBar.style.transition,opacity:this.progressBar.style.opacity,visibility:this.progressBar.style.visibility}),this.progressBar.style.transition="width 0.3s ease",this.progressBar.style.width=`${e}%`,this.progressBar.style.opacity="1",this.progressBar.style.visibility="visible",console.log("- Progress bar after update:",{width:this.progressBar.style.width,transition:this.progressBar.style.transition,opacity:this.progressBar.style.opacity,visibility:this.progressBar.style.visibility}),this.progressBar.offsetHeight,console.log(`✅ Progress bar updated to ${e.toFixed(1)}% (slide ${this.currentIndex+1}/${this.config.images.length})`)}startAutoplay(){this.startTime=Date.now(),this.startProgressBar(),this.autoplayInterval=window.setInterval(()=>{const e=(this.currentIndex+1)%this.config.images.length;this.setSlide(e)},this.config.autoplayDelay)}startProgressBar(){if(!this.progressBar)return;const e=(this.currentIndex+1)/this.config.images.length*100,t=((this.currentIndex+1)%this.config.images.length+1)/this.config.images.length*100;this.progressBar.style.transition="width 0.3s ease",this.progressBar.style.width=`${e}%`,requestAnimationFrame(()=>{setTimeout(()=>{this.progressBar.style.transition=`width ${this.config.autoplayDelay}ms linear`,this.progressBar.style.width=`${t}%`},100)})}resetAutoplay(){this.autoplayInterval&&clearInterval(this.autoplayInterval),this.progressInterval&&clearInterval(this.progressInterval),this.startAutoplay()}destroy(){this.autoplayInterval&&clearInterval(this.autoplayInterval),this.progressInterval&&clearInterval(this.progressInterval)}}window.addEventListener("load",()=>{console.log("🎯 Initializing Hero Slider...");const o=document.querySelector(".hero");if(!o){console.error("❌ Hero section not found!");return}const e={images:heroImages,autoplayDelay:6e3,transitionDuration:1200};console.log("📸 Slider images:",e.images);try{const t=new a(o,e);console.log("✅ Hero Slider initialized successfully!")}catch(t){console.error("❌ Error initializing slider:",t)}});if(document.readyState==="complete"){console.log("🔄 Document already loaded, initializing slider immediately...");const o=document.querySelector(".hero");if(o){const e={images:heroImages,autoplayDelay:6e3,transitionDuration:1200};new a(o,e),console.log("🚀 Hero slider initialized successfully");const t=new Image;t.onload=()=>{console.log("✅ First hero image preloaded")},t.src=heroImages[0]}}
