const expenseOption = (event) => {
    exp_full.style.display = "block";
    income_full.style.display = "none";
    profile_full.style.display = "none";
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
    exp_main_func();
  };
  
  async function exp_main_func() {
    await fetch("https://periwinkle-catfish-cuff.cyclic.app/expense", {
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
        every_exp_main_display(data);
      });
  }
  
  function every_exp_main_display(data) {
    let exp_bottom = document.getElementById("exp_bottom");
    exp_bottom.innerHTML = null;
    let total = 0;
  
    data = data.reverse();
    data.forEach((element) => {
      total += element.amount;
      let exp_container = document.getElementById("exp_container");
      exp_container.style.width = "95%";
      exp_container.style.height = "100%";
  
  
      let every_exp_main = document.createElement("div");
      every_exp_main.setAttribute("class", "every_exp_main");
  
      let every_exp_card = document.createElement("div");
      every_exp_card.setAttribute("class", "every_exp_card");
  
      let every_exp_card_inner = document.createElement("div");
      every_exp_card_inner.setAttribute("class", "every_exp_card_inner");
  
      let exp_type = document.createElement("h4");
      exp_type.innerHTML = `${element.title}`;
  
      let date = document.createElement("p");
      element.createdAt = element.createdAt.split("T")
      date.innerHTML = `${element.createdAt[0]}`;
  
      let exp_amount = document.createElement("h4");
      exp_amount.setAttribute("class", "exp_amount");
      exp_amount.innerHTML = `- ${element.amount}`;
  
      every_exp_card_inner.append(exp_type, date, exp_amount);
  
      let down_arrow = document.createElement("div");
      down_arrow.setAttribute("class", "down_arrow");
  
      let more = document.createElement("p");
      more.innerHTML = "more";
      down_arrow.append(more);
      every_exp_card.append(every_exp_card_inner, down_arrow);
      every_exp_main.append(every_exp_card);
      exp_bottom.append(every_exp_main);
  
      down_arrow.addEventListener("click", () => {
        let click_show = document.createElement("div");
        click_show.setAttribute("class", "click_show");
  
        let exp_card_buttons = document.createElement("div");
        exp_card_buttons.setAttribute("class", "exp_card_buttons");
  
        let exp_edit = document.createElement("button");
        exp_edit.innerHTML = "Edit";
        exp_edit.setAttribute("class", "exp_edit");
        exp_edit.addEventListener(
          "click",
          async () => {
            let obj = {}
            await fetch(`https://periwinkle-catfish-cuff.cyclic.app/expense/editexpense/${element._id}`,{
              method: "PATCH",
              headers: {
                "Content-type": "application/json",
                authorization: `Bearer ${token}`
              },
              body: JSON.stringify(obj)
            })
              .then((res) => {
                return res.json();
              })
              .then((data) => {
                console.log(data);
                exp_main_func()
              });
          }
        );
  
        let exp_delete = document.createElement("button");
        exp_delete.innerHTML = "Delete";
        exp_delete.setAttribute("class", "exp_delete");
        exp_delete.addEventListener(
          "click",
          async (data) => {
            await fetch(`https://periwinkle-catfish-cuff.cyclic.app/expense/delete/${element._id}`,{
              method: "DELETE",
              headers: {
                "Content-type": "application/json",
                authorization: `Bearer ${token}`
              }
            })
              .then((res) => {
                return res.json();
              })
              .then((data) => {
                console.log(data);
                exp_main_func()
                hisCache = [];
                // if (data.msg=="Data Deleted"){
                //   Swal.fire({
                //     title: "Data Deleted",
                //     text: "Your operation is successful.",
                //     icon: "success",
                //   }).then((res)=>{
                //     if(res.value){
                //     exp_main_func()
                //     }
                //   })
                // }
                // else{
                //   Swal.fire({
                //     title: "Something went wrong",
                //     text: "Unable to delete the data.",
                //     icon: "error",
                //   })
                // }
              });
          }
        );
  
        exp_card_buttons.append(exp_edit, exp_delete);
        click_show.append(exp_card_buttons);
  
        if (every_exp_main.childNodes[1]) {
          every_exp_main.removeChild(every_exp_main.childNodes[1]);
        } else {
          click_show.style.height = "60px";
          every_exp_main.append(click_show);
        }
      });
    });
    let exp_total_amount = document.getElementById("exp_total_amount")
    exp_total_amount.innerHTML = total
  }
  
  let add_exp_form = document.querySelector("#add_exp_form");
  let add_exp_btn = document.getElementById("add_exp_btn");
  add_exp_btn.addEventListener("click", () => {
    add_exp_form.classList.add("open-popup");
  });
  let exp_form = document.getElementById("exp_form");
  exp_form.addEventListener("submit", async(e) => {
    e.preventDefault();
    add_exp_form.classList.remove("open-popup");
  
    let input_exp_name = document.getElementById("input_exp_name");
    let input_exp_type = document.getElementById("input_exp_type");
    let input_exp_amount = document.getElementById("input_exp_amount");
  
    const obj = {
      type: input_exp_type.value,
      title: input_exp_name.value,
      amount: input_exp_amount.value,
    };
  
    const promise = await fetch(
      "https://periwinkle-catfish-cuff.cyclic.app/expense/addexpense",
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
    exp_main_func();
    alert("Expense Added successfully");
    hisCache = [];
  });
  
  let exp_search_btn = document.getElementById("exp_search_btn")
  exp_search_btn.addEventListener("click", async()=>{
    let Sdate = document.getElementById("exp_form_date").value
    let Edate = document.getElementById("exp_to_date").value
  
    let obj = {Sdate, Edate}
  
    await fetch(`https://periwinkle-catfish-cuff.cyclic.app/expense/filterdata`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${token}`
      },
      body: JSON.stringify(obj)
    })
    .then(res => res.json())
    .then((data)=>{
      console.log(data)
    })
  })