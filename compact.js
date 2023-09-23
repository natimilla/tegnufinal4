function rightarrow(){
    const source=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRSPWRPPo_KSwQYKur_87O-BKnXfLYLuUtug&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeqczNPC3vqIfDl3ZL73__k7zvUHCja5cmew&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqRtLLJFzT-4FzJDIizk5XIKWQMTR2e0iezTIGjiRYqLXqIbk2d3hgiZuQ3RUqGs-Qcas&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT0FS42skUeTGXKCLpz8cmon8YPvbb3WO33QDwSdHp9iBKU7iJ8bw-ppyycbggO3xjU8c&usqp=CAU"]
    let y=source.length;
  let x=document.getElementById("img");
  let currentImageIndex=parseInt(x.dataset.currentImageIndex)||0;
  currentImageIndex=(currentImageIndex + 1) % y;
  x.src=source[currentImageIndex];
  x.dataset.currentImageIndex=currentImageIndex;
  }
  
  function leftarrow(){
    const source=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRSPWRPPo_KSwQYKur_87O-BKnXfLYLuUtug&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeqczNPC3vqIfDl3ZL73__k7zvUHCja5cmew&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqRtLLJFzT-4FzJDIizk5XIKWQMTR2e0iezTIGjiRYqLXqIbk2d3hgiZuQ3RUqGs-Qcas&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT0FS42skUeTGXKCLpz8cmon8YPvbb3WO33QDwSdHp9iBKU7iJ8bw-ppyycbggO3xjU8c&usqp=CAU"]
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