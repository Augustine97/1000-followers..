var counter = document.getElementsByClassName("counter")[0];
var followers  = document.getElementsByClassName("followers")[0];



let count = 0;

setInterval(() => {
    if (count<1000) {
        count++;
        counter.innerText = count;
    }},1);

setTimeout(() => {
    followers.innerText = "Followers on Instagram";
}, 5000);




