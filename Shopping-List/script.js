const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");
const clearBtn = document.getElementById("clear");

const filter = document.getElementById("filter");

function addFormItem(e) {
  e.preventDefault();
  //validate
  if (itemInput.value === "") {
    alert("please enter item name");
    return;
  }
  //create list
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(itemInput.value));
  const button = createBtn("remove-item btn-link text-red");
  li.appendChild(button);
  itemList.appendChild(li);
  itemInput.value = "";
  checkUI();
  //console.log(li);
}

function createBtn(classes) {
  const btn = document.createElement("button");
  btn.className = classes;
  const icon = createIcon("fa-solid fa-xmark");
  btn.appendChild(icon);
  return btn;
}

function createIcon(classes) {
  const icon = document.createElement("i");
  icon.className = classes;
  return icon;
}

function removeItem(e) {
  if (e.target.parentElement.classList.contains("remove-item")) {
    if (confirm("are u sure to delete?") == true) {
      e.target.parentElement.parentElement.remove();
      checkUI();
    }
  }
}

function deleteList() {
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
  checkUI();
}

function filterItems(e) {
  const items = document.querySelectorAll("li");
  const text = e.target.value.toLowerCase();

  items.forEach((item) => {
    const itemName = item.textContent.toLowerCase();
    //if text does not present in list items
    if (itemName.indexOf(text) !== -1) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });

  console.log(text);
}

function checkUI() {
  const items = document.querySelectorAll("li");
  console.log(items);

  if (items.length === 0) {
    clearBtn.style.display = "none";
    filter.style.display = "none";
  } else {
    clearBtn.style.display = "block";
    filter.style.display = "block";
  }
}

itemForm.addEventListener("submit", addFormItem);
itemList.addEventListener("click", removeItem);
clearBtn.addEventListener("click", deleteList);
filter.addEventListener("input", filterItems);

checkUI();

