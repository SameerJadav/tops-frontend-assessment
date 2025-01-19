import "./style.css";

const containers = document.querySelectorAll(".container");
const items = document.querySelectorAll(".item");

items.forEach((item) => {
  item.addEventListener("dragstart", (e) => {
    e.target.classList.add("dragging");
  });
  item.addEventListener("dragend", (e) => {
    e.target.classList.remove("dragging");
  });
});

containers.forEach((container) => {
  container.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  container.addEventListener("drop", (e) => {
    e.preventDefault();
    const item = document.querySelector(".dragging");
    const container = e.target.closest(".container");
    if (container && item) {
      container.appendChild(item);
    }
  });
});
