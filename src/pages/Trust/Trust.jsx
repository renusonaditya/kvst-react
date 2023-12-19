import gaushala from "./assets/gaushala.jpg";
import pro_anna from "./assets/pro_anna.jpg";
import project1 from "./assets/project1.jpg";
import trust_img from "./assets/trust_img.jpg";
import pro_gop from "./assets/pro_gop.jpg";

import "./Trust.scss";

export const Trust = () => {
  return (
    <div className="trust-page">
      <div id="Trust_panel">
        <div id="Trust_section">
          <div id="Trust_pic_section">
            <img src={trust_img} id="trust_ban" alt="trust_ban" />
          </div>
        </div>

        <div id="ABOUT_TRUST">
              <a href="#">ABOUT TRUST</a>
        </div>

        <div id="about_trust_desc">
              <a href="#">
                Sri Kashi Vishwanath Temple in Medchal was constructed in the
                year 1859., Which is Maaga Maasa Shuklapaksha Triodashi Day of
                Siddhadra Nama Samvatsara according to Telugu Calender by Sri
                Kandukuri Venkata Ramayya. Since then their descendents
                continued maintaining the temple. For the development of the
                temple, Present trustee Sri Kandukuri Prabhakar formed a trust
                with few existing comittee members in the month of February
                2022.
              </a>
        </div>

        <div id="trust_detail">
              <a href="#">
                {" "}
                <nobr> TRUST DETAIL: </nobr>{" "}
              </a>
        </div>

        <div id="trust_mem">
              <a href="#">
                The permanent Trustee for the temple is the descendent of the
                main family member of Sri Kandukuri Venkata Ramayya which
                continues to the coming generations. <br />
                The trust members are:
                <br />
                <br />
                1. Kandukuri Suresh
                <br />
                2. Goli Sridhar
                <br />
                3. Sanala Vishnu Chary
                <br />
                4. Rachapalli Namba Chary
                <br />
                5. Vishwanatham Parameshwar
                <br />
                6. Komaravelly Arun Kumar
                <br />
                7. Haridas Srikanth
                <br />
                8. Bommakanti Raju
                <br />
                9. Picket Mallikarjun
              </a>
        </div>

        <div id="committee">
              <a href="#">
                {" "}
                <nobr>COMMITTEE:</nobr>{" "}
              </a>
        </div>

        <div id="trust-committee_d">
              <a href="#">
                Temple committee is formed for the development of temple and to
                perform daily activities, rituals and festivals in the temple.
                All the temple related activities are performed under the
                supervision of the committee members.
                <br />
                <br />
                The Committee members are:
                <br />
                <br />
                1. Kandukuri Suresh
                <br />
                2. Goli Sridhar
                <br />
                3. Sanala Vishnu Chary
                <br />
                4. Rachapalli Namba Chary
                <br />
                5. Vishwanatham Parameshwar
                <br />
                6. Komaravelly Arun Kumar
                <br />
                7. Haridas Srikanth <br />
                8. Racherla Anand Kumar
                <br />
                9. Ankit Mishra
                <br />
                10. Santosh
                <br />
                11. Arakal Adithya
                <br />
                12. Dharmapuri Mahesh
                <br />
                13. Shekar
                <br />
                14. Chikka Anil
                <br />
                15. Bommakanti Raju
                <br />
                16. Picket Mallikarjun
              </a>
        </div>
      </div>

      <div id="project">
        <div id="project">
              <a href="#">PROJECTS</a>
        </div>
        <div id="pro_pic1">
          <img src={project1} id="project1" alt="project1" />
        </div>

        <div id="pro_projects">
              <a href="#">
                {" "}
                <nobr> PROPOSED PROJECTS: </nobr>{" "}
              </a>
        </div>

        <div id="pro_projects_d">
              <a href="#"> GOPURAM, NITYA ANNADANA SATRAM, GAUSHALA. </a>
        </div>

        <div className="project-card">

          <div id="pro_gop">
            <img src={pro_gop} id="gop_pro" alt="pro_gop" />
          </div>

          <div id="pro_projects_d2">
                <a href="#">
                  The gopuram serves as a symbol of connection to the divine,
                  reminding worshippers of their faith <br />
                  and the importance of their spiritual journey. In a cultural
                  context, the gopuram is a testament to the <br />
                  rich artistic and architectural heritage of South India. <br />
                  <br />
                  Temple Committee has proposed the construction of Gopuram at the
                  entrance of the temple as per <br />
                  Agamashastra. The approximate expenditure for the construction
                  of Gopuram is around 50 lakhs.
                  <br />
                  Devotees who are interested may donate their funds and take part
                  in the project. The proposed Gopuram
                  <br />
                  is around 45 feets height. It will be the extension of existing
                  front wall. Along with the Gopuram, <br />
                  front architecture also has to be modified as per Gopuram
                  Design. <br />
                  <br />
                  Estimated date of completion for the construction of Gopuram by
                  2028
                </a>
          </div></div>
        <div className="project-card">
      

          <div id="goshala_d">
                <a href="#">
                  As per Hindu tradition, cow is considered as the sacred animal.
                  There is a saying that 33 crores <br />
                  gods reside inside the cow. every year, tonnes of cow meat is
                  being exported to foreign countries.
                  <br />
                  In order to protect the cows, temple committee has proposal to
                  establish gaushala in the premises
                  <br />
                  of the Temple. Gaushalas are existing in India since 3rd
                  century. All productive, Non productive, Old,
                  <br />
                  abandoned, infertile and infirm cows will be sheltered in
                  Gaushala. Devotees who are interested may <br />
                  take part in this program and contribute the funds by consulting
                  the temple authorities.
                </a>
          </div>
          <div id="goshala">
            <img src={gaushala} id="goshala" alt="goshala" />
          </div>  
        </div>
        <div className="project-card">
          <div id="proj_annad_pic">
            <div id="proj_annad_pic_section">
              <img src={pro_anna} id="annad" alt="annad" />
            </div>
          </div>

          <div id="annadanam_d">
                <a href="#">
                  There is a saying in Sanskrit "ANNADANAM MAHADANAM". Donating
                  food is most pious <br />
                  and meritorious of all charity. Temple committee has proposed
                  for construction of Nithya <br />
                  Annadana satram for the piligrims visiting the temple and others
                  in temple premises. Devotees
                  <br />
                  are requested to donate as per their ability to support the
                  cause.
                </a>
          </div></div>
        <div id="emp_det">
              <a href="#">
                {" "}
                <nobr> EMPLOYEE DETAILS </nobr>{" "}
              </a>
        </div>

        <div id="emp_det_d">
              <a href="#">
                Sri Kashi Vishwanath Temple is maintained by the descendents of
                Sri Kandukuri Venkata Ramayya. <br />
                At present, there are 3 employees for the temple <br /><br />
                1. Priest: The temple Priest is Sri Dashamukhi Rajamouli Garu.
                He is a retired headmaster and he has been doing his service in
                temple for the past 45 years. <br />
                2. Maintenance: Temple maintenance is taken care by Lakshmi who
                is residing in the temple since past 35 years.
                <br />
                3. Watchman: Krishna is working as a security in the temple. He
                has been working in the temple for past 15 years. <br />
                <br />
              </a>
        </div>
      </div>
    </div>
  );
};
