function rightarrow(){
    const source=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRGo1fygnHxdqQhYuDcVO8otYpR6mFXKOnUg&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRERO-6tfbatT_KfXiQc7xMud2YxU_nP7dqug&usqp=CAU","https://www.prestigehyundai.net/static/dealer-11848/2020_tucson_dash_photo.jpg","https://www.car2020.fr/wp-content/uploads/2019/01/9vSBdERN.jpg"]
    let y=source.length;
  let x=document.getElementById("img");
  let currentImageIndex=parseInt(x.dataset.currentImageIndex)||0;
  currentImageIndex=(currentImageIndex + 1) % y;
  x.src=source[currentImageIndex];
  x.dataset.currentImageIndex=currentImageIndex;
  }
  
  function leftarrow(){
    const source=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRGo1fygnHxdqQhYuDcVO8otYpR6mFXKOnUg&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRERO-6tfbatT_KfXiQc7xMud2YxU_nP7dqug&usqp=CAU","https://www.prestigehyundai.net/static/dealer-11848/2020_tucson_dash_photo.jpg","https://www.car2020.fr/wp-content/uploads/2019/01/9vSBdERN.jpg"]
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