import React from "react";

import bus from './assets/bus.jpeg'
import contactus from './assets/contactus.jpg'
import facebook from './assets/facebook.jpeg'
import flight from './assets/flight.jpeg'
import gmail from './assets/gmail.jpeg'
import instagram from './assets/instagram.jpeg'
import lingam from './assets/lingam.png'
import mobile from './assets/mobile.jpeg'
import train from './assets/train.jpeg'
import website from './assets/website.jpeg'
import whatsapp from './assets/whatsapp.jpeg'
import youtube from './assets/youtube.jpeg'

import './Contact.css';

export const Contact = () => {
    return <>
        <div id="templatemo_banner_panel">
            <img alt="contactus" src={contactus} id="ban" />
        </div>


        <div class="Contact">CONTACT</div>
        <div class="Trustee">TRUSTEE, MEDCHAL, TELANGANA, INDIA, 501401</div>

        <div class="rituals-puja-card">
            <div class="image-box">
                <img alt="mobile" src={mobile} id="icon" />
            </div>
            <div class="description-box">
                <div class="description-content">+91-9949441095

                </div>
            </div>
        </div>


        <div class="rituals-puja-card">
            <div class="image-box">
                <img alt="gmail" src={gmail} id="gmail" />
            </div>
            <div class="description-box">
                <div class="description-content">Reach us on kashivishwanathtemplemedchal@gmail.com

                </div>
            </div>
        </div>


        <div class="rituals-puja-card">
            <div class="image-box">
                <img alt="instagram" src={instagram} id="insta" />
            </div>
            <div class="description-box">
                <div class="description-content">kashivishwanathtemplemedchal

                </div>
            </div>
        </div>


        <div class="rituals-puja-card">
            <div class="image-box">
                <img alt="facebook" src={facebook} id="fb" />
            </div>
            <div class="description-box">
                <div class="description-content">Kashi Vishwanath Temple, Medchal

                </div>
            </div>
        </div>



        <div class="rituals-puja-card">
            <div class="image-box">
                <img alt="whatsapp" src={whatsapp} id="wha" />
            </div>
            <div class="description-box">
                <div class="description-content">+91-9949441095

                </div>
            </div>
        </div>


        <div class="rituals-puja-card">
            <div class="image-box">
                <img alt="website" src={website} id="web" />
            </div>
            <div class="description-box">
                <div class="description-content">kashivishwanathtemplemedchal.org

                </div>
            </div>
        </div>


        <div class="rituals-puja-card">
            <div class="image-box">
                <img alt="youtube" src={youtube} id="you" />
            </div>
            <div class="description-box">
                <div class="description-content">Kashi Vishwanath Temple, Medchal

                </div>
            </div>
        </div>

        <div class="shiva_nandi">
            <img alt="lingam" src={lingam} id="sn" />
        </div>

        <div class="Reach">How to Reach</div>
        <div class="Reach_det">Sri Kashi Vishwanath temple is located in Medchal City which is around 23 kms from
            Hyderabad</div>
        <div class="Timings">Temple Timings: 5:00 am to 11:00 am <br />
            5:00 pm to 8:00 am</div>

        <div class="rituals-reach-card">
            <div class="reach-box">
                <img alt="bus" src={bus} id="bus" />
            </div>
            <div class="description-reach-box">
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
            <div class="description-reach-box">
                <div class="description-reach-content">Nearest Railway station from the temple is Medchal Railway Station.
                    Temple is located in walkable distance from Medchal Railway Station.

                </div>
            </div>
        </div>



        <div class="rituals-reach-card">
            <div class="reach-box">
                <img alt="flight" src={flight} id="flight" />
            </div>
            <div class="description-reach-box">
                <div class="description-reach-content">Nearest Airport is Rajiv Gandhi International Airport located in
                    Shamshabad City, Hyderabad. which is around 70kms from temple. Devotees may use Outer Ring Road facility
                    to travel from Airport to Temple.

                </div>
            </div>
        </div>
    </>

}