var socket = io(); //this line is causing the connection event
// on my server

let username = "";
const joinChatButton = document.getElementById("join-chat");
const userNameInput = document.getElementById("username-input");
const form = document.getElementById("form");
const chatRoomContainer = document.querySelector(".chatroom-container");

joinChatButton.addEventListener("click", (event) => {
  event.preventDefault(); // this is stopping the default behav of form
  //   that is refresh //   it also removing the required attribute
  event.stopPropagation(); // this is stopping event bubbling
  username = userNameInput.value;
  console.log(username);
  if (username) {
    form.style.display = "none";
    chatRoomContainer.style.display = "block";
  }
});

