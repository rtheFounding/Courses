const tBody = document.getElementById("tBody");

function createTable(data) {
  let row = tBody.insertRow(-1);

  let cell1 = row.insertCell(0);

  const anchor = document.createElement("a");
  anchor.innerHTML = `<a href="details.html?courseid=${data.id}">${data.dept}</a>`;
  cell1.appendChild(anchor);

  let cell2 = row.insertCell(1);
  cell2.innerText = data.courseNum;

  let cell3 = row.insertCell(2);
  cell3.innerText = data.courseName;
}

fetch("http://localhost:8081/api/courses")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((c) => {
      createTable(c);
    });
  });
