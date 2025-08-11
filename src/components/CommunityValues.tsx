const CommunityValues = () => {
  const values = [
    {
      icon: "🔍",
      title: "Curiosity",
      description: "We ask questions that matter and listen with open hearts."
    },
    {
      icon: "💙",
      title: "Honesty",
      description: "We share our true selves, not curated versions."
    },
    {
      icon: "🌱",
      title: "Diversity",
      description: "We celebrate the beautiful differences that make us human."
    },
    {
      icon: "🤝",
      title: "Empathy",
      description: "We connect through understanding and shared experiences."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">
            Our Community Values
          </h2>
          
          <div className="bg-background rounded-3xl p-8 md:p-12 mb-16">
            <p className="text-2xl md:text-3xl text-primary leading-relaxed font-medium">
              "Velyar is a community without algorithms, borders, or like buttons. 
              <br />
              Just humans, sharing what matters."
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-5xl mb-4 animate-float">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-primary/70 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityValues; 