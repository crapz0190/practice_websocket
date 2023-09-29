/* eslint-disable no-undef */
const socketClient = io();

const saveNote = (title, description) => {
  socketClient.emit("newnote", {
    title,
    description,
  });
};

const deleteNote = (id) => {
  socketClient.emit("deletenote", id);
};

const getNote = (id) => {
  socketClient.emit("getnote", id);
};

const updateNote = (id, title, description) => {
  socketClient.emit("updatenote", {
    id,
    title,
    description,
  });
};

socketClient.on("newnote", appendNote);

socketClient.on("loadnotes", renderNotes);

socketClient.on("selectednote", (note) => {
  const title = document.getElementById("title");
  const description = document.getElementById("description");

  title.value = note.title;
  description.value = note.description;

  saveId = note.id;
});
