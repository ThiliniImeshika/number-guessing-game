//generate randome number

let number = Math.random()*10 +1;
let ranNumber=Math.floor(number);
console.log(ranNumber);

function btnGuessNumberOnAction(){
Swal.fire({
  title: "Custom width, padding, color, background.",
  width: 600,
  padding: "3em",
  color: "#1505f2",
  background: "#fff url(/image/puzzle.jpg)",
  backdrop: `
    rgba(0,0,123,0.4)
    url("https://giphy.com/gifs/StoryLeaf-brain-problem-solving-story-leaf-vTs6IEzlyfbOcoW72O")
    left top
    no-repeat
  `
});
}

