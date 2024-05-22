function getGrade(){
    var score = document.getElementById("score").value;

    if(score>=75 && score<=100){
        document.getElementById("grade").innerHTML = "A";
        document.getElementById("grade").style = "color:green;";
    }

    else if(score>=65 && score<=74){
        document.getElementById("grade").innerHTML = "B";
        document.getElementById("grade").style = "color:blue;";
    }

    else if(score>=55 && score<=64){
        document.getElementById("grade").innerHTML = "c";
        document.getElementById("grade").style = "color:yellow;";
    }

    else if(score>=40 && score<=54){
        document.getElementById("grade").innerHTML = "D";
        document.getElementById("grade").style = "color:purple;";
    }

    else if(score<=39 && score>=0){
        document.getElementById("grade").innerHTML = "F";
        document.getElementById("grade").style = "color:red;";
    }

    else{
        document.getElementById("grade").innerHTML = "Invalid score";
        document.getElementById("grade").style = "color:red;";
    }
}
