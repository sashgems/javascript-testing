  
const monsterData = require('./christmas-monsters.json')
const randomArrayIndex = require('random-array-index')

//This gives me a random monster from the array and I return the monsters name
function getRandomMonster() {
    const monsterIdx = randomArrayIndex(monsterData)
    const monster = monsterData[monsterIdx]
    console.log(monster.name)
    return monster.name 
}

/*Combines all the statements from all monsters into an array that I can use to get a 
random msg */
function getAllStatements() {
    let allStatements = []
    
    for (let i=0; i< m0nsterData.length; i++){
        allStatements.push(m0nsterData[i].scaryStatement)
        console.log(allStatements)
    }
}
// Now I want to send the random message and send it with the random monster name
function getRandomMessage() {
    let text = allStatements[randomStatementIdx]
    
    randomStatementIdx = Math.floor(Math.random()*allStatements.length);      
    
    console.log(text)
}

module.exports = {
    getRandomMonster,
    getAllStatements,
    monsterData
}