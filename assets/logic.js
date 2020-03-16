// generate ran pass

function generate() {

    //set password length/complexity

    let complexity = document.getElementById("slider").value;

    //possbile password values

    let values = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

    let password = "";

    //create for loop for password characters
    
    for (var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length -1)));
    }

    //add password to textbox/display area
    document.getElementById("display").value = password;

    //add password to previously generated password section
    document.getElementById("lastNums").innerHTML += password + "<br>"

}

//set default length display to mid-point
document.getElementById("length").innerHTML = "Length: 18";

//function to set length based on slider position
document.getElementById("slider").oninput = function(){

    if(document.getElementById("slider").value > 0) {
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
    }
    else{
        document.getElementById("length").innerHTML = "Length: 1";
    }
}

//function to copy password to clipboard
function copyPassword() {
    document.getElementById("display").select();

    document.execCommand("Copy");

    alert("Password is copied to clipboard!");
}