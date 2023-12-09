import charity from "./assets/charity.jpg";

import "./Donations.css";

export const Donations = () => {
  return (
    <>
      <div id="Donation_panel">
        <div id="Donation_section">
          <div id="Donation_pic_section">
            <img src={charity} id="Donation_ban" alt="Donation_ban" />
          </div>
        </div>

        <div id="DONATION">
          <ul>
            <li>
              <a href="#">DONATION</a>
            </li>
          </ul>
        </div>

        <div id="abtdon">
          <ul>
            <li>
              <a href="#"> About Donation</a>
            </li>
          </ul>
        </div>

        <div id="abtdon_detail">
          <ul>
            <li>
              <a href="#">
                <nobr>
                  Charity is Crux of Humanity. <br />
                  There is no specific limit for Donation.
                  <br />
                  Payments are accepted through UPI, Net Banking, Cheques & DD.
                  <br />
                  Devotees may also donate the Assets and Digital Gold.
                  <br />
                  Devotees also may dedicate their donations on others name.
                  <br />
                  Donation offered is tax deductable and can receive 80G
                  Certificate. <br />
                  Trade details are kept private and safely. we do not disclose
                  your details to any agency. <br />
                  Donation receipt will be sent through Email and receipt will
                  be given at temple office. <br />
                  Donations collected will be used for maintenance and
                  development of the temple or Devotee has option to select
                  utilising his donation for particular Seva or service
                  <br />
                  while donating. <br />
                  We Utilize your Donation for the Seva/Service you have
                  selected.
                </nobr>
              </a>
            </li>
          </ul>
        </div>

        <div id="HUNDI">
          <ul>
            <li>
              <a href="#"> HUNDI </a>
            </li>
          </ul>
        </div>

        <div id="committee_d">
          <ul>
            <li>
              <a href="#">
                Hundi present in the temple allows all devotees to offer their
                donations irrespective of limit based on their financial
                position.
                <br />
                Security for Hundi is being monitored by temple Comittee. <br />
                Money obtained from Hundi will be utilized for performing Nitya
                Puja and Daily Rituals in the temple.
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div id="online">
        <div id="online">
          <ul>
            <li>
              <a href="#">ONLINE PAYMENTS</a>
            </li>
          </ul>
        </div>

        <div id="online_d">
          <ul>
            <li>
              <a href="#">
                Online payment allows donation from people acress the globe for
                welfare of the temple. You may donate your offerings through
                internet. <br />
                <br />
                UPI: Devotees May donate their offerings through UPI either
                through GPAY, PhonePay or PAYTM. <br />
                <br />
                Gpay number: **********
                <br />
                UPI ID:**********
                <br />
                <br />
                Mobile Banking: Devotees can donate through Internet or Mobile
                Banking also. <br />
                Account Name: *** ***** ********** ******
                <br />
                Account Number: ****************
                <br />
                IFSC Code: **********
                <br />
                Branch: Medchal
                <br />
                <br />
                Receipt for Online payment will be sent through Email.
              </a>
            </li>
          </ul>
        </div>
        <div id="online_e">
          <ul>
            <li>
              <a href="#">
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
