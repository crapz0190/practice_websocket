const notesList = document.getElementById("notes");

const appendNote = (note) => {
  notesList.innerHTML += `
    <div class="card card-body rounded-0 mb-2">
      <div>
        <h1 class="h3 card-title">${note.title}</h1>
        <div>
          <input class="btn btn-danger" type="submit" value="delete"/>
          <input class="btn btn-danger" type="submit" value="update"/>
        </div>
      </div>
      <p>${note.description}</p>
    </div>
  `;
};
