import React from 'react'

export const Footer = () => {
  return (
    <footer className='py-8 px-4 md:px-6 border border-gray-800/50 bg-black'>
        <div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-500'>
            <p>&copy; 2025 All rights reserved.</p>

            <div className='flex gap-6 mt-4 md:mt-0'>
                <a href="#" className='hover:text-white transition-colors'>Linkedin</a>
                <a href="#" className='hover:text-white transition-colors'>Dribble</a>
                <a href="#" className='hover:text-white transition-colors'>Instagram</a>
            </div>
        </div>
    </footer>
  )
}
