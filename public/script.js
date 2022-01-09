let bookdemo = document.querySelector(".book-demo");
let callus = document.querySelector(".call-us");
let reachAtUS = document.querySelector(".reachAtUS");
let box_book_demo = document.querySelector(".box-book-demo");
let box_call_us = document.querySelector(".box-call-us");
let box_reach_us = document.querySelector(".box-reach-us");
let close = document.querySelector(".close");
let close2 = document.querySelector(".close2");
let close3 = document.querySelector(".close3");



box_book_demo.style.display = "none";
box_call_us.style.display = "none";
box_reach_us.style.display = "none";
bookdemo.addEventListener("click", (e) => {

    box_book_demo.style.display = "block";
} );

callus.addEventListener("click", (e) => {

    box_call_us.style.display = "block";
} );

reachAtUS.addEventListener("click", (e) => {

    box_reach_us.style.display = "block";
} );


close.addEventListener("click", (e) => {
    box_book_demo.style.display = "none";
})

close2.addEventListener("click", (e) => {
    
    box_call_us.style.display = "none";
});

close3.addEventListener("click", (e) => {
    box_reach_us.style.display = "none";
})
