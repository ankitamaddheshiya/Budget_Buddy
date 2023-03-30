// user options click event and mouseover event

const userOptions = document.querySelectorAll(".user-options ul li");

const userAccountPage = `
            <div class="profile-container">
            <div class="left-profile-section">
            <div class="profile-photo-and-info-div">
                <div>
                <img src="../images/github.png" alt="" />
                <h2>Name</h2>
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
                <h3>First Name:</h3>
                <h3>Akshay</h3>
                </div>
                <div>
                <h3>Last Name:</h3>
                <h3>Chavan</h3>
                </div>
                <div>
                <h3>Email</h3>
                <h3>akshaychavan010101@gmail.com</h3>
                </div>
                <div>
                <h3>Phone Number :</h3>
                <h3>9373849068</h3>
                </div>
                <div>
                <h3>Adresss:</h3>
                <h3>Pune</h3>
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

userOptions.forEach((option) => {
  let various_display_div = document.querySelector(".various-display-div");
  various_display_div.innerHTML = null;
  option.addEventListener("click", (event) => {
    userOptions.forEach((option) => {
      if (option.children[1].innerText == "Account") {
        various_display_div.innerHTML = userAccountPage;
      }
      option.style.backgroundColor = "#306DB3";
      option.children[1].style.color = "#ffffff";
      option.children[1].style.fontWeight = "normal";
    });
    option.style.backgroundColor = "#ffffff";
    option.children[1].style.color = "#306DB3";
    option.children[1].style.fontWeight = "bold";
  });
});
