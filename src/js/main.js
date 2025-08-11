/// <reference types="../@types/jquery"/>



$(()=>{

    $(".owl-carousel").owlCarousel();

})

//  carousel logic start

var owlPrice = $('div.price-box.owl-carousel');
owlPrice.owlCarousel({
    items:3,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:true
        },
        1000:{
            items:3,
            nav:true,
            loop:true
        }
    }








    
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[2000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})








//
var owlTest = $('div.testo-box.owl-carousel');
owlTest.owlCarousel({
    items:3,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:true
        },
        1000:{
            items:1,
            nav:true,
            loop:true
        }
    }








    
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[2000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})


//




















const navBtn = document.getElementById("navBtn")






//  logic of loading screen
$(()=>{
$(".loader").fadeOut(500,function(){
    $(".loader-box").slideUp(500,function(){
        $("body").css("overflow","auto")
    })
})


})






//  start logic of side menu
if (localStorage.getItem("prefered-color") !== null) {
    $("h1 ,.header-logo").css("color",localStorage.getItem("prefered-color"))
}



$(".fa-gear").on("click",function(){
    $(".inner-box").animate({width:"toggle"},500)
    setTimeout(()=>{
        $(".inner-box").animate({width:"toggle"},500)
    },5000)
})


$("li.size-8").on("click",function(e){
    let currentColor = $(e.target).css("backgroundColor")
   $("h1, .header-logo").css("color",currentColor)
   localStorage.setItem("prefered-color",currentColor)
})

//  End logic of side Menu


//  start logic of nav button 
navBtn.addEventListener("click",function(){
    document.querySelector(".nav-header-box").classList.toggle("hidden")
})
//  End logic of nav button

// logic of navbar color change

let homeHeight = $("#home").outerHeight()



$(window).on("scroll",function(){
    if ($(window).scrollTop() >= homeHeight) {
        $("nav").css("backgroundColor","rgba(0,0,0,.7)")
    }
})

//  logic of scroll to specific section

const navHeight = $("nav").outerHeight()
$("nav li a").on("click",function(e){

const currentSection =$(e.target).attr("href")
const currentSrcoll = ($(currentSection).offset().top )- navHeight

$("body,html").animate({"scrollTop":currentSrcoll},1000)


})









//  logic of counter of my skills section


let skillsSection = document.querySelector(".skills")
let skillsSectionFromTop = skillsSection.offsetTop




let allSpans = document.querySelectorAll(".box span")


window.addEventListener("scroll",function(){
   

    if (scrollY > skillsSectionFromTop ) {

        setInterval(()=>{

            allSpans.forEach(ele=>{
                if (parseInt(ele.innerHTML) < parseInt(ele.getAttribute("data-number"))) {
                    ele.innerHTML++ 
                }
            })
        
       
     



        },50)




    }


})





let allSpansCounters = document.querySelectorAll("span.counter")
let priceBox = document.getElementById("priceBox")
let priceBoxFromTop = priceBox.offsetTop

let priceContainer = document.getElementById("price")
let priceContainerFromTop = priceContainer.offsetTop

const TotalPriceSpace = priceBoxFromTop + priceContainerFromTop





window.addEventListener("scroll",function(){
   

    if (scrollY > priceContainerFromTop ) {

        setInterval(()=>{

            allSpansCounters.forEach(ele=>{
                
               
                if (parseInt(ele.innerHTML) < parseFloat(ele.getAttribute("data-info"))) {
                    ele.innerHTML++
                }
            })
        
       
     



        },50)




    }


})















//  logic of portifolio section


allDivsBox = document.querySelectorAll(".portifolio .card-box")

let allButtons = document.querySelectorAll(".btn-box button")
allButtons.forEach((ele=>{
    ele.addEventListener("click",function(e){

        ele.classList.remove("active")
        const currentClass = e.target.className
        
allDivsBox.forEach(box=>{
    box.classList.replace("grid","hidden")
    if (box.classList.contains(currentClass)) {
        box.classList.replace("hidden","grid")
    }
})


    })
}))
















let allSection = document.querySelectorAll(".section")
let allNavLi = document.querySelectorAll("nav ul li a")

window.addEventListener("scroll",function(){
let current = ""
allSection.forEach(ele=>{
    
    if (this.scrollY >= ele.offsetTop && this.scrollY < ele.offsetTop + ele.offsetHeight) {
     current = ele.id
    }
})

allNavLi.forEach(nav=>{
    if (nav.hash === current) {
        nav.classList.add("active")
    }
    
})




})




// logic for background of navbar 

 allSection = document.querySelectorAll(".section");
 allNavLi = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", function () {
    let current = "";

    allSection.forEach(section => {
        if (window.scrollY >= section.offsetTop && window.scrollY < section.offsetTop + section.offsetHeight) {
            current = section.id;
        }
    });

    // Add background color to the current section and remove from others
    allSection.forEach(section => {
        if (section.id === current) {
            section.classList.add("active-section"); // or use jQuery: $(section).addClass("bg-red-100");
        } else {
            section.classList.remove("active-section"); // or use jQuery: $(section).removeClass("bg-red-100");
        }
    });

    // Update nav item active class
    allNavLi.forEach(nav => {
        if (nav.hash === `#${current}`) {
            nav.classList.add("active");
        } else {
            nav.classList.remove("active");
        }
    });
});
