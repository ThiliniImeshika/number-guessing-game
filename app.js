// Generate random number between 1 and 10
let number = Math.random() * 10 + 1;
let ranNumber = Math.floor(number);
console.log(ranNumber);

function btnGuessNumberOnAction() {
    const userInput = Number(document.getElementById("txtUseInput").value);

    if (ranNumber === userInput) {
        Swal.fire({
            title: "You Won!",
            width: 600,
            padding: "3em",
            color: "#ffffff", // Changed text color to white so it's readable over the full GIF
            background: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay so title stands out
            backdrop: `
                rgba(0,0,123,0.4)
                url("img/Thinking Working GIF by Story Leaf.gif")
                center center
                no-repeat
            `,
            // Optional: ensures the GIF covers the entire backdrop area
            didOpen: () => {
                const backdrop = Swal.getPopup().style;
                // Alternatively, SweetAlert backdrop CSS adjustments can be handled here if needed
            }
        });
    } else {
        Swal.fire({
            title: "Try Again.",
            width: 600,
            padding: "3em",
            color: "#1505f2",
            background: "#fff url('img/puzzle.jpg')",
            backdrop: `
                rgba(0,0,123,0.4)
                none
            `
        });
    }
}