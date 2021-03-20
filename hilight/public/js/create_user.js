console.log("entered")

function create_user() {
    var username = document.getElementById("un").value;
    var password =  document.getElementById("pwd").value;
    var fullname =  document.getElementById("fn").value;
    var email =  document.getElementById("em").value;

    // Creating a XHR object 
		let xhr = new XMLHttpRequest(); 
		let url = "../../src/routers/user.js"; 
		
		// open a connection 
		xhr.open("POST", url, true); 

		// Set the request header i.e. which type of content you are sending 
		xhr.setRequestHeader('Content-Type', 'application/json'); 

		// Create a state change callback 
		xhr.onreadystatechange = function () { 
			if (xhr.readyState === 4 && xhr.status === 200) { 

				// Print received data from server 
				console.log(this.responseText); 

			} 
		}; 

		// Converting JSON data to string 
		var data = JSON.stringify({ "fullname": fullname.value, "email": email.value, "username": username.value, "password": password.value }); 
    console.log("entered 2")
		// Sending data with the request 
		xhr.send(data); 
}