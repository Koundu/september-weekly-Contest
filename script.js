var api_key = "";
var searchValue = "";
const keyBtn = document.getElementById('keyBtn');
const searchBtn = document.getElementById('searchBtn');
const result = document.getElementsByClassName('result');
const cardItem = document.getElementsByClassName('cardItem');
const text = document.getElementsByClassName('text');
var serial = 1;

keyBtn.addEventListener('click',function(e){
    e.preventDefault();
    api_key = document.getElementById('key').value;
    if(api_key ===''){
        alert("Please provide an API key");
    }
    else{
        alert("The provided api key is "+api_key)
        console.log("The provided api key is "+api_key);
    }
})

searchBtn.addEventListener('click',function(e){
    e.preventDefault();
    searchValue = document.getElementById('search').value;
    api_key = document.getElementById('key').value;
    if(api_key ==='' || searchValue === ''){
        alert("Please provide both the fields")
    }
    else{
        console.log("The provided api key is "+api_key);
        console.log("The Searched value is "+searchValue);
        searchFunction();
    }
})

function searchFunction(){
    fetch('https://www.omdbapi.com/?t='+searchValue.split(" ")+'&apikey='+api_key).then(function (response) {
    // The API call was successful!
    return response.json();
    }).then(function (data) {
    // This is the JSON from our response
        console.log(data);
        return data;
    }).then(function (data) {
        cardItem.getElementById('img').src == data.Poster;
        text.getElementById('title').innerHTML == data.title;
        serial = serial + 1;
        text.getElementById('serial').innerHTML == serial;
    })
    .catch(function (err) {
    // There was an error
        console.warn('Something went wrong.', err); 
    });
}




