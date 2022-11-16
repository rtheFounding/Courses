const tBody = document.getElementById("tBody");

function createTable(data) {
  let row = tBody.insertRow(-1);

  let cell1 = row.insertCell(0);

  const anchor = document.createElement("a");
  anchor.innerHTML = `<a href="details.html?courseid=${data.id}">${data.courseName}</a>`;
  cell1.appendChild(anchor);

  let cell2 = row.insertCell(1);
  cell2.innerText = data.courseNum;

  let cell3 = row.insertCell(2);
  cell3.innerText = data.dept;

  let cell4 = row.insertCell(3);

  const secondAnchor = document.createElement("a");
  secondAnchor.innerHTML = `<a href="confirm-delete.html?courseid=${data.id}">Delete Course</a>`;
  cell4.appendChild(secondAnchor);
}

fetch("http://localhost:8081/api/courses")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((c) => {
      createTable(c);
    });
  });
