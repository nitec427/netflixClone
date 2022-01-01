// const tabItems = document.querySelectorAll(".tab-item");
// const tabContentItems = document.querySelectorAll(".tab-content-item");

// function selItem(e) {
//   tabItems.forEach((x) => x.classList.remove("tab-border"));
//   this.classList.add("tab-border");
//   showItem(this.id);
// }
// function showItem(id) {
//   const contentItem = document.querySelector(`#${id}-content`);
//   tabContentItems.forEach((x) => x.classList.add("hide"));
//   contentItem.classList.remove("hide");
// }
// tabItems.forEach((item) => item.addEventListener("click", selItem));

// How to print multiple objects with consoel

foo = {
  name: "John",
  surname: "Duo",
  age: 28,
  job: "Architect",
};
bar = {
  name: "Nicole",
  surname: "Aniston",
  age: 24,
  job: "Gamer",
};
baz = {
  name: "Kimmy",
  surname: "Granger",
  age: 32,
  job: "Lecturer",
};
console.log(
  "%c My Friends",
  "color:orangered; font-weight:bold; font-size:1rem"
);
console.log({ foo, bar, baz });

console.table([foo, bar, baz]);
