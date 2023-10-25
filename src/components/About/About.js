import React from 'react'
import Image from "./Images/Image1.jpg" 
import demo1 from "./Images/demo_website_hero.webp"
import hero2 from "./Images/demo_website_hero_2.webp"
import hero3 from "./Images/demo_website_hero_3-1.webp"
import last5 from "./Images/last-5.webp"
import "./about.css"

export default function About() {
  return (
      <div  id="about" className="py-16 bg-white">
        <h1 className='heading'>About The Company</h1>
        <img  className="heading-img" src={Image} alt="@"/>
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                          alt="#"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                      The Best Dog-Friendly Companies
                      </h2>
                      <p className="mt-6 text-gray-600">
                      Do you dream of bringing your dog to work? A recent Rover survey reveals that 77% of American pet parents place even more importance on working for a dog-friendly company after spending so much time with their dogs during the pandemic. Being “dog friendly” means a lot more than just allowing dogs in the office nowadays—especially considering that so many people now work remotely. 
                      </p>
                      <p className="mt-4 text-gray-600">
                      Get to know the best dog-friendly companies in the US on our list below. You’ll discover that many offer perks beyond just being a dog-friendly office, with benefits that range from supporting employees and their pups still working from home to perks for those considering return-to-office plans.


                      </p>
                  </div>
              </div>
          </div>

          <div className='second'>
            <div className='second-1'>
                <h1>These Celebs Were Great  Sources of Inspiration <br /> for Dog Names This Year</h1>
                <p>“Ellie and Gus are inseparable and have caused me to fall in love with French<br /> Bulldogs as a breed! Though they are from different breeders and parts of<br /> the country, they have developed a bond and love  for each other that is <br />unbreakable. Gus seems to act like he is 10 but is only 2 with his<br /> stoic nature and observant approach to life,and on the other end of the spectrum, <br />you have Ellie, a complete love bug always looking for a<br /> cuddle or to wrestle. Together they are a hysterical pair that always keeps me laughing, <br />loving, and remembering to not take life so seriously!”</p>
            </div>
            <div className='second-2'>
                <img src={demo1} alt="demo1" /> 
            </div>
          </div>

          <div className='third'>
          <div className='third-1'>
                <h1>Cha Ching! Here Are a Few Dog <br />Name Trends Inspired by Money</h1>
                <p>Hero sections are the canvas of your website. <br/>Choose from a variety of display options, including<br/> text-only and striking background images. These <br/>hero sections serve as the foundation of your web<br/> presence, allowing you to convey your message with impact.</p>
            </div>
            <div className='third-2'>
                <img src={hero2} alt="demo1" /> 
            </div>
          </div>

          <div className='forth'>
            <div className='forth-1'>
                <img src={hero3} alt="hero3"/>
            </div>
            <div className='forth-2'>
                <h1>Versatile blocks: customize <br/> your content</h1>
                <p>The magic happens with blocks. Whether you need <br/>an accordion for FAQs to provide clear answers to <br/> your audience, a dynamic articles list that keeps<br/> your visitors informed and engaged, a captivating <br/>showcase of individuals who share your passion <br/>, comprehensive breeding lists that demonstrate <br/>your expertise, user-friendly contact forms for <br/>seamless communication, or multimedia elements<br/> like striking images, engaging videos, and heartfelt <br/> testimonials, we've got you covered.<br/>

                Our versatile blocks are your creative palette <br/>, allowing you to mix and match these elements to<br/> bring your vision to  life. No matter your<br/>goal or the scope of your project, you have<br /> the power to design  a website that not only <br/> meets but exceeds your unique needs and aspirations.

                With <br/> Breedpost's Version 2 website builder, the<br/> possibilities are boundless, and your website's <br/> potential knows no bounds. Let your creativity flow<br/> and watch your ideas come to life with ease.</p>
            </div>
          </div>

          <div className='five'>
            <div className='five-1'>
                <h1>Tailor Your Design with Global Options</h1>
                <p>Breedpost's website builder puts you <br/> in control of your website's style.<br/>  Choose from a wide range of <br/>customization options, including:</p>

            </div>
            <div className='five-2'>
                <img src={last5} alt="#"/>
            </div>
          </div>


      </div>
  );
}