function rightarrow(){
    const source=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpR14tfCIuS6h0nCorgQHAU7_KvfKp_I1w_A&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT6xY8wDX9AFlxOhUVhdftO0W9i4NHpBxo7g&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcyWU4M5dwGedGDYp7sdWqUMPuwLzbollgvQ&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP4MpGeNtBk2-jZqwh2p6itV1siVIOtbZoNQ&usqp=CAU"]
  let y=source.length;
  let x=document.getElementById("img");
  let currentImageIndex=parseInt(x.dataset.currentImageIndex)||0;
  currentImageIndex=(currentImageIndex + 1) % y;
  x.src=source[currentImageIndex];
  x.dataset.currentImageIndex=currentImageIndex;
  }
  
  function leftarrow(){
    const source=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpR14tfCIuS6h0nCorgQHAU7_KvfKp_I1w_A&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT6xY8wDX9AFlxOhUVhdftO0W9i4NHpBxo7g&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcyWU4M5dwGedGDYp7sdWqUMPuwLzbollgvQ&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP4MpGeNtBk2-jZqwh2p6itV1siVIOtbZoNQ&usqp=CAU"]
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