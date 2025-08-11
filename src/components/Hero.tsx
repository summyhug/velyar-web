const Hero = () => {
  const scrollToHowItWorks = () => {
    const element = document.getElementById('how-it-works');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleVideoHover = (event: React.MouseEvent<HTMLVideoElement>) => {
    const video = event.currentTarget;
    video.play();
  };

  const handleVideoLeave = (event: React.MouseEvent<HTMLVideoElement>) => {
    const video = event.currentTarget;
    video.pause();
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-primary/10">
        {/* Optional: Add subtle texture or pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#285A66] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#C3682B] rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#285A66] mb-6 leading-tight animate-fade-in">
                The world isn't as divided as it seems.
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-[#697B85] mb-8 max-w-2xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                A global prompt. Human voices. No algorithms.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <button className="bg-[#285A66] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Download the App
                </button>
                <button 
                  onClick={scrollToHowItWorks}
                  className="border-2 border-[#285A66] text-[#285A66] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#285A66] hover:text-white transition-all duration-200"
                >
                  See What It's About
                </button>
              </div>
            </div>

            {/* Right Column - Hero Images Grid */}
            <div className="relative animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="grid grid-cols-2 gap-3 max-w-md mx-auto lg:max-w-none">
                {/* Hero Image 1 */}
                <div className="relative aspect-video rounded-lg border border-[#285A66]/20 overflow-hidden">
                  <img 
                    src="/assets/hero-image-1.png" 
                    alt="Young woman using her phone to record a video response"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                    Nairobi
                  </div>
                </div>
                
                {/* Hero Video 2 */}
                <div className="relative aspect-video rounded-lg border border-[#C3682B]/20 overflow-hidden">
                  <video 
                    src="/assets/hero-video-2.mp4" 
                    className="w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                    onMouseEnter={handleVideoHover}
                    onMouseLeave={handleVideoLeave}
                  />
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                    Seoul
                  </div>
                </div>
                
                {/* Hero Video */}
                <div className="relative aspect-video rounded-lg border border-[#285A66]/20 overflow-hidden">
                  <video 
                    src="/assets/hero-video-1.mp4" 
                    className="w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                    onMouseEnter={handleVideoHover}
                    onMouseLeave={handleVideoLeave}
                  />
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                    Berlin
                  </div>
                </div>
                
                {/* Hero Image 4 */}
                <div className="relative aspect-video rounded-lg border border-[#C3682B]/20 overflow-hidden">
                  <img 
                    src="/assets/hero-image-4.png" 
                    alt="Person sharing their story through video"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                    Mexico City
                  </div>
                </div>
              </div>
              
              {/* Floating location labels */}
              <div className="absolute -top-4 -right-4 bg-[#285A66] text-white px-3 py-1 rounded-full text-xs font-medium animate-float">
                Live Stories
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#C3682B] text-white px-3 py-1 rounded-full text-xs font-medium animate-float" style={{ animationDelay: '1s' }}>
                Global Voices
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-[#285A66]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero; 