function rightarrow(){
    const source=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD6sRHYOaAAZ3Kp6lwxwIW5Oiup-EsbgoHig&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBo9o4BFe7-LWyQ0fSNCO8r2mHkJszK76KEg&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0j4N4hCO7s5fefd9S_Rrb9B5V9V7DDMBKpA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV6Oq1SmG50szcf9rED_LezycpDjiqseKUiQ&usqp=CAU"]
    let y=source.length;
  let x=document.getElementById("img");
  let currentImageIndex=parseInt(x.dataset.currentImageIndex)||0;
  currentImageIndex=(currentImageIndex + 1) % y;
  x.src=source[currentImageIndex];
  x.dataset.currentImageIndex=currentImageIndex;
  }
  
  function leftarrow(){
    const source=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD6sRHYOaAAZ3Kp6lwxwIW5Oiup-EsbgoHig&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBo9o4BFe7-LWyQ0fSNCO8r2mHkJszK76KEg&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0j4N4hCO7s5fefd9S_Rrb9B5V9V7DDMBKpA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV6Oq1SmG50szcf9rED_LezycpDjiqseKUiQ&usqp=CAU"]
   let y=source.length;
  let x=document.getElementById("img");
  let currentImageIndex=parseInt(x.dataset.currentImageIndex)||0;
      currentImageIndex=(currentImageIndex - 1);
      if(currentImageIndex<0){
          currentImageIndex=3;
          x.src=source[currentImageIndex];
          x.dataset.currentImageIndex=currentImageIndex;
      }
      else{
          x.src=source[currentImageIndex];
          x.dataset.currentImageIndex=currentImageIndex;
      }
      
  }