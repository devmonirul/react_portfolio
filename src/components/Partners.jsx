import React from 'react'
import codeacademy from '../assets/logos/code-academy.svg'
import adove from '../assets/logos/adove.svg'
import cocacola from '../assets/logos/cocacola.svg'
import mattered from '../assets/logos/mattered.svg'
import nationalbank from '../assets/logos/national-bank.svg'
import subway from '../assets/logos/subway.svg'

export const Partners = () => {

    const partners = [
        {name: 'Code Academy', image: codeacademy},
        {name: 'Adove', image: adove},
        {name: 'Coca Cola', image: cocacola},
        {name: 'Mattered', image: mattered},
        {name: 'National Bank', image: nationalbank},
        {name: 'Subway', image: subway},
    ]

    const duplicatePartners = [...partners, ...partners];
  return (
    <div className='mt-20 relative overflow-hidden bg-white py-12'>
        <div className='flex animate-marquee whitespace-nowrap overflow-x-hidden'>
            {
                duplicatePartners.map((partner, index) => (
                    <img key={index} src={partner.image} alt={partner.name} className='h-8 mx-6 object-contain min-w-[120px] hover:scale-110 transition-transform duration-200 opacity-50 hover:opacity-100'/>
                ))
            }

            {
                duplicatePartners.map((partner, index) => (
                    <img key={`duplicate-${index}`} src={partner.image} alt={partner.name} className='h-8 mx-6 object-contain min-w-[120px] hover:scale-110 transition-transform duration-200 opacity-50 hover:opacity-100'/>
                ))
            }
        </div>
    </div>
  )
}

