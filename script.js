var get1 = document.getElementById('name');
var get2 = document.getElementById('following');
var get3 = document.getElementById('numRepos');
var get4 = document.getElementById('numFollowers');


async function github() {
    response = await fetch("https://api.github.com/users/anthonycg");
    coderData = await response.json();
    get1.innerHTML = coderData.name;
    get2.innerHTML = coderData.following;
    get3.innerHTML = coderData.public_repos;
    get4.innerHTML = coderData.followers;
    console.log(coderData.name)
    return coderData;
    
}


const followers = () => {
    get4.style.backgroundColor = 'blue'
}

get4.addEventListener('mouseover', followers);