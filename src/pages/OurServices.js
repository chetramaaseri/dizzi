import React from 'react'
import HeroVertical from '../components/hero/vertical/HeroVertical'
import Capabilities from '../components/capabilities/Capabilities'
import Newsletter from '../components/newsletter/Newsletter'
import Testimonials from '../components/testimonials/Testimonials'

function OurServices() {
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
        <HeroVertical data={config.heroVertical}/>
        <Testimonials data={config.testimonials}/>
        <Capabilities data={config.capabilities}/>
        <Newsletter data={config.newsletter}/>
    </div>
  )
}

export default OurServices