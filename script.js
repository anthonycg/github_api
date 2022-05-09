var get1 = document.getElementById('button1');

let test = document.getElementById('hello');

const onclick = (this) => {
    test.innerHTML = 'hello';
    console.log(test.innerHTML)
}


async function github() {
    response = await fetch("https://api.github.com/users/adion81");
    coderData = await response.json();
    return coderData;
    
}

get1.addEventListener('click', github);