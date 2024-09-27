let numberGrade;
let letterGrade; 

while (numberGrade!= 999){
    numberGrade = parseInt(prompt("Enter a number grade from 0 through 100\n Or enter 999 to end entries."))

    if (numberGrade >= 0 && numberGrade <= 100){
        if (numberGrade >= 88 && numberGrade <= 100){
            letterGrade = "A";
        }   
        else if (numberGrade >= 80 && numberGrade <= 87){
            letterGrade = "B";
        }   
        else if (numberGrade >= 68 && numberGrade <= 79){
            letterGrade = "C";
        }   
        else if (numberGrade >= 60 && numberGrade <= 67){
            letterGrade = "D";
        }   
        else {
            letterGrade = "F";
        }

        document.writeln(`<p>Grade ${numberGrade} = ${letterGrade}</p><br>`)
        
    }

}