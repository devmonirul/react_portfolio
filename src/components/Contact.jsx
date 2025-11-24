import React from 'react'
import { LuHandshake } from 'react-icons/lu'

import {motion} from 'framer-motion'
import { fadeInUp, transitions } from '../utils/animations';

export const Contact = () => {
  return (
    <section className='py-32 px-4 md:px-6 bg-[#0f0f0f]'>
        <motion.div

            variants={fadeInUp}
             initial='initial'
             animate='animate'
             transition={{...transitions.default, delay: 0.2}}

         className='max-w-6xl mx-auto text-center'>
            <div className='size-24 mx-auto mb-8 bg-gray-900 rounded-full flex items-center justify-center'>
                <LuHandshake className='text-5xl text-gray-400'/>
            </div>

            <h2 className='md:text-4xl lg:text-5xl text-3xl mb-12'>
                <span className='bg-gradient-to-r from-white via-gray-300 to-gray-500 text-transparent bg-clip-text'>Tell me about your next project</span>
            </h2>

            <div className='flex flex-wrap justify-center gap-4'>
                <a href="#" className='inline-flex items-center px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors'>Email Me</a>
                <a href="#" className='inline-flex items-center px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors'>WhatsApp</a>
            </div>
        </motion.div>
    </section>
  )
}
