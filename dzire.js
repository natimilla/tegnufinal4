function rightarrow(){
    const source=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcO0rk4059TznTDlCB3z61tfP-V8_8MDYCiA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJYHOzTgX1WvF2oaiGtt7-tNZayT07hqHY2w&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmpO98FG7isWQa9ntQzhjhrVYJgghJWQeMnw&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQsuwOhOi_Yza5Gp22xXceSX_pWO_DRMQrVw&usqp=CAU"]
    let y=source.length;
  let x=document.getElementById("img");
  let currentImageIndex=parseInt(x.dataset.currentImageIndex)||0;
  currentImageIndex=(currentImageIndex + 1) % y;
  x.src=source[currentImageIndex];
  x.dataset.currentImageIndex=currentImageIndex;
  }
  
  function leftarrow(){
    const source=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcO0rk4059TznTDlCB3z61tfP-V8_8MDYCiA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJYHOzTgX1WvF2oaiGtt7-tNZayT07hqHY2w&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmpO98FG7isWQa9ntQzhjhrVYJgghJWQeMnw&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQsuwOhOi_Yza5Gp22xXceSX_pWO_DRMQrVw&usqp=CAU"]
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