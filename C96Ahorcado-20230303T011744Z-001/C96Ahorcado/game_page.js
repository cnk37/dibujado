player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");
player1_score=0;
player2_score=0;
document.getElementById("player1_name").innerHTML=player1_name +":";
document.getElementById("player2_name").innerHTML=player2_name +":";
document.getElementById("player1_score").innerHTML=player1_name +":";
document.getElementById("player2_score").innerHTML=player2_name +":";
document.getElementById("player_question").innerHTML="Turno para preguntar - "+"player1_name";
document.getElementById("player_question").innerHTML="Turno para responder - "+"player2_name";

function send(){
get_word=document.getElementById("word").value;
word=get_word.toLowerCase();
console.log("palabra en minuscula"+word);

chartAt1=word.chartAt1(1);
console.log(chartAt1);

length_divide_2=Math.floor(word.length/2);
chartAt2= word.chartAt(length_divide_2);
console.log(chartAt2)

length_minus_2=Math.floor(word.length/2);
chartAt2= word.chartAt(length_minus_2);
console.log(chartAt2);

remove_chartAt1=word.replace(chartAt1,"_");
remove_chartAt2=remove_word.replace(chartAt2,"_");
remove_chartAt3=remove_word.replace(chartAt3,"_");
console.log(remove_chartAt3);
}
    


