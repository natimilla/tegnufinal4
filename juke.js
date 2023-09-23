function rightarrow(){
    const source=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTodZDFuC19AxPvx3xXQwoN5WEb8qURVeskOQ&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT15BVwRa85swBemVVmApH9g_UWPnY21JDN5g&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBkqkl9t6FiENLq7_ruSJXNS5q0RVU7awgew&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7v-Xe5JzSKY7Lys28YOaO5Ez4Wa1tN746hA&usqp=CAU"]
    let y=source.length;
  let x=document.getElementById("img");
  let currentImageIndex=parseInt(x.dataset.currentImageIndex)||0;
  currentImageIndex=(currentImageIndex + 1) % y;
  x.src=source[currentImageIndex];
  x.dataset.currentImageIndex=currentImageIndex;
  }
  
  function leftarrow(){
    const source=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTodZDFuC19AxPvx3xXQwoN5WEb8qURVeskOQ&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT15BVwRa85swBemVVmApH9g_UWPnY21JDN5g&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBkqkl9t6FiENLq7_ruSJXNS5q0RVU7awgew&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7v-Xe5JzSKY7Lys28YOaO5Ez4Wa1tN746hA&usqp=CAU"]
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