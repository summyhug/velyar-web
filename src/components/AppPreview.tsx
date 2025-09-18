const AppPreview = () => {
  const features = [
    {
      title: "Daily Global Prompts",
      description: "Answer prompts and share your own voice with the world",
      image: "/assets/app-prompt.png",
      highlight: "New prompts updated every 24 hours"
    },
    {
      title: "Explore Global Themes",
      description: "Follow themes of global content and discover stories from around the world",
      image: "/assets/app-explore.png",
      highlight: "Browse themes like Food, Nature, Family, and more"
    },
    {
      title: "Join Active Missions",
      description: "Participate in global missions and share your unique perspective",
      image: "/assets/app-missions.png", 
      highlight: "Join thousands of participants worldwide"
    },
    {
      title: "See Global Voices",
      description: "Discover responses from people in far away places",
      image: "/assets/app-voices.png",
      highlight: "Featured responses from around the globe"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#285A66] mb-6">
              Experience Velyar
            </h2>
            <p className="text-lg md:text-xl text-[#697B85] max-w-3xl mx-auto">
              See how people around the world connect through shared experiences, 
              one prompt at a time.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center`}
              >
                {/* Text Content */}
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#285A66] mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-[#697B85] mb-4">
                    {feature.description}
                  </p>
                  <div className="inline-flex items-center bg-[#285A66]/10 text-[#285A66] px-4 py-2 rounded-full text-sm font-medium">
                    {feature.highlight}
                  </div>
                </div>

                {/* Mobile Mockup */}
                <div className="flex-1 max-w-sm">
                  <div className="relative">
                    <img 
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-auto rounded-2xl shadow-lg"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-[#285A66] to-[#C3682B] rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to join the conversation?
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Download Velyar and start sharing your voice with the world. 
                No algorithms, just human connections.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-[#285A66] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg">
                  Download for iOS
                </button>
                <button className="bg-white/20 text-white border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#285A66] transition-all duration-200">
                  Download for Android
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPreview;
