import React from "react";

const HearingAidsTypes = () => {
  const hearingAidTypes = [
    {
      title: "Behind the Ear (BTE)",
      description: "Big in size. Usually prescribed to patients having high percentage of hearing loss & in severe to profound hearing loss. Support till 120 dBHL of hearing loss.",
      icon: "👂",
      delay: "100ms"
    },
    {
      title: "Receiver in Canal (RIC)",
      description: "Almost invisible type hearing aid. This is the best hearing aid among all types giving best clarity of sound. Support till 115 dBHL of hearing loss.",
      icon: "🔊",
      delay: "200ms"
    },
    {
      title: "Completely in Canal (CIC)",
      description: "Smallest hearing aid of all types. Works in mild to moderate hearing loss. Support till 55-60 dBHL of hearing loss.",
      icon: "🔇",
      delay: "300ms"
    },
    {
      title: "Invisible in Canal (IIC)",
      description: "Smaller than CIC. Only covers very minimal & mild type hearing loss. Support till 40-50 dBHL.",
      icon: "🎯",
      delay: "400ms"
    },
    {
      title: "Rechargeable Hearing Aid",
      description: "No need to change battery. This type hearing aid are charging type comes with its portable charger. Some of having powerbank charger. This type of hearing aids are dustproof & water resistant.",
      icon: "🔋",
      delay: "100ms"
    },
    {
      title: "Bluetooth Hearing Aid",
      description: "Having bluetooth connectivity with phone. Patient can streams call & music simultaneously while listening to conversation.",
      icon: "📱",
      delay: "200ms"
    },
    {
      title: "Waterproof Hearing Aid",
      description: "Some hearing aids are waterproof technology. With IP67 & IP68 rating in some brands of hearing aids.",
      icon: "💧",
      delay: "300ms"
    }
  ];

  const handleClick = () => {
    window.open(`https://wa.me/917205454269?text=${encodeURIComponent('Hello, I would like to book an appointment.')}`, '_blank');
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 reveal">
          <span className="inline-block px-4 py-1.5 bg-clinic-muted text-clinic-primary rounded-full text-sm font-semibold mb-4">
            Hearing Aid Types
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-clinic-accent mb-4">
            Different Types of <span className="text-clinic-primary">Hearing Aids</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Discover the various types of hearing aids we offer, each designed to meet specific hearing needs and lifestyle preferences.
          </p>
        </div>

        {/* Hearing Aid Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hearingAidTypes.map((type, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-clinic-secondary to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 reveal border border-clinic-muted/20"
              style={{ transitionDelay: type.delay }}
            >
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-clinic-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{type.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-clinic-accent mb-3">
                  {type.title}
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm">
                {type.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 reveal" style={{ transitionDelay: "400ms" }}>
          <div className="bg-gradient-to-r from-clinic-primary to-clinic-accent rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Not Sure Which Type is Right for You?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Our expert audiologists will help you choose the perfect hearing aid based on your hearing test and lifestyle needs.
            </p>
            <button onClick={handleClick} className="bg-white text-clinic-primary px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300">
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HearingAidsTypes;
