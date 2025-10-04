import Signia from '/images/Brands/Signia.jpg'
import Oticon from '/images/Brands/Oticon.jpg'
import Phonak from '/images/Brands/Phonak.jpg'
import ReSound from '/images/Brands/ReSound.jpg'
import Unitron from '/images/Brands/Unitron.jpg'
import Widex from '/images/Brands/Widex.jpg'
import AuthorisedPartner from '/images/Brands/AuthorisedPartner.png'


const BrandSlider = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
    <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-clinic-accent mb-8 reveal">
          Our Manufacturing {' '}
          <span className="text-clinic-primary">Partners</span>
        </h2>
        
        {/* Authorised Partner Image */}
        <div className="text-center mb-8 reveal" style={{ transitionDelay: "200ms" }}>
          <img
            src={AuthorisedPartner}
            alt="Authorised Partner"
            className="max-w-xs mx-auto"
          />
        </div>
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
            <a href="#" className="flex justify-center items-center">
                <img src={Signia} alt="Signia Logo" />                        
            </a>
            <a href="#" className="flex justify-center items-center">
                <img src={Oticon} alt="Oticon Logo" />                                             
            </a>
            <a href="#" className="flex justify-center items-center">
                <img src={Phonak} alt="Phonak Logo" />                                                                 
            </a>

            <a href="#" className="flex justify-center items-center">
                <img src={ReSound} alt="ReSound Logo" />                                                                                   
            </a>
            <a href="#" className="flex justify-center items-center">
                <img src={Unitron} alt="Unitron Logo" />                                                                                  
            </a>
            <a href="#" className="flex justify-center items-center">
                <img src={Widex} alt="Widex Logo" />                                                                                    
            </a>
        </div>
    </div>
</section>
  );
};

export default BrandSlider;