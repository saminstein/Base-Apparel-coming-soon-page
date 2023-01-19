const form = document.querySelector("form");
const email = document.getElementById("email");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let emailValue = email.value;
    if (ValidateEmail(emailValue)) {
        form.classList.remove("error");
    }else {
        form.classList.add("error");
    }
})

function ValidateEmail(email) {
	var mailformat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
	return mailformat.test(String(email).toLowerCase());
}

/* first i store the form and email itself in a variable in lines 1-2 */

/* add an event listener to the form and we listen to the submit event button on the form that takes an event as a parameter of the function in Es 6 next we use the preventDefault method to stop the page from reloading anytime the submit is called. line 4-5 */

/* after which you create a variable called emailValue and store the email input or value.line 6 */

/* next you use  the regex validate email function
called ValidateEmail which takes email as parameter and checks for a valid or invalid email using the format above and returns something. lines 14-15 */

/* next you use an if else statement, we pass in Validate Email function and we pass our emailValue to it, so whenever an input or value is received if there is an error in the form, we can add a class of "error" and if there is no error we can remove the class of "error": you can inspect in dev tools, elements */


/* lastly add your styling based on the new class "error" */
