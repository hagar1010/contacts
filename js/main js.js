let cancel = document.querySelector(".cancel")
let save = document.querySelector(".save")
let add_contact = document.getElementById("add_contact")
let add_modal = document.querySelector(".add-modal")
let tbody = document.querySelector("tbody")
let contact_section = document.querySelector(".contacts")


let tbody_length=0 //async


if (tbody.childElementCount == 0) {
    var no_cotact = document.createElement("img")
    no_cotact.src = "images/nocontacts.png"
    contact_section.appendChild(no_cotact)
}


add_contact.addEventListener("click", () => {
    add_modal.style.display = "block"
})



cancel.addEventListener("click", () => {
    add_modal.style.display = "none"
})















//save button of add contact
save.addEventListener("click", () => {

    let input_name = document.getElementById("name")
    let input_phone = document.getElementById("phone")
    let input_email = document.getElementById("email")
    let input_address = document.getElementById("address")

    let tr = document.createElement("tr")
    let id = document.createElement("td")
    let name = document.createElement("td")
    let img = document.createElement("img")
    let span = document.createElement("span")
    let phone = document.createElement("td")
    let email = document.createElement("td")
    let address = document.createElement("td")
    let icons = document.createElement("td")
    let edit = document.createElement("i")
    let delete_icon = document.createElement("i")


    edit.classList.add("fa-solid", "fa-trash")
    delete_icon.classList.add("fa-solid", "fa-pen-to-square")

    tbody.appendChild(tr)
    tr.appendChild(id)
    tr.appendChild(name)
    tr.appendChild(phone)
    tr.appendChild(email)
    tr.appendChild(address)
    tr.appendChild(icons)
    name.appendChild(img)
    name.appendChild(span)
    icons.appendChild(delete_icon)
    icons.appendChild(edit)


    id.textContent = "5"
    span.textContent = input_name.value
    phone.textContent = input_phone.value
    email.textContent = input_email.value
    address.textContent = input_address.value

    input_name.value = ""
    input_phone.value = ""
    input_email.value = ""
    input_address.value = ""

    add_modal.style.display = "none"
    tbody_length+=1
    console.log(tbody_length)











//delete &edit buttons
    let items = document.querySelectorAll("tbody tr")
    // let edit_btn = document.querySelectorAll(".fa-pen-to-square")
    let delete_btn = document.querySelectorAll(".fa-trash")

    for (let i = 0; i < delete_btn.length; i++) {
        let btn = delete_btn[i]
        btn.addEventListener('click', () => {
            let current_item = items[i]
            current_item.style.display = "none"

            console.log(tbody_length)
            tbody_length--

            if (tbody_length == 0) {
                no_cotact.style.display = "block"
            }
        })
    }

    // for (let i = 0; i < edit_btn.length; i++) {
    //     let btn = edit_btn[i]
    //     btn.addEventListener('click', () => {
    //         let current_item = items[i]
    //         add_modal.style.display = "block"

    //     })
    // }

    no_cotact.style.display = "none"

})




























