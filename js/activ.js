// get total
// create Product
// save localStorage
// clear input
// read
// count
// delete
// update
// search
// clean data
// --------------------------------------

// -------- inputs -----------
let title = document.getElementById("title");
let price = document.getElementById("price");
let texes = document.getElementById("texes");
let total = document.getElementById("total");

let sub = document.getElementById("sub");

// Update
let mood = "create";
let tmp;

// -------- inputs -----------

// ------------------ get total------------------------
function getTotal() {
  let resalt = +price.value + +texes.value;
  total.innerHTML = resalt;
}
// ------------------ get total------------------------

// ------------------ create Product --&&-- Save localStorage -------------------
let dataPro;
// ------ localStorage ------
if (localStorage.prodact != null) {
  dataPro = JSON.parse(localStorage.prodact);
} else {
  dataPro = [];
}
// ------ localStorage ------

sub.onclick = () => {
  let newPro = {
    title: title.value.toLowerCase(),
    price: price.value,
    texes: texes.value,
    total: total.innerHTML,
  };
  // dataPro.push(newPro);

  // ------------------------ Clean Data ----------------------------
  if (title.value != "" && price.value != "") {
    //
    // ------------------------ Update Prodact --------------------------
    if (mood === "create") {
      //
      // ----------------------  create -----------------------------

      dataPro.push(newPro);
      //
      // ---------------------- count && create -----------------------------
    } else {
      dataPro[tmp] = newPro;
      sub.innerHTML = "Create";
    }
    // ------------------------ Update Prodact --------------------------
    //
    // clear input
    clearData();
  }
  // ------------------------ Clean Data ----------------------------

  // Save localStorage
  localStorage.setItem("prodact", JSON.stringify(dataPro));

  // Reed Prodact
  ShooData();
};
// ------------------ create Product --&&-- Save localStorage -------------------

// ---------------- clear input ------------------
function clearData() {
  title.value = "";
  price.value = "";
  texes.value = "";

  total.innerHTML = "";
}
// ---------------- clear input ------------------

// ---------------- Read Prodact -----------------
function ShooData() {
  let table = "";

  for (let i = 0; i < dataPro.length; i++) {
    table += `
    <tr>
      <td>${[i + 1]}</td>
      <td>${dataPro[i].title}</td>
      <td>${dataPro[i].price}</td>
      <td>${dataPro[i].texes}</td>
      <td>${dataPro[i].total}</td>
      <td><button onclick="UpdateData(${i})" id="update">Update</button></td>
      <td><button onclick="DeleteItem(${i})" id="delete">Delete</button></td>
    </tr>
    `;
  }
  document.getElementById("tbody").innerHTML = table;

  // ------------------- DeleteAll ------------------
  // let Delete = document.getElementById("Delete-All");

  // if (dataPro.length > 0) {
  //   Delete.innerHTML = `<button onclick="DeleteAll()" > Delete All ( ${dataPro.length} ) </button>`;
  // } else {
  //   Delete.innerHTML = "";
  // }
  // ------------------- DeleteAll -------------------

  getTotal();
}
ShooData();
// ---------------- Read Prodact -----------------

// ---------------- Delete Prodact ---------------
function DeleteItem(i) {
  dataPro.splice(i, 1);
  localStorage.prodact = JSON.stringify(dataPro);
  ShooData();
}
// ---------------- Delete Prodact ---------------

// ------------------ Delete All -----------------
function DeleteAll() {
  localStorage.clear();
  dataPro.splice(0);
  ShooData();
}
// ------------------ Delete All -----------------

// ------------------ Update Prodact ----------------
function UpdateData(i) {
  title.value = dataPro[i].title;
  price.value = dataPro[i].price;
  texes.value = dataPro[i].texes;
  getTotal();

  sub.innerHTML = "Update";

  scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

  mood = "Update";
  tmp = i;
}
// ------------------ Update Prodact ----------------

// ------------------ Search Title & Category ---------------------

let searchMood = "title";

// getSearch
function getSearch(id) {
  let search = document.getElementById("search");
  search.value = "";
  ShooData();
}

// searchData
function searchData(value) {
  let table = "";

  for (let i = 0; i < dataPro.length; i++) {
    if (searchMood == "title") {
      if (dataPro[i].title.includes(value.toLowerCase())) {
        table += `
        <tr>
          <td>${[i + 1]}</td>
          <td>${dataPro[i].title}</td>
          <td>${dataPro[i].price}</td>
          <td>${dataPro[i].texes}</td>
          <td>${dataPro[i].total}</td>
          <td><button onclick="UpdateData(${i})" id="update">Update</button></td>
          <td><button onclick="DeleteItem(${i})" id="delete">Delete</button></td>
        </tr>
        `;
      }
    } else {
      if (dataPro[i].category.includes(value.toLowerCase())) {
        table += `
        <tr>
          <td>${[i + 1]}</td>
          <td>${dataPro[i].title}</td>
          <td>${dataPro[i].price}</td>
          <td>${dataPro[i].texes}</td>
          <td>${dataPro[i].total}</td>
          <td><button onclick="UpdateData(${i})" id="update">Update</button></td>
          <td><button onclick="DeleteItem(${i})" id="delete">Delete</button></td>
        </tr>
        `;
      }
    }
  }
  document.getElementById("tbody").innerHTML = table;
}

// ------------------ Search Title & Category ---------------------
