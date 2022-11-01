import React from 'react'
import "./Page.css"
import hero from "./image/me.png"
//import { Typewriter } from 'react-simple-typewriter'

const Page = () => {
  return (
    <div className="page">
      <section className="hero" id="page">
        <din className="container f_flex top">
          <div className="left top">
            <h3>Welcome to my world</h3>
            <h1>
              Hi, I'm <span>Adrian Carp</span>
            </h1>
            {/* <h2>
              a <span>
              <Typewriter
                words={['Junior Coder.', 'Developer']}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}/>
              </span>
            </h2> */}

            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore possimus repellat distinctio nesciunt consequatur odit minus, natus vel assumenda aperiam doloribus neque beatae maxime, quasi, incidunt doloremque a ex expedita!</p>
          
            <div className="hero_btn d_flex">
              <div className="col_1">
                <h4>Find with me</h4>
                <div className='button'>
                  <button className='btn_shadow'>
                    <i class='fab fa-facebook-f'></i>
                  </button>
                  <button className='btn_shadow'>
                    <i class='fab fa-instagram'></i>
                  </button>
                  <button className='btn_shadow'>
                    <i class='fab fa-linkedin-in'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>


          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </din>
      </section>
    </div>
  )
}

export default Page