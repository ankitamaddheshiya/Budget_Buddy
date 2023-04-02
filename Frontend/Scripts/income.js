// const income_search_btn = document.getElementById("income_search_btn")
// income_search_btn.addEventListener("click", ()=>{
//     let form_date = document.getElementById('form_date').value
//     let to_date = document.getElementById('to_date').value

//     alert (`${form_date} - ${to_date}`)
// })

// let token = sessionStorage.getItem("token");
let add_income_form = document.getElementById("add_income_form");
let add_income_btn = document.getElementById("add_income_btn");
add_income_btn.addEventListener("click", () => {
  add_income_form.classList.add("open-popup");
  // add_income_form.style.visibility = "visible"
});
let income_form = document.getElementById("income_form");
income_form.addEventListener("submit", async (e) => {
  e.preventDefault();
  add_income_form.classList.remove("open-popup");
  alert("Income Adding Successful");
  let input_income_name = document.getElementById("input_income_name");
  let input_income_type = document.getElementById("input_income_type");
  let input_income_amount = document.getElementById("input_income_amount");

  //   console.log(
  //     input_income_name.value,
  //     input_income_type.value,
  //     input_income_amount.value
  //   );
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
});

let edit_form_popup_div = document.getElementById("edit_form_popup_div");
const editbtnFun = () => {
  edit_form_popup_div.classList.add("open-popup");
};
const dontedit = (event) => {
  event.target.parentElement.classList.remove("open-popup");
};

let add_exp_form = document.querySelector("#add_exp_form");
let add_exp_btn = document.getElementById("add_exp_btn");
add_exp_btn.addEventListener("click", () => {
  add_exp_form.classList.add("open-popup");
});
let exp_form = document.getElementById("exp_form");
exp_form.addEventListener("submit", (e) => {
  e.preventDefault();
  add_exp_form.classList.remove("open-popup");
  alert("Expense Added successfully");
});
