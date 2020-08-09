let allLinesArr = [];

function submitLine() {
  let line = document.getElementById("line").value;
  allLinesArray = allLinesArr.push(line);
  let lineWords = line.split(" ");
  let lineFragment = `${lineWords[lineWords.length - 3]} ${
    lineWords[lineWords.length - 2]
  } ${lineWords[lineWords.length - 1]}`;
  document.getElementById("lines").innerText = lineFragment;
  document.getElementById("line").value = "";
}

function showFull() {
  let fullPoem = allLinesArr.join(" / ");
  let pFullPoem = document.createElement("p");
  pFullPoem.innerText = fullPoem;
  document.getElementById("in-out").appendChild(pFullPoem);
}

// WANT TO ADD:
// 1) MORE THAN ONE INPUT, WITH BUTTONS TO SMOOTH SCROLL TO NEXT
// 2) A HEADER THAT STARTS IN MIDDLE OF PAGE; WHEN FIRST BUTTON CLICKED, IT SLIDES TO TOP AND STAYS THERE
// 3) A BUTTON THAT ANY PLAYER FROM 3 ONWARDS CAN CLICK TO GET OUTPUT
// 4) CAN HAVE AS MANY INPUTS AS YOU WANT (WITHIN REASON) - 10-20?
// 5) WHENEVER PAGE SCROLLS TO FRESH INPUT, THIS DISPLAY SHOWS FRAGMENT OF LAST INPUT
