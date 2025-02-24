

//Contact Form
const scriptURL = 'https://script.google.com/macros/s/AKfycbwaEn_Zp0tcOtydu-yKjWTTtV4lFNvpMZhcoDQA1n7nmgq8btxwDmzZzXOPNUX1HCGu/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg');

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent Successfully";
        setTimeout(function(){
            msg.innerHTML = ""
        }, 5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})