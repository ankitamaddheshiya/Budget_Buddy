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
let tbody = document.getElementById("tbody-append-history");

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

  avatar
    ? (user_profile_photo.src = avatar)
    : (user_profile_photo.src = "../images/user.png");
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
// // user income option


// const incomeOption = (event) => {
//   income_full.style.display = "block";
//   profile_full.style.display = "none";
//   exp_full.style.display = "none";
//   dashboard_full.style.display = "none";
//   history_full.style.display = "none";
//   logout_full.style.display = "none";

//   Page_name_heading.innerHTML = "Income";
//   userOptionsColor();
//   if (event.target.children[1] == undefined) {
//     event.target.parentElement.style.backgroundColor = "#ffffff";
//     event.target.parentElement.children[1].style.color = "#306DB3";
//     event.target.parentElement.children[1].style.fontWeight = "bold";
//     event.target.parentElement.style.transition = "all 0.5s ease";
//   } else {
//     event.target.style.backgroundColor = "#ffffff";
//     event.target.style.transition = "all 0.5s ease";
//     event.target.children[1].style.color = "#306DB3";
//     event.target.children[1].style.fontWeight = "bold";
//     event.target.children[1].style.transition = "all 0.5s ease";
//   }

//   // Fetch function to call from here
//   income_main_func();
// };

// async function income_main_func() {
//   await fetch("https://periwinkle-catfish-cuff.cyclic.app/income", {
//     headers: {
//       "Content-type": "application/json",
//       authorization: `Bearer ${token}`,
//     },
//   })
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//       let data1 = { name: "Hondurus" };
//       every_incomes_main_display(data);
//     });
// }

// function every_incomes_main_display(data) {
//   let income_container = document.getElementById("income_container");
//   income_container.style.width = "95%";
//   income_container.style.height = "100%";

//   let income_bottom = document.getElementById("income_bottom");
//   income_bottom.innerHTML = null;

//   let every_incomes_main = document.createElement("div");
//   every_incomes_main.setAttribute("class", "every_incomes_main");

//   let every_incomes_card = document.createElement("div");
//   every_incomes_card.setAttribute("class", "every_incomes_card");

//   let every_income_card_inner = document.createElement("div");
//   every_income_card_inner.setAttribute("class", "every_income_card_inner");

//   let income_type = document.createElement("h4");
//   income_type.innerHTML = `${data.name}`;

//   let date = document.createElement("p");
//   date.innerHTML = `${data.date}`;

//   let income_amount = document.createElement("h4");
//   income_amount.setAttribute("class", "income_amount");
//   income_amount.innerHTML = `${data.amount}`;

//   every_income_card_inner.append(income_type, date, income_amount);

//   let down_arrow = document.createElement("div");
//   down_arrow.setAttribute("class", "down_arrow");

//   let more = document.createElement("p");
//   more.innerHTML = "more";
//   down_arrow.append(more);
//   every_incomes_card.append(every_income_card_inner, down_arrow);
//   every_incomes_main.append(every_incomes_card);
//   income_bottom.append(every_incomes_main);

//   down_arrow.addEventListener("click", () => {
//     let click_show = document.createElement("div");
//     click_show.setAttribute("class", "click_show");

//     let income_card_buttons = document.createElement("div");
//     income_card_buttons.setAttribute("class", "income_card_buttons");

//     let income_edit = document.createElement("button");
//     income_edit.innerHTML = "Edit";
//     income_edit.setAttribute("class", "income_edit");
//     income_edit.addEventListener(
//       "click",
//       async () => {
//         await fetch(`${data._id}`)
//           .then((res) => {
//             return res.json();
//           })
//           .then((data) => {
//             console.log(data);
//           });
//       },
//       { once: true }
//     );

//     let income_delete = document.createElement("button");
//     income_delete.innerHTML = "Delete";
//     income_delete.setAttribute("class", "income_delete");
//     income_delete.addEventListener(
//       "click",
//       async (data) => {
//         await fetch(`${data._id}`)
//           .then((res) => {
//             return res.json();
//           })
//           .then((data) => {
//             console.log(data);
//           });
//       },
//       { once: true }
//     );

//     income_card_buttons.append(income_edit, income_delete);
//     click_show.append(income_card_buttons);

//     if (every_incomes_main.childNodes[1]) {
//       every_incomes_main.removeChild(every_incomes_main.childNodes[1]);
//     } else {
//       click_show.style.height = "60px";
//       every_incomes_main.append(click_show);
//     }
//   });
// }


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

  loading_container.style.display = "block";
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

  loading_container.style.display = "none";
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
    loading_container.style.display = "block";

    try {
      let Incomehistory = await fetch(
        "https://periwinkle-catfish-cuff.cyclic.app/income/",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${sessionStorage.getItem("token")}`,
           
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
            authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      );
      let ExpenseHData = await Expensehistory.json();
      let HistoryOfUser = [];
      if (Array.isArray(ExpenseHData) && Array.isArray(IncomeHData)) {
        HistoryOfUser = [...IncomeHData, ...ExpenseHData];
      } else if (Array.isArray(ExpenseHData)) {
        HistoryOfUser = ExpenseHData;
      } else if (Array.isArray(IncomeHData)) {
        HistoryOfUser = ExpenseHData;
      } else {
        alert("");
        // alert(ExpenseHData.msg);
        return;
      }
      loading_container.style.display = "none";
      HistoryOfUser = HistoryOfUser.reverse();

      const appendHisfun = async () => {
        tbody.innerHTML = null;
        HistoryOfUser.forEach((element) => {
          let date = element.createdAt.split("T");
          date = date[0];
          let tr = document.createElement("tr");
          if (element.type == "Cash") {
            tr.style.color = "rgb(2, 82, 2)";
            element.amount = "+ " + element.amount;
          } else {
            tr.style.color = "red";
            element.amount = "- " + element.amount;
          }
          tr.style.fontWeight = "bold";
          tr.innerHTML = `
            <td>${element.title}</td>
            <td>${element.type}</td>
            <td>${date}</td>
            <td>${element._id}</td>
            <td>${element.amount}</td>
            `;

          tbody.appendChild(tr);
        });
      };

      Swal.fire({
        title: "History Fetch Successfully!",
        text: "Your Income and Expenses.",
        icon: "success",
      }).then((res) => {
        if (res.value) {
          appendHisfun();
        } else {
          alert("Error");
        }
      });
    } catch (error) {
      Swal.fire({
        title: "Something went wrong!",
        text: "Operation Failed, Please Try Again.",
        icon: "error",
      });
    }
  };
  historyfun();
};
// ------------------------------------------------------------------

// ------------------------------------------------------------------
// logout option fetch request;

const logoutfun = async () => {
  loading_container.style.display = "block";

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
    loading_container.style.display = "none";
    Swal.fire({
      title: "Logout Successfull!",
      text: "You need to Login again.",
      icon: "success",
    }).then((res) => {
      if (res.value) {
        sessionStorage.clear();
        window.location.assign("/Frontend/Html/Login.html");
      } else {
        alert("Error");
      }
    });
  } catch (error) {
    Swal.fire({
      title: "Something Went Wrong!",
      text: "Operation Failed.",
      icon: "error",
    });
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


//to avoid hitting without loggin in
window.onload = function(){
 if(!token){
  window.location.assign("/Frontend/Html/Login.html");
 }
}
// ------------------------------------------------------------------

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<< END >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
