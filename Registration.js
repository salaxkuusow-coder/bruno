
//   sellect allow elemeent
let fullname = document.getElementById("name")





//   full name:

fullname.addEventListener("input", (e) => {
    let fullnametext = e.target.value;
    if (fullnametext.length >= 3 && fullnametext.length <= 15) {
        fullname.style.border = "2px solid green"
    }
    else {
        fullname.style.border = "2px solid red"
    }
    if (/[1-9]/.test(fullnametext)) {
        fullname.style.border = "2px solid red"
    }
})




let yourmarks = document.getElementById("marks")













































let phone = document.getElementById("phone")

let Age = document.getElementById("age")

let password = document.getElementById("password")





// //  phone 

// phone.addEventListener("input", (e) => {
//     let phonenumber = e.target.value;
//     if (phonenumber.length >= 8 && phonenumber.length <= 12) {


//         if (phonenumber > 610000000 && phonenumber < 619999999) {
//             phone.style.border = "2px solid green"
//         }
//         else {
//             phone.style.border = "2px solid red"
//         }
//     }

//     else {
//         phone.style.border = "2px solid red"
//     }

// })

// //  Age

// age.addEventListener("input", (e) => {
//     userage = e.target.value;
//     if (userage > 15 && userage < 99) {
//         age.style.border = "4px solid green"
//     }
//     else {
//         age.style.border = "4px solid red"
//     }



// })

// // passaword

// password.addEventListener("input", (e) => {
//     userpassword = e.target.value;
//     validate = validatepassaword(userpassword)
//     if (validate == 0) {
//         password.style.border = "2px solid green"
//     }
//     else {
//         password.style.border = "2px solid red"
//     }

// })



// function validatepassaword(password) {
//     // length
//     if (password.length < 8) {
//         return "must cantain at  least 8 character"
//     }
//     // upper latter
//     if (!/[A-Z]/.test(password)) {
//         return "must cantain at least one upper case latter"

//     }
//     // small leteer
//     // lower latter
//     if (!/[a-z]/.test(password)) {
//         return "must cantain at least one  small latters"
//     }
//     //  digital
//     if (!/[0-9]/.test(password)) {
//         return "must cantain at least one  digit number"

//     }
//     //  spical charcter

//     if (!/[^A-Za-z0-9]/.test(password)) {
//         return "must cantain at least one  special number"

//     }
//     return " "
// }
