import React from "react";

import bus from './assets/bus.jpeg'
import contactus from './assets/contactus.jpg'
import facebook from './assets/fb_icon.png'
import flight from './assets/flight.jpeg'
import gmail from './assets/gmail_icon.png'
import instagram from './assets/insta_icon.png'
import lingam from './assets/lingam.png'
import mobile from './assets/cell_icon.png'
import train from './assets/train.jpeg'
import website from './assets/website_icon.png'
import whatsapp from './assets/wha_icon.png'
import youtube from './assets/yout_icon.png'

import './Contact.css';

export const Contact = () => {
    return <>
        <div className="contact-templatemo_banner_panel">
            <img alt="contactus" src={contactus} height={600} width="auto" />
        </div>


        <div class="Contact">CONTACT</div>
        <div class="Trustee">TRUSTEE, MEDCHAL, TELANGANA, INDIA, 501401</div>

        <div className="contact-rituals-puja-container">
            <div class="contact-rituals-puja-card">
                <div class="contact-image-box">
                    <img alt="mobile" src={mobile} id="icon" className="contact-image" />
                </div>
                <div class="contact-description-box">
                    <div class="contact-description-content">+91-9949441095

                    </div>
                </div>
            </div>


            <div class="contact-rituals-puja-card">
                <div class="contact-image-box">
                    <img alt="gmail" src={gmail} id="gmail" className="contact-image" />
                </div>
                <div class="contact-description-box">
                    <div class="contact-description-content">Reach us on kashivishwanathtemplemedchal@gmail.com

                    </div>
                </div>
            </div>


            <div class="contact-rituals-puja-card">
                <div class="contact-image-box">
                    <img alt="instagram" src={instagram} id="insta" className="contact-image" />
                </div>
                <div class="contact-description-box">
                    <div class="contact-description-content">kashivishwanathtemplemedchal

                    </div>
                </div>
            </div>


            <div class="contact-rituals-puja-card">
                <div class="contact-image-box">
                    <img alt="facebook" src={facebook} id="fb" className="contact-image" />
                </div>
                <div class="contact-description-box">
                    <div class="contact-description-content">Kashi Vishwanath Temple, Medchal

                    </div>
                </div>
            </div>



            <div class="contact-rituals-puja-card">
                <div class="contact-image-box">
                    <img alt="whatsapp" src={whatsapp} id="wha" className="contact-image" />
                </div>
                <div class="contact-description-box">
                    <div class="contact-description-content">+91-9949441095

                    </div>
                </div>
            </div>


            <div class="contact-rituals-puja-card">
                <div class="contact-image-box">
                    <img alt="website" src={website} id="web" className="contact-image" />
                </div>
                <div class="contact-description-box">
                    <div class="contact-description-content">kashivishwanathtemplemedchal.org

                    </div>
                </div>
            </div>


            <div class="contact-rituals-puja-card">
                <div class="contact-image-box">
                    <img alt="youtube" src={youtube} id="you" className="contact-image" />
                </div>
                <div class="contact-description-box">
                    <div class="contact-description-content">Kashi Vishwanath Temple, Medchal

                    </div>
                </div>
            </div>

            <div class="contact-rituals-puja-card">
                <div class="contact-image-box">
                    <img alt="facebook" src={facebook} id="fb" className="contact-image" />
                </div>
                <div class="contact-description-box">
                    <div class="contact-description-content">Kashi Vishwanath Temple, Medchal Page

                    </div>
                </div>
            </div>
        </div>
        <div class="shiva_nandi">
            <img alt="lingam" src={lingam} id="sn" />
        </div>

        <div class="Reach">How to Reach</div>
        <div class="Reach_det">Sri Kashi Vishwanath temple is located in Medchal City which is around 23 kms from
            Hyderabad</div>
        <div class="Timings">Temple Timings<br /> 5:00 am to 11:00 am <br />
            5:00 pm to 8:00 am</div>

        <div class="rituals-reach-card">
            <div class="reach-box">
                <img alt="bus" src={bus} id="bus" />
            </div>
            <div class="contact-description-reach-box">
                <div class="description-reach-content">Temple is located about 23 kms far from Hyderabad City on Hyderabad -
                    Nagpur Highway 44. Devotees may avail bus route easily. Bus Route number 229. Buses are available for
                    every 15 minutes from Secunderabad railway station.

                </div>
            </div>
        </div>


        <div class="rituals-reach-card">
            <div class="reach-box">
                <img alt="train" src={train} id="train" />
            </div>
            <div class="contact-description-reach-box">
                <div class="description-reach-content">Nearest Railway station from the temple is Medchal Railway Station.
                    Temple is located in walkable distance from Medchal Railway Station.

                </div>
            </div>
        </div>



        <div class="rituals-reach-card">
            <div class="reach-box">
                <img alt="flight" src={flight} id="flight" />
            </div>
            <div class="contact-description-reach-box">
                <div class="description-reach-content">Nearest Airport is Rajiv Gandhi International Airport located in
                    Shamshabad City, Hyderabad. which is around 70kms from temple. Devotees may use Outer Ring Road facility
                    to travel from Airport to Temple.

                </div>
            </div>
        </div>
    </>

}