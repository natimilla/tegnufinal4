function rightarrow(){
    const source=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO0sry_2mDq1aAon4MN2MH8Qa9G87fO3Tmzw&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPBm3dUvp91rt_hrOhssCR_EMtF80xoHVXtw&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz2irb6odbufrUhBd4bXJPYP52Vp_TjDNYHA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaR-_AbLRXT2u8awrlfPcfq6_rbeEvIgnBew&usqp=CAU"]
    let y=source.length;
  let x=document.getElementById("img");
  let currentImageIndex=parseInt(x.dataset.currentImageIndex)||0;
  currentImageIndex=(currentImageIndex + 1) % y;
  x.src=source[currentImageIndex];
  x.dataset.currentImageIndex=currentImageIndex;
  }
  
  function leftarrow(){
    const source=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO0sry_2mDq1aAon4MN2MH8Qa9G87fO3Tmzw&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPBm3dUvp91rt_hrOhssCR_EMtF80xoHVXtw&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz2irb6odbufrUhBd4bXJPYP52Vp_TjDNYHA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaR-_AbLRXT2u8awrlfPcfq6_rbeEvIgnBew&usqp=CAU"]
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