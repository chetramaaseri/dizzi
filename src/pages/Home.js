import Clients from "../components/clients/Clients";
import HeroHorizontal from "../components/hero/horizontal/HeroHorizontal";
import Newsletter from "../components/newsletter/Newsletter";
import Portfolio from "../components/portfolio/Portfolio";
import Services from "../components/services/Services";
import Testimonials from "../components/testimonials/Testimonials";
import WhyUs from "../components/whyUs/WhyUs";
// import { useState } from "react";
function Home() {
  const config = {
    heroHorizontal : {
      heroText:{
        title: "We Are<br>Building<br>Brands Online",
        subTitle:"Our experienced team offers expertise in various areas of Digital Marketing Agency services, which is why each client is matched with a suitable group of experts to help them achieve their goals. With our proven strategies, your business is bound for wild success.",
        btnText : "Let's Get Started"
      },
      heroImages:[
        "https://dizzi.netlify.app/images/social-network.png","https://dizzi.netlify.app/images/bulb.png","https://dizzi.netlify.app/images/network.png"
      ]
    },
    services :{
      textContent:{
        highlight:"WHAT WE DO",
        title:"We're a team of<br>creatives<br>who are excited about unique ideas"
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
    whyUs:{
      textContent:{
        highlight : "WHY US",
        img:"https://dizzi.netlify.app/images/team.png",
        heading: "Experinced<br>Creative, and Helpful",
        text : "Choose us for digital marketing services because of our experienced team, tailored strategies, transparent communication, and proven track record of delivering exceptional results. Partner with us to boost your online presence, generate leads, increase conversions, and achieve your business objectives with a passionate and dedicated team by your side.",
        btnText : "Learn More",
        alignment : "yCenter"
      },
      features:[
        {
          title:"Targeted Advertising Expertise",
          desc:"Our team excels in creating and executing highly targeted digital advertising campaigns that reach the right audience, maximize conversions, and drive measurable results for your business."
        },
        {
          title:"Content Marketing Mastery",
          desc:"With our deep understanding of content marketing, we craft compelling and valuable content that engages your target audience, enhances brand credibility, and increases organic traffic to your website."
        },
        {
          title:"Social Media Savvy",
          desc:"We harness the power of social media platforms to create impactful strategies that boost brand visibility, foster community engagement, and drive meaningful interactions, ultimately leading to increased brand loyalty and customer conversions."
        }
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
    partners:{
      textContent:{
        highlight : "Our People",
        heading: "We Are Growing<br><b>Together</b>",
        alignment:"yCenter"
      },
      imgs:["https://dizzi.netlify.app/images/partner4.png","https://dizzi.netlify.app/images/partner2.png","https://dizzi.netlify.app/images/partner1.png","https://dizzi.netlify.app/images/partner3.png"]
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
    newsletter:{
      textContent:{
        highlight : "What People Think",
        heading: "Subscribe Weekly News<br> Get Updated for Tech",
        alignment: "allCenter",
        text : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid consectetur velit tempora, repudiandae autem a accusantium veritatis dolore fugit voluptatum odit est nulla rem laudantium neque eveniet laborum!",
      }
    }
  }
  // const [config,setConfig] = useState(json);
  return (
    <div className="">
        <HeroHorizontal data={config.heroHorizontal}/>
        <Services data={config.services}/>
        <WhyUs data={config.whyUs}/>
        <Portfolio data={config.portfolio}/>
        <Clients data={config.partners}/>
        <Testimonials data={config.testimonials}/>
        <Newsletter data={config.newsletter}/>
    </div>
  )
}

export default Home