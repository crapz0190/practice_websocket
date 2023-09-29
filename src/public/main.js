// import saveNote from "./sockets";

// socketClint.on("ping", (data) => {
//   console.log(data);
//   socketClint.emit("pong", data);
// });

const noteForm = document.getElementById("noteForm");
const title = document.getElementById("title");
const description = document.getElementById("description");

noteForm.addEventListener("submit", (e) => {
  // preventDefault cancela el comportamiento por defecto de reinciar la pagina
  e.preventDefault();

  saveNote(title.value, description.value);
});
