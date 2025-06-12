console.log("Fronted JS ishga tushdi");

function itemTemplete(item) {
  return `<li
          class="list-group-item list-group-item-info d-flex align-items-center justify-content-between"
        >
          <span class= "item-text">${item.reja}</span>
          <div>
            <button
              data-id="${item._id}"
              class="delete-me btn btn-secondary btn-sm mr-1"
            >
              O'zgartirish
            </button>
            <button
             data-id="${item._id}"
              class="delete-me btn btn-secondary btn-sm"
            >
              O'chirish
            </button>
          </div>
        </li>`;
}

let createField = document.getElementById("create-field");

document.getElementById("create-form").addEventListener("submit", function (e) {
  e.preventDefault();

  axios
    .post("/create-item", { reja: createField.value })
    .then((response) => {
      document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplete(response.data));
      createField.value = "";
      createField.focus();
    })
    .catchc((err) => {
      console.log("Iltimos qaytadan harakat qiling!");
    });
});
