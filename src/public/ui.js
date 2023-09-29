const notesList = document.getElementById("notes");

let saveId = "";

const noteUI = (note) => {
  const div = document.createElement("div");
  div.setAttribute("class", "card card-body rounded-0 mb-2");

  div.innerHTML += `
    
      <div class="d-flex justify-content-between">
        <h1 class="h3 card-title">${note.title}</h1>
        <div>
          <input class="btn btn-danger delete" type="submit" value="delete" data-id="${note.id}"/>
          <input class="btn btn-secondary update" type="submit" value="update" data-id="${note.id}"/>
        </div>
      </div>
      <p>${note.description}</p>
  `;

  const btnDelete = div.querySelector(".delete");
  const btnUpdate = div.querySelector(".update");

  btnDelete.addEventListener("click", () => {
    deleteNote(btnDelete.dataset.id);
  });

  btnUpdate.addEventListener("click", () => {
    getNote(btnUpdate.dataset.id);
  });

  return div;
};

// recorre notas
const renderNotes = (notes) => {
  notesList.innerHTML = "";
  notes.forEach((note) => {
    notesList.appendChild(noteUI(note));
  });
};

// añade nota
const appendNote = (note) => {
  notesList.appendChild(noteUI(note));
};
