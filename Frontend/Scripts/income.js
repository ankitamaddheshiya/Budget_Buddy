const incomeOption = (event) => {
  income_full.style.display = "block";
  profile_full.style.display = "none";
  exp_full.style.display = "none";
  dashboard_full.style.display = "none";
  history_full.style.display = "none";
  logout_full.style.display = "none";
  container_full.style.display = "none";

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

  // Fetch function to call from here
  income_main_func();
};

async function income_main_func() {
  await fetch("https://periwinkle-catfish-cuff.cyclic.app/income", {
    headers: {
      "Content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      every_incomes_main_display(data);
    });
}

add_income_btn.addEventListener("click", () => {
  add_income_form.classList.add("open-popup");
  // add_income_form.style.visibility = "visible"
});
let income_form = document.getElementById("income_form");
income_form.addEventListener("submit", async (e) => {
  e.preventDefault();
  add_income_form.classList.remove("open-popup");
  let input_income_name = document.getElementById("input_income_name");
  let input_income_type = document.getElementById("input_income_type");
  let input_income_amount = document.getElementById("input_income_amount");

  const obj = {
    type: input_income_type.value,
    title: input_income_name.value,
    amount: input_income_amount.value,
  };

  const promise = await fetch(
    "https://periwinkle-catfish-cuff.cyclic.app/income/addincome",
    {
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
      method: "POST",
      body: JSON.stringify(obj),
    }
  );

  let response = await promise.json();
  console.log(response);
  income_main_func();
  alert("Income Adding Successful");
  hisCache = [];
});

function every_incomes_main_display(data) {
  let income_bottom = document.getElementById("income_bottom");
  income_bottom.innerHTML = null;
  let total = 0;

  data = data.reverse();
  data.forEach((element) => {
    total += element.amount;
    let income_container = document.getElementById("income_container");
    income_container.style.width = "95%";
    income_container.style.height = "100%";

    let every_incomes_main = document.createElement("div");
    every_incomes_main.setAttribute("class", "every_incomes_main");

    let every_incomes_card = document.createElement("div");
    every_incomes_card.setAttribute("class", "every_incomes_card");

    let every_income_card_inner = document.createElement("div");
    every_income_card_inner.setAttribute("class", "every_income_card_inner");

    let income_type = document.createElement("h4");
    income_type.innerHTML = `${element.title}`;

    let date = document.createElement("p");
    element.createdAt = element.createdAt.split("T");
    date.innerHTML = `${element.createdAt[0]}`;

    let income_amount = document.createElement("h4");
    income_amount.setAttribute("class", "income_amount");
    income_amount.innerHTML = `${element.amount}`;

    every_income_card_inner.append(income_type, date, income_amount);

    let down_arrow = document.createElement("div");
    down_arrow.setAttribute("class", "down_arrow");

    let more = document.createElement("p");
    more.innerHTML = "more";
    down_arrow.append(more);
    every_incomes_card.append(every_income_card_inner, down_arrow);
    every_incomes_main.append(every_incomes_card);
    income_bottom.append(every_incomes_main);

    down_arrow.addEventListener("click", () => {
      let click_show = document.createElement("div");
      click_show.setAttribute("class", "click_show");

      let income_card_buttons = document.createElement("div");
      income_card_buttons.setAttribute("class", "income_card_buttons");

      let income_edit = document.createElement("button");
      income_edit.innerHTML = "Edit";
      income_edit.setAttribute("class", "income_edit");
      income_edit.addEventListener("click", async () => {
        let obj = {};
        await fetch(
          `https://periwinkle-catfish-cuff.cyclic.app/income/editincome/${element._id}`,
          {
            method: "PATCH",
            headers: {
              "Content-type": "application/json",
              authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(obj),
          }
        )
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
            income_main_func();
          });
      });

      let income_delete = document.createElement("button");
      income_delete.innerHTML = "Delete";
      income_delete.setAttribute("class", "income_delete");
      income_delete.addEventListener("click", async (data) => {
        await fetch(
          `https://periwinkle-catfish-cuff.cyclic.app/income/delete/${element._id}`,
          {
            method: "DELETE",
            headers: {
              "Content-type": "application/json",
              authorization: `Bearer ${token}`,
            },
          }
        )
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
            if (data.msg == "Data Deleted") {
              Swal.fire({
                title: "Data Deleted",
                text: "Your operation is successful.",
                icon: "success",
              }).then((res) => {
                income_main_func();
                hisCache = [];
              });
            } else {
              Swal.fire({
                title: "Something went wrong",
                text: "Unable to delete a data.",
                icon: "error",
              });
            }
          });
      });

      income_card_buttons.append(income_edit, income_delete);
      click_show.append(income_card_buttons);

      if (every_incomes_main.childNodes[1]) {
        every_incomes_main.removeChild(every_incomes_main.childNodes[1]);
      } else {
        click_show.style.height = "60px";
        every_incomes_main.append(click_show);
      }
    });
  });
  let total_amount = document.getElementById("total_amount");
  total_amount.innerHTML = total;
}

let income_search_btn = document.getElementById("income_search_btn");
income_search_btn.addEventListener("click", async () => {
  let Sdate = document.getElementById("form_date").value;
  let Edate = document.getElementById("to_date").value;
  console.log(Sdate);
  console.log(Edate);

  let obj = {
    Sdate,
    Edate,
  };

  await fetch(`https://periwinkle-catfish-cuff.cyclic.app/income/filterdata`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(obj),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      income_main_func();
    });
});
