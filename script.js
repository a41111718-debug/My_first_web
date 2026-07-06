let num = 0
    const comment1 = document.getElementById("comment1")
    const put = document.getElementById("put")
    const send =document.getElementById("nnn")
    const img1=document.getElementById("img1")
    const btn1=document.getElementById("btn")
    const btn2 = document.getElementById("Btn")
    const btn3 = document.getElementById("BTn")
    btn1.addEventListener("click" ,function(){
      num ++
      if (num == 1){
        btn2.style.display="none"
        btn3.style.display="none"
        btn1.innerText="back"
       img1.style.display="block"
       comment1.style.display="block"
      }
      else if(num ==2){
        btn2.style.display="block"
        btn3.style.display="block"
        btn1.innerText="tea"
        img1.style.display="none"
        comment1.style.display="none"
        num=0
      }
    })
    btn2.addEventListener("click",function(){
      num ++
      if (num==1){
        btn1.style.display="none"
        btn3.style.display="none"
        img2.style.display="block"
        btn2.innerText="back"
      }
      else if(num ==2){
        btn1.style.display="block"
        btn3.style.display="block"
        img2.style.display="none"
        num=0 ;
        btn2.innerText="water"
      }
    })
    btn3.addEventListener("click",function(){
      num ++
      if (num==1){
        btn1.style.display="none"
        btn2.style.display="none"
        img3.style.display="block"
        btn3.innerText="back"
      }
      else if(num ==2){
        btn1.style.display="block"
        btn2.style.display="block"
        img3.style.display="none"
        btn3.innerText="coffee"
        num=0 ;}
    })
    send.addEventListener("click",function(){
      let text = put.value;
      console.log("which written is:"+ text);
      put.value="";
    })
