function toggle(element) {
  const dropdown = element.querySelector(".dropdown");

  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}