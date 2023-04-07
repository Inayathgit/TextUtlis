import React,{useState} from 'react'

export default function About(props) {
    const [btntext,setText] =useState('Enable dark mode')
    // const [mystyle,setmystyle]= useState({
    //     color:"black",
    //     backgroundColor:"white"
    // })
    // const toggleStyle= ()=>{
    //     if(mystyle.color==='white'){
    //         setmystyle({
    //         color:"black",
    //         backgroundColor:"white"}
    //         )
    //         setText("Enable Dark Mode")
    //     }
    //     else{
    //         setmystyle({
    //         color:"white",
    //         backgroundColor:"black"}
    //         )
    //         setText("Enable Light Mode")
        
    //     }
        
    // }
    let mystyle = {
      color:props.mode=='dark'?'white':'black',
      backgroundColor: props.mode == 'dark'?'rgb(3, 33, 82)':'white'
    }
  return (
    <div className = "container my-4"style={mystyle}> 
    <h2>About Us</h2>
      <div class="accordion" id="accordionExample" style={mystyle}>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        TextUtils
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" style={mystyle} data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>It is website to manipulate the text the way you want.</strong>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed"  style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       features
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" style={mystyle} data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>Converting text to upper and lower case.Making the text reverse and to Copy the text</strong>
      </div>
    </div>
  </div>
   {/* <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" style={mystyle} data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div> 
  </div> */}
</div>

    </div>
  )
}
