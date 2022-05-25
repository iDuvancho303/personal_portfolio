const name = document.getElementById('name')
const lastName = document.getElementById('last')
const email = document.getElementById('email')
const phoneNumber = document.getElementById('phone')
const textArea = document.getElementById('comments')
const myForm = document.getElementById('myform')

const errorElement = document.getElementById('')

myForm.addEventListener('submit', (e) => {
    let messages = []
    if (name.value === '' || name.value === null) {
        messages.push('Name is required')
    }

    if (messages.length > 0) {
        e.preventDefault()
    }
    e.preventDefault() 



})
