function rightarrow(){
    const source=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX2E_mpgYMi-iSuguWXK83O-dqwwR5zV5WGA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKHPGyZqYrCWTgkCV46LqdqdHyWXqNOB-Z4A&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5VJBfZ9YtrpXNVSjKfXhaZWiMFF9pAxJEIA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx1ptPtvjbJXg7DuCa0Hrf7OByuyfFOIyyZg&usqp=CAU"]
    let y=source.length;
  let x=document.getElementById("img");
  let currentImageIndex=parseInt(x.dataset.currentImageIndex)||0;
  currentImageIndex=(currentImageIndex + 1) % y;
  x.src=source[currentImageIndex];
  x.dataset.currentImageIndex=currentImageIndex;
  }
  
  function leftarrow(){
    const source=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX2E_mpgYMi-iSuguWXK83O-dqwwR5zV5WGA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKHPGyZqYrCWTgkCV46LqdqdHyWXqNOB-Z4A&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5VJBfZ9YtrpXNVSjKfXhaZWiMFF9pAxJEIA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx1ptPtvjbJXg7DuCa0Hrf7OByuyfFOIyyZg&usqp=CAU"]
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