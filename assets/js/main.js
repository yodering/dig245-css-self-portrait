/* javascript */


const mouseXElement = document.getElementById("mouseX");
const mouseYElement = document.getElementById("mouseY");

document.addEventListener("mousemove", (e) => {
  mouseXElement.textContent = e.clientX;
  mouseYElement.textContent = e.clientY;
});


const elementsInPortrait = document.querySelectorAll(".torso, .neck, .face, .back-hair-right, .back-hair-left, .top-hair-left, .top-hair-mid, .top-hair-right, .second-top-hair-left, .second-top-hair-mid, .second-top-hair-right, .nose, .mouth, .eye-white-left, .eye-iris-left, .eye-pupil-left, .eye-white-right, .eye-iris-right, .eye-pupil-right");
const totalElements = elementsInPortrait.length;
console.log(`Total elements in the portrait: ${totalElements}`);
