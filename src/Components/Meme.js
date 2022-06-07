import React from "react";
import memesData from "../memesData";

function Meme(){
  let randomPic
  const [memeImage, getMemeImage] = React.useState("")
  console.log(memeImage)
  
  function getNewImage(){
    let Array = [];
    memesData.data.memes.map(function foo(elem){
      return    Array.push(elem.url)
    })
    
    randomPic = Array[Math.floor(Math.random()*Array.length)];
    console.log(randomPic)
    getMemeImage(randomPic)
  }
  

  return(
    <div className="memeComponent">
      <div className="memeComponent__input-container">
      <input input="text" placeholder="Shut up"></input>
      <input input="text" placeholder="and take my money"></input>
      </div>
      
      <button 
      onClick={getNewImage}>
        Get a new meme image
        <img 
      src="images/mem_image.png" /></button>
      <div className="meme-image_container">
        <img src={`${memeImage}`}></img>
      </div>
      
     
      
    </div>
  )
}
export default Meme