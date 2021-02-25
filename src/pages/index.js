
import { Link } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from '../components/header'
import Farmer from '../images/main-bg.jpg'


import Test from '../images/farmer.png'
import Nature from '../components/nature'

const IndexPage = () => {

  const nature = document.getElementById("nature")
  const people= document.getElementById("nature")
  const business = document.getElementById("nature")
  const ricola = document.getElementById("nature")

  const buttons = [nature, people, business, ricola]


  function changeBackground(e){
    e.target.style.background = { backgroundImage: `url(${Test})` }
  }
  

  return(

    <div className='main'>
      <div className='main-bg'  style={{ backgroundImage: `url(${Farmer})` }}>
        <Header/>
        <div className='all-circles'>

          <Link>
            <div className='circle ' id='nature' onMouseOver={changeBackground}>
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
