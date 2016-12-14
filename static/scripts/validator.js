function validate() {
    var pass1 = $('#password1').val();
    var pass2 = $('#password2').val();
    if (pass1 != pass2 || pass1=="" || pass2=="") {
        alert("Las contraseñas no son las mismas!");
        return false;
    }
}