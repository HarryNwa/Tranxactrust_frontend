// function getEmail(){
//     let email = document.getElementById('email').value;
//     let button = document.getElementsByTagName('start')
//     getFormLink(email)
// }

// const emailElement = email.value
// const buttonValue = button.value

// if(!emailElement){
//     alert("Please enter your email.")
// }
// else(
//     alert("Email successfully collected. Please fill the for that opens.")
// )
// const submitEmailDiv = document.getElementById('submitEmail')
// submitEmailDiv.onclick = () => getFormLink

// function getFormLink(){
//    buttonValue = <a href={`https:///forms.gle/2LnAfxc3pTJu6kmC8`}></a>;
//     fetch(buttonValue).then(response => response.json)
// }

// console.log("Is this connected?")

function submitForm() {
    const formElement = document.getElementById("myForm");
    const formData = new FormData(formElement);

    fetch(`https://docs.google.com/forms/d/e/1FAIpQLSeBCLm5-ZrAGnUKr---IedNgQsxYbIUwjbLHjXaxyueYNPfWA/formResponse`, {
        method: "POST",
        body: formData,
    })
    .then(response => {
        console.log("Form submitted successfully", response);
        // Handle success
    })
    .catch(error => {
        console.error("Error submitting form", error);
        // Handle error
    });
}