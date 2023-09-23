function cartype(){
    let x=document.getElementById("formtype").value;
    let y=document.getElementById("formvalue");
   for(let i=1;i<y.length;i++){
    y[i].style.display="block";
}
switch(x){
    case "toyota":
        for(let i=4;i<y.length;i++){
            y[i].style.display="none"; 
          }
          break;
    case "suzuki":
        for(let i=7;i<y.length;i++){
            y[i].style.display="none";
            
        }
        for(let i=1;i<4;i++){
            y[i].style.display="none";   
        }
        break;
    case "nissan":
        for(let i=10;i<y.length;i++){
            y[i].style.display="none";
            
        }
        for(let i=1;i<7;i++){
            y[i].style.display="none";   
        }
        break;
    case "hyundai":
        for(let i=1;i<10;i++){
            y[i].style.display="none";   
        }
        break;
    default:
        for(let i=1;i<y.length;i++){
            y[i].style.display="block";   
        }
}
}
function description1(){
    window.location.assign("feature.html");
}
function description2(){
    window.location.assign("vitz.html");
}

function description3(){
    window.location.assign("compact.html");
}
function description4(){
    window.location.assign("dzire.html");
}
function description5(){
    window.location.assign("spresso.html");
}
function description6(){
    window.location.assign("swift.html");
}
function description7(){
    window.location.assign("kicks.html");
}
function description8(){
    window.location.assign("juke.html");
}
function description9(){
    window.location.assign("qashqai.html");
}
function description10(){
    window.location.assign("tucson.html");
}
function description11(){
    window.location.assign("grandi10.html");
}
function description12(){
    window.location.assign("creta.html");
}

function match(){
    event.preventDefault();
    let x=document.getElementById("formtype").value;
    let y=document.getElementById("formvalue").value;
    if(x=="toyota" && y=="raize"){
    let z=document.getElementById("raizecollection");
    let p = z.parentElement;
    p.scrollIntoView({ behavior: "smooth" });
    let w= setInterval(toggle,500)
    function toggle(){
        p.style.boxShadow=p.style.boxShadow ? "":"0px 0px 80px #ffe71f"
    }
    setTimeout(function(){
        clearInterval(w);
        p.style.boxShadow="";
    },6000)
    }
    if(x=="toyota" && y=="vitz"){
        let z=document.getElementById("vitzimg");
        let p = z.parentElement;
        p.scrollIntoView({behavior:"smooth"});
        let w= setInterval(toggle,500)
                            function toggle(){
                                p.style.boxShadow=p.style.boxShadow ? "":"0px 0px 80px #ffe71f"
                            }
                            setTimeout(function(){
                                clearInterval(w);
                                p.style.boxShadow="";
                            },6000)
        }
        if(x=="toyota" && y=="compact"){
            let z=document.getElementById("compactimg");
            let p = z.parentElement;
            p.scrollIntoView({behavior:"smooth"});
            let w= setInterval(toggle,500)
                            function toggle(){
                                p.style.boxShadow=p.style.boxShadow ? "":"0px 0px 80px #ffe71f"
                            }
                            setTimeout(function(){
                                clearInterval(w);
                                p.style.boxShadow="";
                            },6000)
            }    
            if(x=="suzuki" && y=="dzire"){
                let z=document.getElementById("dzireimg");
                let p = z.parentElement;
                p.scrollIntoView({behavior:"smooth"});
                let w= setInterval(toggle,500)
                            function toggle(){
                                p.style.boxShadow=p.style.boxShadow ? "":"0px 0px 80px #ffe71f"
                            }
                            setTimeout(function(){
                                clearInterval(w);
                                p.style.boxShadow="";
                            },6000)
                }
                if(x=="suzuki" && y=="spresso"){
                    let z=document.getElementById("spressoimg");
                    let p = z.parentElement;
                    p.scrollIntoView({behavior:"smooth"});
                    let w= setInterval(toggle,500)
                            function toggle(){
                                p.style.boxShadow=p.style.boxShadow ? "":"0px 0px 80px #ffe71f"
                            }
                            setTimeout(function(){
                                clearInterval(w);
                                p.style.boxShadow="";
                            },6000)
                    }
                    if(x=="suzuki" && y=="swift"){
                        let z=document.getElementById("swiftimg");
                        let p = z.parentElement;
                    p.scrollIntoView({behavior:"smooth"});
                    let w= setInterval(toggle,500)
                            function toggle(){
                                p.style.boxShadow=p.style.boxShadow ? "":"0px 0px 80px #ffe71f"
                            }
                            setTimeout(function(){
                                clearInterval(w);
                                p.style.boxShadow="";
                            },6000)
                        }
                        if(x=="nissan" && y=="juke"){
                            let z=document.getElementById("jukeimg");
                            let p = z.parentElement;
                    p.scrollIntoView({behavior:"smooth"});
                    let w= setInterval(toggle,500)
                            function toggle(){
                                p.style.boxShadow=p.style.boxShadow ? "":"0px 0px 80px #ffe71f"
                            }
                            setTimeout(function(){
                                clearInterval(w);
                                p.style.boxShadow="";
                            },6000)
                            }
                            if(x=="nissan" && y=="qashqai"){
                                let z=document.getElementById("qashqaiimg");
                                let p = z.parentElement;
                                p.scrollIntoView({behavior:"smooth"});
                                let w= setInterval(toggle,500)
                                        function toggle(){
                                            p.style.boxShadow=p.style.boxShadow ? "":"0px 0px 80px #ffe71f"
                                        }
                                        setTimeout(function(){
                                            clearInterval(w);
                                            p.style.boxShadow="";
                                        },6000)
                                }
                                if(x=="nissan" && y=="kicks"){
                                    let z=document.getElementById("kicksimg");
                                    let p = z.parentElement;
                                    p.scrollIntoView({behavior:"smooth"});
                                    let w= setInterval(toggle,500)
                                            function toggle(){
                                                p.style.boxShadow=p.style.boxShadow ? "":"0px 0px 80px #ffe71f"
                                            }
                                            setTimeout(function(){
                                                clearInterval(w);
                                                p.style.boxShadow="";
                                            },6000)
                                    }
                                    if(x=="hyundai" && y=="tucson"){
                                        let z=document.getElementById("tucsonimg");
                                        let p = z.parentElement;
                                        p.scrollIntoView({behavior:"smooth"});
                                        let w= setInterval(toggle,500)
                                                function toggle(){
                                                    p.style.boxShadow=p.style.boxShadow ? "":"0px 0px 80px #ffe71f"
                                                }
                                                setTimeout(function(){
                                                    clearInterval(w);
                                                    p.style.boxShadow="";
                                                },6000)
                                        }
                                        if(x=="hyundai" && y=="creta"){
                                            let z=document.getElementById("cretaimg");
                                            let p = z.parentElement;
                                            p.scrollIntoView({behavior:"smooth"});
                                            let w= setInterval(toggle,500)
                                                    function toggle(){
                                                        p.style.boxShadow=p.style.boxShadow ? "":"0px 0px 80px #ffe71f"
                                                    }
                                                    setTimeout(function(){
                                                        clearInterval(w);
                                                        p.style.boxShadow="";
                                                    },6000)
                                            }
                                            if(x=="hyundai" && y=="grandi10"){
                                                let z=document.getElementById("grandi10img");
                                                let p = z.parentElement;
                    p.scrollIntoView({behavior:"smooth"});
                    let w= setInterval(toggle,500)
                            function toggle(){
                                p.style.boxShadow=p.style.boxShadow ? "":"0px 0px 80px #ffe71f"
                            }
                            setTimeout(function(){
                                clearInterval(w);
                                p.style.boxShadow="";
                            },6000)
                                                }
                                            }
            
function check(){
    let x=document.forms["myform"]["number"].value;
    let n=document.forms["myform"]["name"].value;
    let l=document.forms["myform"]["last"].value;
    let z=document.forms["myform"];
    event.preventDefault();
    let j= x.toString();
    let i=j.length;
    if(isNaN(x)){
       
        document.getElementById("warning").style.display="block";
        return false;
    }
    if(i>10 || i<10){
        document.getElementById("warning").style.display="block";
        return false;
    }
    else{
        document.getElementById("warning").style.display="none";
        alert("Thank you,"+n+" "+l+" for your approach our team will contact as soon as possible.");
        z.reset();
    }
}
function changeimg(){
    const source=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx8vtxqm4FcCizTxvepFvDe_BPXAjcIeMuUA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIywQn6xoHJe00lm7-Boo6gFWCOhUUW9G8vg&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Gxg-RV3IemzMd8B-FxeZZos8oxFZW6A2Qw&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSWNke83cp-ZUre1uaPJWPo0zZZ_K0NmQcLQ&usqp=CAU"]
  let y=source.length;
  let x=document.getElementById("raizeimg");
  let currentImageIndex=parseInt(x.dataset.currentImageIndex)||0;
  currentImageIndex=(currentImageIndex + 1) % y;
  x.src=source[currentImageIndex];
  x.dataset.currentImageIndex=currentImageIndex;
}
function changeimg2(){
    const source=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpR14tfCIuS6h0nCorgQHAU7_KvfKp_I1w_A&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT6xY8wDX9AFlxOhUVhdftO0W9i4NHpBxo7g&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcyWU4M5dwGedGDYp7sdWqUMPuwLzbollgvQ&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP4MpGeNtBk2-jZqwh2p6itV1siVIOtbZoNQ&usqp=CAU"]
    let y=source.length;
    let x=document.getElementById("vitzimg");
    let currentImageIndex=parseInt(x.dataset.currentImageIndex)||0;
    currentImageIndex=(currentImageIndex + 1) % y;
    x.src=source[currentImageIndex];
    x.dataset.currentImageIndex=currentImageIndex;
}
function changeimg3(){
 const source=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRSPWRPPo_KSwQYKur_87O-BKnXfLYLuUtug&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeqczNPC3vqIfDl3ZL73__k7zvUHCja5cmew&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqRtLLJFzT-4FzJDIizk5XIKWQMTR2e0iezTIGjiRYqLXqIbk2d3hgiZuQ3RUqGs-Qcas&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT0FS42skUeTGXKCLpz8cmon8YPvbb3WO33QDwSdHp9iBKU7iJ8bw-ppyycbggO3xjU8c&usqp=CAU"]
 let y=source.length;
 let x=document.getElementById("compactimg");
 let currentImageIndex=parseInt(x.dataset.currentImageIndex)||0;
 currentImageIndex=(currentImageIndex + 1) % y;
 x.src=source[currentImageIndex];
 x.dataset.currentImageIndex=currentImageIndex;
}
function changeimg4(){
    const source=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcO0rk4059TznTDlCB3z61tfP-V8_8MDYCiA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJYHOzTgX1WvF2oaiGtt7-tNZayT07hqHY2w&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmpO98FG7isWQa9ntQzhjhrVYJgghJWQeMnw&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQsuwOhOi_Yza5Gp22xXceSX_pWO_DRMQrVw&usqp=CAU"]
    let y=source.length;
 let x=document.getElementById("dzireimg");
 let currentImageIndex=parseInt(x.dataset.currentImageIndex)||0;
 currentImageIndex=(currentImageIndex + 1) % y;
 x.src=source[currentImageIndex];
 x.dataset.currentImageIndex=currentImageIndex;   
}
function changeimg5(){
    const source=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD6sRHYOaAAZ3Kp6lwxwIW5Oiup-EsbgoHig&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBo9o4BFe7-LWyQ0fSNCO8r2mHkJszK76KEg&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0j4N4hCO7s5fefd9S_Rrb9B5V9V7DDMBKpA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV6Oq1SmG50szcf9rED_LezycpDjiqseKUiQ&usqp=CAU"]
    let y=source.length;
    let x=document.getElementById("spressoimg");
    let currentImageIndex=parseInt(x.dataset.currentImageIndex)||0;
    currentImageIndex=(currentImageIndex + 1) % y;
    x.src=source[currentImageIndex];
    x.dataset.currentImageIndex=currentImageIndex;  
}
function changeimg6(){
    const source=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQntOQjPCfCnuCTlYdog7-BKHOeAoEt4zVxdA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFPeAkS__sA5Gow5bO_p2iAKh-Lb6RYkhUyg&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlWL8oxj1CcftbbMZhY8uhiryh3z61mXT_yg&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_KLXIwuYzh5s0eoEDjZ5Lbf9NqxcP4yNp0w&usqp=CAU"]
    let y=source.length;
    let x=document.getElementById("swiftimg");
    let currentImageIndex=parseInt(x.dataset.currentImageIndex)||0;
    currentImageIndex=(currentImageIndex + 1) % y;
    x.src=source[currentImageIndex];
    x.dataset.currentImageIndex=currentImageIndex;  
}
function changeimg7(){
    const source=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVBqO-eAM1elLCGsToh44pTDuqeal-24spYQ&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy_ObKPT7_1bmVGXw_x_nvaqnuySoKHQ9MSQ&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYSnrUr-ZdxEZooLMiK_LrmShHeQo2-9KISQ&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEIiL9toQpwE-8oizSNlVa7M4dgxZqTvW73g&usqp=CAU"]
    let y=source.length;
    let x=document.getElementById("kicksimg");
    let currentImageIndex=parseInt(x.dataset.currentImageIndex)||0;
    currentImageIndex=(currentImageIndex + 1) % y;
    x.src=source[currentImageIndex];
    x.dataset.currentImageIndex=currentImageIndex;  
}
function changeimg8(){
    const source=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTodZDFuC19AxPvx3xXQwoN5WEb8qURVeskOQ&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT15BVwRa85swBemVVmApH9g_UWPnY21JDN5g&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBkqkl9t6FiENLq7_ruSJXNS5q0RVU7awgew&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7v-Xe5JzSKY7Lys28YOaO5Ez4Wa1tN746hA&usqp=CAU"]
    let y=source.length;
    let x=document.getElementById("jukeimg");
    let currentImageIndex=parseInt(x.dataset.currentImageIndex)||0;
    currentImageIndex=(currentImageIndex + 1) % y;
    x.src=source[currentImageIndex];
    x.dataset.currentImageIndex=currentImageIndex;
}
function changeimg9(){
    const source=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO0sry_2mDq1aAon4MN2MH8Qa9G87fO3Tmzw&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPBm3dUvp91rt_hrOhssCR_EMtF80xoHVXtw&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz2irb6odbufrUhBd4bXJPYP52Vp_TjDNYHA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaR-_AbLRXT2u8awrlfPcfq6_rbeEvIgnBew&usqp=CAU"]
    let y=source.length;
    let x=document.getElementById("qashqaiimg");
    let currentImageIndex=parseInt(x.dataset.currentImageIndex)||0;
    currentImageIndex=(currentImageIndex + 1) % y;
    x.src=source[currentImageIndex];
    x.dataset.currentImageIndex=currentImageIndex;
}
function changeimg10(){
    const source=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRGo1fygnHxdqQhYuDcVO8otYpR6mFXKOnUg&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRERO-6tfbatT_KfXiQc7xMud2YxU_nP7dqug&usqp=CAU","https://www.prestigehyundai.net/static/dealer-11848/2020_tucson_dash_photo.jpg","https://www.car2020.fr/wp-content/uploads/2019/01/9vSBdERN.jpg"]
    let y=source.length;
    let x=document.getElementById("tucsonimg");
    let currentImageIndex=parseInt(x.dataset.currentImageIndex)||0;
    currentImageIndex=(currentImageIndex + 1) % y;
    x.src=source[currentImageIndex];
    x.dataset.currentImageIndex=currentImageIndex;
}
function changeimg11(){
    const source=["https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQnj9ekoL_JvCgUoxfCklwnotc1_YS-IUZKWlCRtyYY8Lu37oB1","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY_zjaHMs5C_rcq4nguzws1ImFoNkQAQEdZw&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw2XFZtZUuwC3vhjjsDkkmffYv2CoGxm0n4Q&usqp=CAU","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRpVJgJrq7rBWyo9WsUZSTnUSvEYS731l9wWLH7-MYFGXL1g9RR"]
    let y=source.length;
    let x=document.getElementById("grandi10img");
    let currentImageIndex=parseInt(x.dataset.currentImageIndex)||0;
    currentImageIndex=(currentImageIndex + 1) % y;
    x.src=source[currentImageIndex];
    x.dataset.currentImageIndex=currentImageIndex;
}
function changeimg12(){
    const source=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX2E_mpgYMi-iSuguWXK83O-dqwwR5zV5WGA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKHPGyZqYrCWTgkCV46LqdqdHyWXqNOB-Z4A&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5VJBfZ9YtrpXNVSjKfXhaZWiMFF9pAxJEIA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx1ptPtvjbJXg7DuCa0Hrf7OByuyfFOIyyZg&usqp=CAU"]
    let y=source.length;
    let x=document.getElementById("cretaimg");
    let currentImageIndex=parseInt(x.dataset.currentImageIndex)||0;
    currentImageIndex=(currentImageIndex + 1) % y;
    x.src=source[currentImageIndex];
    x.dataset.currentImageIndex=currentImageIndex;
}
function contact(){
    let z=document.getElementById("contact");
    z.scrollIntoView({behavior:"smooth"})
}
function home(){
    let z=document.getElementById("navh");
    z.scrollIntoView({behavior:"smooth"})
}
function about(){
    let z=document.getElementById("aboutus");
    z.scrollIntoView({behavior:"smooth"})
}
function display(){
    let i=document.getElementById("checkboxicon");
    let c=document.getElementById("checkbox");
    c.addEventListener('change',function(){
        if(i.classList.contains("fa-bars")&& checkbox.checked){
            i.classList.remove("fa-bars");
            i.classList.add("fa-times");
           
        }
        else{ 
           
            i.classList.remove("fa-times");
            i.classList.add("fa-bars");
        }
    })
   
   
}