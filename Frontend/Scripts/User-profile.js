let Page_name_heading = document.getElementById("Page-name-heading");
const userOptions = document.querySelectorAll(".user-options ul li");
let various_display_div = document.querySelector(".various-display-div");
let profile_full = document.querySelector(".profile_full");
let income_full = document.querySelector(".income_full");
let exp_full = document.querySelector(".exp_full");
let dashboard_full = document.querySelector(".dashboard_full");
let history_full = document.querySelector(".history_full");
let logout_full = document.querySelector(".logout_full");
let loading_container = document.getElementById("loading-container");
let token = sessionStorage.getItem("token");
// let add_income_form = document.getElementById("add_income_form");
// let add_income_btn = document.getElementById("add_income_btn");

// ------------------------------------------------------------------
// to retrive the user options background colors
const userOptionsColor = () => {
  let userOptions = document.querySelectorAll(".user-options ul li");
  userOptions.forEach((option) => {
    option.style.backgroundColor = "#306DB3";
    option.children[1].style.color = "#ffffff";
    option.children[1].style.fontWeight = "normal";
  });
};
// ------------------------------------------------------------------

// <<<<<<<<<<<<<<<<<<<<<<<<<<<< DASHBOARD OPTIONS TO USER >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// ------------------------------------------------------------------

// user account option
const accountOption = async (event) => {
  profile_full.style.display = "block";
  income_full.style.display = "none";
  exp_full.style.display = "none";
  dashboard_full.style.display = "none";
  history_full.style.display = "none";
  logout_full.style.display = "none";
  Page_name_heading.innerHTML = "Account";
  userOptionsColor();
  if (event.target.children[1] == undefined) {
    event.target.parentElement.style.backgroundColor = "#ffffff";
    event.target.parentElement.children[1].style.color = "#306DB3";
    event.target.parentElement.children[1].style.fontWeight = "bold";
    event.target.parentElement.style.transition = "all 0.5s ease";
  } else {
    event.target.style.backgroundColor = "#ffffff";
    event.target.style.transition = "all 0.5s ease";
    event.target.children[1].style.color = "#306DB3";
    event.target.children[1].style.fontWeight = "bold";
    event.target.children[1].style.transition = "all 0.5s ease";
  }

  let user_display_name = document.getElementById("user-display-name");
  let fixed_div_username = document.getElementById("fixed-div-username");
  let user_profile_photo = document.getElementById("user-profile-photo");
  let user_dispaly_dob = document.getElementById("user-dispaly-dob");
  let user_display_address2 = document.getElementById("user-display-address2");
  let user_dispaly_firstname = document.getElementById(
    "user-dispaly-firstname"
  );
  let user_dispaly_lastname = document.getElementById("user-dispaly-lastname");
  let user_dispaly_email = document.getElementById("user-dispaly-email");
  let user_dispaly_mobile = document.getElementById("user-dispaly-mobile");

  loading_container.style.display = "block";
  let promise = await fetch(
    "https://periwinkle-catfish-cuff.cyclic.app/user/profile",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    }
  );
  let response = await promise.json();
  loading_container.style.display = "none";

  const { id, fname, lname, email, mobile, address, dob } = response;

  user_dispaly_email.innerHTML = email;

  // avatar
  //   ? (user_profile_photo.src = avatar)
  //   : (user_profile_photo.src = "../images/user.png");
  fname
    ? (user_dispaly_firstname.innerHTML = fname)
    : (user_dispaly_firstname.innerHTML = "First Name");

  user_display_name.innerHTML = fname;
  fixed_div_username.innerHTML = fname;
  lname
    ? (user_dispaly_lastname.innerHTML = lname)
    : (user_dispaly_lastname.innerHTML = "Last Name");

  // dob
  //   ? (user_dispaly_dob.innerHTML = dob)
  //   : (user_dispaly_dob.innerHTML = "Date Of Birth");
  console.log(dob);
  address
    ? (user_display_address2.innerText = address)
    : (user_display_address2.innerText = "Address");

  mobile
    ? (user_dispaly_mobile.innerHTML = mobile)
    : (user_dispaly_mobile.innerHTML = "Edit Profile");
};

// edit profile button
//convert the file into the link and then edit profile by fetch request
let avatar = "";
const fileConvertor = (event) => {
  let file = event.target.files[0];
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    avatar = reader.result;
  };
};

const editProfilefun = async (event) => {
  event.preventDefault();

  // Collecting Form Data
  let formData = new FormData(event.target);
  let data = Object.fromEntries(formData);

  data.avatar = `${avatar}`;

  try {
    let editProfile = await fetch(
      "https://periwinkle-catfish-cuff.cyclic.app/user/editprofile",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
        body: JSON.stringify(data),
      }
    );
    let editProfileData = await editProfile.json();
    console.log(editProfileData);
  } catch (error) {
    console.log(error);
  }
};

let edit_form_popup_div = document.getElementById("edit_form_popup_div");
const editbtnFun = () => {
  edit_form_popup_div.classList.add("open-popup");
};
const dontedit = (event) => {
  event.target.parentElement.classList.remove("open-popup");
};

// ----------------------------------------------------------------
// user income option

// ----------------------------------------------------------------
// user expense page

// ----------------------------------------------------------------
// user budget overview page
const budgetOption = (event) => {
  dashboard_full.style.display = "block";
  income_full.style.display = "none";
  profile_full.style.display = "none";
  exp_full.style.display = "none";
  history_full.style.display = "none";
  logout_full.style.display = "none";

  Page_name_heading.innerHTML = "Budget";
  userOptionsColor();
  if (event.target.children[1] == undefined) {
    event.target.parentElement.style.backgroundColor = "#ffffff";
    event.target.parentElement.children[1].style.color = "#306DB3";
    event.target.parentElement.children[1].style.fontWeight = "bold";
    event.target.parentElement.style.transition = "all 0.5s ease";
  } else {
    event.target.style.backgroundColor = "#ffffff";
    event.target.style.transition = "all 0.5s ease";
    event.target.children[1].style.color = "#306DB3";
    event.target.children[1].style.fontWeight = "bold";
    event.target.children[1].style.transition = "all 0.5s ease";
  }

  // code to show the page charts-------

  // doughnut chart
  var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
  var yValues = [55, 49, 44, 24, 15];
  var barColors = ["#b91d47", "#00aba9", "#2b5797", "#e8c3b9", "#1e7145"];

  new Chart("doughnut-chart", {
    type: "doughnut",
    data: {
      labels: xValues,
      datasets: [
        {
          backgroundColor: barColors,
          data: yValues,
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: "World Wide Wine Production 2018",
      },
    },
  });
  // ---------------------------------------------------------

  // pie chart
  google.charts.load("current", { packages: ["corechart"] });
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    const data = google.visualization.arrayToDataTable([
      ["Contry", "Mhl"],
      ["Italy", 54.8],
      ["France", 48.6],
      ["Spain", 44.4],
      ["USA", 23.9],
      ["Argentina", 14.5],
    ]);

    const options = {
      title: "World Wide Wine Production",
      is3D: true,
    };

    const chart = new google.visualization.PieChart(
      document.getElementById("pie-chart")
    );
    chart.draw(data, options);
  }
  // ---------------------------------------------------------

  // line chart
  let exp1 = "x";
  let exp2 = "1.5*x";
  let exp3 = "1.5*x + 7";
  // Generate values

  const x1Values = [];
  const x2Values = [];
  const x3Values = [];
  const y1Values = [];
  const y2Values = [];
  const y3Values = [];

  for (let x = 0; x <= 10; x += 1) {
    x1Values.push(x);
    x2Values.push(x);
    x3Values.push(x);
    y1Values.push(eval(exp1));
    y2Values.push(eval(exp2));
    y3Values.push(eval(exp3));
  }

  // Define Data
  const data = [
    { x: x1Values, y: y1Values, mode: "lines" },
    { x: x2Values, y: y2Values, mode: "lines" },
    { x: x3Values, y: y3Values, mode: "lines" },
  ];

  //Define Layout
  const layout = {
    title: "[y=" + exp1 + "]  [y=" + exp2 + "]  [y=" + exp3 + "]",
  };

  // Display using Plotly
  Plotly.newPlot("line-chart", data, layout);

  // ---------------------------------------------------------
  // bar chart
  var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
  var yValues = [55, 49, 44, 24, 15];
  var barColors = ["red", "green", "blue", "orange", "brown"];

  new Chart("bar-chart", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [
        {
          backgroundColor: barColors,
          data: yValues,
        },
      ],
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: "World Wine Production 2018",
      },
    },
  });
};

// ------------------------------------------------------------------
// user history page

const historyOption = (event) => {
  history_full.style.display = "block";
  income_full.style.display = "none";
  profile_full.style.display = "none";
  exp_full.style.display = "none";
  dashboard_full.style.display = "none";
  logout_full.style.display = "none";

  Page_name_heading.innerHTML = "History";
  userOptionsColor();
  if (event.target.children[1] == undefined) {
    event.target.parentElement.style.backgroundColor = "#ffffff";
    event.target.parentElement.children[1].style.color = "#306DB3";
    event.target.parentElement.children[1].style.fontWeight = "bold";
    event.target.parentElement.style.transition = "all 0.5s ease";
  } else {
    event.target.style.backgroundColor = "#ffffff";
    event.target.style.transition = "all 0.5s ease";
    event.target.children[1].style.color = "#306DB3";
    event.target.children[1].style.fontWeight = "bold";
    event.target.children[1].style.transition = "all 0.5s ease";
  }

  // history fetch request
  const historyfun = async () => {
    // let loader = `<div class="loading-container"><div class="loader"></div></div>`;
    // various_display_div.innerHTML = loader;
    try {
      let Incomehistory = await fetch(
        "https://periwinkle-catfish-cuff.cyclic.app/income/",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      );
      let IncomeHData = await Incomehistory.json();

      let Expensehistory = await fetch(
        "https://periwinkle-catfish-cuff.cyclic.app/expense/",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      );
      let ExpenseHData = await Expensehistory.json();
      let HistoryOfUser = [];
      if (Array.isArray(ExpenseHData) && Array.isArray(IncomeHData)) {
        HistoryOfUser = IncomeHData.concat(ExpenseHData);
      } else if (Array.isArray(ExpenseHData)) {
        HistoryOfUser = ExpenseHData;
      } else if (Array.isArray(IncomeHData)) {
        HistoryOfUser = ExpenseHData;
      } else {
        alert("Token Dynamic Nahi hai. Code me change karna hai");
        // alert(ExpenseHData.msg);
        return;
      }

      // const appendHisfun = async () => {
      //   let tbody = document.getElementById("tbody-append-history");
      //   HistoryOfUser.forEach((element) => {
      //     let date = element.createdAt.split("T");
      //     date = date[0];
      //     let tr = document.createElement("tr");
      //     if (element.type == "Cash") {
      //       tr.style.color = "rgb(2, 82, 2)";
      //       element.amount = "+ " + element.amount;
      //     } else {
      //       tr.style.color = "red";
      //       element.amount = "- " + element.amount;
      //     }
      //     tr.style.fontWeight = "bold";
      //     tr.innerHTML = `
      //       <td>${element.title}</td>
      //       <td>${element.type}</td>
      //       <td>${date}</td>
      //       <td>${element._id}</td>
      //       <td>${element.amount}</td>
      //       `;

      //     tbody.appendChild(tr);
      //   });
      // };
      // appendHisfun();

      alert("History Fetch Successfully");
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };
  historyfun();
};
// ------------------------------------------------------------------

// ------------------------------------------------------------------
// logout option fetch request;

const logoutfun = async () => {
  let loader = `<div class="loading-container"><div class="loader"></div></div>`;
  various_display_div.innerHTML = loader;

  try {
    let logout = await fetch(
      "https://periwinkle-catfish-cuff.cyclic.app/user/logout",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    let logoutData = await logout.json();
    alert(logoutData.msg);
    // windows.location.assign("index.html")
  } catch (error) {
    various_display_div.innerHTML = userLogoutPage;
    console.log(error);
    alert("error");
  }
};

const logoutOption = (event) => {
  logout_full.style.display = "block";
  history_full.style.display = "none";
  income_full.style.display = "none";
  profile_full.style.display = "none";
  exp_full.style.display = "none";
  dashboard_full.style.display = "none";

  Page_name_heading.innerHTML = "Logout";
  userOptionsColor();
  if (event.target.children[1] == undefined) {
    event.target.parentElement.style.backgroundColor = "#ffffff";
    event.target.parentElement.children[1].style.color = "#306DB3";
    event.target.parentElement.children[1].style.fontWeight = "bold";
    event.target.parentElement.style.transition = "all 0.5s ease";
  } else {
    event.target.style.backgroundColor = "#ffffff";
    event.target.style.transition = "all 0.5s ease";
    event.target.children[1].style.color = "#306DB3";
    event.target.children[1].style.fontWeight = "bold";
    event.target.children[1].style.transition = "all 0.5s ease";
  }
};
// ------------------------------------------------------------------

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<< END >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
