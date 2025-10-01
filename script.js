// Cache DOM elements
const input = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("shoppingList");

// Add item
addBtn.addEventListener("click", () => {
  const itemText = input.value.trim();
  if (itemText !== "") {
    addItem(itemText);
    input.value = ""; // clear input
  }
});

// Function to create a new list item
function addItem(text) {
  const li = document.createElement("li");

  // item text span
  const span = document.createElement("span");
  span.textContent = text;
  li.appendChild(span);

  // edit button
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.addEventListener("click", () => editItem(li, span, editBtn));
  li.appendChild(editBtn);

  // remove button
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.addEventListener("click", () => li.remove());
  li.appendChild(removeBtn);

  list.appendChild(li);
}

// Edit/Save functionality
function editItem(li, span, editBtn) {
  if (editBtn.textContent === "Edit") {
    const input = document.createElement("input");
    input.type = "text";
    input.value = span.textContent;
    li.insertBefore(input, span);
    li.removeChild(span);

    editBtn.textContent = "Save";
  } else {
    const input = li.querySelector("input");
    span.textContent = input.value;
    li.insertBefore(span, input);
    li.removeChild(input);

    editBtn.textContent = "Edit";
  }
}
