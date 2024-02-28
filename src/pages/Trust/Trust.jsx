import project1 from "./assets/project1.jpg";
import trust_img from "./assets/trust_img.jpg";

import { ContentCard } from "../../components";
import { cards } from "./config/cards";

import "./Trust.scss";
import { scrollIds } from "../../constants";

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
          Sri Kashi Vishwanath Temple in Medchal was constructed in the year
          1859 on the day of Maaga Maasa Shukla-paksha Triodashi Day of
          Siddhadra Nama Samvatsara according to Telugu Calender by Sri
          Kandukuri Venkata Ramayya. Since then their descendents continued
          maintaining the temple. For the development, Present trustee Sri
          Kandukuri Prabhakar formed a trust with few existing comittee members
          in the month of February 2022.
        </div>

        <div id="trust_detail">
          <a href="#">
            {" "}
            <nobr> TRUST DETAIL: </nobr>{" "}
          </a>
        </div>

        <div id="trust_mem">
          <a href="#">
            The permanent Trustee is the descendent of the main family member of
            Sri Kandukuri Venkata Ramayya which continues to the coming
            generations. The trust members are:
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
            Temple committee is formed for the development and to perform daily
            activities, rituals and festivals. All the temple related activities
            are performed under the supervision of the committee members.
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
        <span id={scrollIds.trust.projects}>
          <div id="project">
            <a href="#">PROJECTS</a>
          </div>
        </span>
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

        {cards.map((eachCard, index) => {
          const isInvertedContentCard = index % 2;
          return (
            <ContentCard
              isInversedContentCard={isInvertedContentCard}
              cardData={eachCard}
            />
          );
        })}

        <div id="emp_det">
          <span id={scrollIds.trust.employeeDetails}>
            <a href="#">
              <nobr> EMPLOYEE DETAILS </nobr>{" "}
            </a>{" "}
          </span>
        </div>

        <div id="emp_det_d">
          <a href="#">
            Sri Kashi Vishwanath Temple is maintained by the descendents of Sri
            Kandukuri Venkata Ramayya. <br />
            At present, there are 3 employees for the temple <br />
            <br />
            1. Priest: The temple Priest is Sri Dashamukhi Rajamouli Garu. He is
            a retired headmaster and he has been doing his service in temple for
            the past 45 years. <br />
            2. Maintenance: Temple maintenance is taken care by Sakaraboina
            Lakshmi who is residing in the temple since past 35 years.
            <br />
            3. Watchman: Krishna is working as a security in the temple. He has
            been working in the temple for past 15 years. <br />
            <br />
          </a>
        </div>
      </div>
    </div>
  );
};
