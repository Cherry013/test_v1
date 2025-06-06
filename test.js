let detail = [
    {
        'email':'charan172003@gmail.com',
        'password':'123123'
    },
    {
        'email':'Narayana',
        'password':'123123'
    },
    {
        'email':'vinny',
        'password':'123123'
    },
    {
        'email':'MK',
        'password':'123123'
    }
]

const myFunc = ()=>{
    event.preventDefault()
    let mail = document.getElementById("email")
    let passkey = document.getElementById("passkey")
    let display = document.getElementById("display")
    let status = "Status : "
    console.log(mail.value);
    let flag = 0
    for (const element of detail) {
        if (element.email === mail.value) {
            if (element.password === passkey.value) {
                flag = 1
                console.log("Logged IN");
                status+= "Logged In Sucessfully"

                display.innerHTML = status
            }
        } 
    }
}

