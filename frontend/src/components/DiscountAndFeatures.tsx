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

        {/* Discount Banner Image */}
        <div className="text-center reveal" style={{ transitionDelay: "200ms" }}>
          <img
            src="/images/Brands/discount banner.jpg"
            alt="NANA Speech & Hearing Clinic - Better Hearing, Better Life"
            className="max-w-full h-auto rounded-2xl shadow-2xl mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default DiscountAndFeatures;
