let currentPlayer = 'X'
let nextPlayer ='O'
let playerXSelections= []
let playerOSelections= []
let empates = 0
let vitoriaX = 0
let vitoriaO = 0
const winnerCombinations = [
    [1,2,3],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [7,8,9],
    [4,5,6],
    [3,5,7]
]
const div = document.getElementById('jogador')
div.innerHTML= currentPlayer
function checkWinner(){
        for(let j = 0; j < winnerCombinations.length; j++){
            let match = 0
            for(let k = 0; k <winnerCombinations[j].length; k++){
                for(let i = 0; i < playerSelections.length; i++){
                if(playerSelections[i] === winnerCombinations[j][k]){
                    match+=1
                    if(match===3){
                        return true
                    }
                }
            }
        }
    }
    return false
}
function checkDraw() {
    return (playerOSelections.length + playerXSelections.length) >= cells.length;
 }
 function resetGame() {
    playerXSelections = new Array();
    playerOSelections = new Array();
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerHTML = '';
    }
    currentPlayer= nextPlayer
    div.innerHTML= currentPlayer
    const tds = document.getElementsByTagName('td')
    for(let i = 0; i < tds.length; i++){
        tds[i].classList.remove('included')
    }
 }
const handleClick = function (event) {
	const cell = event.target;
    if(cell.innerHTML === ''){
        cell.innerHTML = currentPlayer;
        cell.classList.add('included')
        if (currentPlayer === 'X' ) {
            playerSelections = playerXSelections;
            nextPlayer = 'O';
        } else {
            playerSelections = playerOSelections;
            nextPlayer = 'X';
        }
    
        playerSelections.push(Number(cell.id));
    
        // Swap players
        if(checkWinner()===true){
            console.log('winner is '+currentPlayer)
            if(currentPlayer === 'X') {
                vitoriaX+=1
                const xvictories = document.getElementById('playerX')
                xvictories.innerHTML = 'Vitórias do X:'+vitoriaX 
            }else{
                vitoriaO+=1
                const ovictories = document.getElementById('playerO')
                ovictories.innerHTML = 'Vitórias do O:'+vitoriaO 
            }
            window.alert('O vencedor é '+currentPlayer+'! \nReinicie o jogo e tente de novo!')
            resetGame()
        }else if(checkDraw()===true){
            window.alert('Deu empate!')
            empates+=1
            console.log('empate!!!')
            const Numempates = document.getElementById('empates')
            Numempates.innerHTML = 'Empates:'+empates
            resetGame()
        }else{
            currentPlayer = nextPlayer;
            div.innerHTML= nextPlayer
        }
    }else{
        return 'you cant hahaha'
    }
}
const button = document.getElementById('btn')
button.addEventListener('click',resetGame)

const cells = document.querySelectorAll('td');

for (let i = 0; i < cells.length; i++) {
	cells[i].addEventListener('click', handleClick);
}