
function change() {
    var a = document.getElementById("Fname")
    var b = document.getElementById("Lname")
    var c = document.getElementById("EmailId")
    var d = document.getElementById("password")
    var e = document.getElementById('Cpass')
    var f = document.getElementById('Mobile')

    if (a == "" || b == "" || c == "") {
        alert("Enter First Name and Last Name and Email id");
        return false;
    } else if (d >= 3 && d <= 10) {
        alert("Enter the correct Password")
        return false;
    } else if (!d == e) {
        alert("Check Your Password");
        return false
    } else if (isNaN(f)) {
        alert("Please Enter Number. This Value is not Aplicable")
        return false
    } else if (f.length < 10 || f.length > 10) {
        alert("Enter Correct Mobile Number");
        return false
    } else {
        // document.write("Welcome To New HTML WORLD")
        window.location.href = "Welcome.html"
    }

}