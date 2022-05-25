const firstName = document.getElementById('name')
const lastName = document.getElementById('last')
const email = document.getElementById('email')
const phoneNumber = document.getElementById('phone')
const textArea = document.getElementById('comments')
const myForm = document.getElementById('myform')

const errorElement = document.getElementById('error')

myForm.addEventListener('submit', (e) => {
    let messages = []
    if (firstName.value === '' || firstName.value === null) {
        messages.push('Name is required')
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }



})
