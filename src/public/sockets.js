/* eslint-disable no-undef */
const socketClient = io();

const saveNote = (title, description) => {
  socketClient.emit("newnote", {
    title,
    description,
  });

  socketClient.on("newnote", appendNote);
};

// export default saveNote;
