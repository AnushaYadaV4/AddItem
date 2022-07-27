let headerTitle=document.getElementById("header-title");
let mainHeader=document.getElementById("main-header");
let addItemElement=document.getElementById("additem");

//Now make ADD ITEM bold and chage the font color to greeen
addItemElement.style.fontWeight="bold";
addItemElement.style.color="green";



//Make the title have a black border as the youtuber does
headerTitle.style.borderBottom="solid 3px #000";
mainHeader.style.borderBottom="solid 3px #000";

//Manipulate the title of the page and experiment with other things
headerTitle.textContent="Hello";
headerTitle.innerText="Amazon";

headerTitle.style.color="red";
headerTitle.style.backgroundColor="#e3fc03";
console.log(headerTitle);
