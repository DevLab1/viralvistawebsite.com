import React from 'react'
import './AboutUs.css'
import { Link } from 'react-router-dom'

export function AboutUs() {
  return (
    <>
        <header className='about-header'>
        <h1 className='motto'>Who We Are.</h1>
        </header>
        <div className='about-us-div'>
            We Unleash Your Digital Potential
        </div>
        <section className='about-us-section'>
        <img className="about-us-image" alt='Unable to Load' src={require('./lady.jpg') } />
        <p className='about-us-paragraph'>Viral Vista is an innovative and dedicated Social Media Management Agency, fueling your brand's online success with powerful strategies and creative brilliance. With a wealth of experience in the dynamic world of social media, our team understands the pulse of digital audiences and crafts tailored solutions that resonate with your unique brand identity. Our passion for creativity and data-driven insights empowers us to deliver captivating content that sparks genuine connections and engagement with your audience. At Viral Vista, we are driven by your success and are committed to propelling your brand to new heights of popularity and influence in the digital realm. Join us on this exciting journey, and let's make your brand the talk of the town with viral campaigns that leave a lasting impact.</p>
        </section>
        <div className='morals-div'>
            Quality {'>'} Quantity
        </div>
        <section className='morals-section'>
            <p className='morals-paragraph'>At Viral Vista, we firmly believe in embracing a Quality {'>'} Quantity mindset when it comes to social media management. Rather than focusing solely on the sheer volume of posts or followers, we prioritize delivering high-quality content and engagement that truly resonates with your target audience. Our approach centers on crafting meaningful and captivating narratives that authentically represent your brand's voice and values. By curating thoughtful and relevant content, we strive to foster genuine connections with your followers, sparking meaningful conversations and building a loyal and engaged community around your brand. Through this Quality {'>'} Quantity mindset, we ensure that every aspect of your social media presence aligns with your brand's identity and goals, ultimately driving real, sustainable growth and success in the digital landscape.</p>
        </section>
        <div className='client-div'>
            We Put You First
        </div>
        <section className='client-section'>
            <p className='client-paragraph'>
 Our core belief revolves around prioritizing our clients' needs above all else. We place a strong emphasis on delivering exceptional client satisfaction throughout every step of the process. From the very beginning of our collaboration, we actively listen to our clients, gaining a deep understanding of their objectives, challenges, and aspirations. We foster a collaborative environment that encourages open communication, valuing and implementing our clients' feedback to enhance our strategies continually. Our team of dedicated social media experts tirelessly works to achieve results that surpass expectations, consistently adapting and optimizing campaigns to align with the ever-changing landscape of market trends and audience preferences. As a client-centric partner, our goal is to empower businesses by elevating their social media presence and driving lasting success in the digital realm. At Viral Vista, we are devoted to our clients' growth and prosperity, making them the driving force behind everything we do.</p>
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
