function showpassword() {
    var userpassword = document.getElementById("userpassword");
    if (userpassword.type == "password") {
        userpassword.type = "text";
    } else {
        userpassword.type = "password";
    }
}


function formValidate() {
    var useremailid = document.getElementById("useremail");
    var userpassword = document.getElementById("userpassword");
    if (useremailid.value.trim() == null || useremailid.value.trim() == "") {
        document.getElementById("formtext1").innerHTML = "Email id is not Valid";
        return false;
    } else if (userpassword.value.trim() == null || userpassword.value.trim() == "") {

        document.getElementById("formtext1").innerHTML = "password is not valid";
        return false;

    } else {
        true
    }


}