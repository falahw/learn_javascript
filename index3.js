'use-strict';

/**
 * TO-DO LIST
 */
//document.querySelector("#todo").addEventListener("click", submitList);
let listID = 0;
//let delID = 0;

function submitList() {
  listID++;
  //delID++;

  //AMBIL ELEMEN dari INPUT ber-ID='todo'
  let submit = document.getElementById("todo").value;
  //SIAPIN <li> untuk DIMASUKIN KE dalam <ol>
  let li = document.createElement("li");
  //SIAPIN ELEMEN TEKS untuk TERIMA 'input' dari 'todo'
  let list = document.createTextNode(submit);
  //MASUKIN TEKS ke DALAM <li>
  li.appendChild(list);
  //SET ID untuk <li>
  li.setAttribute("id", listID);

  let deleteButton = document.createElement("button");
  let deleteButtonLabel = document.createTextNode("X");
  deleteButton.appendChild(deleteButtonLabel);
  deleteButton.setAttribute("onclick", "deleteList('" + listID + "')");
  //deleteButton.setAttribute("id", delID);

  //document.getElementById("listingToDo").innerHTML = "<li>" + submit + "</li>";
  document.getElementById("listingToDo").appendChild(li).appendChild(deleteButton);
  
  console.log("submit =", submit);
  console.log("list =", list);
  console.log(document.getElementById("1"));
  console.log(document.getElementById("1").textContent);
  /* let elemen = document.getElementsByClassName("container-2");

  for (let i = 0; i < elemen.length; i++) {
    console.log(elemen[i]);
    
  }
  */

  console.log("delbutid =", listID);
}

function clearList() {
  document.getElementById("toDoList").remove();
  console.log("bersihin list")

  restoreListDiv();
  console.log("balikin div list yang dihapus, div-nya doang");

  listID = 0;
  console.log("listID =", listID);
}

function restoreListDiv() {
  let listDiv = document.createElement("div");
  listDiv.setAttribute("id","toDoList");
  listDiv.innerHTML = "<ol id='listingToDo'></ol>";

  document.getElementsByClassName("container-2")[0].appendChild(listDiv);  
}

function deleteList(id) {
  //if (document.getElementById(id) === document.getElementById(delID)) {
    document.getElementById(id).remove();
  //}
  console.log("hapus list");
  listID--;
  console.log("listID post del =", listID);
}

/**
 * EXPENSE TRACKER
 */
let expID = 0;

function addExpense() {
  expID++;
  let spending = document.getElementById("spentName").value;
  let spendingDate = document.getElementById("spentDate").value;
  let spendingPrice = document.getElementById("spentPrice").value;

  console.log("spentName =", spending);
  console.log("spentDate =", spendingDate);
  console.log("spentPrice =", spendingPrice);
  console.log("total list =", expID);

  inputTable(spending, spendingDate, spendingPrice);
}

function inputTable(desc, date, price) {
  //expID++;

  let tBody = document.getElementById("spentTracker");
  let trList = document.createElement("tr");
  let tdDesc = document.createElement("td");
  let tdDate = document.createElement("td");
  let tdPrice = document.createElement("td");
  let tdDel = document.createElement("td");

  trList.setAttribute("id","list" + expID);
  tdDesc.innerHTML = desc;
  tdDate.innerHTML = date;
  tdPrice.innerHTML = price;
  tdDel.innerHTML = "<button onclick=delExpense('list" + expID + "')>X</button>";

  trList.appendChild(tdDesc);
  trList.appendChild(tdDate);
  trList.appendChild(tdPrice);
  trList.appendChild(tdDel);

  tBody.appendChild(trList);
}

function delExpense(id) {
  document.getElementById(id).remove();
  expID--;
  console.log("hapus item, sisa list =", expID);
}

/**
 * NOTE-TAKING APP
 */
let listNoteID = 0;

 function noteInput() {
  let listNote = document.getElementById("note").value;
  console.log(listNote);

  listingNote(listNote);
}

function listingNote(list) {
  console.log("list =", list);
  listNoteID++;
  
  let divListNote = document.getElementById("listNote");
  let div = document.createElement("div");
  let h4 = document.createElement("h4");
  let p = document.createElement("p");
  let btnDetail = document.createElement("button");
  let span = document.createElement("span");

  h4.innerHTML = "Note" + listNoteID;
  //p.innerHTML = "<h4>Note " + listNoteID + "</h4><p id='list" + listNoteID + "'>" + list + "</p>";
  p.setAttribute("id","list" + listNoteID);

  let shortenList = (list) => {
    if (list.length >= 12) {
      p.innerHTML = list.slice(0, 12) + "...";
    } else {
      p.innerHTML = list;
    }
  }
  //p.innerHTML = list;
  shortenList(list);

  //p.setAttribute("id","list" + listNoteID);
  btnDetail.innerHTML = "View Detail";
  btnDetail.setAttribute("onclick","viewDetail('listModal" + listNoteID + "')");
  
  span.setAttribute("class","close");
  span.innerHTML = "&times;";

  //CREATING <div id="note(N)">
  div.setAttribute("id","note" + listNoteID);
  div.appendChild(h4);
  div.appendChild(p);
  div.appendChild(btnDetail);

  divListNote.appendChild(div);

  //CREATING POP-UP CSS
  //CREATING <div id="listModal(N)" class="modal">
  let divModal = document.createElement("div");
  divModal.setAttribute("id","listModal" + listNoteID);
  divModal.setAttribute("class","modal");

  //CREATING <div class="modal-content">
  let divModalContent = document.createElement("div");
  divModalContent.setAttribute("class","modal-content");

  //let listModal = document.getElementById("list" + listNoteID); --> GAK KEPAKE
  let pList = document.createElement("p");
  pList.innerHTML = list;

  //INJECT <p> to <div id='listModal'>
  divModalContent.appendChild(span);
  divModalContent.appendChild(pList);
  divModal.appendChild(divModalContent);
  div.appendChild(divModal);
}

function viewDetail(listid) {  
  document.getElementById(listid).style.display = "block";

  console.log("list 1 =", document.getElementById(listid).textContent);

  modal = document.getElementById(listid);
}

/**
 * MODAL EXAMPLE
 */
//get the button that opens the modal
//var btn = document.getElementById("myBtn");

//when the user clicks the button, open the modal
function btn() {
  let noteValue = document.getElementById("list1").textContent;
  let noteText = document.createTextNode(noteValue);
  
  let pmodal = document.createElement("p");
  //pmodal.innerHTML = document.getElementById("list1").value;
  pmodal.innerHTML = noteValue;

  let modalContent = document.getElementsByClassName("modal-content")[0];
  modalContent.appendChild(pmodal);

  document.getElementById("myModal").style.display = "block";

  console.log("isi span =", document.getElementById("list1"));
  console.log("notevalue =", noteValue);
  console.log("notetext =", noteText);
}

//when the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {  
  //console.log("event target =", event.target);
  //console.log("modal =", modal);
  
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

let tesstr = "short";
let tesstr2 = "kdjgkahgdlkfgkdjhgahjgaldkfghkdfhg";

console.log("tesstr before =", tesstr, "; panjang tesstr =", tesstr.length);
console.log("tesstr dipotong =", tesstr.slice(0, 12));
console.log("tesstr after =", tesstr);
console.log("tesstr spliited ", tesstr.split(""));

console.log("tesstr2 before =", tesstr2, "; panjang tesstr2 =", tesstr2.length);
console.log("tesstr2 dipotong =", tesstr2.slice(0, 12) + "...");
console.log("tesstr2 after =", tesstr2);

/**
 * VOWEL COUNTER
 */
let takeString = "";

function countVowel() {
  let inputString = document.getElementById("textVowel").value;
  takeString = inputString;
  console.log("takestring =", takeString);
  let splitInput = inputString.split("");
  let matchVowel = "aiueoAIUEO".split("");
  let countVowel = 0;
  
  for (let i = 0; i < splitInput.length; i++) {
    for (let j = 0; j < matchVowel.length; j++) {
      if (splitInput[i] === matchVowel[j]) {
        countVowel++;
      }
    }
  }
  alert("Total vowels = " + countVowel);
  console.log("Total vowels =", countVowel);
}

/**
 * MEMORY GAME
 */
let matchScorePrev = 0;
let matchScoreAfter = 0;
let failScore = 0;
let firstClick = 0;

function loadImage() {
  console.log("image flip");
  
  //modal = document.getElementById("flip-card");
  
  let imgUrl = {
    0 : {"url": "idx3-fox-download.png", "counter": 0},
    1 : {"url": "idx3-cute-cartoon-monkey.jpg", "counter": 0},
    2 : {"url": "idx3-depositphotos_8614495-stock-illustration-fun-zoo-koala.jpg", "counter": 0}
  }
  let img = document.createElement("img");
  let randomImg = 0;
  /*img.src = imgUrl[randomImg]["url"];
  
  img.setAttribute("width", "150px");
  img.setAttribute("height", "150px");
  
  /*
  for (let i = 1; i <= 6; i++) {
    document.getElementById("flip-card-" + i).appendChild(img.cloneNode());
  } */

  for (let i = 1; i <= 6; i++) {
    randomImg = Math.floor(Math.random() * 3);

    while (imgUrl[randomImg]["counter"] >= 2) {
      randomImg = Math.floor(Math.random() * 3);
    } 
    if (imgUrl[randomImg]["counter"] < 2) {
      img.src = imgUrl[randomImg]["url"];
      imgUrl[randomImg]["counter"]++;
      console.log(imgUrl[randomImg]);

      img.setAttribute("id","flip-image-" + i);
      img.setAttribute("width","150px");
      img.setAttribute("height","150px");
      document.getElementById("flip-card-" + i).appendChild(img.cloneNode());
    }
  }
  hideImage();
  console.log("firstclick in load =", firstClick);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function hideImage() {
  await sleep(5000);
  console.log("hide image");
  for (let i = 0; i < document.getElementsByTagName("img").length; i++) {
    document.getElementsByTagName("img")[i].style.display = "none";
  }
}

async function deleteImage() {
  console.log("length =", document.getElementsByTagName("img").length);
  
  for (let i = 0; i < 6; i++) {
    j = i+1;

    document.getElementById("flip-image-" + j).remove();    
  }

  await sleep(300);
  loadImage();
  firstClick = 0;
  console.log("firstclick in delete =", firstClick);
}

//LOAD FUNCTION when BROwSER is LOADED
window.addEventListener("load", loadImage);

async function clickImage(imgId) {
  let y = imgId.slice(10,11);

  document.getElementsByTagName("img")[y-1].style.display = "";
  let compare = document.getElementsByTagName("img")[y-1];
  console.log(compare);

  let reload = 0;
  let mismatchClick = 0;

  let imgElement = document.getElementsByTagName("img");
  for (let i = 0; i < imgElement.length; i++) {
    if (imgElement[i] !== compare && imgElement[i].src === compare.src && imgElement[i].style.display === compare.style.display) {
      /* console.log("imgElement ke", i+1, "=", imgElement[i]);
      console.log("compare is elemen ke", y, "=", compare);
      console.log("source sama dengan gambar ke", i+1); */
      await sleep(500);
      alert("score up!");
      console.log("score up!, loop ke =", i+1);
      reload++;
      matchScoreAfter++;
      firstClick = 0;
    }
    mismatchClick++;
  }
  firstClick++;
  console.log("firstclick after loop =", firstClick);

  if (matchScoreAfter > matchScorePrev) {
    document.querySelector("#match-score").textContent = matchScoreAfter;
    matchScorePrev = matchScoreAfter;
  } else if (mismatchClick % 2 === 0 && firstClick > 1) {
    failScore++;
    document.querySelector("#fail-score").textContent = failScore;
  }

  if (reload === 1) {
    deleteImage();
  }

  console.log("firsClick in click =", firstClick);
}