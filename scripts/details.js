let params = new URL(document.location).searchParams;
let id = params.get('courseid');


const results = document.getElementById("results");
results.innerHTML = "";
fetch("http://localhost:8081/api/courses/" + id)
  .then(response => response.json())
  .then(data => {
      const d = document.createElement("div");
      d.innerHTML = `Instructor: ${data.instructor}" <br> Start Date: ${data.startDate} <br> Number of days: ${data.numDays}`;
      results.appendChild(d);
    });
