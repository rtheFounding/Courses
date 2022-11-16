let params = new URL(document.location).searchParams;
let id = params.get("courseid");

const deleteBtn = document.getElementById("deleteBtn");
const display = document.getElementById("displayInfo");
display.innerHTML = "";
fetch("http://localhost:8081/api/courses/" + id)
  .then((response) => response.json())
  .then((data) => {
    const d = document.createElement("div");
    d.innerHTML = `Course ID: ${data.id} <br> Instructor: ${data.instructor}`;
    display.appendChild(d);
  });

deleteBtn.addEventListener("click", () => {
  fetch("http://localhost:8081/api/courses/" + id, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json; charset=UTF-8", // Indicates the content
    },
    body: null,
  })
  .then(
    self.location = "index.html"
  )
});
