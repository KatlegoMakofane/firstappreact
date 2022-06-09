
import pic from './components/images/Nikelogo.png';
import pic1 from './components/images/yellowdots1.PNG';
import greendotsimg from './components/images/greendots.PNG';
import navalogo from './components/images/nikebgimage.png';
import cartbasket from './components/images/bluecart1.svg';
import arrow from './components/images/greenarrow.PNG'
import arcshoe from './components/images/nikeshoereral.png'
import scrollshoe1 from './components/images/redshoebg.png'
import scrollshoe2 from './components/images/brownshoe2bg.png'
import scrollshoe3 from './components/images/whiteshoef.png'
import scrollshoe4 from './components/images/brownshoe4bg.png'


import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="nav">
        
        <div className="navimage">
          <img src={navalogo} alt ="logo"></img>
        </div>
      
        
        <ul>
        
          <li>MEN</li>
          <li>WOMEN</li>
          <li>KIDS</li>
          <li>CUSTOMIZE</li>
          <li>FAVOURITES</li>
        </ul>
        <div className="cartcontainer">
          <img src={cartbasket}></img>
            <div className="cartnumbercontainer">
              <h2>1</h2>
            </div>
          
        </div>
        </div>  
      
        <img  src={pic}></img>
       <div className='dive'>
           <img src={greendotsimg}></img>
           
       </div>
       <div className="img2">
       <img  src={pic1}></img>
       </div>
      </header>
      <main>
        <div className="title">
           <h1>NIKE 
               <br></br>BLAZER
                  <br></br>MID
                        <br></br>
                            <span>$260</span>
                               <br></br>
                                   <button>GET IT NOW 
                                          <img src={arrow}></img>
                                   </button>
                
             </h1>
             <div className="progressbarcontainer">
                    <p>01/05</p>
                   <div class="container">
                  <div class="skills html">

                  </div>
              </div>
                </div>
        </div>
       
          <h1 className="NIKE">NIKE</h1>
       
        <div className="contentcontainer">
           <div className="shoecontainer">
           <img src={arcshoe}></img>
          
          </div>
          <div className="verticalcurve">
             
             </div>
          <div className="colorcontainer">
           
          <div class="containercolor">
              <div class="color firstball"></div>
          </div>

         
          <div class="containercolor">
             <div class="color secondball"></div>
          </div>

           
             <div class="containercolor">
                 <div class="color thirdball"></div>
            </div>
          </div>
        </div>

        <div className="scrollcontainer">
        <div className="bottomshoecontainer">
            <span className="leftcontainer">
            <img src={scrollshoe1}></img>
            </span>
            <span className="rightcontainer">
               <h1>NIKE AIR HUARHE PREMIUM <br></br>
               
                   
               icons 
                   <br></br>
                   
                     $185
                   <br></br>
                   <span>3COLORS</span>
                 </h1>
            </span>
          </div>

          <div className="bottomshoecontainer1">
            <span className="leftcontainer1">
            <img src={scrollshoe2}></img>
            </span>
            <span className="rightcontainer1">
            <h1>NIKE AIR FORCE 1 HIGH<br></br>
               
                   
               icons 
                   <br></br>
                   
                     $185
                   <br></br>
                   <span>3COLORS</span>
                 </h1>
            </span>
          </div>
          
          <div className="bottomshoecontainer2">
            <span className="leftcontainer2">
            <img src={scrollshoe3}></img>
            </span>
            <span className="rightcontainer2">
            <h1>NIKE AIR SPAN 11 PREMIUM <br></br>
               
                   
               icons 
                   <br></br>
                   
                     $235
                   <br></br>
                   <span>3COLORS</span>
                 </h1>
            </span>
          </div>

          <div className="bottomshoecontainer3">
            <span className="leftcontainer3">
            <img src={scrollshoe4}></img>
            </span>
            <span className="rightcontainer3">
            <h1>NIKE AIR HUARHE PREMIUM <br></br>
               
                   
               icons 
                   <br></br>
                   
                     $270
                   <br></br>
                   <span>3COLORS</span>
                 </h1>
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
