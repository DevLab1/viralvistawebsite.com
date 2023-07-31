import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

export function Home() {
  return (
    <>
        <header className='home-header'>
            <h1 className='motto'>Making Brands Unforgettable.</h1>
        </header>
        <div className='mission-title'>
            Our Mission
        </div>

        <section className='mission-section'>
            <p className='mission-paragraph'>
                At Viral Vista, our mission is to revolutionize the digital landscape by empowering businesses and individuals to harness the full potential of social media. We believe that social media is not just a platform, but a gateway to endless opportunities for growth, engagement, and influence. Through our innovative and strategic social media management solutions, we aim to create a powerful and lasting impact for our clients, enabling them to amplify their brand presence, connect with their target audience on a deeper level, and ultimately, achieve viral success. With a dedicated team of experts and a passion for creativity, we are committed to crafting captivating and share-worthy content that will set our clients apart in this ever-evolving digital world. Join us on this exhilarating journey as we unlock the full potential of social media and take your brand to exhilarating heights of popularity and success. Together, let's build a viral vista that will leave a lasting mark on the digital landscape.
            </p>
            <div className='mission-container'>
                <img className='mission' src={require('./mission.jpg')} alt="Mission" />
            </div>
        </section>

        <div className='service-title'>
            Our Services
        </div>

        <section className='service-section'>
            <div className='service-bubble'>
            <i class="fa-brands fa-tiktok"></i>
            <p className='service-paragraph'>
                TikTok Content
            </p>
            </div>
            <div className='service-bubble'>
            <i class="fa-brands fa-instagram"></i>
            <p className='service-paragraph'>
                Instagram Promotion
            </p>
            </div>
            <div className='service-bubble'>
            <i class="fa-brands fa-facebook"></i>
            <p className='service-paragraph'>
                Facebook Ads
            </p>
            </div>
        </section>

        <div className='why-title'>
            Why Choose Us?
        </div>
        <section className='why-section'>
            <div className='why-div'>
            <i class="fa-solid fa-1"></i>
            <p className='why-paragraph'><b>Experience and Expertise:</b> With years of experience in the ever-evolving social media landscape, we have honed our skills and expertise to perfection. Our team of dedicated professionals is well-versed in the art of creating engaging content, strategizing effective campaigns, and analyzing data to deliver remarkable outcomes.</p>
            </div>
            <div className='why-div'>
            <i class="fa-solid fa-2"></i>
            <p className='why-paragraph'><b>Tailored Solutions:</b> We know that your brand is unique, and a one-size-fits-all approach won't do. That's why we take the time to understand your business goals, target audience, and industry dynamics. Our customized strategies are designed to elevate your brand's presence and engage your audience authentically.</p>
            </div>
            <div className='why-div'>
            <i class="fa-solid fa-3"></i>
            <p className='why-paragraph'><b>Creativity that Converts:</b> At Viral Vista, we believe in the transformative power of creativity. Our team of passionate content creators and strategists is dedicated to producing captivating and share-worthy content that goes beyond merely capturing attention - it drives real results.</p>
            </div>
        </section>
        <footer>
            <div className='footer-top-container'>
                <div className='footer-div1'>
                    <div className='title-footer-div'>QUICK LINKS</div>
                    <ul className='footer-ul'>
                        <li><Link to={"/"} className='footer-li'>HOME</Link></li>
                        <li><Link to={"/about-us"} className='footer-li'>ABOUT US</Link></li>
                        <li><Link to={"/email-contactform"} className='footer-li'>CONTACT US</Link></li>
                    </ul>
                </div>
                <div className='footer-div1'>
                    <div className='title-footer-div'>MORE</div>
                    <ul className='footer-ul'>
                        <li><Link  className='footer-li' to={"/privacy-policy"}>PRIVACY POLICY</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    </>
  )
}
