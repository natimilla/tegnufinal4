function rightarrow(){
    const source=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVBqO-eAM1elLCGsToh44pTDuqeal-24spYQ&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy_ObKPT7_1bmVGXw_x_nvaqnuySoKHQ9MSQ&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYSnrUr-ZdxEZooLMiK_LrmShHeQo2-9KISQ&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEIiL9toQpwE-8oizSNlVa7M4dgxZqTvW73g&usqp=CAU"]
    let y=source.length;
  let x=document.getElementById("img");
  let currentImageIndex=parseInt(x.dataset.currentImageIndex)||0;
  currentImageIndex=(currentImageIndex + 1) % y;
  x.src=source[currentImageIndex];
  x.dataset.currentImageIndex=currentImageIndex;
  }
  
  function leftarrow(){
    const source=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVBqO-eAM1elLCGsToh44pTDuqeal-24spYQ&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy_ObKPT7_1bmVGXw_x_nvaqnuySoKHQ9MSQ&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYSnrUr-ZdxEZooLMiK_LrmShHeQo2-9KISQ&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEIiL9toQpwE-8oizSNlVa7M4dgxZqTvW73g&usqp=CAU"]
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