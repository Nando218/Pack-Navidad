const students = [
  {
    id: 1,
    name: "Mario",
    surname: "Lebrero García",
    age: 22,
    country: "España",
    education: "Grado",
    imagen: "images/payaso.jpg",
  },
  {
    id: 2,
    name: "Samuel",
    surname: "Utrilla Núñez",
    age: 20,
    country: "España",
    education: "Ciclo Formativo",
    imagen: "images/payaso.jpg",
  },
  {
    id: 3,
    name: "Israel",
    surname: "Abad Barrera",
    age: 20,
    country: "España",
    education: "Ciclo Formativo",
    imagen: "images/payaso.jpg",
  },
  {
    id: 4,
    name: "Javier",
    surname: "Ariza Rosales",
    age: 22,
    country: "España",
    education: "Máster",
    imagen: "images/payaso.jpg",
  },
  {
    id: 5,
    name: "Judith",
    surname: "Tamayo Balogh",
    age: 23,
    country: "España",
    education: "Doctorado",
    imagen: "images/payaso.jpg",
  },
  {
    id: 6,
    name: "Fernando",
    surname: "de la Torre Esperon",
    age: 38,
    country: "España",
    education: "Ciclo Formativo",
    imagen: "images/payaso.jpg",
  },
  {
    id: 7,
    name: "Jesús Manuel",
    surname: "García Lozano",
    age: 25,
    country: "España",
    education: "Ciclo Formativo",
    imagen: "images/payaso.jpg",
  },
  {
    id: 8,
    name: "Rubén",
    surname: "Martín Ruiz",
    age: 19,
    country: "España",
    education: "Ciclo Formativo",
    imagen: "images/payaso.jpg",
  },
  {
    id: 9,
    name: "Jairo Alexandro",
    surname: "Saborito Franco",
    age: 38,
    country: "España",
    education: "Ciclo Formativo",
    imagen: "images/payaso.jpg",
  },
  {
    id: 10,
    name: "Felipe",
    surname: "Chacón Montero",
    age: 22,
    country: "España",
    education: "Ciclo Formativo",
    imagen: "images/payaso.jpg",
  },
  {
    id: 11,
    name: "Nicolás",
    surname: "Burgos Contreras",
    age: 20,
    country: "Colombia",
    education: "Ciclo Formativo",
    imagen: "images/payaso.jpg",
  },
  {
    id: 12,
    name: "Alejandro",
    surname: "Gómez Ojeda",
    age: 25,
    country: "España",
    education: "Ciclo Formativo",
    imagen: "images/payaso.jpg",
  },
  {
    id: 13,
    name: "Pablo",
    surname: "Noria Gómez",
    age: 24,
    country: "España",
    education: "Ciclo Formativo",
    imagen: "images/payaso.jpg",
  },
  {
    id: 14,
    name: "Pablo",
    surname: "Jiménez Menéndez",
    age: 24,
    country: "España",
    education: "Ciclo Formativo",
    imagen: "images/payaso.jpg",
  },
  {
    id: 15,
    name: "Mauricio",
    surname: "Nicolás Ortiz",
    age: 20,
    country: "Colombia",
    education: "Ciclo Formativo",
    imagen: "images/payaso.jpg",
  },
  {
    id: 16,
    name: "Adrián",
    surname: "Pérez Agredano",
    age: 20,
    country: "España",
    education: "Ciclo Formativo",
    imagen: "images/payaso.jpg",
  },
];

function renderStudents(filterFn = null) {
  const studentList = document.getElementById("studentList");
  studentList.innerHTML = "";

  const filteredStudents = filterFn ? students.filter(filterFn) : students;

  if (filteredStudents.length === 0) {
    studentList.innerHTML =
      "<p>No hay alumnos que coincidan con los filtros.</p>";
    return;
  }

  filteredStudents.forEach((student, index) => {
    const card = document.createElement("div");
    card.classList.add("student-card");

    card.innerHTML = `
          <img src="${student.imagen}" alt="Foto de ${student.name}" class="student-photo">
          <h3>${student.name} ${student.surname}</h3>
          <p><strong>Edad:</strong> ${student.age}</p>
          <p><strong>País:</strong> ${student.country}</p>
          <p><strong>Estudios:</strong> ${student.education}</p>
          <button onclick="deleteStudent(${index})">Eliminar</button>
      `;

    studentList.appendChild(card);
  });
}

document.getElementById("searchName").addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase();
  renderStudents((student) =>
    `${student.name} ${student.surname}`.toLowerCase().includes(searchTerm)
  );
});

document.getElementById("searchAge").addEventListener("input", (e) => {
  const searchAge = e.target.value;
  renderStudents((student) => student.age == searchAge);
});

document.getElementById("searchCountry").addEventListener("change", (e) => {
  const searchCountry = e.target.value;
  renderStudents((student) => student.country === searchCountry);
});

document.getElementById("resetFilters").addEventListener("click", () => {
  document.getElementById("searchName").value = "";
  document.getElementById("searchAge").value = "";
  document.getElementById("searchCountry").value = "";
  renderStudents();
});

document.getElementById("studentForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const surname = document.getElementById("surname").value.trim();
  const age = parseInt(document.getElementById("age").value, 10);
  const country = document.getElementById("country").value;
  const education = document.getElementById("education").value.trim();
  const imagen = "default.jpg";

  if (!name || !surname || isNaN(age) || !country || !education) {
    alert("Todos los campos son obligatorios.");
    return;
  }

  students.push({ name, surname, age, country, education, imagen });
  renderStudents();

  document.getElementById("studentForm").reset();
});

function deleteStudent(index) {
  students.splice(index, 1);
  renderStudents();
}

renderStudents();
