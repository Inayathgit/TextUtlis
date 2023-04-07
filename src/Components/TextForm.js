import React,{useState} from 'react'



export default function TextForm(props) {
    const [text,setText] = useState("");
    const handleUpClick = ()=>{
        
        let newText = text.toUpperCase();
       setText(newText)
       props.showalert("Convert to Uppercase","success")
    }
    const handlelowClick = ()=>{
        
        let newText = text.toLowerCase();
       setText(newText)
       props.showalert("Convert to Lower case","success")
    }
    const handleCopyText = ()=>{
      let text = document.getElementById('textarea')
      text.select();
      navigator.clipboard.writeText(text.value)
      props.showalert("Text copied to clipboard","success")
  }
    const handleReverseText = ()=>{
        
 
       let arrayText = text.split('')
       let  reverseText = arrayText.reverse()
       let  newText = reverseText.join("")
       
        setText(newText)
        props.showalert("Convert to reverse","success")
    
    }
    const handleChange = (event) =>{
        
        setText(event.target.value)
    }
  return (
    <>
    
       <div className="form-group my - 4">
        <div className="container">
    <h1 style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h1>

    <textarea className="form-control" id="textarea" value = {text} rows="8" onChange = {handleChange} style={{backgroundColor:props.mode==='dark'?'#30b0c9':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
    <button disabled = {text.length===0} className="btn btn-primary mt-2 mx-2" onClick = {handleUpClick}  >Convert to Uppercase</button>
    <button  disabled = {text.length===0}className="btn btn-primary mt-2 mx-2" onClick = {handlelowClick} >Convert to Lowercase</button>
    <button  disabled = {text.length===0} className="btn btn-primary mt-2 mx-2" onClick = {handleReverseText} >Reverse Text</button>
    <button  disabled = {text.length===0} className="btn btn-primary mt-2 mx-2" onClick = {handleCopyText} >Copy Text</button>
  </div>
  </div>
  <div className="container" style = {{color:props.mode === 'dark'?'white':'black'}}>
    <h2>Your Text Summary</h2>
    <p>{text.split(' ').filter((element)=> {return element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008 * text.split(' ').filter((element)=> {return element.length!==0}).length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:'Enter text to preview it here'}</p>
  </div>
    
    </>
  )
}
