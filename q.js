let sendMsg = document.getElementById("sendMsg")
let input = document.getElementById("input")


const scriptURL = 'https://script.google.com/macros/s/AKfycbwRbTgl3GZ9hXtPMoYXcU4tI_1zyUH_lWb46ZJ4-bRz5IpofjDnTda9_QwdyTXsNRDyOQ/exec'
        const form = document.forms['submit-to-google-sheet']
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                console.log('Success!', response)
                sendMsg.style.display = "block"       
                setTimeout(() => {
                    sendMsg.style.display = "none"  
                }, 5000);
                form.reset();
            })
            .catch(error => console.error('Error!', error.message))
        })