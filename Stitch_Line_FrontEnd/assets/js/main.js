var signIn = document.querySelector('.form');
var signUp = document.querySelector('.form2');
var customer = document.querySelector('.customerContainer');
var admin = document.querySelector('.adminContainer');
var customerBtn = document.querySelector('#customerSignUp');
var adminBtn = document.querySelector('#adminSignUp');
var login = document.querySelector('.mainContainer');
var customerForm = document.querySelector('.customerForm');
var adminForm = document.querySelector('.adminForm');
var signInBtn=document.querySelector('#signInBtn');
var signUpBtn=document.querySelector('#signUpBtn');

// default
login.style.display='block';
signIn.style.display='block';
signUp.style.display='none';
customer.style.display='none';
admin.style.display='none';
customerBtn.style.display='none';
adminBtn.style.display='none';
customerForm.style.display='block';
adminForm.style.display='none';


// sign in button
signInBtn.addEventListener('click',function (){
    signIn.style.display='block';
    signUp.style.display='none';
    adminBtn.style.display='none';
    customerBtn.style.display='none';
});


// sign up button
signUpBtn.addEventListener('click',function (){
    signIn.style.display='none';
    signUp.style.display='block';
    customerForm.style.display='block';
    adminForm.style.display='none';
    customerBtn.style.display='block';
});

// toggle bar
function toggleCheck() {
    if(document.getElementById("myCheckbox").checked === true){
        customerForm.style.display='block';
        adminForm.style.display='none';
        adminBtn.style.display='none';
        customerBtn.style.display='block';

    }else{
        customerForm.style.display='none';
        adminForm.style.display='block';
        adminBtn.style.display='block';
        customerBtn.style.display='none';
    }
}

//navigation
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


// validations =>  sign in form

let uName=/^([a-zA-Z]{6,})?$/;

$("#uName").on('keyup',function (event){
    let inputID=$("#uName").val();
    if (uName.test(inputID)){
        $("#uName").css('border','2px solid green');
        $("#uName").text("");
        if (event.key=="Enter"){
            $('#psw').focus();
        }
    }else{
        $("#uName").css('border','2px solid red');
        $("#uName").text('Your Input Data Format is Wrong');
    }
});

let psw=/^([a-zA-Z]{8,})?$/;

$("#psw").on('keyup',function (event){
    let inputID=$("#psw").val();
    if (psw.test(inputID)){
        $("#psw").css('border','2px solid green');
        $("#psw").text("");
        if (event.key=="Enter"){
            let userName = $('#uName').val();
                let password = $('#psw').val();

                if (userName.length <= 0) {
                    alert("User Name is empty");
                } else if (password.length <= 0) {
                    alert("Password is empty")
                } else {
                    $.ajax({
                        method: "GET",
                        url: "http://localhost:8080/api/v1/user/signIn/" + userName + "/" + password,
                        async: true,
                        success: function (response) {
                            alert("Logged In : " + response.data.type + " : "+response.data.name )
                            console.log(response.data);

                            if(response.data.type === "Customer"){
                                $('.customerContainer').show();
                                $('.mainContainer').hide();

                            }else if(response.data.type ===  "Admin"){
                                $('.adminContainer').show();
                                $('.mainContainer').hide();
                            }
                        },

                    });
                }
                return false;
    }
    }else{
        $("#psw").css('border','2px solid red');
        $("#psw").text('Your Input Data Format is Wrong');
    }
});



// validations => customer sign up form

let name=/^([a-zA-Z]{1,})?$/;

$("#name").on('keyup',function (event){
    let inputID=$("#name").val();
    if (name.test(inputID)){
        $("#name").css('border','2px solid green');
        $("#name").text("");
        if (event.key=="Enter"){
            $('#address').focus();
        }
    }else{
        $("#name").css('border','2px solid red');
        $("#name").text('Your Input Data Format is Wrong');
    }
});

let address=/^([a-zA-Z]{1,})?$/;

$("#address").on('keyup',function (event){
    let inputID=$("#address").val();
    if (name.test(inputID)){
        $("#address").css('border','2px solid green');
        $("#address").text("");
        if (event.key=="Enter"){
            $('#email').focus();
        }
    }else{
        $("#address").css('border','2px solid red');
        $("#address").text('Your Input Data Format is Wrong');
    }
});

let email=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+.[com]$/;

$("#email").on('keyup',function (event){
    let inputID=$("#email").val();
    if (email.test(inputID)){
        $("#email").css('border','2px solid green');
        $("#email").text("");
        if (event.key=="Enter"){
            $('#mobile').focus();
        }
    }else{
        $("#email").css('border','2px solid red');
        $("#email").text('Your Input Data Format is Wrong');
    }
});


let mobile=/^[0-9]{10}$/;

$("#mobile").on('keyup',function (event){
    let inputID=$("#mobile").val();
    if (mobile.test(inputID)){
        $("#mobile").css('border','2px solid green');
        $("#mobile").text("");
        if (event.key=="Enter"){
            $('#userName').focus();
        }
    }else{
        $("#mobile").css('border','2px solid red');
        $("#mobile").text('Your Input Data Format is Wrong');
    }
});

let userName=/^([a-zA-Z]{6,})?$/;

$("#userName").on('keyup',function (event){
    let inputID=$("#userName").val();
    if (userName.test(inputID)){
        $("#userName").css('border','2px solid green');
        $("#userName").text("");
        if (event.key=="Enter"){
            $('#pswSignUp').focus();
        }
    }else{
        $("#userName").css('border','2px solid red');
        $("#userName").text('Your Input Data Format is Wrong');
    }
});

let pswSignUp=/^([a-zA-Z]{8,})?$/;

$("#pswSignUp").on('keyup',function (event){
    let inputID=$("#pswSignUp").val();
    if (pswSignUp.test(inputID)){
        $("#pswSignUp").css('border','2px solid green');
        $("#pswSignUp").text("");
        if (event.key=="Enter"){
            let customerName = $("#name").val();
            let customerAddress = $("#address").val();
            let customerEmail= $("#email").val();
            let customerMobile = $("#mobile").val();
            let customerUserName = $("#userName").val();
            let customerPassword = $("#pswSignUp").val();

            if (customerName.length <= 0) {
                alert("Name cannot empty !");
            }else if (customerAddress.length <= 0) {
                alert("Address  cannot be empty !");
            }  else if (customerMobile.length <= 0 ) {
                alert("Mobile no cannot be empty !");
            }  else if (customerEmail.length <= 0) {
                alert("E-mail cannot be empty !");
            } else if (customerUserName.length <= 0) {
                alert("User Name cannot be empty !");
            } else if (customerPassword.length <= 0) {
                alert("Password cannot be empty !");
            }   else {

                $.ajax({
                    method: "POST",
                    url: "http://localhost:8080/api/v1/user",
                    contentType: 'application/json',
                    async: true,
                    data: JSON.stringify({
                        name: customerName,
                        address: customerAddress,
                        email: customerEmail,
                        mobile: customerMobile,
                        userName: customerUserName,
                        password: customerPassword,
                        type:"Customer"
                    }),
                    success: function (data) {
                        alert("Customer Successfully Saved")
                        console.log(data);
                    }
                });
            }        }
    }else{
        $("#pswSignUp").css('border','2px solid red');
        $("#pswSignUp").text('Your Input Data Format is Wrong');
    }
});


// validations => admin sign up form

let aname=/^([a-zA-Z]{1,})?$/;

$("#aname").on('keyup',function (event){
    let inputID=$("#aname").val();
    if (aname.test(inputID)){
        $("#aname").css('border','2px solid green');
        $("#aname").text("");
        if (event.key=="Enter"){
            $('#anic').focus();
        }
    }else{
        $("#aname").css('border','2px solid red');
        $("#aname").text('Your Input Data Format is Wrong');
    }
});


let anic=/^\d{2}(?:[0-35-8]\d\d(?<!(?:000|500|36[7-9]|3[7-9]\d|86[7-9]|8[7-9]\d)))\d{4}(?:[vVxX])$/;


$("#anic").on('keyup',function (event){
    let inputID=$("#anic").val();
    if (anic.test(inputID)){
        $("#anic").css('border','2px solid green');
        $("#anic").text("");
        if (event.key=="Enter"){
            $('#aeId').focus();
        }
    }else{
        $("#anic").css('border','2px solid red');
        $("#anic").text('Your Input Data Format is Wrong');
    }
});



let aeId=/^([E]{1}[0]{1}[0-9]{1,})$/;

$("#aeId").on('keyup',function (event){
    let inputID=$("#aeId").val();
    if (aeId.test(inputID)){
        $("#aeId").css('border','2px solid green');
        $("#aeId").text("");
        if (event.key=="Enter"){
            $('#aemail').focus();
        }
    }else{
        $("#aeId").css('border','2px solid red');
        $("#aeId").text('Your Input Data Format is Wrong');
    }
});




let aemail=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+.[com]$/;

$("#aemail").on('keyup',function (event){
    let inputID=$("#aemail").val();
    if (aemail.test(inputID)){
        $("#aemail").css('border','2px solid green');
        $("#aemail").text("");
        if (event.key=="Enter"){
            $('#amobile').focus();
        }
    }else{
        $("#aemail").css('border','2px solid red');
        $("#aemail").text('Your Input Data Format is Wrong');
    }
});


let amobile=/^[0-9]{10}$/;

$("#amobile").on('keyup',function (event){
    let inputID=$("#amobile").val();
    if (amobile.test(inputID)){
        $("#amobile").css('border','2px solid green');
        $("#amobile").text("");
        if (event.key=="Enter"){
            $('#auserName').focus();
        }
    }else{
        $("#amobile").css('border','2px solid red');
        $("#amobile").text('Your Input Data Format is Wrong');
    }
});

let auserName=/^([a-zA-Z]{6,})?$/;

$("#auserName").on('keyup',function (event){
    let inputID=$("#auserName").val();
    if (auserName.test(inputID)){
        $("#auserName").css('border','2px solid green');
        $("#auserName").text("");
        if (event.key=="Enter"){
            $('#apswSignUp').focus();
        }
    }else{
        $("#auserName").css('border','2px solid red');
        $("#auserName").text('Your Input Data Format is Wrong');
    }
});

let apswSignUp=/^([a-zA-Z]{8,})?$/;

$("#apswSignUp").on('keyup',function (event){
    let inputID=$("#apswSignUp").val();
    if (apswSignUp.test(inputID)){
        $("#apswSignUp").css('border','2px solid green');
        $("#apswSignUp").text("");
        if (event.key=="Enter"){
                let adminName = $("#aname").val();
                let adminNic = $("#anic").val();
                let employeeId= $("#aeId").val();
                let adminEmail = $("#aemail").val();
                let adminMobile = $("#amobile").val();
                let adminUserName = $("#auserName").val();
                let adminPassword = $("#apswSignUp").val();


                if (adminName.length <= 0) {
                    alert("Name cannot empty !");
                }else if (adminNic.length <= 0) {
                    alert("NIC  cannot be empty !");
                }  else if (employeeId.length <= 0 ) {
                    alert("Employee Id cannot be empty !");
                }  else if (adminEmail.length <= 0) {
                    alert("E-mail cannot be empty !");
                } else if (adminMobile.length <= 0) {
                    alert("Mobile No cannot be empty !");
                } else if (adminUserName.length <= 0) {
                    alert("User Name cannot be empty !");
                } else if (adminPassword.length <= 0) {
                    alert("Password cannot be empty !");
                }   else {
                    $.ajax({
                        method: "POST",
                        url: "http://localhost:8080/api/v1/user",
                        contentType: 'application/json',
                        async: true,
                        data: JSON.stringify({
                            name: adminName,
                            nic: adminNic,
                            employeeId: employeeId,
                            email: adminEmail,
                            mobile: adminMobile,
                            userName: adminUserName,
                            password: adminPassword,
                            type: "Admin"

                        }),
                        success: function (data) {
                            alert("Admin Successfully Saved")
                            console.log(data);
                        }
                    });
                }
    }
    }else{
        $("#apswSignUp").css('border','2px solid red');
        $("#apswSignUp").text('Your Input Data Format is Wrong');
    }
});

