import React from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";

const DiscountAndFeatures = () => {
  const features = [
    {
      title: "Premium Quality",
      description: "German engineered hearing aids with advanced technology",
      delay: "100ms"
    },
    {
      title: "Free Trial",
      description: "Test our hearing aids risk-free for 7 days",
      delay: "200ms"
    },
    {
      title: "Lifetime Support",
      description: "Comprehensive after-sales service and maintenance",
      delay: "300ms"
    },
    {
      title: "Easy EMI Options",
      description: "Flexible payment plans starting from ₹999/month",
      delay: "400ms"
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-clinic-primary to-clinic-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Discount Banner */}
        <div className="text-center mb-12 reveal">
          <div className="inline-block bg-white rounded-2xl px-8 py-6 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-clinic-primary mb-2">
              Get upto 30% off on Hearing Aids
            </h2>
            <p className="text-gray-600 text-lg">
              Limited time offer - Book your appointment today!
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 reveal"
              style={{ transitionDelay: feature.delay }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-clinic-muted flex items-center justify-center flex-shrink-0">
                  <IoMdCheckmarkCircle className="h-6 w-6 text-clinic-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-clinic-accent text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscountAndFeatures;
