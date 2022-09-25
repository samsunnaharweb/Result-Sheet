


function numberfun(marks){
    if(marks >= 80){
        document.write("A+")
    }
    else if(marks >=70 || 79<= marks){
        document.write("A")
    }
    else if(marks >=60 || 69<= marks){
        document.write("A-")
    }
    else if(marks >=50 || 59<= marks){
        document.write("B")
    }
    else if(marks >=40 || 49<= marks){
        document.write("C")
    }
    else if(marks >=33 || 39<= marks){
        document.write("D")
    }
    else{
        document.write("F")
    }
}

marks = 85

document.write("You got ") +numberfun(marks)



