function Login(){

        var username=document.login.username.value;
        username=username.toLowerCase();
        var password=document.login.password.value;
        password=password.toLowerCase();

            if (username=="miftaharis42" && password=="arisganteng"){
            alert("Selamat anda berhasil login");
            window.location = "berhasil.html";
            }
            else{
            alert("User name dan password anda salah!");
            }
        }
