const userName = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const signupBtn = document.querySelector("#signup");
const error = document.getElementById("error");
const fName = document.getElementById("displayFullname");
const dispmail = document.getElementById("dispalyEmail");
const dispToken = document.getElementById("displayToken");
const dispPass = document.getElementById("displayPassword");

var key = randomKey('0123456789abcdefghijklmnopqrstuvwxyz');
console.log("The Key value is " +key);

signupBtn.addEventListener('click',(e)=>{
    if((userName.value||email.value||password.value ||confirmPassword.value) ===''){
        error.style.display = 'block';
        alert("Error in the data extraction part")
    }
    else{
        saveData(userName.value,email.value,password.value,key);
        console.log(userName.value,email.value,password.value,key);
        displayData();
        e.preventDefault();
    }

})

//Function for Generating random keys
function randomKey(arr){
    let ans = '';
    for(let i=16;i>0;i--){
        ans += arr[(Math.floor(Math.random()*arr.length))];
    }
    return ans;
}

//Saving data to local Storage
function saveData(name,mail,pass,key){
    if (localStorage) {
        // LocalStorage is supported!
        let user =[
            name,
            mail,
            pass,
            key
        ]
        localStorage.setItem("user",JSON.stringify(user))
        window.location.href = "./Profile.html";
      } else {
        alert("No Local Storage support. Use a fallback such as browser cookies or store on the server.")
      }
}

function displayData(){
    console.log(localStorage.getItem(user[0]));
}