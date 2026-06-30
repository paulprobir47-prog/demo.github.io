<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Pulse Medicare - Login</title>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"/>

<style>

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Segoe UI,Arial,sans-serif;
}

body{
height:100vh;
display:flex;
justify-content:center;
align-items:center;
background:linear-gradient(135deg,#0f9b8e,#0b6d89);
}

.login-container{
width:400px;
background:#fff;
border-radius:15px;
padding:35px;
box-shadow:0 15px 40px rgba(0,0,0,.25);
}

.logo{
text-align:center;
margin-bottom:15px;
}

.logo i{
font-size:60px;
color:#0f9b8e;
}

.logo h1{
margin-top:10px;
font-size:32px;
color:#0f9b8e;
}

.logo p{
color:#777;
font-size:14px;
}

.heading{
text-align:center;
margin:25px 0;
}

.heading h2{
color:#333;
margin-bottom:5px;
}

.heading p{
color:#888;
}

.input-box{
position:relative;
margin-bottom:20px;
}

.input-box input{
width:100%;
padding:14px 15px 14px 45px;
border:1px solid #ccc;
border-radius:8px;
font-size:16px;
outline:none;
transition:.3s;
}

.input-box input:focus{
border-color:#0f9b8e;
box-shadow:0 0 8px rgba(15,155,142,.4);
}

.input-box i{
position:absolute;
left:15px;
top:16px;
color:#0f9b8e;
}

button{
width:100%;
padding:14px;
background:#0f9b8e;
border:none;
border-radius:8px;
color:white;
font-size:17px;
cursor:pointer;
transition:.3s;
}

button:hover{
background:#08786d;
}

.forgot{
text-align:center;
margin-top:18px;
}

.forgot a{
text-decoration:none;
color:#0f9b8e;
font-weight:600;
}

.footer{
margin-top:30px;
text-align:center;
font-size:14px;
color:#666;
}

.footer a{
text-decoration:none;
color:#0f9b8e;
font-weight:bold;
}

@media(max-width:450px){

.login-container{
width:95%;
}

}

</style>

</head>
<body>

<div class="login-container">

<div class="logo">
<i class="fa-solid fa-heart-pulse"></i>
<h1>Pulse</h1>
<p>Medicare Management System</p>
</div>

<div class="heading">
<h2>Welcome Back!</h2>
<p>Login to Continue</p>
</div>

<form>

<div class="input-box">
<i class="fa-solid fa-user"></i>
<input type="text" placeholder="Username" required>
</div>

<div class="input-box">
<i class="fa-solid fa-lock"></i>
<input type="password" placeholder="Password" required>
</div>

<button type="submit">
Login
</button>

</form>

<div class="forgot">
<a href="#">Forgot Password?</a>
</div>

<div class="footer">
Developed by <a href="#">Pro Infotech</a>
</div>

</div>

</body>
</html>
