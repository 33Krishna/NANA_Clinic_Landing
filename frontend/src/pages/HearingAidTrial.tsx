import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import ActionButtons from '@/components/ActionButtons';

interface Product {
  name: string;
  price?: string;
  priceRange?: string;
  image?: string;
}

interface Company {
  name: string;
  logo: string;
  products: Product[];
}

const HearingAidTrial = () => {
  const companies: Company[] = [
    {
      name: 'SIGNIA',
      logo: '/images/Brands/Signia.jpg',
      products: [
        {
          name: 'Silk X',
          priceRange: '₹43,990 - ₹1,79,990',
          image: '/images/Products/SilkX.jpeg',
        },
        {
          name: 'Styletto IX',
          priceRange: '₹1,09,990 - ₹6,49,990',
          image: '/images/Products/StylettoIX.jpeg',
        },
        {
          name: 'Orion charge & go',
          priceRange: '₹28,999 - ₹38,990',
          image: '/images/Products/OrionCharge&go.jpeg',
        },
        {
          name: 'Kit Silk c&g IX ',
          priceRange: '₹1,14,990 - ₹7,19,990',
          image: '/images/Products/Kit_Silk_c&g_IX.jpeg',
        },
      ],
    },
    {
      name: 'PHONAK',
      logo: '/images/Brands/Phonak.jpg',
      products: [
        {
          name: 'Infinio',
          priceRange: '₹83,000 - ₹3,26,000',
          image: '/images/Products/Infinio.jpeg',
        },
        {
          name: 'Slim Lumity',
          priceRange: '₹1,44,000 - ₹6,09,000',
          image: '/images/Products/Slim_Lumity_L-R.jpeg',
        },
        {
          name: 'Naida Lumity',
          priceRange: '₹58,500 - ₹2,83,000',
          image: '/images/Products/Naida_Lumity.jpeg',
        },
        {
          name: 'Virto Paradise P',
          priceRange: '₹51,500 - ₹2,62,000',
          image: '/images/Products/VirtoP.jpeg',
        },
      ],
    },
    {
      name: 'RESOUND',
      logo: '/images/Brands/ReSound.jpg',
      products: [
        {
          name: 'Nexia',
          priceRange: '₹94,995 - ₹4,34,995',
          image: '/images/Products/Nexia_series.jpeg',
        },
        {
          name: 'Enzo Quattro',
          priceRange: '₹69,995 - ₹3,49,995',
          image: '/images/Products/Enzo_Quattro.jpeg',
        },
      ],
    },
    {
      name: 'WIDEX',
      logo: '/images/Brands/Widex.jpg',
      products: [
        {
          name: 'Moment sheer',
          priceRange: '₹1,45,000 - ₹7,00,000',
          image: '/images/Products/Moment_sheer.jpeg',
        },
        {
          name: 'Magnify',
          priceRange: '₹1,55,000 - ₹7,50,000',
          image: '/images/Products/Moment_smart_RIC.jpeg',
        },
      ],
    },
    {
      name: 'UNITRON',
      logo: '/images/Brands/Unitron.jpg',
      products: [
        {
          name: 'Moxi',
          priceRange: 'Price on request',
          image: '/images/Products/Moxi.jpeg',
        },
        {
          name: 'Ativo',
          priceRange: 'Price on request',
          image: '/images/Products/Ativo.jpeg',
        },
        {
          name: 'Stride',
          priceRange: 'Price on request',
          image: '/images/Products/Stride.jpeg',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-clinic-secondary via-white to-clinic-secondary">
      <Navbar />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-clinic-accent mb-4">
              Hearing Aid Trial
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our wide range of hearing aids from leading manufacturers. 
              Click on any company to view their products.
            </p>
          </div>

          {/* FAQ Style Accordion */}
          <div className="max-w-4xl mx-auto mb-12">
            <Accordion type="single" collapsible className="w-full">
              {companies.map((company, companyIndex) => (
                <AccordionItem
                  key={company.name}
                  value={`company-${companyIndex}`}
                  className="bg-white rounded-lg shadow-md border border-gray-200 px-4 md:px-6 overflow-hidden hover:shadow-lg transition-shadow mb-4 last:mb-0"
                >
                  <AccordionTrigger className="hover:no-underline py-4 md:py-6">
                    <div className="flex items-center gap-4 md:gap-6 w-full">
                      {/* Company Logo */}
                      <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-white rounded-lg p-2 border border-gray-100">
                        <img
                          src={company.logo}
                          alt={company.name}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = '/placeholder.svg';
                          }}
                        />
                      </div>
                      {/* Company Name */}
                      <div className="flex-1 text-left">
                        <h3 className="text-lg md:text-xl font-bold text-clinic-accent">
                          {company.name}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                          View Products
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-4 md:pb-6">
                    <div className="mt-4 border-t border-gray-200 pt-4 md:pt-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                        {company.products.map((product, productIndex) => (
                          <Card
                            key={productIndex}
                            className="border border-gray-200 hover:border-clinic-primary hover:shadow-md transition-all duration-300"
                          >
                            <CardContent className="p-4 md:p-5">
                              <div className="flex flex-col items-center text-center space-y-3">
                                {/* Product Image */}
                                {product.image && (
                                  <div className="w-full h-56 md:h-48 bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center">
                                    <img
                                      src={product.image}
                                      alt={product.name}
                                      className="w-full h-full object-contain p-2"
                                      onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.src = '/placeholder.svg';
                                      }}
                                    />
                                  </div>
                                )}
                                {/* Product Name */}
                                <div className="w-full">
                                  <h4 className="font-semibold text-clinic-accent text-base md:text-lg mb-2">
                                    {product.name}
                                  </h4>
                                  {/* Product Price */}
                                  <p className="text-sm md:text-base font-medium text-gray-700">
                                    {product.priceRange || product.price || 'Price on request'}
                                  </p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Additional Info Section */}
          <div className="mt-16 bg-white rounded-lg shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-bold text-clinic-accent mb-4 text-center">
              Why Choose Our Hearing Aids?
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-clinic-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-clinic-accent mb-2">
                  Premium Quality
                </h3>
                <p className="text-sm text-gray-600">
                  Top brands from leading manufacturers worldwide
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-clinic-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-clinic-accent mb-2">
                  Expert Consultation
                </h3>
                <p className="text-sm text-gray-600">
                  Professional guidance to find the perfect fit
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-clinic-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-clinic-accent mb-2">
                  Trial Available
                </h3>
                <p className="text-sm text-gray-600">
                  Try before you buy with our trial program
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <ActionButtons />
    </div>
  );
};

export default HearingAidTrial;

