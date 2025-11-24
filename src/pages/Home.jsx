import React from 'react'
import { Hero } from '../components/Hero'
import { Partners } from '../components/partners'
import { Services } from '../components/Services'
import { Contact } from '../components/Contact'

export const Home = () => {
  return (
    <>
      <Hero/>
      <Partners/>
      <Services/>
      <Contact/>
    </>
  )
}
