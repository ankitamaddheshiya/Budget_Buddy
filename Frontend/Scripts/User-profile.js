// user options click event
let Page_name_heading = document.getElementById("Page-name-heading");
const userOptions = document.querySelectorAll(".user-options ul li");

const userIncomePage = `<h1>Make the layout of user income and append it here</h1>`;
const userExpensePage = `<h1>Make the layout of user expense and append it here</h1>`;

// -----------------------------------------------------------------------------
// user option click event
const userAccountPage = `
            <div class="profile-container">
            <div class="left-profile-section">
            <div class="profile-photo-and-info-div">
                <div>
                <img src="../images/user.png" alt="" id="user-profile-photo"/>
                <h3 id="user-display-name">Name</h3>
                </div>
                <div>
                <div><p id="user-dispaly-dob">Designation</p></div>
                <div><p id="user-display-address">Address</p></div>
                <div><button onclick="editbtnFun()">Edit</button></div>
                </div>
            </div>
            <div class="social-media-links-div">
                <div>
                <i class="fa-brands fa-facebook"></i>
                <a href="">angel@123</a>
                </div>
                <div>
                <i class="fa-brands fa-instagram"></i>
                <a href="">@sweet-angel</a>
                </div>
                <div>
                <i class="fa-solid fa-globe"></i>
                <a href="">google.com</a>
                </div>
                <div>
                <i class="fa-brands fa-twitter"></i>
                <a href="">@angeltweet</a>
                </div>
            </div>
            </div>

            <div class="right-profile-section">
            <div class="user-details-div">
                <div>
                <h4>First Name</h4>
                <h4 id="user-dispaly-firstname">ABC</h4>
                </div>
                <div>
                <h4>Last Name</h4>
                <h4 id="user-dispaly-lastname">XYZ</h4>
                </div>
                <div>
                <h4>Email</h4>
                <h4 id="user-dispaly-email">Email</h4>
                </div>
                <div>
                <h4>Mobile Number</h4>
                <h4 id="user-dispaly-mobile">Save Mobile</h4>
                </div>
                <div>
                <h4>Adresss</h4>
                <h4 id="user-dispaly-address">Save Address</h4>
                </div>
            </div>

            <div class="extra">
                <div>
                 <div>
                    <img src="../images/vip-card.png" alt="VIP-PASS">
                    <h2>VIP PASS BENEFITS</h2>
                 </div>
                <p>
                  <i class="fa-sharp fa-solid fa-star"></i> <span>10% Off On All Products</span>
                </p>
                <p>
                  <i class="fa-sharp fa-solid fa-star"></i> <span> Avail All Premium Features</span>
                </p>
                <p>
                  <i class="fa-sharp fa-solid fa-star"></i> <span>Get Legal Expert Advice</span>
                </p>
                <p>
                  <i class="fa-sharp fa-solid fa-star"></i> <span>24/7 Support</span>
                </p>
                </div>
                <div>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam ipsa
                    quasi quis facere libero reprehenderit
                </p>
                </div>
            </div>
            </div>
            </div>
            `;
let various_display_div = document.querySelector(".various-display-div");

const accountOption = async (event) => {
  various_display_div.innerHTML = null;
  Page_name_heading.innerHTML = "Account";
  userOptionsColor();
  if (event.target.children[1] == undefined) {
    event.target.parentElement.style.backgroundColor = "#ffffff";
    event.target.parentElement.children[1].style.color = "#306DB3";
    event.target.parentElement.children[1].style.fontWeight = "bold";
  } else {
    event.target.style.backgroundColor = "#ffffff";
    event.target.children[1].style.color = "#306DB3";
    event.target.children[1].style.fontWeight = "bold";
  }
  various_display_div.innerHTML = userAccountPage;
  let user_profile_photo = document.getElementById("user-profile-photo");
  let user_dispaly_dob = document.getElementById("user-dispaly-dob");
  let user_display_address = document.getElementById("user-display-address");
  let user_dispaly_firstname = document.getElementById(
    "user-dispaly-firstname"
  );
  let user_dispaly_lastname = document.getElementById("user-dispaly-lastname");
  let user_dispaly_email = document.getElementById("user-dispaly-email");
  let user_dispaly_mobile = document.getElementById("user-dispaly-mobile");
  let user_dispaly_address = document.getElementById("user-dispaly-address");

  user_dispaly_firstname.innerText = "Aman";
};
// ----------------------------------------------------------------

const incomeOption = (event) => {
  various_display_div.innerHTML = null;
  Page_name_heading.innerHTML = "Income";
  userOptionsColor();
  if (event.target.children[1] == undefined) {
    event.target.parentElement.style.backgroundColor = "#ffffff";
    event.target.parentElement.children[1].style.color = "#306DB3";
    event.target.parentElement.children[1].style.fontWeight = "bold";
  } else {
    event.target.style.backgroundColor = "#ffffff";
    event.target.children[1].style.color = "#306DB3";
    event.target.children[1].style.fontWeight = "bold";
  }
  various_display_div.innerHTML = userIncomePage;
};
const expenseOption = (event) => {
  various_display_div.innerHTML = null;
  Page_name_heading.innerHTML = "Expenses";
  userOptionsColor();
  if (event.target.children[1] == undefined) {
    event.target.parentElement.style.backgroundColor = "#ffffff";
    event.target.parentElement.children[1].style.color = "#306DB3";
    event.target.parentElement.children[1].style.fontWeight = "bold";
  } else {
    event.target.style.backgroundColor = "#ffffff";
    event.target.children[1].style.color = "#306DB3";
    event.target.children[1].style.fontWeight = "bold";
  }
  various_display_div.innerHTML = userExpensePage;
};

// ----------------------------------------------------------------
const userBudgetPage = `  <div class="dashboard">
        <div class="dashboard-uper-div">
          <div class="line-graph">
            <div id="line-chart" style="width: 95%; height: 95%; margin: auto;"></div>
          </div>
          <div class="doughnut-graph">
            <canvas id="doughnut-chart" style="width: 95%; height: 95%; margin: auto;"></canvas>
          </div>
        </div>
        <div class="dashboard-lower-div">
          <div class="pie-graph">
            <div id="pie-chart" style="width: 95%; height: 95%; margin: auto;"></div>
          </div>
          <div class="bar-graph">
            <canvas id="bar-chart" style="width: 100%; height: 100%; margin: auto;"></canvas>
          </div>
        </div>
        </div>
`;
const budgetOption = (event) => {
  various_display_div.innerHTML = null;
  Page_name_heading.innerHTML = "Budget";
  userOptionsColor();
  if (event.target.children[1] == undefined) {
    event.target.parentElement.style.backgroundColor = "#ffffff";
    event.target.parentElement.children[1].style.color = "#306DB3";
    event.target.parentElement.children[1].style.fontWeight = "bold";
  } else {
    event.target.style.backgroundColor = "#ffffff";
    event.target.children[1].style.color = "#306DB3";
    event.target.children[1].style.fontWeight = "bold";
  }
  various_display_div.innerHTML = userBudgetPage;

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
const userHistoryPage = `  
      <div class="history-container">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Type</th>
            <th>Date</th>
            <th>Transaction Id</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody id="tbody-append-history">
        </tbody>
      </table>
      </div>
`;
const historyOption = (event) => {
  various_display_div.innerHTML = null;
  Page_name_heading.innerHTML = "History";
  userOptionsColor();
  if (event.target.children[1] == undefined) {
    event.target.parentElement.style.backgroundColor = "#ffffff";
    event.target.parentElement.children[1].style.color = "#306DB3";
    event.target.parentElement.children[1].style.fontWeight = "bold";
  } else {
    event.target.style.backgroundColor = "#ffffff";
    event.target.children[1].style.color = "#306DB3";
    event.target.children[1].style.fontWeight = "bold";
  }
  various_display_div.innerHTML = userHistoryPage;

  // history fetch request
  const historyfun = async () => {
    let loader = `<div class="loading-container"><div class="loader"></div></div>`;
    various_display_div.innerHTML = loader;
    try {
      let Incomehistory = await fetch(
        "https://periwinkle-catfish-cuff.cyclic.app/income/",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFrc2hheWNoYXZhbjAxMDEwMUBnbWFpbC5jb20iLCJ1c2VySUQiOiI2NDI2ZWQ5YjljMjc3OTA0NjAzMDBlOWYiLCJpYXQiOjE2ODAyNzI4MDYsImV4cCI6MTY4MDM1OTIwNn0.97RvvvbTKiEjm5PjufDGkeAeMu40CLlDAjagFJRrjGA`,
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
            authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFrc2hheWNoYXZhbjAxMDEwMUBnbWFpbC5jb20iLCJ1c2VySUQiOiI2NDI2ZWQ5YjljMjc3OTA0NjAzMDBlOWYiLCJpYXQiOjE2ODAyNzI4MDYsImV4cCI6MTY4MDM1OTIwNn0.97RvvvbTKiEjm5PjufDGkeAeMu40CLlDAjagFJRrjGA`,
          },
        }
      );
      let ExpenseHData = await Expensehistory.json();
      let HistoryOfUser = IncomeHData.concat(ExpenseHData);

      const appendHisfun = async () => {
        various_display_div.innerHTML = userHistoryPage;
        let tbody = document.getElementById("tbody-append-history");
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
      appendHisfun();
      alert("History Fetch Successfully");
    } catch (error) {
      various_display_div.innerHTML = userHistoryPage;
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

const userLogoutPage = `
        <div class=logout-layout>
           <i class="fa-sharp fa-regular fa-circle-xmark"></i><button onclick="logoutfun()">Logout</button> 
        </div>
`;
const logoutOption = (event) => {
  Page_name_heading.innerHTML = "Logout";
  userOptionsColor();
  if (event.target.children[1] == undefined) {
    event.target.parentElement.style.backgroundColor = "#ffffff";
    event.target.parentElement.children[1].style.color = "#306DB3";
    event.target.parentElement.children[1].style.fontWeight = "bold";
  } else {
    event.target.style.backgroundColor = "#ffffff";
    event.target.children[1].style.color = "#306DB3";
    event.target.children[1].style.fontWeight = "bold";
  }
  various_display_div.innerHTML = userLogoutPage;
};
// ------------------------------------------------------------------

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

// ------------------------------------------------------------------
// user edit profile page display the form
const editbtnFun = (event) => {
  various_display_div.innerHTML = null;
  various_display_div.innerHTML = `
        <div class="edit-form-container">
        <i class="fa-sharp fa-solid fa-arrow-left" onclick="dontedit()"></i>
        <form action="" onsubmit="editProfilefun(event)" id="edit-form">
          <div>
            <input type="text" name="fname" id="fname" placeholder="First name" />
            <input type="text" name="lname" id="lname" placeholder="Last name" />
          </div>
          <div>
            <input type="text" name="mobile" id="mobile" placeholder="Mobile" />
            <input type="date" name="dob" placeholder="Date Of Birth" />
          </div>
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Address"
          />
          <label for="profile">Profile</label>
          <input type="file" name="profile" onchange="fileConvertor(event)"/>
          <button type="submit">Save</button>
        </form>
      </div>
  `;
};

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
  let loader = `<div class="loading-container"><div class="loader"></div></div>`;
  various_display_div.innerHTML = loader;
  let formData = new FormData(event.target);
  let data = Object.fromEntries(formData);
  data.avatar = avatar;

  try {
    let editProfile = await fetch(
      "https://periwinkle-catfish-cuff.cyclic.app/user/editprofile",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFrc2hheWNoYXZhbjAxMDEwMUBnbWFpbC5jb20iLCJ1c2VySUQiOiI2NDI2ZWQ5YjljMjc3OTA0NjAzMDBlOWYiLCJpYXQiOjE2ODAyNzI4MDYsImV4cCI6MTY4MDM1OTIwNn0.97RvvvbTKiEjm5PjufDGkeAeMu40CLlDAjagFJRrjGA`,
        },
        body: JSON.stringify(data),
      }
    );
    let editProfileData = await editProfile.json();
    if (editProfileData) {
      alert(editProfileData.msg);
      various_display_div.innerHTML = userAccountPage;
    } else {
      alert("error");
      various_display_div.innerHTML = userAccountPage;
    }
  } catch (error) {
    various_display_div.innerHTML = userAccountPage;
    console.log(error);
  }
};

// dont edit profile
const dontedit = () => {
  various_display_div.innerHTML = userAccountPage;
};
// ---------------------------------------------------------------------------
