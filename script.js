const texts = [
    "Aspiring Software Engineer",
    "Python Enthusiast",
    "Web Developer"
];
let speed = 100;
let textIndex = 0;
let charIndex = 0;
const typingElement = document.getElementById("typing");
function typeText(){
    if(charIndex < texts[textIndex].length){
        typingElement.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, speed);
    }
    else{
        setTimeout(eraseText, 1500);
    }
}
function eraseText(){
    if(charIndex > 0){
        typingElement.textContent =
        texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, 50);
    }
    else{
        textIndex++;
        if(textIndex >= texts.length){
            textIndex = 0;
        }
        setTimeout(typeText, 300);
    }
}
window.onload = function(){
    typeText();
}
function showInternship(){
    document.getElementById("internshipBox").style.display = "block";
    document.getElementById("certificateBox").style.display = "none";
}

function closeInternship(){
    document.getElementById("internshipBox").style.display = "none";
}

function showCertificates(){
    document.getElementById("certificateBox").style.display = "block";
    document.getElementById("internshipBox").style.display = "none";
}

function closeCertificates(){
    document.getElementById("certificateBox").style.display = "none";
}




function showCertificates(){
    const box = document.getElementById("certificateBox");

    if(box.style.display === "block"){
        box.style.display = "none";
    }
    else{
        box.style.display = "block";
    }
}