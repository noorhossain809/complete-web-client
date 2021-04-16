import React from 'react';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'

const Footer = () => {
    const noNamed = [
        {name: "OUR CEO’s STATEMENT" , link: "/emergency"},
        {name: "Fashion is not something that exists only in dresses. It exists in people who are well dressed in clean crisp clothes. Therefore, make your fashion statement with Dry cleaners!" , link: "/checkup"},
        
    ]
    const ourAddress = [
        {name: "QUICK LINKS" , link: "//google.com/map"},
        {name: "Stream Cleaning" , link: "//google.com/map"},
        {name: "Dry Cleaning" , link: "//google.com/map"},
        {name: "Stain Removal" , link: "//google.com/map"},
       
    ]
    const oralClean = [
        {name: "Emergency Cleaning" , link: "/emergency"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Cleaning of Personal Diseases" , link: "/personal-treatment"},
        {name: "Clean Extraction" , link: "/tooth-extract"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Check Up" , link: "/checkup"}
    ]
    const services = [
        {name: "Emergency Cleaning" , link: "/emergency"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Quick Cleaner" , link: "/personal-treatment"},
        {name: "Clean Extraction" , link: "/tooth-extract"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Check Up" , link: "/checkup"}
    ]
    return (
        
        <footer className="footer-area clear-both text-white">
        <div className="container pt-5 text-white">
            <div className="row py-5 text-white">
              <FooterCol key={1} menuTitle={"."} menuItems={noNamed}/>
              <FooterCol key={2} menuTitle={"services"} menuItems={services}/>
              <FooterCol key={3} menuTitle="Oral Clean" menuItems={oralClean}/>
                <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                    <ul className="social-media list-inline">
                        <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                        <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                        <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                    </ul>
                    <div className="mt-5">
                        <h6>Call now</h6>
                        <button className="btn btn-primary">+2025550295</button>
                    </div>
                    </FooterCol>
            </div>
            <div className="copyRight text-center">
                <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
            </div>
        </div>
    </footer>
    );
};

export default Footer;