/* global $ */

import React from 'react';
import cx from 'classnames';
import { Router, Route, Link } from 'react-router';
import { shuffle } from 'lodash/collection';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.loadCarbonAds();
    // this.renderConnectedDots();

    const strings = shuffle(['Express', 'Hapi', 'Meteor', 'React', 'Angular 2', 'Bootstrap', 'Foundation', 'Gulp',
      'Webpack', 'Mocha', 'Jasmine', 'Node.js', 'Jade', 'Handlebars', 'Nunjucks', 'Bourbon Neat', 'Sass', 'LESS',
      'Redux', 'React Router', 'ECMAScript 2015', 'Babel', 'GraphQL', 'Browserify', 'Chai', 'Sinon', 'MongoDB', 'MySQL',
      'PosgreSQL', 'RethinkDB', 'Passport', 'PostCSS', 'Socket.IO', 'Istanbul', 'OAuth 2.0'
    ]);

    const h1 = this.refs.heroHeading;
    $(h1).typed({
      strings: strings,
      typeSpeed: 0,
      backDelay: 1200,
      loop: true
    });
  }

  loadCarbonAds() {
    let carbonAdsContainer = this.refs.carbonAds;
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=sahatyalkabovcom';
    script.id = '_carbonads_js';
    carbonAdsContainer.appendChild(script);
  }

  renderConnectedDots() {
    let canvas = this.refs.connectedDots;
    let ctx = canvas.getContext('2d');
    let colorDot = '#fff';
    let color = '#fff';

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.display = 'block';
    ctx.fillStyle = colorDot;
    ctx.lineWidth = .1;
    ctx.strokeStyle = color;

    var mousePosition = {
      x: 30 * canvas.width / 100,
      y: 30 * canvas.height / 100
    };

    var dots = {
      nb: 350,
      distance: 60,
      d_radius: 100,
      array: []
    };

    function Dot() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;

      this.vx = -.5 + Math.random();
      this.vy = -.5 + Math.random();

      this.radius = Math.random();
    }

    Dot.prototype = {
      create: function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fill();
      },

      animate: function() {

        for (let i = 0; i < dots.nb; i++) {

          var dot = dots.array[i];

          if (dot.y < 0 || dot.y > canvas.height) {
            dot.vx = dot.vx;
            dot.vy = -dot.vy;
          }
          else if (dot.x < 0 || dot.x > canvas.width) {
            dot.vx = -dot.vx;
            dot.vy = dot.vy;
          }
          dot.x += dot.vx;
          dot.y += dot.vy;
        }
      },

      line: function() {
        for (let i = 0; i < dots.nb; i++) {
          for (let j = 0; j < dots.nb; j++) {
            var i_dot = dots.array[i];
            var j_dot = dots.array[j];

            if ((i_dot.x - j_dot.x) < dots.distance && (i_dot.y - j_dot.y) < dots.distance && (i_dot.x - j_dot.x) > -dots.distance && (i_dot.y - j_dot.y) > -dots.distance) {
              if ((i_dot.x - mousePosition.x) < dots.d_radius && (i_dot.y - mousePosition.y) < dots.d_radius && (i_dot.x - mousePosition.x) > -dots.d_radius && (i_dot.y - mousePosition.y) > -dots.d_radius) {
                ctx.beginPath();
                ctx.moveTo(i_dot.x, i_dot.y);
                ctx.lineTo(j_dot.x, j_dot.y);
                ctx.stroke();
                ctx.closePath();
              }
            }
          }
        }
      }
    };

    function createDots() {
      let dot;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < dots.nb; i++) {
        dots.array.push(new Dot());
        dot = dots.array[i];

        dot.create();
      }

      dot.line();
      dot.animate();
    }

    window.onmousemove = function(parameter) {
      mousePosition.x = parameter.pageX;
      mousePosition.y = parameter.pageY;
    };

    mousePosition.x = window.innerWidth / 2;
    mousePosition.y = window.innerHeight / 2;

    setInterval(createDots, 1000 / 30);
  }

  render() {
    return (
      <div className="hero">
        <canvas ref="connectedDots"/>

        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li><a href="https://github.com/sahat/boilerplate/issues" target="_blank"><i className="ion-bug"></i>Report Issues</a></li>
                <li><a href="https://github.com/sahat/boilerplate/blob/master/CONTRIBUTING.md" target="_blank"><i className="ion-pull-request"></i>Contributing</a></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li className="tweet-button">
                  <a className="twitter-share-button" href="https://twitter.com/intent/tweet" />
                </li>

                <li className="facebook-share-button">
                  <div className="fb-share-button" data-href="http://www.your-domain.com/your-page.html" data-layout="button_count"></div>
                </li>

                <li className="linkedin-button">
                  <script type="IN/Share" data-counter="right"></script>
                </li>

                <li className="plusone-button">
                  <div className="g-plusone" data-size="medium" data-href="http://google.com"></div>
                </li>

                <li>
                  <a href="https://github.com/sahat/boilerplate" className="navbar-icon">
                    <i className="ion-social-github"/>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container hero-container">
          <div className="wrapper">
            <div className="box middle"></div>
            <div className="box upper"></div>
            <div className="box lower"></div>
          </div>

          <h1><strong>Mega</strong> Boilerplate</h1>
          <div className="lead">
            Hand-crafted starter kits with focus on simplicity and ease of use.
            <div className="featuring">
              Featuring <span style={{color:'white'}} ref="heroHeading"></span>
            </div>
            <ul className="list-inline">
              <li><img src="/img/svg/demo.svg" alt="Live Demo"/> <a href="#">Live Demo</a></li>
            </ul>
          </div>
          <iframe src="https://ghbtns.com/github-btn.html?user=sahat&repo=satellizer&type=star&count=true" frameBorder="0" scrolling="0" width="100px" height="20px"></iframe>
          <iframe src="https://ghbtns.com/github-btn.html?user=sahat&type=follow&count=true" frameBorder="0" scrolling="0" width="170px" height="20px"></iframe>
          <div>
            <img className="hero-arrow hidden-xs" src="/img/arrow.png" alt="Arrow"/>
            <span>Don't forget to <i className="ion-star"/> on GitHub if you liked this project!</span>
          </div>
          <div ref="carbonAds"></div>
        </div>
      </div>
    );
  }
}

export default Header;
