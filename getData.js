//getData.js
function getValueInText(){
	let inputData = document.getElementById("data1").value;
	alert(inputData);
}

// function hout(){
//     let newScore = Number(this.value) - 1;
//     this.value = newScore;


function teamRt(){
    var team1Rt;
    var team2Rt;
    team1Rt = Number(document.getElementById("team1wScore").value) + Number(document.getElementById("team1mScore").value);
    team2Rt = Number(document.getElementById("team2wScore").value) + Number(document.getElementById("team2mScore").value);
    document.getElementById("team1Result").value = team1Rt;
    document.getElementById("team2Result").value = team2Rt;


}

function miss1w(){
    let newScore = Number(document.getElementById("team1wScore").value) + 1;
    document.getElementById("team1wScore").value = newScore;
}

function miss2w(){
    let newScore = Number(document.getElementById("team2wScore").value) + 1;
    document.getElementById("team2wScore").value = newScore;
}

function miss1m(){
    let newScore = Number(document.getElementById("team1mScore").value) + 1;
    document.getElementById("team1mScore").value = newScore;
}

function miss2m(){
    let newScore = Number(document.getElementById("team2mScore").value) + 1;
    document.getElementById("team2mScore").value = newScore;
}

function whichclass(){
    var orange = document.getElementById("whi1").value;
    var green = document.getElementById("whi2").value;
    document.getElementById("juname").innerText = orange;
    document.getElementById("grname").innerText = green;
}