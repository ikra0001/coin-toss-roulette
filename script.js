

function random_bolean() {
    return (Math.floor(Math.random()*2) === 0) ? 'WIN' : 'LOSE';
} 

// console.log(random_bolean())

function colorToggle() {
    if (answer.innerHTML === 'WIN'){
        answer.classList.remove('lose')
        answer.classList.add('win')
    } else if (answer.innerHTML === 'LOSE') {
        answer.classList.remove('win')
        answer.classList.add('lose')
    }
}

const answer = document.getElementById("p")
const btn = document.getElementById("button")
 




btn.addEventListener("click", function(){setTimeout(getAns, 3000)})

function getAns() {
    answer.innerHTML = random_bolean()
    console.log(answer.textContent)  

    colorToggle()
}
