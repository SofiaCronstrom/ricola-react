import React from 'react'

const Sidebar = () => {
    
    function openNav(){
    document.querySelector(".sidebar").style.width ="500px";
    document.querySelector(".main-bg").style.marginRight = "500px";
    }

    function closeNav (){
    document.querySelector(".sidebar").style.width ="0px";
    document.querySelector(".main-bg").style.marginRight= "0px";
    }


    return(
        <div>
           <button className='openButton' onClick={openNav}></button>
           
            <div className="sidebar" id="my-sidebar">
              <button className='closeButton' onClick={closeNav}>x</button>
               <h3 className='h3-sidebar'>Action made</h3>
                <div className='image'></div>
                 <div className="sidebar-text">
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dignissim quis lacus volutpat pellentesque. Ut vel ex pharetra, rhoncus tellus at, ornare nibh. Nam vitae nunc non purus eleifend faucibus. Ut fringilla quis nisl in consequat. Nunc a finibus nisi. Nunc diam mauris, pretium nec aliquam non, pulvinar eget turpis.</p> 
                   
                   <p>In et dolor efficitur, tincidunt lacus non, luctus ex. Cras sit amet vestibulum eros. Pellentesque tempor, justo quis dictum posuere, justo lacus consequat lorem, vitae suscipit arcu ligula eget nisl. Duis non
                   elementum neque. Praesent dui orci euismod ac porta sed, porta eget ipsum. Nam augue est, rhoncus a tempor in, laoreet sit amet purus. 
                   In et dolor efficitur, tincidunt lacus non, luctus ex. Cras sit amet vestibulum eros. Pellentesque tempor, justo quis dictum posuere, justo lacus consequat lorem, vitae suscipit arcu ligula eget nisl. Duis non elementum neque. Praesent dui orci, euismod ac porta sed, porta eget ipsum. Nam augue est, rhoncus a tempor in, laoreet sit amet purus. 
                   In et dolor efficitur, tincidunt lacus non, luctus ex. Cras sit amet vestibulum eros. Pellentesque tempor, justo quis dictum posuere, justo lacus consequat lorem, vitae suscipit arcu ligula eget nisl. Duis non elementum neque. Praesent dui orci, euismod ac porta sed, porta eget ipsum. Nam augue est, rhoncus a tempor in, laoreet sit amet purus.</p>
                 </div>
               
            </div>
        </div>
    )



}

export default Sidebar