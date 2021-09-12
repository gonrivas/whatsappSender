 var clicks = 0
        const phoneNumber = document.querySelector("#phoneNumber")
        const sendButton = document.querySelector("#sendButton")




        sendButton.onclick = function () {
            location.href = "http://wa.me/" + phoneNumber.value;

        }
        phoneNumber.focus()