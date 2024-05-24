$("document").ready (function () {
    $('#success div').css({
        display: "flex",
        gap: "0.5rem",
        padding: "10px 0"
    })

    $('#success').css({
        background: "hsl(187, 24%, 22%)",
        color: "white",
        padding: "1rem",
        borderRadius: "7px",
        display: "none",
    })

    $(".error").css("color", "red")

    const emailValid = new RegExp('^.+@+.+\.+[a-z]+$');

    $('#submit-btn').click(function () {
        if(firstName.value == "") {
            firstNameError.textContent = "This field is required";
            setTimeout(() => {
                firstNameError.textContent = "";
            }, 3000);
        }

        if(lastName.value == "") {
            lastNameError.textContent = "This field is required";
            setTimeout(() => {
                lastNameError.textContent = "";
            }, 3000);
        }

        if(email.value == "") {
            emailError.textContent = "This field is required";
            setTimeout(() => {
                emailError.textContent = "";
            }, 3000);
        } else if(!emailValid.test(email.value)) {
            emailError.textContent = "Please enter a valid email address";
            setTimeout(() => {
                emailError.textContent = "";
            }, 3000);
        }

        if(!querryTypeGeneral.checked && !querryTypeSupport.checked) {
            querryError.textContent = "Please select the querry type";
            setTimeout(() => {
                querryError.textContent = "";
            }, 3000);
        }

        if(message.value == "") {
            textAreaError.textContent = "This field is required";
            setTimeout(() => {
                textAreaError.textContent = "";
            }, 3000);
        }

        if(!check.checked) {
            finalError.textContent = "To submit this form, please consent to being contacted";
            setTimeout(() => {
                finalError.textContent = "";
            }, 3000);
        }

    })

    const firstName = document.getElementById("first-name");
    const firstNameError = document.getElementById("first-name-error");
    const lastName = document.getElementById("last-name");
    const lastNameError = document.getElementById("last-name-error");
    const email = document.getElementById("email-address");
    const emailError = document.getElementById("email-error");
    const querryError = document.getElementById("querry-error");
    const querryTypeGeneral = document.getElementById("general-enquiry");
    const querryTypeSupport = document.getElementById("support-request");
    const message = document.getElementById("message");
    const textAreaError = document.getElementById("textarea-error");
    const check = document.getElementById("check");
    const finalError = document.getElementById("final-error");
    const submit = document.getElementById("submit-btn");

    $("#submit-btn").click(() => {
        if($("#submit-btn").submit() === true) {
            $('#success').css("display", "block");
            setTimeout(() => {
                $('#success').css("display", "none");
            }, 5000);
        }
    })
})