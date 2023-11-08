/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import 'bootstrap/dist/css/bootstrap.css'
import './assets/app.css'
import './assets/normalize.css'
import land from './assets/images/landing-image.png'
import meg from './assets/images/megamenu.png'

import ava1 from './assets/images/avatar-01.png'
import ava2 from './assets/images/avatar-02.png'
import ava3 from './assets/images/avatar-03.png'
import g1 from './assets/images/gallery-01.png'
import g2 from './assets/images/gallery-02.png'
import g3 from './assets/images/gallery-03.jpg'
import g4 from './assets/images/gallery-04.png'
import g5 from './assets/images/gallery-05.jpg'
import g6 from './assets/images/gallery-06.png'
import cat from './assets/images/cat-01.jpg'
import cat1 from './assets/images/cat-02.jpg'
import cat2 from './assets/images/cat-03.jpg'
import cat3 from './assets/images/cat-04.jpg'
import cat4 from './assets/images/cat-05.jpg'
import cat5 from './assets/images/cat-06.jpg'
import axios, { Axios } from 'axios'
import { useState } from 'react'

function App() {

  // const [generatedExcuse, setGeneratedExcuse] = useState("")
  // const fetchExcuse = (ex) => {
  //   axios.get(`https://excuser-three.vercel.app/v1/excuse/${ex}/`).then(
  //     (res) => {
  //       setGeneratedExcuse(res.data[0].excuse)
  //     }
  //   );
  // }

  return (
    <>
      <div className="header" id="header">
        <div className="container">
          <a href="#" className="logo">Hraki</a>
          <ul className="main-nav">
            <li><a href="#articles">Movies</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#state">State</a></li>
            <li>
              <a href="#">Other Links</a>
              <div className="mega-menu">
                <div className="image">
                  <img src={meg} alt="" />
                </div>
                <ul className="links">
                  <li>
                    <a href="#testimonials"
                    > Testimonials</a
                    >
                  </li>
                  <li>
                    <a href="#team"
                    > Team Members</a
                    >
                  </li>
                  <li>
                    <a href="#services"
                    > Services</a
                    >
                  </li>
                  <li>
                    <a href="#our-skills"
                    > Our Skills</a
                    >
                  </li>
                  <li>
                    <a href="#work-steps"
                    > How It Works</a
                    >
                  </li>
                </ul>
                <ul className="links">
                  <li>
                    <a href="#events"
                    > Events</a
                    >
                  </li>
                  <li>
                    <a href="#pricing"
                    > Pricing Plans</a
                    >
                  </li>
                  <li>
                    <a href="#video"
                    ><i className="far fa-play-circle fa-fw"></i> Top Videos</a
                    >
                  </li>
                  <li>
                    <a href="#stats"
                    > Stats</a
                    >
                  </li>
                  <li>
                    <a href="#discount"
                    > Request A Discount</a
                    >
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="landing">
        <div className="container">
          <div className="text">
            <h1>Welcome, To Hraki Movies</h1>
            <p>
              Here Iam gonna share everything about my life. Books Iam reading,
              Games Iam Playing, Stories and Events
            </p>
          </div>
          <div className="image">
            <img src={land} alt="" />
          </div>
        </div>
        <a href="#articles" className="go-down">
          <i className="fas fa-angle-double-down fa-2x"></i>
        </a>
      </div>
      <div className="articles" id="articles">
        <h2 className="main-title">articles</h2>
        <div className="container">
          <div className="box">
            <img src={cat} alt="" />
            <div className="content">
              <h3>Test Title</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores.
              </p>
            </div>
            <div className="info">
              <a href="#">Read More</a>
            </div>
          </div>
          <div className="box">
            <img src={cat1} alt="" />
            <div className="content">
              <h3>Test Title</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores.
              </p>
            </div>
            <div className="info">
              <a href="#">Read More</a>
            </div>
          </div>
          <div className="box">
            <img src={cat2} alt="" />
            <div className="content">
              <h3>Test Title</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores.
              </p>
            </div>
            <div className="info">
              <a href="#">Read More</a>
            </div>
          </div>
          <div className="box">
            <img src={cat3} alt="" />
            <div className="content">
              <h3>Test Title</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores.
              </p>
            </div>
            <div className="info">
              <a href="#">Read More</a>
            </div>
          </div>
          <div className="box">
            <img src={cat4} alt="" />
            <div className="content">
              <h3>Test Title</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores.
              </p>
            </div>
            <div className="info">
              <a href="#">Read More</a>
            </div>
          </div>
          <div className="box">
            <img src={cat5} alt="" />
            <div className="content">
              <h3>Test Title</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores.
              </p>
            </div>
            <div className="info">
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
      <div className="spikes"></div>
      <div className="testimonials" id="testimonials">
        <h2 className="main-title">Testimonials</h2>

        <div className="container">
          <div className="box">
            <img src={ava1} alt="" />
            <h3>Mohamed Farag</h3>
            <span className="title">Full Stack Web Developer</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et
              reiciendis voluptatum, amet est natus quaerat ducimus
            </p>
          </div>
          <div className="box">
            <img src={ava2} alt="" />
            <h3>Raed ALhraki</h3>
            <span className="title">Full Stack Web Developer</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et
              reiciendis voluptatum, amet est natus quaerat ducimus
            </p>
          </div>
          <div className="box">
            <img src={ava3} alt="" />
            <h3>Mohamed Alhraki</h3>
            <span className="title">Full Stack Web Developer</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et
              reiciendis voluptatum, amet est natus quaerat ducimus
            </p>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="container">
          <div className="box">
            <h3>Hraki</h3>
            <p className="text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
              nulla rem, dignissimos iste aspernatur
            </p>
          </div>
          <div className="box">
          </div>
          <div className="box">
            <div className="line">

              <div className="info">
                Jordan, aydoun, Inside The Sphinx, Room Number 220
              </div>
            </div>
            <div className="line">
              <div className="info">Business Hours: From 10:00 To 18:00</div>
            </div>
            <div className="line">
              <div className="info">
                <span>+962791986721</span>
                <span>+20198765432</span>
              </div>
            </div>
          </div>
          <div className="box footer-gallery">
            <img decoding="async" src={g1} alt="" />
            <img decoding="async" src={g2} alt="" />
            <img decoding="async" src={g3} alt="" />
            <img decoding="async" src={g4} alt="" />
            <img decoding="async" src={g5} alt="" />
            <img decoding="async" src={g6} alt="" />
          </div>
        </div>
        <p className="copyright">Made With &lt;3 By Ahmad Alhraki</p>
      </div>
    </>
  )
}

export default App




