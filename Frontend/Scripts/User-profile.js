// user options click event
let Page_name_heading = document.getElementById("Page-name-heading")
const userOptions = document.querySelectorAll(".user-options ul li");

const userAccountPage = `
            <div class="profile-container">
            <div class="left-profile-section">
            <div class="profile-photo-and-info-div">
                <div>
                <img src="../images/user.png" alt="" />
                <h3>Name</h3>
                </div>
                <div>
                <div><p>Designation</p></div>
                <div><p>Address</p></div>
                <div><button>Edit</button></div>
                </div>
            </div>
            <div class="social-media-links-div">
                <div>
                <i class="fa-brands fa-facebook"></i>
                <a href="">http://hello</a>
                </div>
                <div>
                <i class="fa-brands fa-instagram"></i>
                <a href="">http://hello</a>
                </div>
                <div>
                <i class="fa-solid fa-globe"></i>
                <a href="">http://hello</a>
                </div>
                <div>
                <i class="fa-brands fa-twitter"></i>
                <a href="">http://hello</a>
                </div>
            </div>
            </div>

            <div class="right-profile-section">
            <div class="user-details-div">
                <div>
                <h4>First Name</h4>
                <h4>Akshay</h4>
                </div>
                <div>
                <h4>Last Name</h4>
                <h4>Chavan</h4>
                </div>
                <div>
                <h4>Email</h4>
                <h4>akshaychavan010101@gmail.com</h4>
                </div>
                <div>
                <h4>Phone Number</h4>
                <h4>9373849068</h4>
                </div>
                <div>
                <h4>Adresss</h4>
                <h4>Pune</h4>
                </div>
            </div>

            <div class="extra">
                <div>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam ipsa
                    quasi quis facere libero reprehenderit
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

const userIncomePage = `<h1>Make the layout of user income and append it here</h1>`;
const userExpensePage = `<h1>Make the layout of user expense and append it here</h1>`;
const userBudgetPage = `<h1>Make the layout of user budget and append it here</h1>`;

// user option click event
let various_display_div = document.querySelector(".various-display-div");

const accountOption = (event) => {
  various_display_div.innerHTML = null;
  Page_name_heading.innerHTML = "Account"
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
};
const incomeOption = (event) => {
  various_display_div.innerHTML = null;
  Page_name_heading.innerHTML = "Income"
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
  Page_name_heading.innerHTML = "Expense"
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
const budgetOption = (event) => {
  various_display_div.innerHTML = null;
  Page_name_heading.innerHTML = "Budget"
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
};

// user history page
const userHistoryPage = `  
      <div class="history-container">
      <table>
        <thead>
          <tr>
            <th>Transaction</th>
            <th>Type</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody id="tbody-append-history">
            <tr>
                <td>1</td>
                <td>Deposit</td>
                <td>2021-01-01</td>
                <td>1000</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Withdraw</td>
                <td>2021-01-02</td>
                <td>500</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Deposit</td>
                <td>2021-01-03</td>
                <td>1000</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Withdraw</td>
                <td>2021-01-04</td>
                <td>500</td>
            </tr>
            <tr>
                <td>5</td>
                <td>Deposit</td>
                <td>2021-01-05</td>
                <td>1000</td>
            </tr>
            <tr>
                <td>6</td>
                <td>Withdraw</td>
                <td>2021-01-06</td>
                <td>500</td>
            </tr>
            <tr>
                <td>7</td>
                <td>Deposit</td>
                <td>2021-01-07</td>
                <td>1000</td>
            </tr>
            <tr>
                <td>8</td>
                <td>Withdraw</td>
                <td>2021-01-08</td>
                <td>500</td>
            </tr>
            <tr>
                <td>9</td>
                <td>Deposit</td>
                <td>2021-01-09</td>
                <td>1000</td>
            </tr>
            <tr>
                <td>10</td>
                <td>Withdraw</td>
                <td>2021-01-10</td>
                <td>500</td>
            </tr>
            <tr>
                <td>11</td>
                <td>Deposit</td>
                <td>2021-01-11</td>
                <td>1000</td>
            </tr>
        </tbody>
      </table>
      </div>
`;
const historyOption = (event) => {
  various_display_div.innerHTML = null;
  Page_name_heading.innerHTML = "History"
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
      let history = await fetch(
        "https://periwinkle-catfish-cuff.cyclic.app/history",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      let historyData = await history.json();
      console.log(historyData);
      if (historyData.status == 200) {
        let tbody = document.getElementById("tbody-append-history");
        tbody.innerHTML = null;
        historyData.data.forEach((element) => {
          let tr = document.createElement("tr");
          tr.innerHTML = `<td>${element.transaction}</td>
          <td>${element.type}</td>
          <td>${element.date}</td>
          <td>${element.amount}</td>`;
          tbody.appendChild(tr);
        });
      } else {
        alert("Something went wrong, please try again");
      }
    } catch (error) {
      various_display_div.innerHTML = userHistoryPage;
    }
  }
  historyfun();
};

// logout option fetch request;
const logoutfun = async () => {
  let loader = `<div class="loading-container"><div class="loader"></div></div>`;
  various_display_div.innerHTML = loader;
  try {
    let logout = await fetch(
      "https://periwinkle-catfish-cuff.cyclic.app/logout",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    let logoutData = await logout.json();

    if (logoutData.status == 200) {
      // various_display_div.innerHTML = defaultPage;
      window.location.assign("Login.html");
    } else {
      alert("Something went wrong, please try again");
    }
  } catch (error) {
    various_display_div.innerHTML = userLogoutPage;
    alert(error.message);
  }
};

const userLogoutPage = `
        <div class=logout-layout>
           <i class="fa-sharp fa-regular fa-circle-xmark"></i><button onclick="logoutfun()">Logout</button> 
        </div>
`;
const logoutOption = (event) => {
  Page_name_heading.innerHTML = "Logout"
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

// to retrive the user options background colors
const userOptionsColor = () => {
  let userOptions = document.querySelectorAll(".user-options ul li");
  userOptions.forEach((option) => {
    option.style.backgroundColor = "#306DB3";
    option.children[1].style.color = "#ffffff";
    option.children[1].style.fontWeight = "normal";
  });
};
