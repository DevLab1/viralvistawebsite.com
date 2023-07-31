import React from 'react'
import './privacypolicy.css';
import { Link } from 'react-router-dom';

export function PrivacyPolicy() {
  return (
    <>
    <div className='privacy-container'>
<p className='privacypolicy-p'>

Privacy Policy for Viral Vista

Effective Date: July 23 2023

Viral Vista, hereinafter referred to as "we," "us," or "Viral Vista", is committed to maintaining the privacy and security of your personal information. This Privacy Policy outlines our practices concerning the collection, use, and disclosure of information when you visit our website.

Information Collection and Use:

We do not collect or store any user data when you visit our website. We respect your privacy and understand the importance of safeguarding personal information. Therefore, we do not use cookies or any other tracking technologies to gather data about our website visitors.

Third-Party Links:

Our website may contain links to third-party websites. Please note that this Privacy Policy does not apply to any third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party websites before providing any personal information.

Security:

While we do not collect or store any user data on our website, we take reasonable measures to protect the information you provide to us through other means, such as email or contact forms. We use industry-standard security measures to safeguard against unauthorized access, disclosure, alteration, or destruction of your personal information.

Changes to this Privacy Policy:

We reserve the right to update or modify this Privacy Policy at any time without prior notice. Any changes to this policy will be posted on this page, and the effective date will be updated accordingly. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.

Contact Us:

If you have any questions or concerns regarding this Privacy Policy or our practices, please feel free to contact us at:

viralvista@gmail.com
520-607-4489

By using our website, you consent to the terms of this Privacy Policy. Thank you for visiting Viral Vista.

Please note that this is a basic template, and you should customize it to accurately reflect your specific privacy practices and business details. It is always a good idea to consult with legal counsel to ensure compliance with applicable laws and regulations.
    </p>
    </div>
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
