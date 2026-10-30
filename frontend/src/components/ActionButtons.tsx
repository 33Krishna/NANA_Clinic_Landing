import React from 'react';
import { Phone } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { FaWhatsapp } from "react-icons/fa";

const ActionButtons = () => {
  const { toast } = useToast();

  const openWhatsApp = () => {
    toast({
      title: "Opening WhatsApp",
      description: "Connecting you with our support team...",
      duration: 2000,
    });
    window.open(
      `https://wa.me/917205454269?text=${encodeURIComponent('Hello, I would like to book an appointment.')}`,
      '_blank'
    );
  };

  const callClinic = () => {
    toast({
      title: "Calling Clinic",
      description: "Connecting you to +917205454269",
      duration: 2000,
    });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200 py-2.5 px-4 sm:px-6 shadow-[0_-4px_16px_rgba(0,0,0,0.08)]">
      <div className="max-w-xl mx-auto flex items-center justify-between gap-3 sm:gap-4">
        {/* Left: Call Button (Rectangular) */}
        <a
          href="tel:+917205454269"
          onClick={callClinic}
          className="flex-1 flex items-center justify-center gap-2.5 bg-clinic-primary hover:bg-clinic-accent text-white font-semibold py-3 px-4 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md active:scale-98 text-sm sm:text-base"
          aria-label="Call the clinic"
        >
          <Phone className="w-5 h-5 text-white" />
          <span>Call Us</span>
        </a>

        {/* Right: WhatsApp Button (Rectangular) */}
        <button
          onClick={openWhatsApp}
          className="flex-1 flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold py-3 px-4 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md active:scale-98 text-sm sm:text-base"
          aria-label="Contact on WhatsApp"
        >
          <FaWhatsapp className="w-5 h-5 text-white" />
          <span>WhatsApp</span>
        </button>
      </div>
    </div>
  );
};

export default ActionButtons;
