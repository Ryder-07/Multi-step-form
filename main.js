var page=document.querySelector(".child");
var pages=document.querySelector(".pages");
var page1_name = document.getElementById("name");
// queryselector: query select kr rhe history, id-> #name and class .name

document.getElementById("btn1").addEventListener("click", () =>{
    console.log("i love you");
    console.log(page1_name.value)
    if(page1_name.value==""||document.getElementById("job").value==""||document.getElementById("company").value==""||document.getElementById("website").value==""){
        document.getElementsByName('name')[0].placeholder='This is a required field';
        document.getElementsByName('job')[0].placeholder='This is a required field';
        document.getElementsByName('company')[0].placeholder='This is a required field';
        document.getElementsByName('website')[0].placeholder='This is a required field';
    }
    else {
        console.log("i love you");
    page.style.marginLeft
    ="-100%";
    document.querySelector(".page1").style.backgroundColor="rgb(0, 0, 95)";
    document.querySelector(".page1").style.color="white";
    document.querySelector(".page1").style.border= "2px solid gray";
    document.querySelector(".line1").style.backgroundColor="gray";  
    }
    
})
// addeventlistener: click, mousein, mosueout
// css name-submname : nameSubname
// ex: margin-left : marginLeft (camel case)
document.getElementById("btn2").addEventListener("click", () =>{
    console.log("i love you");
    page.style.marginLeft
    =("0%");
    document.querySelector(".page1").style.backgroundColor="white";
    document.querySelector(".page1").style.color="black";
    document.querySelector(".page1").style.border= "2px solid black";
    document.querySelector(".line1").style.backgroundColor="black";  
})
document.getElementById("btn3").addEventListener("click", () =>{
    console.log("i love you");
    if(document.getElementById("age").value==""||document.getElementById("contact").value==""||document.getElementById("gender").value==""||document.getElementById("profile").value==""){
        document.getElementsByName('age')[0].placeholder='This is a required field';
        document.getElementsByName('contact')[0].placeholder='This is a required field';
        document.getElementsByName('gender')[0].placeholder='This is a required field';
        document.getElementsByName('profile')[0].placeholder='This is a required field';
    }
    else{
    page.style.marginLeft
    =("-200%");
    document.querySelector(".page2").style.backgroundColor="rgb(0, 0, 95)";
    document.querySelector(".page2").style.color="white";
    document.querySelector(".page2").style.border= "2px solid gray";
    document.querySelector(".line2").style.backgroundColor="gray";  
}
})
document.getElementById("btn4").addEventListener("click", () =>{
    console.log("i love you");
    page.style.marginLeft
    =("-100%");
    document.querySelector(".page2").style.backgroundColor="white";
    document.querySelector(".page2").style.color="black";
    document.querySelector(".page2").style.border= "2px solid black";
    document.querySelector(".line2").style.backgroundColor="black";  
})
document.getElementById("btn5").addEventListener("click", () =>{
    console.log("i love you");
    if(document.getElementById("flat").value==""||document.getElementById("society").value==""||document.getElementById("landmark").value==""||document.getElementById("city").value==""){
        document.getElementsByName('flat')[0].placeholder='This is a required field';
        document.getElementsByName('society')[0].placeholder='This is a required field';
        document.getElementsByName('landmark')[0].placeholder='This is a required field';
        document.getElementsByName('city')[0].placeholder='This is a required field';
    }
    else{
    page.style.marginLeft
    =("-300%");
    document.querySelector(".page3").style.backgroundColor="rgb(0, 0, 95)";
    document.querySelector(".page3").style.color="white";
    document.querySelector(".page3").style.border= "2px solid gray";
    document.querySelector(".line3").style.backgroundColor="gray";  
        }
})
document.getElementById("btn6").addEventListener("click", () =>{
    console.log("i love you");
    page.style.marginLeft
    =("-200%");
    document.querySelector(".page3").style.backgroundColor="white";
    document.querySelector(".page3").style.color="black";
    document.querySelector(".page3").style.border= "2px solid black";
    document.querySelector(".line3").style.backgroundColor="black";   
        
})
document.getElementById("btn7").addEventListener("click", () =>{
    console.log("i love you");
    if(document.getElementById("user").value==""||document.getElementById("pass").value==""||document.getElementById("mes").value==""){
        document.getElementsByName('User')[0].placeholder='This is a required field';
        document.getElementsByName('Pass')[0].placeholder='This is a required field';
        document.getElementsByName('Message')[0].placeholder='This is a required field';
    }
    else{
    document.querySelector(".page4").style.backgroundColor="rgb(0, 0, 95)";
    document.querySelector(".page4").style.color="white";
    document.querySelector(".page4").style.border= "2px solid gray";}
})


