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
        <div style={{ marginLeft: '6px', marginRight: '6px' }}>
          <div 
            className="container text-left mb-8 pb-8"
            style={{
              maxWidth: '800px'
            }}>
            <h1 className="h1-editorial mb-4b">
              Simple, clean, concise  experiences that keep the user  coming back, time and time again.
            </h1>
            <div className="mb-4">
              <a 
                href="https://opensource.guide/how-to-contribute"
                className="btn btn-black btn-open-source ml-0">
                 Open Source <span role="img" aria-label="heart">❤️</span>
              </a>
            </div>
            <p>
              Guy Lepage is the Co-founder & CEO of <a href="http://universe.engineering" alt="Universe Labs" target="_blank" rel="noopener noreferrer" className="bg-black text-light px-1">Universe&nbsp;Labs</a>, Founder of <a href="http://papriika.com" alt="Papriika" target="_blank" rel="noopener noreferrer" className="bg-black text-light px-1">Papriika</a>, and a former <a href="https://www.ycombinator.com/companies/?batch=s2014" alt="Y Combinator" target="_blank" rel="noopener noreferrer" className="bg-black text-light px-1">Y&nbsp;Combinator</a> 1st hire at <a href="http://blockstack.org" alt="Blockstack" target="_blank" rel="noopener noreferrer" className="bg-black text-light px-1">Blockstack&nbsp;PBC</a>, where he was the designer and 1 of 2 developers of the first Blockstack Browser. While at Blockstack he also assisted in the raising of over $50M in a token distribution from investors such as USV, Naval Ravikant, Winklevoss', etc.
            </p>
            <p>
              Guy is an international award-winning product UX/UI designer, art director and front-end developer with over 19 years of industry experience.
            </p>
            <h3 className="h3-editorial">
              Highlights
            </h3>
            <ul>
              <li style={{ marginBottom: '1rem' }}>
                Guy was the first hire at Blockstack PBC, a blockchain startup. Guy worked closely with the founders, designed and assisted in building over 25 products, including the <a href="https://github.com/blockstack/blockstack-browser/graphs/contributors" alt="Blockstack Browser" target="_blank" rel="noopener noreferrer" className="bg-black text-light px-1">Blockstack&nbsp;Browser</a>, chrome extensions, native apps, web apps, websites, and more.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                Was one of the core contributors to Blockstack’s <a href="https://venturebeat.com/2017/12/04/blockstack-raises-52-million-to-build-a-parallel-internet-where-you-own-all-your-data/" alt="Blockstack raises $52 million to build a parallel internet where you own all your data" target="_blank" rel="noopener noreferrer" className="bg-black text-light px-1">$50M token distribution</a>. VC’s who participated in the distribution include;
              </li>
                <ul style={{ marginTop: '0!important', marginBottom: '1rem' }}>
                  <li><a href="http://usv.com" alt="Union Square Ventures (USV)" target="_blank" rel="noopener noreferrer" className="bg-black text-light px-1">Union Square Ventures (USV)</a></li>
                  <li><a href="http://foundationcapital.com/" alt="Foundation Capital" target="_blank" rel="noopener noreferrer" className="bg-black text-light px-1">Foundation Capital</a></li>
                  <li><a href="http://www.luxcapital.com/" alt="Lux Capital" target="_blank" rel="noopener noreferrer" className="bg-black text-light px-1">Lux Capital</a></li>
                  <li><a href="http://winklevosscapital.com/" alt="Winklevoss Capital" target="_blank" rel="noopener noreferrer" className="bg-black text-light px-1">Winklevoss Capital</a></li>
                  <li><a href="http://blockchain.capital/" alt="Blockchain Capital" target="_blank" rel="noopener noreferrer" className="bg-black text-light px-1">Blockchain Capital</a></li>
                  <li><a href="http://dcg.co/" alt="Digital Currency Group" target="_blank" rel="noopener noreferrer" className="bg-black text-light px-1">Digital Currency Group</a></li>
                  <li><a href="http://twitter.com/@kevinrose" alt="Kevin Rose" target="_blank" rel="noopener noreferrer" className="bg-black text-light px-1">Kevin Rose</a></li>
                  <li><a href="http://qasaryounis.com/" alt="Qasar Younis" target="_blank" rel="noopener noreferrer" className="bg-black text-light px-1">Qasar Younis</a> former COO of Y Combinator</li>
                </ul>
              <li style={{ marginBottom: '1rem' }}>
                Assisted in the raising of a <a href="https://techcrunch.com/2017/01/05/blockstack-formerly-called-onename-just-raised-4-million/" alt="Blockstack, formerly called Onename, just raised $4 million" target="_blank" rel="noopener noreferrer" className="bg-black text-light px-1">$4M Series A</a> funding round led by Union Square Ventures (USV). Other investors included;
              </li>
                <ul style={{ marginTop: '0!important', marginBottom: '1rem' }}>
                  <li>Lux Capital</li>
                  <li>Digital Currency Group</li>
                  <li><a href="http://compound.vc/" alt="Compound VC" target="_blank" rel="noopener noreferrer" className="bg-black text-light px-1">Compound VC</a></li>
                  <li><a href="http://versionone.vc/" alt="Version One Ventures" target="_blank" rel="noopener noreferrer" className="bg-black text-light px-1">Version One Ventures</a></li>
                  <li><a href="http://twitter.com/kalvepuri" alt="Kal Vepuri" target="_blank" rel="noopener noreferrer" className="bg-black text-light px-1">Kal Vepuri</a></li>
                  <li><a href="http://rtf.vc/" alt="Rising Tide" target="_blank" rel="noopener noreferrer" className="bg-black text-light px-1">Rising Tide</a></li>
                  <li><a href="https://twitter.com/naval" alt="Naval Ravikant" target="_blank" rel="noopener noreferrer" className="bg-black text-light px-1">Naval Ravikant</a> (earlier investor)</li>
                </ul>
              <li style={{ marginBottom: '1rem' }}>
                Assisted in growing Blockstack's core blockchain user base from 35,000 to 75,000 users.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                Was a key contributor in building a community of blockchain developers from 0 to 13,000 community members.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                Designer and 1 of 2 developers to build the stand alone Blockstack Browser & initial variations of the current Blockstack Web Browser that was a <a href="https://twitter.com/guylepage3/status/889857953980964864" alt="Blockstack. A reinvention of the Internet for better privacy" target="_blank" rel="noopener noreferrer" className="bg-black text-light px-1">finalist</a> in the 2017 INDEX awards.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                In 2014, assisted in the <a href="http://bit.ly/2EmhH8p" alt="WPP agrees to acquire majority stake in digital technology consultancy Cognifide" target="_blank" rel="noopener noreferrer" className="bg-black text-light px-1">selling</a> of a large, 150 person digital firm based out of London to the world’s largest digital agency, <a href="https://www.wpp.com/" alt="WPP" target="_blank" rel="noopener noreferrer" className="bg-black text-light px-1">WPP</a>.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                Assisted a Canadian publicly traded technology company in designing a mobile app with over 20 million downloads.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                Guy has won multiple art director and interactive design awards including, LOTUS Award (Vancouver, Canada), Interactive, <a href="https://www.linkedin.com/in/guylepage/detail/treasury/position:33407171/?entityUrn=urn%3Ali%3Afs_treasuryMedia%3A(ACoAAACb1zIB9vl4eHGtAFrK6N_ukPQxAD0Hb_E%2C1553550404780)&section=position%3A33407171&treasuryCount=2" alt="LOTUS Award, Interactive, Best Website, www.elevatorstrategy.com 2004" target="_blank" rel="noopener noreferrer" className="bg-black text-light px-1"> Best Website</a>, 2004 and New York Festivals, <a href="https://www.linkedin.com/in/guylepage/" alt="New York Festivals, Best Brand Development 2005" target="_blank" rel="noopener noreferrer" className="bg-black text-light px-1">Best Brand</a> Development 2005.
              </li>
            </ul>
            <h3 className="h3-editorial">
              Experience
            </h3>
            <p>
              For a detailed list of who I’ve worked with please visit my LinkedIn profile.
            </p>
            <div className="subscribe mr-auto">
              <a
                className="btn btn-black btn-block mx-auto mb-4"
                style={{
                  padding: '12px 65px'
                }}
                href="http://www.linkedin.com/in/guylepage/" 
                role="button"
                tabIndex="1">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
