function rightarrow(){
    const source=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQntOQjPCfCnuCTlYdog7-BKHOeAoEt4zVxdA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFPeAkS__sA5Gow5bO_p2iAKh-Lb6RYkhUyg&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlWL8oxj1CcftbbMZhY8uhiryh3z61mXT_yg&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_KLXIwuYzh5s0eoEDjZ5Lbf9NqxcP4yNp0w&usqp=CAU"]
    let y=source.length;
  let x=document.getElementById("img");
  let currentImageIndex=parseInt(x.dataset.currentImageIndex)||0;
  currentImageIndex=(currentImageIndex + 1) % y;
  x.src=source[currentImageIndex];
  x.dataset.currentImageIndex=currentImageIndex;
  }
  
  function leftarrow(){
    const source=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQntOQjPCfCnuCTlYdog7-BKHOeAoEt4zVxdA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFPeAkS__sA5Gow5bO_p2iAKh-Lb6RYkhUyg&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlWL8oxj1CcftbbMZhY8uhiryh3z61mXT_yg&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_KLXIwuYzh5s0eoEDjZ5Lbf9NqxcP4yNp0w&usqp=CAU"]
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