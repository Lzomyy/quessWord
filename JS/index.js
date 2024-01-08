// var inputs1 = document.querySelector(".inputs");
// var inputs2 = document.querySelector(".inputss");
// var inputs3 = document.querySelector(".inputsss");

// var hint = document.querySelector(".hint");
// var tryy = document.getElementById("try");
// var tries = 3;
// var winn = false;

// var wordsList = [
//   { word: "apple", hint: "A fruit that is often red or green" },
//   { word: "banana", hint: "A long, curved fruit with a yellow peel" },
//   { word: "carrot", hint: "A vegetable that is orange and crunchy" },
//   { word: "dog", hint: "A common household pet" },
//   { word: "elephant", hint: "A large mammal with a long trunk and tusks" },
//   { word: "flower", hint: "A colorful plant often used for decoration" },
//   { word: "guitar", hint: "A stringed musical instrument" },
//   { word: "house", hint: "A place where people live" },
//   { word: "island", hint: "A piece of land surrounded by water" },
//   { word: "jungle", hint: "A dense forest with lush vegetation" },
//   { word: "kiwi", hint: "A small fruit with a fuzzy brown exterior" },
//   { word: "lemon", hint: "A sour yellow citrus fruit" },
//   {
//     word: "mountain",
//     hint: "A large natural elevation of the Earth's surface",
//   },
//   { word: "ninja", hint: "A skilled warrior known for stealth" },
//   { word: "ocean", hint: "A vast body of saltwater" },
//   { word: "penguin", hint: "A flightless bird that lives in cold regions" },
//   { word: "queen", hint: "The female ruler of a kingdom" },
//   { word: "rainbow", hint: "A colorful arc in the sky after rain" },
//   { word: "sun", hint: "The star at the center of our solar system" },
//   { word: "tree", hint: "A tall plant with a trunk and branches" },
//   { word: "umbrella", hint: "A device used for protection from rain or sun" },
//   { word: "volcano", hint: "A mountain with a vent that erupts lava" },
//   { word: "watermelon", hint: "A juicy fruit with a green rind and red flesh" },
//   { word: "xylophone", hint: "A musical instrument with wooden bars" },
//   {
//     word: "yoga",
//     hint: "A practice that combines physical and mental disciplines",
//   },
//   { word: "zebra", hint: "A black and white striped African animal" },
//   {
//     word: "airplane",
//     hint: "A powered flying vehicle with fixed wings and a fuselage",
//   },
//   {
//     word: "balloon",
//     hint: "A flexible bag filled with gas, often used for decoration",
//   },
//   { word: "cat", hint: "A small domesticated carnivorous mammal" },
//   {
//     word: "dolphin",
//     hint: "A marine mammal known for its intelligence and playful behavior",
//   },
// ];

// tryy.innerHTML = `Your Tries: ${tries}`;

// var randomNumber = Math.floor(Math.random() * wordsList.length);

// var word = wordsList[randomNumber].word.split("");
// console.log(word);

// hint.innerHTML = `" ${wordsList[randomNumber].hint} "`;

// function makeInputs(x, y) {
//   var cartona = ``;
//   for (var i = 0; i < x.length; i++) {
//     cartona += `
//     <input type="text" maxlength="1" index=${i} />
//     `;
//   }
//   y.innerHTML = cartona;
// }

// makeInputs(word, inputs1);
// makeInputs(word, inputs2);
// makeInputs(word, inputs3);

// var inputs1Array = Array.from(inputs1.children);
// var inputs2Array = Array.from(inputs2.children);
// var inputs3Array = Array.from(inputs3.children);

// function addFunctionToAllInputs(x) {
//   for (var i = 0; i < x.length; i++) {
//     x[i].addEventListener("keyup", function (e) {
//       if (
//         e.target.value.toLowerCase() ==
//         word[e.target.getAttribute("index")].toLowerCase()
//       ) {
//         e.target.style.backgroundColor = "green";
//         e.target.style.color = "white";
//         if (inputs1Array.includes(e.target)) {
//           win(inputs1Array);
//         } else if (inputs2Array.includes(e.target)) {
//           win(inputs2Array);
//         } else {
//           win(inputs3Array);
//         }

//         if (winn) {
//           return;
//         }

//         x[+e.target.getAttribute("index") + 1].focus();
//         e.target.setAttribute("disabled", "disabled");
//       } else {
//         e.target.style.backgroundColor = "red";
//         e.target.style.color = "white";
//         --tries;
//         tryy.innerHTML = `Your Tries: ${tries}`;
//         checkOnTries();
//         x[+e.target.getAttribute("index") + 1].focus();
//         e.target.setAttribute("disabled", "disabled");
//       }
//     });
//   }
// }

// addFunctionToAllInputs(inputs1Array);
// addFunctionToAllInputs(inputs2Array);
// addFunctionToAllInputs(inputs3Array);

// function win(x) {
//   for (var i = 0; i < word.length; i++) {
//     if (x[i].style.backgroundColor == "green") {
//       continue;
//     } else if (x[i].style.backgroundColor == "red" || x[i].innerHTML == "") {
//       return;
//     }
//   }

//   tryy.innerHTML = `Congrat You have Win The Game `;
//   endGame();
//   winn = true;
// }

// function checkOnTries() {
//   if (tries == 0) {
//     tryy.innerHTML = `Sorry you have finish your tries The word Is ${word.join(
//       ""
//     )}`;
//     endGame();
//   }
// }

// function endGame() {
//   for (var i = 0; i < inputs1Array.length; i++) {
//     inputs1Array[i].setAttribute("disabled", "disabled");
//     inputs2Array[i].setAttribute("disabled", "disabled");
//     inputs3Array[i].setAttribute("disabled", "disabled");
//   }
// }

// ====================================>>

var inputs1 = document.querySelector(".inputs");
var inputs2 = document.querySelector(".inputss");
var inputs3 = document.querySelector(".inputsss");

var again = document.getElementById("again");
var hint = document.querySelector(".hint");
var tryy = document.getElementById("try");
var tries = 3;
var winn = false;
var include = false;

var wordsList = [
  { word: "apple", hint: "A fruit that is often red or green" },
  { word: "banana", hint: "A long, curved fruit with a yellow peel" },
  { word: "carrot", hint: "A vegetable that is orange and crunchy" },
  { word: "dog", hint: "A common household pet" },
  { word: "elephant", hint: "A large mammal with a long trunk and tusks" },
  { word: "flower", hint: "A colorful plant often used for decoration" },
  { word: "guitar", hint: "A stringed musical instrument" },
  { word: "house", hint: "A place where people live" },
  { word: "island", hint: "A piece of land surrounded by water" },
  { word: "jungle", hint: "A dense forest with lush vegetation" },
  { word: "kiwi", hint: "A small fruit with a fuzzy brown exterior" },
  { word: "lemon", hint: "A sour yellow citrus fruit" },
  {
    word: "mountain",
    hint: "A large natural elevation of the Earth's surface",
  },
  { word: "ninja", hint: "A skilled warrior known for stealth" },
  { word: "ocean", hint: "A vast body of saltwater" },
  { word: "penguin", hint: "A flightless bird that lives in cold regions" },
  { word: "queen", hint: "The female ruler of a kingdom" },
  { word: "rainbow", hint: "A colorful arc in the sky after rain" },
  { word: "sun", hint: "The star at the center of our solar system" },
  { word: "tree", hint: "A tall plant with a trunk and branches" },
  { word: "umbrella", hint: "A device used for protection from rain or sun" },
  { word: "volcano", hint: "A mountain with a vent that erupts lava" },
  { word: "watermelon", hint: "A juicy fruit with a green rind and red flesh" },
  { word: "xylophone", hint: "A musical instrument with wooden bars" },
  {
    word: "yoga",
    hint: "A practice that combines physical and mental disciplines",
  },
  { word: "zebra", hint: "A black and white striped African animal" },
  {
    word: "airplane",
    hint: "A powered flying vehicle with fixed wings and a fuselage",
  },
  {
    word: "balloon",
    hint: "A flexible bag filled with gas, often used for decoration",
  },
  { word: "cat", hint: "A small domesticated carnivorous mammal" },
  {
    word: "dolphin",
    hint: "A marine mammal known for its intelligence and playful behavior",
  },
];

tryy.innerHTML = `Your Tries: ${tries}`;

var randomNumber = Math.floor(Math.random() * wordsList.length);

var word = wordsList[randomNumber].word.split("");

hint.innerHTML = `" ${wordsList[randomNumber].hint} "`;

function makeInputs(x, y) {
  var cartona = ``;
  for (var i = 0; i < x.length; i++) {
    cartona += `
    <input type="text" maxlength="1" index=${i} />
    `;
  }
  y.innerHTML = cartona;
}

makeInputs(word, inputs1);
makeInputs(word, inputs2);
makeInputs(word, inputs3);

var inputs1Array = Array.from(inputs1.children);
var inputs2Array = Array.from(inputs2.children);
var inputs3Array = Array.from(inputs3.children);

function addFunctionToAllInputs(x) {
  for (var i = 0; i < x.length; i++) {
    x[i].addEventListener("keyup", function (e) {
      if (
        e.target.value.toLowerCase() ==
        word[e.target.getAttribute("index")].toLowerCase()
      ) {
        e.target.style.backgroundColor = "green";
        e.target.style.color = "white";
        if (inputs1Array.includes(e.target)) {
          win(inputs1Array);
        } else if (inputs2Array.includes(e.target)) {
          win(inputs2Array);
        } else {
          win(inputs3Array);
        }

        if (winn) {
          return;
        }

        x[+e.target.getAttribute("index") + 1].focus();
        e.target.setAttribute("disabled", "disabled");
      } else {
        for (var i = 0; i < word.length; i++) {
          if (e.target.value.toLowerCase() != word[i].toLowerCase()) {
            include = false;
            continue;
          } else {
            include = true;
            break;
          }
        }

        if (include) {
          e.target.style.backgroundColor = "#009688";
        } else {
          e.target.style.backgroundColor = "red";
        }
        e.target.style.color = "white";
        --tries;
        tryy.innerHTML = `Your Tries: ${tries}`;
        checkOnTries();
        x[+e.target.getAttribute("index") + 1].focus();
        e.target.setAttribute("disabled", "disabled");
      }
    });
  }
}

addFunctionToAllInputs(inputs1Array);
addFunctionToAllInputs(inputs2Array);
addFunctionToAllInputs(inputs3Array);

function win(x) {
  for (var i = 0; i < word.length; i++) {
    if (x[i].style.backgroundColor == "green") {
      continue;
    } else if (x[i].style.backgroundColor == "red" || x[i].innerHTML == "") {
      return;
    }
  }

  tryy.innerHTML = `Congrat You have Win The Game `;
  endGame();
  winn = true;
}

function checkOnTries() {
  if (tries == 0) {
    tryy.innerHTML = `Sorry you have finish your tries The word Is ${word.join(
      ""
    )}`;
    endGame();
  }
}

function endGame() {
  for (var i = 0; i < inputs1Array.length; i++) {
    inputs1Array[i].setAttribute("disabled", "disabled");
    inputs2Array[i].setAttribute("disabled", "disabled");
    inputs3Array[i].setAttribute("disabled", "disabled");
  }
}

again.addEventListener("click", function () {
  location.reload();
});
