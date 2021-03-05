
import React from 'react'

import Header from '../components/header'
import Farmer from '../images/nature1.jpg'

import Leaf from '../components/leaf'
import Svg2 from '../components/svg2'
import Svg3 from '../components/svg3'

import ModalOne from '../components/modalnature'
import ModalTwo from '../components/modalTwo'
import ModalThree from '../components/modalThree'

import NextPage from '../components/nextpage'

import Line1 from '../images/line1.svg'
import Line2 from '../images/line2.svg'
import Line3 from '../images/line3.svg'

import Sidebar from '../components/sidebar'




const Nature = () => {
 
for(let i = 0; i < document.querySelectorAll('.modal').length; i += 2){
  document.querySelectorAll('.modal')[i].style.backgroundColor = 'red';

}

function changeAnimation(){
      
    document.querySelector('.leaf').style.display = 'block' 
    document.querySelector('.leaf').style.transition = "all 1.5s ease-in-out";
  
  }
    return(

        <div>
          
          
         
            <div className='main-bg' style={{ backgroundImage: `url(${Farmer})` }}>
            
            <Header/>

            <div className='svg-animations'>
                <Leaf/>
                <Svg2/>
                <Svg3/>
            </div>
            


            <Sidebar/>
         
                <div className='circle-subpage'>
                   
                    <div className='yellow-button' id='business' >
                        <div className='circle-text'>
                            <span>N</span>
                            <br></br>
                            Nature
                        </div>
                    </div>

                    <div className='modal-main'>
                    
                    <img src={Line1} className='line' alt='line one' />
                 
                     <ModalOne title='nature' cssClass='modal-first' changeAnimation='changeAnimation()'/>
                     <img src={Line2} className='line two'/>
                     <ModalTwo title='ricola' cssClass='modal-second' >
                       <h3>h3</h3>
                     </ModalTwo>
                     <img src={Line3} className='line three'/>
                     <ModalThree title='new' cssClass='modal-third'/>
                    
                    </div>
                </div>

                
                <NextPage link='/people' link2='http://localhost:8000'/>
            </div>
            
        </div>
    )
}



export default Nature
