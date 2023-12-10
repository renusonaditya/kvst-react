import { ContentCard } from "../../components";
import "./About.css";
import { cards } from "./config/cards";

export const About = () => {
  return (
    <>
      {cards &&
        Boolean(cards.length) &&
        cards.map((eachCard, cardIndex) => {
          const isInversedContentCard = Boolean(cardIndex % 2);
          return (
            <ContentCard
              isInversedContentCard={isInversedContentCard}
              cardData={eachCard}
            />
          );
        })}

      {/* <div id="about_temple_panel">
        <div id="about_temple_section">
          <ul>
            <li>
              <a href="#">ABOUT TEMPLE</a>
            </li>
          </ul>
        </div>

        <div id="about_temple_info">
          <ul>
            <li>
              <a href="#">
                Sri Kashi Vishwanath temple is an ancient Hindu temple located
                in <br />
                the Medchal Village on a small hill rock in the state of
                Telangana.
              </a>
            </li>
          </ul>
        </div>

        <div id="about_temple_info1">
          <ul>
            <li>
              <a href="#">
                Idols present in the temple: Sri Kashi Vishwanath Swamy,
                <br />
                Annapurna Devi, Vigneshwara swamy, Laxmi Narayana swamy, Surya
                <br />
                Bhagwan, Anjaneya swamy, Nandeeshwara swamy.
              </a>
            </li>
          </ul>
        </div>

        <div id="about_temple_info2">
          <ul>
            <li>
              <a href="#">
                <nobr>
                  Grey stone with red impression of lord Shiva on it represents
                  Pillar of fire. Lord Kashi Vishwanath is worshipped in Ugra
                  Rupa in this temple. A well which is located beside <br />
                  the temple was popularly known as it contains water to ground
                  level in all the seasons which was constructed during temple
                  construction.
                </nobr>
              </a>
            </li>
          </ul>
        </div>

        <div id="about_temple_info4">
          <ul>
            <li>
              <a href="#">
                <nobr>
                  Lord Anjaneya is considered as Kshetra Palaka of the temple.
                </nobr>
              </a>
            </li>
          </ul>
        </div>

        <div id="about_temple_info5">
          <ul>
            <li>
              <a href="#">
                <nobr>
                  Total area of the temple was constructed in 1000 Sq. Yards
                  including Mandapas.
                </nobr>
              </a>
            </li>
          </ul>
        </div>
        <div id="about_temple_info6">
          <ul>
            <li>
              <a href="#">
                <nobr> Total area of temple premises is 1.25 acre.</nobr>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div id="History_panel">
        <div id="templatemo_history_section">
          <img src={His} id="hist" alt="hist" />
        </div>
      </div>

      <div id="History_panel2">
        <div id="History_section">
          <ul>
            <li>
              <a href="#">HISTORY</a>
            </li>
          </ul>
        </div>

        <div id="history_info">
          <ul>
            <li>
              <a href="#">
                Sri Kashi Vishwanath temple is an ancient Hindu temple built in
                the year <br />
                1859 by Sri Kandukuri Venkata Ramayya during the time of Nizam
                VI <br />
                Mir Mahboob Ali Khan.
              </a>
            </li>
          </ul>
        </div>

        <div id="history_info1">
          <ul>
            <li>
              <a href="#">
                <nobr>
                  Kandukuri Venkata Ramayya was richest baniya during the time
                  of Nizam. <br />
                  As there was untouchability prevailing during the times,
                  Dalits were not <br />
                  allowed to enter the temple. In order to provide entry for
                  devotees of all <br />
                  communities into the temple, the temple was constructed by his
                  own money <br />
                  without collecting funds from anyone. During the time of
                  construction, <br />
                  there were many hurdles created by Nizam government in order
                  to stop the <br />
                  construction of temple. As the Razakars used to demolish the
                  temple in the <br />
                  day time, the construction used to take place during the night
                  time. As this <br />
                  continues for few days, Lord Shiva appeared in the dream of
                  Kandukuri <br />
                  Venkata Ramayya and said “Do not fear constructing my temple.
                  Continue <br />
                  constructing the temple during day time without any fear”.
                  Temple was almost <br />
                  completed and Nizam army handcuffed Venkata Ramayya and tried
                  to take him into the prison. Immediately the handcuffs turned
                  to flower garland. <br />
                  There after he was sent to jail in Mumbai with respect for few
                  days. He has completed the construction of temple using his
                  influence while he was in the jail. <br />
                  Later on, he was released from the jail. He continued
                  organizing Nitya Puja and Performed several Homas in the
                  temple.
                </nobr>
              </a>
            </li>
          </ul>
        </div>

        <div id="history_info2">
          <ul>
            <li>
              <a href="#">
                Idols situated in the temple were sculpted in the Dashashwamedh
                Ghat of Varanasi.
              </a>
            </li>
          </ul>
        </div>

        <div id="history_info3">
          <ul>
            <li>
              <a href="#">
                <nobr>
                  Temple was maintained by his son Kandukuri Badraiah after his
                  demise and at present his descendants are taking care of the
                  temple.
                </nobr>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div id="gen_inf">
        <div id="geninf_section">
          <img src={NewT2} id="newt" />
        </div>
      </div>
      <div id="gen_inf2">
        <div id="general_section">
          <ul>
            <li>
              <a href="#">GENERAL INFORMATION</a>
            </li>
          </ul>
        </div>

        <div id="main">
          <ul>
            <li>
              <a href="#">MAIN TEMPLE:</a>
            </li>
          </ul>
        </div>

        <div id="Dwaras">
          <ul>
            <li>
              <a href="#">DWARAS OF THE TEMPLE:</a>
            </li>
          </ul>
        </div>

        <div id="gen1">
          <ul>
            <li>
              <a href="#">
                Sri Kashi Vishwanath temple has 2 entrances in 2 directions.
              </a>
            </li>
          </ul>
        </div>

        <div id="gen2">
          <ul>
            <li>
              <a href="#">
                The Main entrance of the temple is east facing dwara which is
                called as <br />
                Thoorpu dwara. It was designed as per Agama Shastra.
              </a>
            </li>
          </ul>
        </div>

        <div id="gen3">
          <ul>
            <li>
              <a href="#">
                Main door of the temple was made during the construction of
                temple <br />
                which is about 20 feet height and 13 feet width.
              </a>
            </li>
          </ul>
        </div>

        <div id="gen4">
          <ul>
            <li>
              <a href="#">
                <nobr>
                  2nd entrance of the temple is north facing dwara which is
                  called as <br />
                  Uttara Dwara. It glows holy radiance of Sri Kashi Vishwanath
                  Temple <br />
                  in Varanasi which is about 1000kms away from north facing door
                  of the temple.
                </nobr>
              </a>
            </li>
          </ul>
        </div>

        <div id="Diety">
          <ul>
            <li>
              <a href="#">DIETIES IN THE TEMPLE:</a>
            </li>
          </ul>
        </div>

        <div id="gen5">
          <ul>
            <li>
              <a href="#">
                <nobr>
                  Deities present in the temple: Sri Kashi Vishwanath Swamy,
                  Annapurna Devi, Vigneshwara swamy, Laxmi Narayana swamy, Surya
                  Bhagwan, Nandeeshwara swamy.
                </nobr>
              </a>
            </li>
          </ul>
        </div>

        <div id="gen5">
          <ul>
            <li>
              <a href="#">
                <nobr>
                  Grey stone with red impression of lord Shiva on Shiva Linga
                  represents Pillar of fire. Lord Kashi Vishwanath is worshipped
                  in ugra rupa in this temple.
                </nobr>
              </a>
            </li>
          </ul>
        </div>

        <div id="shikaram">
          <ul>
            <li>
              <a href="#">SHIKARAM:</a>
            </li>
          </ul>
        </div>

        <div id="gen6">
          <ul>
            <li>
              <a href="#">
                <nobr>
                  Shikaram is one of the main sacred spots of the temple.
                  <br />
                  The Significance of Shikaram in Sri Kashi Vishwanath Temple
                  is, it is in the shape of Sri Chakra. <br />
                  The seven steps of the shikaram represents 7 chakras in the
                  human body which refers to the energy <br />
                  centers we have in our body. <br />
                  1. Muladhara Chakra
                  <br />
                  2. Svadistan Chakra
                  <br />
                  3. Manipur Chakra
                  <br />
                  4. Anahata Chakra
                  <br />
                  5. Vishuddha Chakra
                  <br />
                  6. Ajna Chakra
                  <br />
                  7. Sahasra Chakra
                </nobr>
              </a>
            </li>
          </ul>
        </div>

        <div id="shikarami">
          <img src={shikaram} id="shikarami" />
        </div>

        <div id="gen7">
          <ul>
            <li>
              <a href="#">
                <nobr>
                  The Main gopuram of the temple is built according to Northern
                  temple architecture which is known as Nagara Architecture. The
                  Main Gopuram wall is connected with the
                  <br />
                  mandapas located on side of the main temple which are used for
                  pilgrims to stay inside the temple who comes from distant
                  places.
                </nobr>
              </a>
            </li>
          </ul>
        </div>

        <div id="upalaya">
          <ul>
            <li>
              <a href="#">UPALAYAM:</a>
            </li>
          </ul>
        </div>

        <div id="gen8">
          <ul>
            <li>
              <a href="#">
                <nobr>
                  Upalaya has Lord Hanuman who is referred as Kshetra Palaka of
                  the temple. Lord Hanuman is a guardian deity of the temple.{" "}
                  <br />
                  He is the lord of farmland. Upalaya of Lord Hanuman is located
                  at North-East side of the main temple. <br />
                  Lord Hanuman is worshipped prior to each ritual to ensure the
                  efficacy of that particular ritual.
                </nobr>
              </a>
            </li>
          </ul>
        </div>

        <div id="upalayai">
          <img src={ahan2} id="upalayai" />
        </div>

        <div id="nandig">
          <ul>
            <li>
              <a href="#">NANDI:</a>
            </li>
          </ul>
        </div>

        <div id="gen9">
          <ul>
            <li>
              <a href="#">
                <nobr>
                  Lord Nandeshwara is considered as prime devotee of Lord Shiva.
                  In Sanskrit, the name of Nandi means ‘Happiness’.
                  <br />
                  Pleased with Tapasya performed by Siladha Maharshi, Lord Shiva
                  granted him his wish of ‘sons would carry forward
                  <br />
                  worshipping lord Shiva’. Nandi-Parvat is the result of granted
                  with. Nandi took the form of vehicle for lord Shiva
                  <br />
                  which is called as Vahanam. Nandi is considered as head of all
                  Shiva Ganas. There is saying that without the permission
                  <br />
                  of Nandi no one can enter the place of lord Shiva including
                  Brahma and Vishnu. The Bull(Nandi) represents Dharma in
                  Sanskrit. <br />
                  This is the reason Nandi is placed before lord Shiva in all
                  Shiva temples.
                </nobr>
              </a>
            </li>
          </ul>
        </div>
        <div id="nandis">
          <img src={nandis} id="nandis" />
        </div>

        <div id="utsav">
          <ul>
            <li>
              <a href="#">UTSAVA MURTIS:</a>
            </li>
          </ul>
        </div>
        <div id="gen10">
          <ul>
            <li>
              <a href="#">
                <nobr>
                  Sri Kashi Vishwanath is a form of Lord Shiva. On the time of
                  celebrations Panchaloha set of Murtis will be taken
                  <br />
                  out for rituals and Pallaki Seva. These idols stands on
                  rectangular base that consists of Padmapeetha. The <br />
                  Utsava Murti of Sri Kashi Vishwanath and Goddess Annapurna
                  were manufactured in Varanasi in 18th Century <br />
                  by Sri Kandukuri Venkata Ramayya who was the founder of
                  temple. Lord Kashi Vishwanath idol is in standing <br />
                  posture with tiger skin garment on body. Idol has 2 hands in
                  which each hand represents Abhayahasta and <br />
                  Varamudra respectively. Goddess Ganga sits on the top of the
                  hair of lord shiva idol who plays a significant role <br />
                  in the city of Varanasi. The attire of goddess Annapurna is
                  placed on left side of Kashi Vishwanath’s idol. <br />
                  Goddess Annapurna is in Sthanakapose on Padmapeetha. The
                  attire of Goddess Annapurna is made <br />
                  beautiful with various folds. Both idols of Sri Kashi
                  Vishwanath and goddess Annapurna are decorated with <br />
                  various meticulous ornaments during the rituals.
                </nobr>
              </a>
            </li>
          </ul>
        </div>

        <div id="umurti">
          <img src={utsavmurtis} id="umurti" />
        </div>

        <div id="well">
          <ul>
            <li>
              <a href="#">WELL:</a>
            </li>
          </ul>
        </div>
        <div id="gen11">
          <ul>
            <li>
              <a href="#">
                <nobr>
                  Well located in the premises of Kashi Vishwanath temple is
                  considered as sacred for Hindus. The water in the well
                  <br />
                  is considered as holy water and Abhisheka of Lord shiva is
                  done with the water from the well. Significance of that well
                  <br />
                  is even in the hot summer, the well consists of water at
                  maximum level. The water in this well has medicinal values
                  <br />
                  which can cure many skin diseases.
                </nobr>
              </a>
            </li>
          </ul>
        </div>
        <div id="well2">
          <img src={well2} />
        </div>
      </div> */}
    </>
  );
};
