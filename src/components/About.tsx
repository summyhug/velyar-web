const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              About Velyar
            </h2>
            <p className="text-xl text-primary/70 leading-relaxed">
              We're building a different kind of social platform. One that brings people together, not apart.
            </p>
          </div>

          {/* The Problem */}
          <div className="mb-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-primary/10">
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
                <span className="text-3xl mr-4">🚨</span>
                The Problem
              </h3>
              <div className="space-y-4 text-primary/70 leading-relaxed">
                <p>
                  Social media was supposed to connect us. Instead, it's tearing us apart. 
                  Algorithms designed for maximum engagement have created echo chambers where 
                  we only see content that confirms our existing beliefs.
                </p>
                <p>
                  We're being pushed into bubbles where we never encounter different perspectives. 
                  The very foundation of society - the ability to learn from one another - 
                  is being manipulated by profit-driven algorithms.
                </p>
                <p>
                  The concept of community has been replaced by engagement metrics. 
                  Real conversations have been replaced by viral content. 
                  Human connection has been replaced by clickbait.
                </p>
              </div>
            </div>
          </div>

          {/* The Solution */}
          <div className="mb-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-accent/20">
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
                <span className="text-3xl mr-4">💙</span>
                Our Solution
              </h3>
              <div className="space-y-4 text-primary/70 leading-relaxed">
                <p>
                  Velyar is built on a simple belief: we have more in common than we think. 
                  When we actually talk to people who are different from us, we discover 
                  shared hopes, fears, and dreams that transcend our differences.
                </p>
                <p>
                  We're creating an algorithm-free zone where genuine human connections 
                  matter more than engagement metrics. Where learning from different 
                  perspectives is celebrated, not suppressed.
                </p>
                <p>
                  Like an octopus reaching in many directions, Velyar helps you connect 
                  with people who think, live, and believe differently than you do. 
                  Because that's how we grow. That's how we build understanding. 
                  That's how we create a better world.
                </p>
              </div>
            </div>
          </div>

          {/* Our Values */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">
              Our Values
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-primary/10">
                <h4 className="text-lg font-bold text-primary mb-3 flex items-center">
                  <span className="text-2xl mr-3">🤝</span>
                  Human Connection First
                </h4>
                <p className="text-primary/70 text-sm leading-relaxed">
                  Every feature is designed to foster genuine human relationships, not maximize screen time.
                </p>
              </div>
              
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-primary/10">
                <h4 className="text-lg font-bold text-primary mb-3 flex items-center">
                  <span className="text-2xl mr-3">🌱</span>
                  Growth Through Difference
                </h4>
                <p className="text-primary/70 text-sm leading-relaxed">
                  We believe the best learning happens when we encounter perspectives that challenge our own.
                </p>
              </div>
              
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-primary/10">
                <h4 className="text-lg font-bold text-primary mb-3 flex items-center">
                  <span className="text-2xl mr-3">🛡️</span>
                  Privacy & Safety
                </h4>
                <p className="text-primary/70 text-sm leading-relaxed">
                  Your data is yours. We don't sell it, and we don't use it to manipulate your experience.
                </p>
              </div>
              
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-primary/10">
                <h4 className="text-lg font-bold text-primary mb-3 flex items-center">
                  <span className="text-2xl mr-3">🏘️</span>
                  Community Revival
                </h4>
                <p className="text-primary/70 text-sm leading-relaxed">
                  We're bringing back the village square where everyone's voice matters and every story is heard.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Join the Movement
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                Be part of building a social platform that actually brings people together. 
                A platform that values human connection over profit margins.
              </p>
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200">
                Get Early Access
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
