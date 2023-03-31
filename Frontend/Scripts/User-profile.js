// user options click event
let Page_name_heading = document.getElementById("Page-name-heading");
const userOptions = document.querySelectorAll(".user-options ul li");

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

const userIncomePage = `<h1>Make the layout of user income and append it here</h1>`;
const userExpensePage = `<h1>Make the layout of user expense and append it here</h1>`;
const userBudgetPage = `<h1>Make the layout of user budget and append it here</h1>`;

// user option click event
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
  };
  historyfun();
};

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

// to retrive the user options background colors
const userOptionsColor = () => {
  let userOptions = document.querySelectorAll(".user-options ul li");
  userOptions.forEach((option) => {
    option.style.backgroundColor = "#306DB3";
    option.children[1].style.color = "#ffffff";
    option.children[1].style.fontWeight = "normal";
  });
};

// user edit profile page

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

// edit profile fetch request

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
    console.log(editProfileData);
    if (editProfileData) {
      alert(editProfileData.msg);
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
