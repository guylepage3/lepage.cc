import React, { Component } from 'react';
import HeaderLight from './HeaderLight';

class PatternLib extends Component {
  render() {
    return (
      <div>
      <HeaderLight />
      <div 
        style={{
          paddingTop: '57px',
          backgroundColor: '#212121'
        }}>
      </div>
      <main 
        role="main" 
        className="
          container 
          mb-auto 
          mt-auto 
          mx-auto 
          anima-fadein
        ">
        <div className="row px-3">
          <div className="col-lg-12 col-xl-11 mx-auto">
            <h1 className="display-1 text-white mb-1">
              Aa
            </h1>
            <ul className="list-inline text-white mb-6"
              style={{
                fontSize: '1rem'
              }}>
              <li className="list-inline-item mr-3">
                SF Pro
                <span className="small ml-3">›</span> 
              </li>
              <li className="list-inline-item">
                <span style={{ fontWeight: '900' }}>Black</span>
                <span className="small ml-2">›</span>
              </li>
              <li className="list-inline-item">
                <span style={{ fontWeight: '800' }}>Heavy</span>
                <span className="small ml-2">›</span>
              </li>
              <li className="list-inline-item">
                <span style={{ fontWeight: '700' }}>Bold</span>
                <span className="small ml-2">›</span>
              </li>
              <li className="list-inline-item">
                <span style={{ fontWeight: '600' }}>Semibold</span>
                <span className="small ml-2">›</span>
              </li>
              <li className="list-inline-item">
                <span style={{ fontWeight: '500' }}>Medium</span>
                <span className="small ml-2">›</span>
              </li>
              <li className="list-inline-item">
                <span style={{ fontWeight: '400' }}>Regular</span>
                <span className="small ml-2">›</span>
              </li>
              <li className="list-inline-item">
                <span style={{ fontWeight: '300' }}>Light</span>
                <span className="small ml-2">›</span>
              </li>
              <li className="list-inline-item">
                <span style={{ fontWeight: '200' }}>Ultralight</span>
                <span className="small ml-2">›</span>
              </li>
              <li className="list-inline-item">
                <span style={{ fontWeight: '100' }}>Thin</span>
              </li>
            </ul>
            <div className="row">
              <div className="col-md-6">
                <p className="lead text-white">
                  Sed ac dolor finibus libero bibendum maximus. Cras aliquet dapibus nunc, eu mattis felis mollis quis. Integer ut ullamcorper tellus. Donec porttitor nunc non sapien sagittis ultrices. Duis gravida diam mi, in vulputate neque volutpat ac.
                </p>
                <p className="text-white">
                  Curabitur feugiat pellentesque sem ac lobortis. Vestibulum finibus finibus odio, vel maximus justo. Mauris lacinia dui ut velit mollis, id finibus lectus pulvinar. Vivamus tellus felis, imperdiet at vestibulum sit amet, faucibus ut orci. Vivamus nec erat sagittis, sodales sem eget, malesuada quam. Nullam ultrices risus id luctus suscipit. Etiam id massa pharetra, rhoncus felis id, laoreet diam. &nbsp;
                  <span className="pattern-library-typography-footnote">
                    &uarr;&nbsp;<code className="pattern-libarary-typography-code">.lead</code> with <code className="pattern-libarary-typography-code">p</code> paragraph.
                  </span>
                </p>
              </div>
              <div className="col-md-6">
                <p className="lead-lg text-white font-italic text-center">
                  Typography is the craft of endowing human language with visual form. <br />
                  ― Robert Bringhurst
                </p>
                <p className=" text-white">
                  Ut a imperdiet dui. Mauris egestas semper est ac imperdiet. Ut placerat libero et mi lobortis placerat. In consectetur fermentum accumsan. Nam et dolor eget ex ultricies convallis. Donec ullamcorper ullamcorper mauris nec laoreet. Pellentesque hendrerit, sapien at lacinia fringilla, dolor metus varius diam, feugiat ullamcorper massa neque et justo. &nbsp;
                  <span className="pattern-library-typography-footnote">
                    &uarr;&nbsp;<code className="pattern-libarary-typography-code">.lead-lg</code> centered with <code className="pattern-libarary-typography-code">p</code> paragraph.
                  </span>
                </p>
              </div>
            </div>
            <h1 className="text-white">
              Duis ullamcorper feugiat sodales. Maecenas in nisl venenatis, volutpat nisl quis.
            </h1>
            <p className="text-white">
              Nam sit amet tincidunt erat. Etiam non tortor finibus, tincidunt purus sed, pretium sapien. Nulla facilisi. Aenean faucibus consequat leo ut aliquam. Quisque pharetra diam ac suscipit tristique. Nam consectetur vestibulum magna sed commodo. Phasellus ut tempus urna, sed rhoncus arcu. Praesent interdum dignissim felis ac facilisis. Phasellus consequat molestie augue. Maecenas quis massa purus. Vivamus quis ipsum nec tellus tempor pellentesque. In cursus molestie felis eget laoreet. Cras vitae condimentum odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum tincidunt tempus quam nec laoreet. Duis suscipit justo in mi rutrum aliquet.
            </p>
            <p className="text-white">
              Sed maximus aliquam lectus eget sodales. Donec id quam interdum, varius magna at, scelerisque purus. Mauris neque risus, lacinia feugiat nisi quis, porta interdum magna. Etiam eu auctor ligula, eu commodo ligula. Donec eu facilisis sem. Vivamus eget ante vel odio dictum porttitor in at neque. Proin vulputate sollicitudin tellus sit amet auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. &nbsp;
              <span className="pattern-library-typography-footnote">
                &uarr;&nbsp;<code className="pattern-libarary-typography-code">h1,.h1</code> with two <code className="pattern-libarary-typography-code">p</code> paragraphs.
              </span>
            </p>

            <div 
              className="
                container 
                typetemplate-boxy-line 
                text-center
                ">
            </div>
            
            <h2 className="text-white">
              Aenean in velit ut ante congue euismod. Sed ligula enim, facilisis id posuere vel, feugiat non diam. Donec ullamcorper molestie maximus.
            </h2>
            <div className="container typetemplate-boxy-img-box"></div>
            <p className="text-white">
              Sed sapien erat, finibus vitae dolor eget, lobortis dignissim ante. Aliquam pharetra ac sem vitae convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed urna turpis, interdum quis venenatis in, porta nec mauris. Etiam aliquet nibh eu vulputate pellentesque.
            </p>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel facilisis sapien. Vestibulum nec viverra magna, quis cursus lectus. Maecenas egestas elit nisi, a fringilla mi feugiat eget. Suspendisse sollicitudin tristique fringilla. Ut non risus nulla. &nbsp;
              <span className="pattern-library-typography-footnote">
                &uarr;&nbsp;<code className="pattern-libarary-typography-code">h2,.h2</code> with <code className="pattern-libarary-typography-code">img</code> and two <code className="pattern-libarary-typography-code">p</code> paragraphs.
              </span>
            </p>
            <h2 className="text-white">
              Praesent sodales felis pretium orci aliquet egestas. Nunc eget interdum augue.
            </h2>
            <p className="text-white">
              Sed sapien erat, finibus vitae dolor eget, lobortis dignissim ante. Aliquam pharetra ac sem vitae convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed urna turpis, interdum quis venenatis in, porta nec mauris. Etiam aliquet nibh eu vulputate pellentesque.
            </p>
            <p className="text-white">
              Think of variables as a way to store information that you want to reuse throughout your stylesheet. You can store things like colors, font stacks, or any CSS value you think you'll want to reuse. Sass uses the $ symbol to make something a variable
            </p>
            <p className="text-white">
              Maecenas in rhoncus augue. Fusce diam purus, consequat non enim eget, feugiat dictum velit. Vestibulum ac tincidunt mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent vulputate tortor quam, non pulvinar ante porta at. Maecenas finibus bibendum euismod. Maecenas vehicula nunc turpis, non dictum dui scelerisque non. In vulputate convallis porttitor. Cras fringilla diam dolor, eget commodo erat dapibus sed. Nunc in quam congue, aliquet nulla eget, gravida lacus. Quisque fringilla felis a lorem volutpat consequat. Nunc nibh neque, lobortis vel elementum vel, mattis ac neque. &nbsp;
              <span className="pattern-library-typography-footnote">
                &uarr;&nbsp;<code className="pattern-libarary-typography-code">h2,.h2</code> with <code className="pattern-libarary-typography-code">img</code> and three <code className="pattern-libarary-typography-code">p</code> paragraphs.
              </span>
            </p>

            <div 
              className="
                container 
                typetemplate-boxy-line 
                text-center
                ">
            </div>

            <h1 className="text-white">
              Praesent sodales felis pretium orci aliquet egestas. Nunc eget interdum augue.
            </h1>
            <p className="text-white">
              Sed sapien erat, finibus vitae dolor eget, lobortis dignissim ante. Aliquam pharetra ac sem vitae convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed urna turpis, interdum quis venenatis in, porta nec mauris. &nbsp;
              <span className="pattern-library-typography-footnote">
                &uarr;&nbsp;<code className="pattern-libarary-typography-code">h1,.h1</code> with <code className="pattern-libarary-typography-code">p</code> paragraph.
              </span>
            </p>
            <h2 className="text-white">
              Praesent sodales felis pretium orci aliquet egestas. Nunc eget interdum augue.
            </h2>
            <p className="text-white">
              Sed sapien erat, finibus vitae dolor eget, lobortis dignissim ante. Aliquam pharetra ac sem vitae convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed urna turpis, interdum quis venenatis in, porta nec mauris. &nbsp;
              <span className="pattern-library-typography-footnote">
                &uarr;&nbsp;<code className="pattern-libarary-typography-code">h2,.h2</code> with <code className="pattern-libarary-typography-code">p</code> paragraph.
              </span>
            </p>
            <h3 className="text-white">
              Praesent sodales felis pretium orci aliquet egestas. Nunc eget interdum augue.
            </h3>
            <p className="text-white">
              Sed sapien erat, finibus vitae dolor eget, lobortis dignissim ante. Aliquam pharetra ac sem vitae convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed urna turpis, interdum quis venenatis in, porta nec mauris. &nbsp;
              <span className="pattern-library-typography-footnote">
                &uarr;&nbsp;<code className="pattern-libarary-typography-code">h3,.h3</code> with <code className="pattern-libarary-typography-code">p</code> paragraph.
              </span>
            </p>
            <h4 className="text-white">
              Praesent sodales felis pretium orci aliquet egestas. Nunc eget interdum augue.
            </h4>
            <p className="text-white">
              Sed sapien erat, finibus vitae dolor eget, lobortis dignissim ante. Aliquam pharetra ac sem vitae convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed urna turpis, interdum quis venenatis in, porta nec mauris. &nbsp;
              <span className="pattern-library-typography-footnote">
                &uarr;&nbsp;<code className="pattern-libarary-typography-code">h4,.h4</code> with <code className="pattern-libarary-typography-code">p</code> paragraph.
              </span>
            </p>
            <h5 className="text-white">
              Praesent sodales felis pretium orci aliquet egestas. Nunc eget interdum augue.
            </h5>
            <p className="text-white">
              Sed sapien erat, finibus vitae dolor eget, lobortis dignissim ante. Aliquam pharetra ac sem vitae convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed urna turpis, interdum quis venenatis in, porta nec mauris. &nbsp;
              <span className="pattern-library-typography-footnote">
                &uarr;&nbsp;<code className="pattern-libarary-typography-code">h5,.h5</code> with <code className="pattern-libarary-typography-code">p</code> paragraph.
              </span>
            </p>
            <h6 className="text-white">
              Praesent sodales felis pretium orci aliquet egestas. Nunc eget interdum augue.
            </h6>
            <p className="text-white">
              Sed sapien erat, finibus vitae dolor eget, lobortis dignissim ante. Aliquam pharetra ac sem vitae convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed urna turpis, interdum quis venenatis in, porta nec mauris. &nbsp;
              <span className="pattern-library-typography-footnote">
                &uarr;&nbsp;<code className="pattern-libarary-typography-code">h6,.h6</code> with <code className="pattern-libarary-typography-code">p</code> paragraph.
              </span>
            </p>

            <div className="lead text-white">
              Praesent sodales felis pretium orci aliquet egestas. Nunc eget interdum augue. Sed suscipit mauris et quam sagittis, eget rhoncus diam lobortis. Integer nec eros magna. Duis non ipsum tincidunt, sodales nulla sed, tempor eros.
            </div>
            <p className="text-white-50">
              Sed sapien erat, finibus vitae dolor eget, lobortis dignissim ante. Aliquam pharetra ac sem vitae convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed urna turpis, interdum quis venenatis in, porta nec mauris. &nbsp;
              <span className="pattern-library-typography-footnote">
                &uarr;&nbsp;<code className="pattern-libarary-typography-code">.lead</code> with <code className="pattern-libarary-typography-code">p</code> paragraph.
              </span>
            </p>

            <div 
              className="
                container 
                typetemplate-boxy-line 
                text-center
                ">
            </div>

            <h1 className="display-1 text-white">
              Praesent sodales felis pretium orci aliquet egestas. Nunc eget interdum augue.
            </h1>
            <p className="text-white">
              Sed sapien erat, finibus vitae dolor eget, lobortis dignissim ante. Aliquam pharetra ac sem vitae convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed urna turpis, interdum quis venenatis in, porta nec mauris. &nbsp;
              <span className="pattern-library-typography-footnote">
                &uarr;&nbsp;<code className="pattern-libarary-typography-code">.display-1</code> with <code className="pattern-libarary-typography-code">p</code> paragraph.
              </span>
            </p>
            <h1 className="display-2 text-white">
              Praesent sodales felis pretium orci aliquet egestas. Nunc eget interdum augue.
            </h1>
            <p className="text-white">
              Sed sapien erat, finibus vitae dolor eget, lobortis dignissim ante. Aliquam pharetra ac sem vitae convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed urna turpis, interdum quis venenatis in, porta nec mauris. &nbsp;
              <span className="pattern-library-typography-footnote">
                &uarr;&nbsp;<code className="pattern-libarary-typography-code">.display-2</code> with <code className="pattern-libarary-typography-code">p</code> paragraph.
              </span>
            </p>
            <h1 className="display-3 text-white">
              Praesent sodales felis pretium orci aliquet egestas. Nunc eget interdum augue.
            </h1>
            <p className="text-white">
              Sed sapien erat, finibus vitae dolor eget, lobortis dignissim ante. Aliquam pharetra ac sem vitae convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed urna turpis, interdum quis venenatis in, porta nec mauris. &nbsp;
              <span className="pattern-library-typography-footnote">
                &uarr;&nbsp;<code className="pattern-libarary-typography-code">.display-3</code> with <code className="pattern-libarary-typography-code">p</code> paragraph.
              </span>
            </p>
            <h1 className="display-4 text-white">
              Praesent sodales felis pretium orci aliquet egestas. Nunc eget interdum augue.
            </h1>
            <p className="text-white">
              Sed sapien erat, finibus vitae dolor eget, lobortis dignissim ante. Aliquam pharetra ac sem vitae convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed urna turpis, interdum quis venenatis in, porta nec mauris. &nbsp;
              <span className="pattern-library-typography-footnote">
                &uarr;&nbsp;<code className="pattern-libarary-typography-code">.display-4</code> with <code className="pattern-libarary-typography-code">p</code> paragraph.
              </span>
            </p>

          </div>
        </div>
      </main>
      </div>
    );
  }
}

export default PatternLib;
