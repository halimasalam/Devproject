
// time a message before it shows up
// <script>
// // Function to show the hidden text after a delay
// alert("this script is right")
// function showObjectives() {
//     const objectives = document.getElementsByClassName("objectives");
//     for (let i = 0; i < objectives.length; i++) {
//         objectives[i].style.display = "block"; 
    // }
// }
// setTimeout(showObjectives, 1000);
// </script>



// // extract images into an array //
// const imageElements = document.getElementsByClassName("intro2img");
// // Initialize an array to store the image source
// const imageSources = [];
// // Iterate through the elements and extract the src attribute
// for (let i = 0; i < imageElements.length; i++) {
//   const src = imageElements[i].src;
//   imageSources.push(src);
// }

// // check if js connected. Go to console of developer tools on browser //
// console.log("JavaScript file is connected sure.");

// // check if jQuery is running //
// $(document).ready(function() {
//     console.log("jQuery code is running.");
//     // Your jQuery code here
// });

  
// // display timed image //

// <!-- Both codes display images timely, workss within the html script but doesn't wrk from the js file -->
//             <!-- <script>
//                 var myImage = document.getElementById("ointro2img");
//                 var imageArray = ["images/backgroundimage.jpeg", "images/exportimage1.jpeg", "images/exportimage2.jpeg", "images/exportimage3.jpeg"];
//                 var imageIndex = 0;

//                 function changeImage() {
//                     myImage.setAttribute("src",imageArray[imageIndex]);
//                     imageIndex++;
//                     if (imageIndex >= imageArray.length) {
//                         imageIndex = 0;
//                     }
//                 }
//                 setInterval (changeImage, 3000)
//             </script> -->

//             <script>
//             const images = ["images/backgroundimage.jpeg", "images/exportagroimg.webp", "images/exportimage1.jpeg", "images/exportimage2.jpeg", "images/exportagroimg1.webp"];
//             let currentImage = 0;
//             const imageElements = document.getElementById("intro2img");

//             function displayImage() {
//             imageElements.src = images[currentImage];
//             currentImage = (currentImage + 1) % images.length;
//             }
//             displayImage();

//             setInterval(displayImage, 3000);
//         </script>




  



