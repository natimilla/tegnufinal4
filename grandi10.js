function rightarrow(){
    const source=["https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQnj9ekoL_JvCgUoxfCklwnotc1_YS-IUZKWlCRtyYY8Lu37oB1","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY_zjaHMs5C_rcq4nguzws1ImFoNkQAQEdZw&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw2XFZtZUuwC3vhjjsDkkmffYv2CoGxm0n4Q&usqp=CAU","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRpVJgJrq7rBWyo9WsUZSTnUSvEYS731l9wWLH7-MYFGXL1g9RR"]
    let y=source.length;
  let x=document.getElementById("img");
  let currentImageIndex=parseInt(x.dataset.currentImageIndex)||0;
  currentImageIndex=(currentImageIndex + 1) % y;
  x.src=source[currentImageIndex];
  x.dataset.currentImageIndex=currentImageIndex;
  }
  
  function leftarrow(){
    const source=["https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQnj9ekoL_JvCgUoxfCklwnotc1_YS-IUZKWlCRtyYY8Lu37oB1","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY_zjaHMs5C_rcq4nguzws1ImFoNkQAQEdZw&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw2XFZtZUuwC3vhjjsDkkmffYv2CoGxm0n4Q&usqp=CAU","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRpVJgJrq7rBWyo9WsUZSTnUSvEYS731l9wWLH7-MYFGXL1g9RR"]
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