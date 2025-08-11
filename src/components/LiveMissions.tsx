const CommunityConnections = () => {
  const connections = [
    {
      title: "Breaking Echo Chambers",
      description: "Connect with people who think differently than you. Discover perspectives that challenge your assumptions.",
      icon: "🧠",
      category: "Perspective"
    },
    {
      title: "Shared Humanity",
      description: "Find common ground with people from different backgrounds, cultures, and beliefs.",
      icon: "🤝",
      category: "Connection"
    },
    {
      title: "Beyond Algorithms",
      description: "Real conversations, not engagement-driven content. Human connections over profit margins.",
      icon: "💙",
      category: "Authenticity"
    },
    {
      title: "Learning Together",
      description: "Share knowledge and experiences. Learn from people who live different lives than yours.",
      icon: "🌱",
      category: "Growth"
    },
    {
      title: "Building Bridges",
      description: "Create understanding between different communities. Bridge the gaps that divide us.",
      icon: "🌉",
      category: "Unity"
    },
    {
      title: "Community Revival",
      description: "Rediscover what it means to be part of a community that values every voice.",
      icon: "🏘️",
      category: "Community"
    }
  ];

  return (
    <section id="connections" className="py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="relative inline-block mb-6">
            {/* Octopus Head */}
            <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 animate-float overflow-hidden">
              <img src="/assets/octopus-red.png" alt="Octopus" className="w-16 h-16 object-contain" />
            </div>
            {/* Octopus Tentacles - reaching out in different directions */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 border-4 border-primary/30 rounded-full animate-pulse"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-40 h-40 border-2 border-accent/40 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Reaching Across Differences
          </h2>
          <p className="text-xl text-primary/70 max-w-3xl mx-auto leading-relaxed">
            Social media has trapped us in echo chambers, but we're more alike than different. 
            Like an octopus reaching in many directions, Velyar connects you with people who think, 
            live, and believe differently than you do.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {connections.map((connection, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up border border-primary/10 hover:border-accent/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4">{connection.icon}</span>
                <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                  {connection.category}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-primary mb-4">
                {connection.title}
              </h3>
              
              <p className="text-primary/70 leading-relaxed">
                {connection.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-primary/10">
            <h3 className="text-2xl font-bold text-primary mb-4">
              The Algorithm-Free Zone
            </h3>
            <p className="text-primary/70 mb-6 leading-relaxed">
              No engagement metrics. No profit-driven content. Just genuine human connections 
              that remind us we have more in common than we think.
            </p>
            <button className="btn-secondary">
              Start Connecting Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityConnections; 