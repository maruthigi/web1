

let a=document.querySelector(".login")
let b=document.querySelector("section1")                        //login form togglr here
a.addEventListener("click",()=>{
    b.classList.toggle("super")
})
let c=document.querySelector(".toggle")
let d=document.querySelector(".menu")
c.addEventListener("click",function(){                         //menu togggle here 
    d.classList.toggle("active")
})
function formSub(){
   event.preventDefault(event)
let u=document.getElementById("user").value
let p=document.getElementById("password").value                    //form validation and store d here
let q=document.getElementById("cpassword").value
let e=document.querySelector("#sp a1") 
let g=document.querySelector("#spa2")
localStorage.setItem("user",u)
localStorage.setItem("password",p)
localStorage.setItem("cpassword",q)

if(u.length<5){
    e.innerHTML="please enter above five letters"
   // alert("please entyer")

}
else if(p!=q){
    g.innerHTML="please enter correct password"
  // alert("please password")

}
else{
    alert("sucessfully completed")
    clear()
}
}
function ar(){
    let us=document.getElementById("user1").value
    let pas1=document.getElementById("password1").value
   let pa= localStorage.getItem(u)
   let qa= localStorage.getItem(q)                              //getting localstore values here
    if(us!=pa){
        alert("please enter correct user name")
    }
    else if(pas1!=qa){
        alert("please enter coreect password")
    }
    else{
        alert("sucessfully loing")
    }
}
function clear(){
    let u=document.getElementById("user").value=""
let p=document.getElementById("password").value=""                //clear form details
let q=document.getElementById("cpassword").value=""
}
let l=document.getElementById("log")
let x=document.querySelector("section2")                      //secpnd form toggle
l.addEventListener("click",()=>{
   x.style.display="block"
   b.style.display="none"
  
   
})
//buc.classList.add("akka")
    let ca=document.querySelector(".cart")
    let buc=document.querySelector(".bucket")           //cartn toggle here
buc.addEventListener("click",()=>{
    ca.classList.toggle("active")
})



let but=document.getElementsByTagName("button")
let cr=document.querySelector(".cart")                     //clone here
let cr1=document.getElementById("cart1")
for(b1 of but){
    b1.addEventListener("click",(e)=>{
        let select=e.target.parentNode
        let clone=select.cloneNode(true)
       
       
      if ( ca.appendChild(clone)){
        cr1.innerText=""
      }
      
      
        let ad=document.createElement("div")
    
         let last= document.createElement("button")
        last.textContent="remove"
        last.classList.add("butr")
        clone.appendChild(last)
       
        let min=document.createElement("span")
        min.innerHTML="-"
       min.classList.add("we1")
        clone.appendChild(min)
        let min1=document.createElement("span")
        min1.innerHTML=" 0"
      min1 .classList.add("we")
        clone.appendChild(min1)
        let min2=document.createElement("span")
        min2.innerHTML="+"
       min2.classList.add("we")
        clone.appendChild(min2)
        let h=document.createElement("h2")
        h.innerText="Quantity"
        let de=document.createElement("div")
        de.appendChild(h)
        de.appendChild(min)
        de.appendChild(min1)
        de.appendChild(min2)

        clone.appendChild(de)
        de.classList.add("we3")
       


       let val=0
      
        min2.addEventListener("click",()=>{
            val=val+1
            min1.innerText=val
          
         
                                                             //clone quantity here

        })
        min.addEventListener("click",()=>{
            val=val-1
           min1.innerText=val
        
           })
         

last.addEventListener("click",()=>{
    value=value-1                                               //cart increment here
let x=document.getElementById("span").innerText=value
if(value===0){
    x.innerText=""
}

})
       

       last. addEventListener("click",change)
            function change(w){                            //clone remove here
                let s=w.target.parentNode
            
                clone.remove(s)
              
               

            }
           
       
        
    })
}

let value=0

let bu=document.getElementById("button")
for(be of button)
be.addEventListener("click",()=>{
value=value+1
document.getElementById("span").innerText=value
})
 
 function fil(){
    let search=document.getElementById("search").value.toUpperCase()
    let hang=document.getElementsByClassName("card1")
    for(let i=0;i<hang.length;i++){
        let re=hang[i].querySelector("#ti")
        if(re.innerHTML.toUpperCase().indexOf(search)>-1){
            hang[i].style.display=""
        }
        else{
            hang[i].style.display="none"
        }
    }
    

 }

 