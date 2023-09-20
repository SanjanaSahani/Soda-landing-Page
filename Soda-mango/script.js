const slides = document.querySelectorAll(".slide")
var counter = 0;

slides.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`
    }
)

const goPrev = () => {
    counter--
    slideImage()
}


const goNext = () => {
    counter++
    slideImage()
}

const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`

        }
    )
}

// for showing para 

// for mango 

const paraElement = document.getElementById("myPara");

setTimeout(() => {
    paraElement.classList.add("show");
} , 1000);

// for strawberry 

const paraElement2 = document.getElementById("myPara2");

setTimeout(() => {
    paraElement2.classList.add("show2");
} , 5000);

// for lemon 

const paraElement3 = document.getElementById("myPara3");

setTimeout(() => {
    paraElement3.classList.add("show3");
} , 9000);

// for blueberry 
const paraElement4 = document.getElementById("myPara4");

setTimeout(() => {
    paraElement4.classList.add("show4");
} , 12000);


// for showing images 

// for mango 

const imgElement = document.getElementById("myImages");

setTimeout(() => {
    imgElement.classList.add("display");
} , 1000);

// for strawberry 

const imgElement2 = document.getElementById("myImages2");

setTimeout(() => {
    imgElement2.classList.add("display2");
} , 5000);

// for lemon 

const imgElement3 = document.getElementById("myImages3");

setTimeout(() => {
    imgElement3.classList.add("display3");
} , 9000);

// for blueberry 

const imgElement4 = document.getElementById("myImages4");

setTimeout(() => {
    imgElement4.classList.add("display4");
} , 12000);
