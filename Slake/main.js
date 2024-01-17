let rev = 0;


let caro = (view) =>{
    let review = document.getElementsByClassName("caro-one");
    
    if(view >= review.length){
        view = 0;
        rev = 0;
    }

    if(view < 0){
        view = review.length - 1;
        rev  = review.length - 1;
    }
    

    for(let i = 0;i< review.length;i++){
        review[i].style.display = "none";
    }
    review[view].style.display = "block";
}

caro(rev);

let pre = () =>{
    rev = rev - 1;
    caro(rev);
}
let nex = () =>{
    rev = rev + 1;
    caro(rev);
}

let text1 = document.getElementById("fun1");
let text2 = document.getElementById("fun2");
let text3 = document.getElementById("fun3");
let text4 = document.getElementById("fun4");
let text5 = document.getElementById("fun5");

let fun1  = () =>{
    if(text1.style.display == "none"){
        text1.style.display = "block";
    }else{
        text1.style.display = "none";
    }
    text2.style.display = "none";
    text3.style.display = "none";
    text4.style.display = "none";
    text5.style.display = "none";
}
let fun2  = () =>{
    if(text2.style.display == "none"){
        text2.style.display = "block";
    }else{
        text2.style.display = "none";
    }
    text1.style.display = "none";
    text3.style.display = "none";
    text4.style.display = "none";
    text5.style.display = "none";
}
let fun3  = () =>{
    if(text3.style.display == "none"){
        text3.style.display = "block";
    }else{
        text3.style.display = "none";
    }
    text1.style.display = "none";
    text2.style.display = "none";
    text4.style.display = "none";
    text5.style.display = "none";
}
let fun4  = () =>{
    if(text4.style.display == "none"){
        text4.style.display = "block";
    }else{
        text4.style.display = "none";
    }
    text2.style.display = "none";
    text3.style.display = "none";
    text1.style.display = "none";
    text5.style.display = "none";
}
let fun5  = () =>{
    if(text5.style.display == "none"){
        text5.style.display = "block";
    }else{
        text5.style.display = "none";
    }
    text2.style.display = "none";
    text3.style.display = "none";
    text4.style.display = "none";
    text1.style.display = "none";
}
// for footer section
let foot1 = document.getElementById("foot1");
let foot2 = document.getElementById("foot2");
let foot3 = document.getElementById("foot3");
let foot4 = document.getElementById("foot4");
let foot5 = document.getElementById("foot5");

let foot_1 = () =>{
    if(foot1.style.display == "none"){
        foot1.style.display = "block";
    }else{
        foot1.style.display = "none";
    }
    foot2.style.display = "none";
    foot3.style.display = "none";
    foot4.style.display = "none";
    foot5.style.display = "none";
}
let foot_2 = () =>{
    if(foot2.style.display == "none"){
        foot2.style.display = "block";
    }else{
        foot2.style.display = "none";
    }
    foot1.style.display = "none";
    foot3.style.display = "none";
    foot4.style.display = "none";
    foot5.style.display = "none";
}
let foot_3 = () =>{
    if(foot3.style.display == "none"){
        foot3.style.display = "block";
    }else{
        foot3.style.display = "none";
    }
    foot1.style.display = "none";
    foot2.style.display = "none";
    foot4.style.display = "none";
    foot5.style.display = "none";
}
let foot_4 = () =>{
    if(foot4.style.display == "none"){
        foot4.style.display = "block";
    }else{
        foot4.style.display = "none";
    }
    foot1.style.display = "none";
    foot2.style.display = "none";
    foot3.style.display = "none";
    foot5.style.display = "none";
}
let foot_5 = () =>{
    if(foot5.style.display == "none"){
        foot5.style.display = "block";
    }else{
        foot5.style.display = "none";
    }
    foot1.style.display = "none";
    foot2.style.display = "none";
    foot3.style.display = "none";
    foot4.style.display = "none";
}