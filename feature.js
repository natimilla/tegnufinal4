
function rightarrow(){
  const source=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx8vtxqm4FcCizTxvepFvDe_BPXAjcIeMuUA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIywQn6xoHJe00lm7-Boo6gFWCOhUUW9G8vg&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Gxg-RV3IemzMd8B-FxeZZos8oxFZW6A2Qw&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSWNke83cp-ZUre1uaPJWPo0zZZ_K0NmQcLQ&usqp=CAU"];
let y=source.length;
let x=document.getElementById("img");
let currentImageIndex=parseInt(x.dataset.currentImageIndex)||0;
currentImageIndex=(currentImageIndex + 1) % y;
x.src=source[currentImageIndex];
x.dataset.currentImageIndex=currentImageIndex;
}

function leftarrow(){
    const source=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx8vtxqm4FcCizTxvepFvDe_BPXAjcIeMuUA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIywQn6xoHJe00lm7-Boo6gFWCOhUUW9G8vg&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Gxg-RV3IemzMd8B-FxeZZos8oxFZW6A2Qw&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSWNke83cp-ZUre1uaPJWPo0zZZ_K0NmQcLQ&usqp=CAU"];
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
