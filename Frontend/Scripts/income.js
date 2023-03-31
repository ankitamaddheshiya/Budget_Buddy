const income_to_append_btn = document.getElementById("income_to_append_btn")
income_append_btn.addEventListener("click", ()=>{
    income_main_func();
})


async function income_main_func(){
    // await fetch(`http://localhost:3000/income`, {
    //     headers: {
    //         "Content-type": "application/json",
    //         "authorization": `Bearer ${token}`
    //     }
    // })
    // .then((res)=>{
    //     return res.json()
    // })
    // .then((data)=>{
    //     console.log(data)
    let data = 123;
        every_income_display(data)
    // })
}


function every_income_display(data){
    let income_container = document.getElementById("income_container")
    income_container.style.width = "95%";
    income_container.style.height = "100%";
    
    let income_bottom = document.getElementById("income_bottom")

    let every_incomes_main = document.createElement("div")
    every_incomes_main.setAttribute("class", "every_incomes_main")

    let every_incomes_card = document.createElement("div")
    every_incomes_card.setAttribute("class", "every_incomes_card")

    let every_income_card_inner = document.createElement("div")
    every_income_card_inner.setAttribute("class", "every_income_card_inner")

    let income_type = document.createElement("h4")
    income_type.innerHTML = `${data.name}`

    let date = document.createElement("p")
    date.innerHTML = `${data.date}`

    let income_amount = document.createElement("h4")
    income_amount.setAttribute("class", "income_amount")
    income_amount.innerHTML = `${data.amount}`

    every_income_card_inner.append(income_type, date, income_amount)

    let down_arrow = document.createElement("div")
    down_arrow.setAttribute("class", "down_arrow")
    
    let more = document.createElement("p")
    more.innerHTML = "more"
    down_arrow.append(more)
    every_incomes_card.append(every_income_card_inner, down_arrow)
    every_incomes_main.append(every_incomes_card)
    income_bottom.append(every_incomes_main)
    
    down_arrow.addEventListener("click", ()=>{
            let click_show = document.createElement("div")
            click_show.setAttribute("class", "click_show")
            
        
        let income_card_buttons = document.createElement("div")
        income_card_buttons.setAttribute("class", "income_card_buttons")
        
        let income_edit = document.createElement("button")
        income_edit.innerHTML = "Edit";
        income_edit.setAttribute("class", "income_edit")
        income_edit.addEventListener("click", async()=>{
            await fetch(`${data._id}`)
            .then((res)=>{
                return res.json()
            })
            .then((data)=>{
                console.log(data)
            })
        }, {once:true})
        
        let income_delete = document.createElement("button")
        income_delete.innerHTML = "Delete";
        income_delete.setAttribute("class", "income_delete")
        income_delete.addEventListener("click", async(data)=>{
            await fetch(`${data._id}`)
            .then((res)=>{
                return res.json()
            })
            .then((data)=>{
                console.log(data)
            })
        }, {once:true})
        
        income_card_buttons.append(income_edit, income_delete)
        click_show.append(income_card_buttons)
        
        if (every_incomes_main.childNodes[1]){
            every_incomes_main.removeChild(every_incomes_main.childNodes[1])
        }
        else{
            click_show.style.height = "60px"
            every_incomes_main.append(click_show)
        }

    })
    // }
    // every_incomes_main is for every single income added by user
    
    // Appending all data from server to frontend
}


let add_income_form = document.getElementById("add_income_form")
let add_income_btn = document.getElementById("add_income_btn")
add_income_btn.addEventListener("click", ()=>{
    add_income_form.classList.add("open-popup")
    // add_income_form.style.visibility = "visible"
})
let income_form = document.getElementById("income_form")
income_form.addEventListener("submit", (e)=>{
    e.preventDefault()
    add_income_form.classList.remove("open-popup")
    alert("Income Adding Successful")
    let input_income_name = document.getElementById("input_income_name")
    let input_income_type = document.getElementById("input_income_type")
    let input_income_amount = document.getElementById('input_income_amount')

    console.log(input_income_name.value, input_income_type.value, input_income_amount.value)
})




    // let down_icon = document.createElement("i")
    // down_icon.setAttribute("class", "fa-solid fa-arrow-down-short-wide")
    // // down_icon.setAttribute("class", "")





// edit_delete(data, every_incomes_main), {once:true}

// function edit_delete(data, every_incomes_main){
//     let click_show = document.createElement("div")
//     click_show.setAttribute("class", "click_show")
//     click_show.style.height = "60px"

//     let income_card_buttons = document.createElement("div")
//     income_card_buttons.setAttribute("class", "income_card_buttons")

//     let income_edit = document.createElement("button")
//     income_edit.innerHTML = "Edit";
//     income_edit.setAttribute("class", "income_edit")
//     income_edit.addEventListener("click", async()=>{
//         await fetch(`${data._id}`)
//         .then((res)=>{
//             return res.json()
//         })
//         .then((data)=>{
//             console.log(data)
//         })
//     }, {once:true})

//     let income_delete = document.createElement("button")
//     income_delete.innerHTML = "Delete";
//     income_delete.setAttribute("class", "income_delete")
//     income_delete.addEventListener("click", async(data)=>{
//         await fetch(`${data._id}`)
//         .then((res)=>{
//             return res.json()
//         })
//         .then((data)=>{
//             console.log(data)
//         })
//     }, {once:true})

//     income_card_buttons.append(income_edit, income_delete)
//     click_show.append(income_card_buttons)
    
//     every_incomes_main.append(click_show)
// }



