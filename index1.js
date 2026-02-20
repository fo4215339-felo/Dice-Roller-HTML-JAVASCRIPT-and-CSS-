//DICE ROLLER PROGRAM

function rolldice(){

    const numofDice = document.getElementById("numofDice").value;
    const diceResult = document.getElementById("diceResult");
    const values=[];

    for (let i=0;i<numofDice;i++){
const value=Math.floor(Math.random()*6)+ 1;
values.push(value);
 }

 diceResult.textContent=`dice : ${values.join(', ')};`
}