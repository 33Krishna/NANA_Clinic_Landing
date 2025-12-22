import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Card, CardContent } from '@/components/ui/card';

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
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const companies: Company[] = [
    {
      name: 'SIGNIA',
      logo: '/images/Brands/Signia.jpg',
      products: [
        {
          name: 'Silk x',
          priceRange: '₹43,990 - ₹1,79,990',
          image: '/images/Ear-machine-1.jpg',
        },
        {
          name: 'Styletto',
          priceRange: '₹1,09,990 - ₹6,49,990',
          image: '/images/Ear-machine-2.jpg',
        },
        {
          name: 'Pure charge & go',
          priceRange: '₹28,999 - ₹38,990',
          image: '/images/Ear-machine-3.jpg',
        },
        {
          name: 'Motion charge & go',
          priceRange: '₹1,14,990 - ₹7,19,990',
          image: '/images/Ear-machine-4.jpg',
        },
      ],
    },
    {
      name: 'PHONAK',
      logo: '/images/Brands/Phonak.jpg',
      products: [
        {
          name: 'Infinio',
          priceRange: 'Price on request',
          image: '/images/Ear-machine-5.jpg',
        },
        {
          name: 'Lumity',
          priceRange: 'Price on request',
          image: '/images/Ear-machine-7.jpg',
        },
        {
          name: 'Terra +',
          priceRange: 'Price on request',
          image: '/images/Ear-machine-8.jpg',
        },
        {
          name: 'Virto',
          priceRange: 'Price on request',
          image: '/images/Ear-machine-9.jpg',
        },
      ],
    },
    {
      name: 'RESOUND',
      logo: '/images/Brands/ReSound.jpg',
      products: [
        {
          name: 'Nexia',
          priceRange: 'Price on request',
          image: '/images/Ear-machine-10.jpg',
        },
        {
          name: 'Omnia',
          priceRange: 'Price on request',
          image: '/images/Ear-machine-11.jpg',
        },
        {
          name: 'Key 2,3,4',
          priceRange: 'Price on request',
          image: '/images/Ear-machine-12.jpg',
        },
        {
          name: 'Enzo Quattro',
          priceRange: 'Price on request',
          image: '/images/Ear-machine-13.jpg',
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
          image: '/images/Ear-machine-14.jpg',
        },
        {
          name: 'Ativo',
          priceRange: 'Price on request',
          image: '/images/Ear-machine-15.jpg',
        },
        {
          name: 'Stride',
          priceRange: 'Price on request',
          image: '/images/Ear-machine-17.jpg',
        },
      ],
    },
    {
      name: 'WIDEX',
      logo: '/images/Brands/Widex.jpg',
      products: [
        {
          name: 'Moment sheer',
          priceRange: 'Price on request',
          image: '/images/Ear-machine-18.jpg',
        },
        {
          name: 'Magnify',
          priceRange: 'Price on request',
          image: '/images/Ear-machine-19.jpg',
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
          <div className="text-center mb-12 reveal">
            <h1 className="text-4xl md:text-5xl font-bold text-clinic-accent mb-4">
              Hearing Aid Trial
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our wide range of hearing aids from leading manufacturers. 
              Click on any company logo to view their products.
            </p>
          </div>

          {/* Companies Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 mb-12">
            {companies.map((company) => (
              <DropdownMenu
                key={company.name}
                open={openDropdown === company.name}
                onOpenChange={(open) =>
                  setOpenDropdown(open ? company.name : null)
                }
              >
                <DropdownMenuTrigger asChild>
                  <button className="group relative w-full aspect-square bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-4 flex items-center justify-center hover:scale-105 focus:outline-none focus:ring-2 focus:ring-clinic-primary">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/placeholder.svg';
                      }}
                    />
                    <div className="absolute bottom-2 left-0 right-0">
                      <p className="text-xs font-semibold text-clinic-accent bg-white/90 px-2 py-1 rounded">
                        {company.name}
                      </p>
                    </div>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="center"
                  sideOffset={8}
                  className="w-[90vw] max-w-md bg-white shadow-xl max-h-[85vh] overflow-hidden flex flex-col"
                >
                  <div className="p-4 pb-2 border-b border-gray-200 flex-shrink-0">
                    <h3 className="text-xl font-bold text-clinic-accent text-center">
                      {company.name} Products
                    </h3>
                  </div>
                  <div
                    className="flex-1 px-4 py-4 max-h-[70vh] overflow-y-auto"
                    style={{ overscrollBehavior: 'contain' }}
                  >
                    <div className="grid gap-3 pb-2">
                      {company.products.map((product, index) => (
                        <Card
                          key={index}
                          className="border border-gray-200 hover:border-clinic-primary transition-colors"
                        >
                          <CardContent className="p-3 sm:p-4">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                              {product.image && (
                                <div className="w-full sm:w-24 sm:h-24 h-32 flex-shrink-0 mx-auto sm:mx-0">
                                  <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-contain rounded"
                                    onError={(e) => {
                                      const target = e.target as HTMLImageElement;
                                      target.src = '/placeholder.svg';
                                    }}
                                  />
                                </div>
                              )}
                              <div className="flex-1 text-center sm:text-left">
                                <h4 className="font-semibold text-clinic-accent text-base sm:text-lg">
                                  {product.name}
                                </h4>
                                <p className="text-sm text-gray-600 mt-1">
                                  {product.priceRange}
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
          </div>

          {/* Additional Info Section */}
          <div className="mt-16 bg-white rounded-lg shadow-md p-6 md:p-8 reveal">
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
    </div>
  );
};

export default HearingAidTrial;

