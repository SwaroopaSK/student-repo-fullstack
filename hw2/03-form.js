/** Exercise 03 - Form **/

let form = document.querySelector('form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    let message = form.elements.message.value;
	if (message == ""){
	console.log('No feedback was submitted ' + message);
	if (form.elements.signup.checked){
	console.log('Yes, I would like to join the newsletter.');
	}else{
		console.log('No, thank you.');
	}

    console.group('================ Form Submission ==================')
    console.log('Name: ' + name);
    console.log('Email: ' + email);
    console.log('Feedback: ' + message);
    console.log('Newsletter: ' + signup);
    console.groupEnd();

    event.preventDefault();
}
}
