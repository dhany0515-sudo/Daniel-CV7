function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}

function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}

const texts = [
    "Graphic designer",
    "DESIGNER",
    "Arduino programmer",
    "video editing",
    "Game Maker",
    "programer",
    "Game developer",
    "AI coding",
    "Server maker",
    "Website builder",
    "Operating system maker",
]

let speed = 100;
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let charcterIndex = 0;

function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        if (textElements) {
            textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        }
        charcterIndex++;
        setTimeout(typeWriter, speed); 
    }
    else{
        setTimeout(eraseText, 1000)
    }
}

function eraseText(){
    if (textElements && textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}

function showHome() {
    const homeSection = document.getElementById('home-section');
    const aboutSection = document.getElementById('about-section');
    const servicesSection = document.getElementById('services-section');
    
    if (!aboutSection.classList.contains('hidden-section')) {
        aboutSection.classList.add('animate-out');
        setTimeout(() => {
            aboutSection.classList.add('hidden-section');
            aboutSection.classList.remove('animate-out');
        }, 300);
    }
    if (!servicesSection.classList.contains('hidden-section')) {
        servicesSection.classList.add('animate-out');
        setTimeout(() => {
            servicesSection.classList.add('hidden-section');
            servicesSection.classList.remove('animate-out');
        }, 300);
    }
    
    setTimeout(() => {
        homeSection.classList.remove('hidden-section');
        homeSection.classList.add('animate-in');
        setTimeout(() => {
            homeSection.classList.remove('animate-in');
        }, 500);
        
        document.body.style.overflow = '';
        document.body.classList.remove('fullscreen-mode');
        
        if (typeof AOS !== 'undefined') AOS.refresh();
    }, 150);
}

function showAbout() {
    const homeSection = document.getElementById('home-section');
    const aboutSection = document.getElementById('about-section');
    const servicesSection = document.getElementById('services-section');
    
    if (!homeSection.classList.contains('hidden-section')) {
        homeSection.classList.add('animate-out');
        setTimeout(() => {
            homeSection.classList.add('hidden-section');
            homeSection.classList.remove('animate-out');
        }, 300);
    }
    if (!servicesSection.classList.contains('hidden-section')) {
        servicesSection.classList.add('animate-out');
        setTimeout(() => {
            servicesSection.classList.add('hidden-section');
            servicesSection.classList.remove('animate-out');
        }, 300);
    }
    
    setTimeout(() => {
        aboutSection.classList.remove('hidden-section');
        aboutSection.classList.add('animate-in');
        setTimeout(() => {
            aboutSection.classList.remove('animate-in');
        }, 500);
        
        document.body.style.overflow = 'hidden';
        document.body.classList.add('fullscreen-mode');
    }, 150);
}

function showServices() {
    const homeSection = document.getElementById('home-section');
    const aboutSection = document.getElementById('about-section');
    const servicesSection = document.getElementById('services-section');
    
    if (!homeSection.classList.contains('hidden-section')) {
        homeSection.classList.add('animate-out');
        setTimeout(() => {
            homeSection.classList.add('hidden-section');
            homeSection.classList.remove('animate-out');
        }, 300);
    }
    if (!aboutSection.classList.contains('hidden-section')) {
        aboutSection.classList.add('animate-out');
        setTimeout(() => {
            aboutSection.classList.add('hidden-section');
            aboutSection.classList.remove('animate-out');
        }, 300);
    }
    
    setTimeout(() => {
        servicesSection.classList.remove('hidden-section');
        servicesSection.classList.add('animate-in');
        setTimeout(() => {
            servicesSection.classList.remove('animate-in');
        }, 500);
        
        document.body.style.overflow = 'hidden';
        document.body.classList.add('fullscreen-mode');
        
        if (typeof AOS !== 'undefined') AOS.refresh();
    }, 150);
}

window.onload = function() {
    if (textElements) {
        typeWriter();
    }
    showHome();
};