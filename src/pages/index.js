
import { Link } from "gatsby"
import React from "react"


import SEO from "../components/seo"

import Header from '../components/header'
import Farmer from '../images/nature-one.jpg'


import Nature from '../images/nature.jpg'


const IndexPage = () => {

  const nature = document.getElementById("nature")
  const people= document.getElementById("nature")
  const business = document.getElementById("nature")
  const ricola = document.getElementById("nature")

  const buttons = [nature, people, business, ricola]

  const main = document.querySelector('.main-bg')


  function mainBackground(){
    main.style.backgroundImage = `url(${Nature})` 
    main.style.transition = "all 1s ease-in-out";
  }

  function changeBackground(){
    main.style.backgroundImage = `url(${Farmer})` 
    main.style.transition = "all 1s ease-in-out";
  }
  

  return(

    <div className='main'>
      <div className='main-bg'  style={{ backgroundImage: `url(${Nature})` }}>
        <Header/>
        <div className='all-circles'>

          <Link>
            <div className='circle ' id='nature' onMouseOver={changeBackground} onMouseLeave={mainBackground}>
              <div className='circle-text'>
                <span>N</span>
                <br></br>
                Nature
              </div>
            </div>
          </Link>

          <Link>
            <div className='circle' id='people'>
              <div className='circle-text' >
                <span>P</span>
                <br></br>
                People
                </div>
            </div>
          </Link>
    
          <Link>
            <div className='circle' id='business'>
              <div className='circle-text'>
                <span>B</span>
                <br></br>
                Business
              </div>
            </div>
          </Link>

          <Link>
            <div className='circle' id='ricola'>
              <div className='circle-text'>
                <span>R</span>
                <br></br>
                Ricola
              </div>
            </div>
          </Link>

        </div>  
      </div>
    </div>
  )
}

export default IndexPage
