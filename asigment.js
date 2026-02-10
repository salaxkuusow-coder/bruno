


// full name

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
