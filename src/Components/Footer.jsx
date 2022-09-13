import React from 'react';
import facebook from '../images/footer_image/facebook.png'
import google from '../images/footer_image/google.png'
import instagram from '../images/footer_image/instagram.png'
import twitter from '../images/footer_image/twitter.png'
import youtube from '../images/footer_image/youtube.png'

const Footer = () => {
    return (
        <footer style={{
            background: "#E9EEF7"
        }} className="footer mt-10 p-10 bg-base-100 text-base-content sm:grid-cols-2">

            {/* first column */}
            <div>
                <h3>
                    <span className='text-2xl font-bold text-secondary'>Doc</span>
                    <span className='text-2xl font-bold textpri'>Mic.</span>
                </h3>
                <p>
                    simply dummy text of the printing <br /> and typesetting industry. Lorem <br /> Ipsum has been
                </p>

                <div className='flex'>
                    <div style={{
                        background: '#E8EEF6',
                        boxshadow: "0px 2px 4px rgba(0, 0, 0, 0.08), inset 0px 1px 4px rgba(0, 0, 0, 0.05)"
                    }} className='p-2 pl-0 border rounded-full '>
                        <img src={facebook} alt="" />
                    </div>
                    <div style={{
                        background: '#E8EEF6',
                        boxshadow: "0px 2px 4px rgba(0, 0, 0, 0.08), inset 0px 1px 4px rgba(0, 0, 0, 0.05)"
                    }} className='p-2 border rounded-full ml-3'>
                        <img src={google} alt="" />
                    </div>
                    <div style={{
                        background: '#E8EEF6',
                        boxshadow: "0px 2px 4px rgba(0, 0, 0, 0.08), inset 0px 1px 4px rgba(0, 0, 0, 0.05)"
                    }} className='p-2 border rounded-full ml-3'>
                        <img src={instagram} alt="" />
                    </div>
                    <div style={{
                        background: '#E8EEF6',
                        boxshadow: "0px 2px 4px rgba(0, 0, 0, 0.08), inset 0px 1px 4px rgba(0, 0, 0, 0.05)"
                    }} className='p-2 border rounded-full ml-3'>
                        <img src={twitter} alt="" />
                    </div>
                    <div style={{
                        background: '#E8EEF6',
                        boxshadow: "0px 2px 4px rgba(0, 0, 0, 0.08), inset 0px 1px 4px rgba(0, 0, 0, 0.05)"
                    }} className='p-2 border rounded-full ml-3'>
                        <img src={youtube} alt="" />
                    </div>
                </div>

                <p>Copyright @222 Medicom All Rights Reserved</p>
            </div>

            {/* second column */}
            <div>

                <span className="link link-hover font-semibold text-primary">Quick Link</span>
                <span className="link link-hover">About us</span>
                <span className="link link-hover">Our Pricing</span>
                <span className="link link-hover">Our Gallery</span>
                <span className="link link-hover">Appoinment</span>
                <span className="link link-hover">Privacy Policy</span>
            </div>
            <div>
                <span className="footer-title"></span>
                <span className="link link-hover">Sevices</span>
                <span className="link link-hover">Our Doctors</span>
                <span className="link link-hover">Our Latest News</span>
                <span className="link link-hover">Careers</span>
                <span className="link link-hover">Contact Us</span>
            </div>
            <div>
                <span className="link link-hover font-semibold text-primary">Opening Hours</span>
                <div>
                    <span className='mr-3 text-secondary'>Mon- Tue</span>
                    <span>08:00 AM- 05:00 PM</span>
                </div>
                <div>
                    <span className='mr-3 text-secondary'>Wed- Thu</span>
                    <span>09:00 AM- 06:00 PM</span>
                </div>
                <div>
                    <span className='mr-3 text-secondary'>Fri- Sat</span>
                    <span>10:00 AM- 07:00 PM</span>
                </div>
                <div>
                    <span className='mr-3 text-secondary'>Sunday</span>
                    <span>Emergency Only</span>
                </div>
                <div>
                    <span className='mr-3 text-secondary'>Personal</span>
                    <span>Mon- 05:00 PM</span>
                </div>
            </div>
        </footer >
    );
};

export default Footer;