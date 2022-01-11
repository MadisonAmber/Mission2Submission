$("#btnSend").click(function () {
    //Gather user input
    let iNumAssignments = $("#numAssignments").val()
    let iNumProjects = $("#numGroupProject").val()
    let iNumQuizzes = $("#numQuizzes").val()
    let iNumExams = $("#numExams").val()
    let iIntex = $("#Intex").val()

    //Calculate the final percentage based on weights listed in the syllabus
    let iTotalScore = Math.round((iNumAssignments * .55) + (iNumProjects * .05) + (iNumQuizzes * .10) + (iNumExams * .20) + (iIntex * .10), 2)
    let sLetterGrade = ""

    //Determine the letter grade based off of the final percentage
    if (iTotalScore >= 94) {
        sLetterGrade = "A"
    }
    else if (iTotalScore >= 90) {
        sLetterGrade = "A-"
    }
    else if (iTotalScore >= 87) {
        sLetterGrade = "B+"
    }
    else if (iTotalScore >= 84) {
        sLetterGrade = "B"
    }
    else if (iTotalScore >= 80) {
        sLetterGrade = "B-"
    }
    else if (iTotalScore >= 77) {
        sLetterGrade = "C+"
    }
    else if (iTotalScore >= 74) {
        sLetterGrade = "C"
    }
    else if (iTotalScore >= 70) {
        sLetterGrade = "C-"
    }
    else if (iTotalScore >= 67) {
        sLetterGrade = "D+"
    }
    else if (iTotalScore >= 64) {
        sLetterGrade = "D"
    }
    else if (iTotalScore >= 60) {
        sLetterGrade = "D-"
    }
    else {
        sLetterGrade = "E"
    }

    //Display the final percentage along with the corresponding letter grade
    alert("You got a " + iTotalScore + "%. The corresponding letter grade is a(n) " + sLetterGrade + ".")


})