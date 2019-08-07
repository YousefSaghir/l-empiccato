fetch("./world-0.json")
  .then(res => {
    return res.json();
  })
  .then(data => {
    createdInput(data);
  });
let arr;
let myDiv = document.querySelector(".inM");
function createdInput(data) {
  let numb = Math.floor(Math.random() * data.length);

  arr = Array.from(data[numb]);

  arr.forEach(word => {
    if (word === " ") {
      let mySpan = document.createElement("span");
      mySpan.appendChild(document.createTextNode("/"));
      myDiv.appendChild(mySpan);
    } else {
      let createInputW = document.createElement("input");
      createInputW.setAttribute("class", "text-center");
      myDiv.appendChild(createInputW);
    }
  });
  chick(arr);
}

let arrSvg = [
  `  <path
        class="cls-2"
        d="M907,202a63,63,0,1,1-63,63,63.07,63.07,0,0,1,63-63m0-5a68,68,0,1,0,68,68,68,68,0,0,0-68-68Z"
        transform="translate(-66 -87)"
      />`,
  ` <line class="cls-3" x1="840.5" y1="245.5" x2="840.5" y2="594.5" />`,
  ` <line class="cls-3" x1="840.5" y1="295.5" x2="742.5" y2="373.5" />`,
  ` <line class="cls-3" x1="840.5" y1="295.5" x2="938.5" y2="373.5" />`,
  `  <line class="cls-3" x1="840.5" y1="591.5" x2="742.5" y2="669.5" />`,
  ` <line class="cls-3" x1="840.5" y1="591.5" x2="938.5" y2="669.5" />`,
  `<line class="cls-3" x1="909.5" y1="178.5" x2="947.5" y2="178.5" />
      <line class="cls-3" x1="903.5" y1="159.5" x2="928.5" y2="154.5" />
      <line class="cls-3" x1="895" y1="140.5" x2="927.91" y2="121.5" />
      <line class="cls-3" x1="880.3" y1="127.05" x2="899.45" y2="110.22" />
      <line class="cls-3" x1="862" y1="115.5" x2="881" y2="82.59" />
      <line class="cls-3" x1="842.55" y1="111.2" x2="850.72" y2="87.05" />
      <line class="cls-3" x1="772.59" y1="178.5" x2="734.59" y2="178.5" />
      <line class="cls-3" x1="778.59" y1="159.5" x2="753.59" y2="154.5" />
      <line class="cls-3" x1="787.09" y1="140.5" x2="754.18" y2="121.5" />
      <line class="cls-3" x1="801.79" y1="127.05" x2="782.64" y2="110.22" />
      <line class="cls-3" x1="820.09" y1="115.5" x2="801.09" y2="82.59" />
      <line class="cls-3" x1="839.55" y1="111.2" x2="831.38" y2="87.05" />`,
  `<circle class="cls-2" cx="871" cy="166" r="12" />
      <circle class="cls-2" cx="810" cy="166" r="12" />`,
  `<ellipse class="cls-2" cx="841" cy="193.5" rx="9" ry="15.5" />`,
  ` <path
        class="cls-3"
        d="M868,281c0,43,77,43,77,0"
        transform="translate(-66 -87)"
      />`
];
let i = 0;
function chick(data) {
  let newArr = data.map(n => n.toLowerCase());
  document.querySelectorAll(".caracter").forEach(btn => {
    btn.addEventListener("click", function() {
      if (newArr.indexOf(btn.textContent.toLowerCase()) >= 0) {
        newArr
          .map((x, n) => {
            return x == btn.textContent.toLowerCase() ? n : " ";
          })
          .filter(num => {
            return typeof num === "number";
          })
          .forEach(num => {
            let myDivIn = document.querySelector(".inM").childNodes;
            myDivIn[num].value = this.textContent;
            myDivIn[num].style.background = "#00f";
          });
      } else if (newArr.indexOf(btn.textContent.toLowerCase()) < 0) {
        if (i == arrSvg.length - 1) {
          document.querySelector("#Livello_1").innerHTML += arrSvg[i];
          setTimeout(() => {
            document.body.innerHTML = ` <h1 class='text-center animate-color'> GAME OVER </h1> `;
          }, 2000);
        } else {
          document.querySelector("#Livello_1").innerHTML += arrSvg[i];
          i++;
        }
      }
      this.classList.add("d-none");
      chickInput(newArr);
    });
  });
}

function chickInput(data) {
  let myDivInput = document.querySelectorAll(".inM input");
  let arr = [];
  for (let n = 0; n < myDivInput.length; n++) {
    if (myDivInput[n].value != "") {
      arr.push(0);
    } else {
      arr.push(1);
    }
  }
  let chickArr = arr.every(n => {
    return n == 0;
  });
  if (chickArr == true) {
    document.body.innerHTML = ` <h1 class='text-center animate-color'>Winner </h1> <br> 
    <h3 class='h3 text-center text-secondary'>${data.join("")}</h3>
    `;
  }
}
