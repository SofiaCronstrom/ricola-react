
import { Link } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from '../components/header'


const IndexPage = () => {


  return(

    <div className='main'>
    <div className='main-bg'>
    <Header/>
    <div className='all-circles'>

    <Link>
    <div className='circle'>
      <div className='circle-text'>
        <span>N</span>
        <br></br>
        Nature
        </div>
    </div>
    </Link>

    <Link>
      <div className='circle'>
        <div className='circle-text'>
          <span>P</span>
          <br></br>
          People
          </div>
      </div>
    </Link>
    
    <Link>
      <div className='circle'>
        <div className='circle-text'>
          <span>B</span>
          <br></br>
          Business
        </div>
      </div>
    </Link>

    <Link>
      <div className='circle'>
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
