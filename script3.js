const searchInput = document.getElementById("searchInput");
const mentors = document.querySelectorAll(".mentor");

searchInput.addEventListener("keyup", function () {
  let value = searchInput.value.toLowerCase();

  mentors.forEach(mentor => {
    let name = mentor.dataset.name.toLowerCase();

    if (name.includes(value)) {
      mentor.style.display = "flex";
    } else {
      mentor.style.display = "none";
    }
  });
});