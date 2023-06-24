import React from 'react'
import HeroVertical from '../components/hero/vertical/HeroVertical'
import Capabilities from '../components/capabilities/Capabilities'
import Newsletter from '../components/newsletter/Newsletter'
import Portfolio from '../components/portfolio/Portfolio'

function WhatWeDo() {
  const config = {
    heroVertical:{
      heroText:{
        title: "We Are<br>Building<br>Brands Online",
        subTitle:"Our experienced team offers expertise in various areas of Digital Marketing Agency services, which is why each client is matched with a suitable group of experts to help them achieve their goals. With our proven strategies, your business is bound for wild success.",
        btnText : "Let's Get Started"
      },
      highlight:"WHAT WE DO",
      breadcrum :"What We Do?",
      grid:[
        {
          highlight:"Brand Marketing",
          img:"https://dizzi.netlify.app/images/brand1.png",
          desc:"Amazing Web Designs With Faster Page Loads and Healthy Backend"
        },
        {
          highlight:"Brand Trust Building",
          img:"https://dizzi.netlify.app/images/brand2.png",
          desc:"SEO Makes you shine on web without paying to google"
        },
        {
          highlight:"Brand Awareness",
          img:"https://dizzi.netlify.app/images/brand3.png",
          desc:"Better Reach Better Leads, Be Socially Available"
        },
        {
          highlight:"Brand Recognition",
          img:"https://dizzi.netlify.app/images/brand4.png",
          desc:"Be Loud Sounds Good, Showcase You Products to World"
        },
      ]
    },
    testimonials:{
      textContent:{
        highlight : "What People Think",
        heading: "They Said<br>We Are Amazing",
        alignment: "xCenterContent"
      },
      testimonials:[
        [
          {
            clientName : "Nobita Kumar",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus nisi facere cupiditate iste nulla aspernatur eum neque velit, nobis dolore rem error quidem deserunt reprehenderit, blanditiis obcaecati, quibusdam inventore libero?",
            rating: "⭐⭐⭐⭐⭐"
          },
          {
            clientName : "Nobita Kumar",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus nisi facere cupiditate iste nulla aspernatur eum neque velit, nobis dolore rem error quidem deserunt reprehenderit, blanditiis obcaecati, quibusdam inventore libero?",
            rating: "⭐⭐⭐⭐⭐"
          },
        ],
        [
          {
            clientName : "Nobita Kumar",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus nisi facere cupiditate iste nulla aspernatur eum neque velit, nobis dolore rem error quidem deserunt reprehenderit, blanditiis obcaecati, quibusdam inventore libero?",
            rating: "⭐⭐⭐⭐⭐"
          },
          {
            clientName : "Nobita Kumar",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus nisi facere cupiditate iste nulla aspernatur eum neque velit, nobis dolore rem error quidem deserunt reprehenderit, blanditiis obcaecati, quibusdam inventore libero?",
            rating: "⭐⭐⭐⭐⭐"
          },
        ],
        [
          {
            clientName : "Nobita Kumar",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus nisi facere cupiditate iste nulla aspernatur eum neque velit, nobis dolore rem error quidem deserunt reprehenderit, blanditiis obcaecati, quibusdam inventore libero?",
            rating: "⭐⭐⭐⭐⭐"
          },
          {
            clientName : "Nobita Kumar",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus nisi facere cupiditate iste nulla aspernatur eum neque velit, nobis dolore rem error quidem deserunt reprehenderit, blanditiis obcaecati, quibusdam inventore libero?",
            rating: "⭐⭐⭐⭐⭐"
          },
        ],
        [
          {
            clientName : "Nobita Kumar",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus nisi facere cupiditate iste nulla aspernatur eum neque velit, nobis dolore rem error quidem deserunt reprehenderit, blanditiis obcaecati, quibusdam inventore libero?",
            rating: "⭐⭐⭐⭐⭐"
          },
          {
            clientName : "Nobita Kumar",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus nisi facere cupiditate iste nulla aspernatur eum neque velit, nobis dolore rem error quidem deserunt reprehenderit, blanditiis obcaecati, quibusdam inventore libero?",
            rating: "⭐⭐⭐⭐⭐"
          },
        ],
      ]
    },
    capabilities:{
      textContent:{
        highlight : "Have a Look We are Amazing 😉",
        heading: "Quality Leads With Powerful Lead Management Software",
        text : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid consectetur velit voluptatibus magni. Magnam debitis dignissimos eos explicabo sequi modi incidunt repudiandae, iste facilis vel! Non laboriosam quisquam aliquam nesciunt sed alias consequatur tempora, repudiandae autem a accusantium veritatis dolore fugit voluptatum odit est nulla rem laudantium neque eveniet laborum!",
        btnText : "Explore Us",
        alignment: "yCenter"
      },
      grid:[
        {
          highlight:"WEB DESIGN",
          img:"https://dizzi.netlify.app/images/web-design.png",
          desc:"Amazing Web Designs With Faster Page Loads and Healthy Backend"
        },
        {
          highlight:"SEO",
          img:"https://dizzi.netlify.app/images/seo.png",
          desc:"SEO Makes you shine on web without paying to google"
        },
        {
          highlight:"SOCIAL MEDIA",
          img:"https://dizzi.netlify.app/images/social-media-icons.png",
          desc:"Better Reach Better Leads, Be Socially Available"
        },
        {
          highlight:"Brand Awareness",
          img:"https://dizzi.netlify.app/images/strategy.png",
          desc:"Be Loud Sounds Good, Showcase You Products to World"
        },
      ]
    },
    portfolio:{
      textContent:{
        highlight : "Have a Look We are Amazing 😉",
        img:"https://dizzi.netlify.app/images/portfolio.png",
        heading: "Creative Portfolio<br>is a Beast✌️",
        text : "Welcome to our portfolio section, where you can explore the remarkable digital marketing campaigns we have executed for a diverse range of clients. From small businesses to large enterprises, we have helped our clients achieve exceptional results. Browse through our showcased projects to witness the power of our targeted advertising, content marketing expertise, and social media strategies. Each case study highlights the challenges faced, our tailored solutions, and the measurable impact we delivered. Discover how we can elevate your brand's online presence and drive tangible business growth.",
        btnText : "Explore Us",
        alignment: "yCenter"
      },
      portfolio:[
        {
          highlight:"Seo boosted Web Site",
          title: "Digital Marketing Project",
          img:"https://dizzi.netlify.app/images/portfolio-card.png"
        },
        {
          highlight:"Seo boosted Web Site",
          title: "Digital Marketing Project",
          img:"https://dizzi.netlify.app/images/portfolio-card2.png"
        },
        {
          highlight:"Seo boosted Web Site",
          title: "Digital Marketing Project",
          img:"https://dizzi.netlify.app/images/portfolio-card3.png"
        },
        {
          highlight:"Seo boosted Web Site",
          title: "Digital Marketing Project",
          img:"https://dizzi.netlify.app/images/portfolio-card4.png"
        },
        {
          highlight:"Seo boosted Web Site",
          title: "Digital Marketing Project",
          img:"https://dizzi.netlify.app/images/portfolio-card5.png"
        },
        {
          highlight:"Seo boosted Web Site",
          title: "Digital Marketing Project",
          img:"https://dizzi.netlify.app/images/portfolio-card6.png"
        }       
      ]
    },
    newsletter:{
      textContent:{
        highlight : "What People Think",
        heading: "Subscribe Weekly News<br> Get Updated for Tech",
        alignment: "allCenter",
        text : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid consectetur velit tempora, repudiandae autem a accusantium veritatis dolore fugit voluptatum odit est nulla rem laudantium neque eveniet laborum!",
      }
    }
  }
  return (
    <div className="">
        <HeroVertical data={config.heroVertical} />
        <Capabilities data={config.capabilities}/>
        <Portfolio data={config.portfolio}/>
        <Newsletter data={config.newsletter}/>
    </div>
  )
}

export default WhatWeDo