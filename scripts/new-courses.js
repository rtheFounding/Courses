const add = document.getElementById("add");
const department = document.getElementById("dept");
const courseNumber = document.getElementById("courseNum");
const nameOfCourse = document.getElementById("courseName");
const instructorName = document.getElementById("instructor");
const startDateOfCourse = document.getElementById("startDate");
const numberOfDays = document.getElementById("numDays");

add.addEventListener("click", () => {
  let course = {
    courseNum: courseNumber.value,
    courseName: nameOfCourse.value,
    instructor: instructorName.value,
    startDate: startDateOfCourse.value,
    numDays: numberOfDays.value,
    dept: department.value,
  };

  fetch("http://localhost:8081/api/courses", {
    method: "POST",
    body: JSON.stringify(course),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      self.location = "index.html"; // show list after save
    });

}); // end click event
