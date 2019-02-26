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
              maxWidth: '850px'
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
              Guy Lepage, is the founder of <a href="http://universe.engineering" alt="Universe Labs" target="_blank" rel="noopener noreferrer" className="bg-black text-light mx-1">&nbsp;Universe Labs&nbsp;</a>, a blockchain agnostic, decentralized web accessibility node network. Guy is an open source product UX/UI designer and front-end developer with 19 years of industry experience.
            </p>
            <h3 className="h3-editorial">
              Bio
            </h3>
            <p>
              International award-winning senior product and UX/UI designer, marketing expert and entrepreneur with 19+ years experience working on some of the world’s largest brands and most exciting startups.
            </p>
            <p>
            First hire at <a href="http://blockstack.org" alt="Blockstack" target="_blank" rel="noopener noreferrer" className="bg-black text-light mx-1">&nbsp;Blockstack&nbsp;</a>, a venture backed blockchain startup who has built a new decentralized internet for decentralized applications. Guy is an entrepreneur with a passion for business, design and technology. He is a former digital advertising agency business founder and is an internationally recognized designer. Guy took a non-traditional route and dropped out of College to pursue design and entrepreneurship. His career path has grown from a Newspaper Art Direction, to Creative Director with ad agencies and tech companies, to the pursuit and passion for software startups, design and technology.
            </p>
            <h3 className="h3-editorial">
              Recent Highlights
            </h3>
            <ul>
              <li style={{ marginBottom: '1rem' }}>
                Was the first hire at <a href="http://blockstack.org" alt="Blockstack" target="_blank" rel="noopener noreferrer" className="bg-black text-light mx-1">&nbsp;Blockstack&nbsp;</a>, a blockchain startup working closely with the founders and designed and built 25+ products, including the world's first decentralized web browser, chrome extensions, native apps, web apps, websites, and more... All completed over a 2.5 yr period.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                Was one of the core contributors to <a href="https://venturebeat.com/2017/12/04/blockstack-raises-52-million-to-build-a-parallel-internet-where-you-own-all-your-data/" alt="Blockstack raises $52 million to build a parallel internet where you own all your data" target="_blank" rel="noopener noreferrer" className="bg-black text-light mx-1">&nbsp;Blockstack’s $52M ICO&nbsp;</a> and token distribution. VC’s who participated in the ICO include;
              </li>
                <ul style={{ marginTop: '0!important', marginBottom: '1rem' }}>
                  <li><a href="http://usv.com" alt="Union Square Ventures (USV)" target="_blank" rel="noopener noreferrer" className="bg-black text-light mx-1">&nbsp;Union Square Ventures (USV)&nbsp;</a></li>
                  <li><a href="http://foundationcapital.com/" alt="Foundation Capital" target="_blank" rel="noopener noreferrer" className="bg-black text-light mx-1">&nbsp;Foundation Capital&nbsp;</a></li>
                  <li><a href="http://www.luxcapital.com/" alt="Lux Capital" target="_blank" rel="noopener noreferrer" className="bg-black text-light mx-1">&nbsp;Lux Capital&nbsp;</a></li>
                  <li><a href="http://winklevosscapital.com/" alt="Winklevoss Capital" target="_blank" rel="noopener noreferrer" className="bg-black text-light mx-1">&nbsp;Winklevoss Capital&nbsp;</a></li>
                  <li><a href="http://blockchain.capital/" alt="Blockchain Capital" target="_blank" rel="noopener noreferrer" className="bg-black text-light mx-1">&nbsp;Blockchain Capital&nbsp;</a></li>
                  <li><a href="http://dcg.co/" alt="Digital Currency Group" target="_blank" rel="noopener noreferrer" className="bg-black text-light mx-1">&nbsp;Digital Currency Group&nbsp;</a></li>
                  <li><a href="http://twitter.com/@kevinrose" alt="Kevin Rose" target="_blank" rel="noopener noreferrer" className="bg-black text-light mx-1">&nbsp;Kevin Rose&nbsp;</a></li>
                  <li><a href="http://qasaryounis.com/" alt="Qasar Younis" target="_blank" rel="noopener noreferrer" className="bg-black text-light mx-1">&nbsp;Qasar Younis&nbsp;</a> former COO of <a href="http://www.ycombinator.com/" alt="Y Combinator" target="_blank" rel="noopener noreferrer" className="bg-black text-light mx-1">&nbsp;Y Combinator&nbsp;</a></li>
                </ul>
              <li style={{ marginBottom: '1rem' }}>
                Assisted in the raising of a <a href="https://techcrunch.com/2017/01/05/blockstack-formerly-called-onename-just-raised-4-million/" alt="Blockstack, formerly called Onename, just raised $4 million" target="_blank" rel="noopener noreferrer" className="bg-black text-light mx-1">&nbsp;$4M Series A funding round&nbsp;</a> led by <a href="http://usv.com" alt="Union Square Ventures (USV)" target="_blank" rel="noopener noreferrer" className="bg-black text-light mx-1">&nbsp;Union Square Ventures (USV)&nbsp;</a>. Other investors included;
              </li>
                <ul style={{ marginTop: '0!important', marginBottom: '1rem' }}>
                  <li><a href="http://www.luxcapital.com/" alt="Lux Capital" target="_blank" rel="noopener noreferrer" className="bg-black text-light mx-1">&nbsp;Lux Capital&nbsp;</a></li>
                  <li><a href="http://dcg.co/" alt="Digital Currency Group" target="_blank" rel="noopener noreferrer" className="bg-black text-light mx-1">&nbsp;Digital Currency Group&nbsp;</a></li>
                  <li><a href="http://compound.vc/" alt="Compound VC" target="_blank" rel="noopener noreferrer" className="bg-black text-light mx-1">&nbsp;Compound VC&nbsp;</a></li>
                  <li><a href="http://versionone.vc/" alt="Version One Ventures" target="_blank" rel="noopener noreferrer" className="bg-black text-light mx-1">&nbsp;Version One Ventures&nbsp;</a></li>
                  <li><a href="http://twitter.com/kalvepuri" alt="Kal Vepuri" target="_blank" rel="noopener noreferrer" className="bg-black text-light mx-1">&nbsp;Kal Vepuri&nbsp;</a></li>
                  <li><a href="http://rtf.vc/" alt="Rising Tide" target="_blank" rel="noopener noreferrer" className="bg-black text-light mx-1">&nbsp;Rising Tide&nbsp;</a></li>
                  <li><a href="https://twitter.com/naval" alt="Naval Ravikant" target="_blank" rel="noopener noreferrer" className="bg-black text-light mx-1">&nbsp;Naval Ravikant&nbsp;</a> (earlier investor)</li>
                </ul>
              <li style={{ marginBottom: '1rem' }}>
                Assisted in growing the core blockchain user base from 35,000 to 75,000 users.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                Was a key contributor in building a community of blockchain developers from 0 to 13,000 community members.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                Guy sits on the Board of Advisors to <a href="https://news.net-cents.com/2018/03/21/blockstacks-guy-lepage-joins-netcents-technologys-board-advisors/" alt="NetCents Technology" target="_blank" rel="noopener noreferrer" className="bg-black text-light mx-1">&nbsp;NetCents Technology&nbsp;</a>, a publicly traded tech company trading in <a href="https://www.bloomberg.com/quote/NC:CN" alt="NC:Canadian Sec Stock Quote - NetCents Technology Inc - Bloomberg Markets" target="_blank" rel="noopener noreferrer" className="bg-black text-light mx-1">&nbsp;Canada&nbsp;</a> and <a href="https://www.bloomberg.com/quote/26N:GR" alt="26N:Frankfurt Stock Quote - NetCents Technology Inc - Bloomberg Markets" target="_blank" rel="noopener noreferrer" className="bg-black text-light mx-1">&nbsp;Germany&nbsp;</a>.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                Designed a the worlds first decentralized web browser that was a <a href="https://twitter.com/guylepage3/status/889857953980964864" alt="Blockstack. A reinvention of the Internet for better privacy" target="_blank" rel="noopener noreferrer" className="bg-black text-light mx-1">&nbsp;finalist in the 2017 INDEX awards&nbsp;</a>.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                Part of the New York and Silicon Valley tech startup community.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                In 2014, <a href="http://bit.ly/2EmhH8p" alt="WPP agrees to acquire majority stake in digital technology consultancy Cognifide" target="_blank" rel="noopener noreferrer" className="bg-black text-light mx-1">&nbsp;assisted in the selling of a large, 150 person digital firm based out of London&nbsp;</a> to the world’s largest digital agency, <a href="https://www.wpp.com/" alt="WPP" target="_blank" rel="noopener noreferrer" className="bg-black text-light mx-1">&nbsp;WPP&nbsp;</a>.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                Assisted a Canadian publicly traded technology company in designing a mobile app with over 20 million downloads.
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
