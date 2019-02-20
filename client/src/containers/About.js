import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import NavLine from '../components/NavLine';
import Footer from '../components/Footer';

class About extends Component {
  render() {
    return (
      <div>
        <Navbar 
          style={{
            zIndex: '10',
            backgroundColor: 'transparent'
        }}/>
        <NavLine />
        <div className="container mb-8 pb-8">
          <h1 className="h1-editorial">
            Simple, clean, concise  experiences that keep the user  coming back, time and time again.
          </h1>
          <p>
            Hi, I'm Guy Lepage, a Senior Product UX/UI Designer and Front-end Developer with 19 years of industry experience, specializing in designing and developing pixel perfect digital products, web apps, mobile apps, websites, and more. My focus is on ensuring that users have the best experiences without sacrificing code quality.
          </p>
          <h3 className="h3-editorial">
            Bio
          </h3>
          <p>
            International award-winning senior product and UX/UI designer, marketing expert and entrepreneur with 19+ years experience working on some of the world’s largest brands and most exciting startups.
          </p>
          <p>
          First hire at <a href="http://blockstack.org" alt="Blockstack" target="_blank">Blockstack</a>, a venture backed blockchain startup who has built a new decentralized internet for decentralized applications. I am a former entrepreneur with a passion for business, design and technology as well as a former digital advertising agency business owner and an internationally recognized UX/UI designer. I’ve taken a unique career path progressing from a Newspaper Art Director to Creative Director with ad agencies and tech companies to the pursuit and passion for startups, business, design and technology on a global scale.
          </p>
          <h3 className="h3-editorial">
            Highlights
          </h3>
          <div>
            <ul>
              <li>
                Was the first hire at <a href="http://blockstack.org" alt="Blockstack" target="_blank">Blockstack</a>, a blockchain startup working closely with the founders and designed and built roughly 30 products, including websites, chrome extensions, native apps, web apps, etc. over a 2.5 yr period.
              </li>
              <li>
                Was one of the core contributors to <a href="https://venturebeat.com/2017/12/04/blockstack-raises-52-million-to-build-a-parallel-internet-where-you-own-all-your-data/" alt="Blockstack raises $52 million to build a parallel internet where you own all your data" target="_blank">Blockstack’s $52M ICO</a> and token distribution. VC’s who participated in the ICO include;
              </li>
                <ul>
                  <li><a href="http://usv.com" alt="Union Square Ventures (USV)" target="_blank">Union Square Ventures (USV)</a></li>
                  <li><a href="http://foundationcapital.com/" alt="Foundation Capital" target="_blank">Foundation Capital</a></li>
                  <li><a href="http://www.luxcapital.com/" alt="Lux Capital" target="_blank">Lux Capital</a></li>
                  <li><a href="http://winklevosscapital.com/" alt="Winklevoss Capital" target="_blank">Winklevoss Capital</a></li>
                  <li><a href="http://blockchain.capital/" alt="Blockchain Capital" target="_blank">Blockchain Capital</a></li>
                  <li><a href="http://dcg.co/" alt="Digital Currency Group" target="_blank">Digital Currency Group</a></li>
                  <li><a href="http://twitter.com/@kevinrose" alt="Kevin Rose" target="_blank">Kevin Rose</a></li>
                  <li><a href="http://qasaryounis.com/" alt="Qasar Younis" target="_blank">Qasar Younis former COO of Y Combinator</a></li>
                </ul>
              <li>
                Was 1 of 4 core contributors in raising a $4M Series A funding round led by Union Square Ventures. Other investors include;
              </li>
              <ul>
                <li>Lux Capital</li>
                <li>Digital Currency Group</li>
                <li>Compound VC</li>
                <li>Version One Ventures</li>
                <li>Kal Vepuri</li>
                <li>Rising Tide</li>
                <li>Naval Ravikant (earlier investor)</li>
              </ul>
              <li>
                Assisted in growing the core blockchain user base from 35,000 to 75,000 users.
              </li>
              <li>
                Was a key contributor in building a community of blockchain developers from 0 to 13,000 community members.
              </li>
              <li>
                Advisor to NetCents, a publicly traded tech company trading in [Canada] and [Germany].
              </li>
              <li>
                Designed a the worlds first decentralized web browser that was a finalist in the 2017 INDEX awards.
              </li>
              <li>
                Part of the New York / Silicon Valley Tech Startup community.
              </li>
              <li>
                In 2014 was hired to [assist in selling off 150 staff digital firm in London to the world’s largest digital agency WPP]. http://bit.ly/1iBCrUi.
              </li>
              <li>
                Have completed UX/UI design of 20million downloaded app for a publicly traded technology company.
              </li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
