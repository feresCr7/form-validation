// console.log(inputs)
// const regex= {
//     firstName:/[a-zA-Z]${2,}/,
//     lastName:/[a-zA-Z\d]${2,}/,

// }
// inputs.forEach(element=> {
//     element.addEvenListener ("keyup",function(e){
//         var text=e.target
//         console.log(e)
//     })

// });

// let inputs = Array.from(document.querySelectorAll('input'))
let firstName = document.querySelector('#first-name')
let lastName = document.querySelector('#last-name')
let email = document.querySelector('#e-mail-address')
let password = document.querySelector('#password')
let comments  = document.querySelector('#comments ')

document.querySelector('form').addEventListener('submit', validation)

function validation(e) {
    e.preventDefault()
    
    //let  passwordReg =  (?=.*[A-Z]) 
     //let inputsValues = inputs.concat(comments).filter(el=>el.value === "")
     //if(inputsValues.length>0) alert('all fields are required')
    if(firstName.value === "" || lastName.value === "" || email.value === "" || password.value === "" || comments.value  === "" ) 
    {alert('all fields are required')}
if ((password.value.length<8) || !(password.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/g)))
 {alert ('The password must be a combination of charatacters , numbers and at least a capital letter')}
 if (!(email.value.match(/[a-zA-Z0-9]@/))) {alert ('invalid email-adress')}
}







