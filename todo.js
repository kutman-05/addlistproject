const addBtn = document.querySelector(".add");
const textInput = document.querySelector(".text");
const numberInput = document.querySelector(".number");
const newList = document.querySelector(".newList");
const imagesInput = document.querySelector(".url");
const dalete = document.querySelector(".dalete");

addBtn.addEventListener("click", () => {
  let nevObject = {
    id: Date.now(),
    title: textInput.value,
  };
  let newArray = [];
  newArray.push(nevObject);
  newArray.map((el) => {
    let h3 = document.createElement("h3");
    h3.innerHTML = el.title;
    newList.append(h3);
  });
});

// TODO LESSON 1
// addBtn.addEventListener("click", () => {
//   addNewList();
// });

// numberInput.addEventListener("keydown", (event) => {
//   if (event.key === "Enter") {
//     addNewList();
//   }
// });
// dalete.addEventListener("click", () => {});
// function addNewList() {
//   if (textInput.value !== "" && numberInput.value !== "") {
//     addList();
//     textInput.style.border = "";
//     numberInput.style.border = "";
//     imagesInput.style.border = "";
//   } else if (textInput.value === "" || numberInput.value === "") {
//     alert("заролниет все поле дорогой мой!!!");
//     textInput.style.border = "2px solid red";
//     numberInput.style.border = "2px solid red";
//     imagesInput.style.border = "2px solid red";
//   }
// }

// function addList() {
//   const h4 = document.createElement("h4");
//   const img = document.createElement("img");
//   newList.append(img);
//   img.src = imagesInput.value;
//   h4.innerHTML = `${textInput.value} <br/> ${numberInput.value}`;
//   newList.append(h4);
//   imagesInput.value = "";

//   textInput.value = "";
//   numberInput.value = "";
// }
