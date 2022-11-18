function onSubmit() {
    const value = document.getElementById("case").value
    if (value.toLowerCase() == "story 1") {
        document.getElementById("c0").innerHTML = `
            <h1>Clue-1</h1>
            <p
            style="display: flex; flex-direction:column;justify-content:center;align-items:center;color: white;font-size: 40px;">
            <a href="case1.pdf" style="color: white;">Case-File</a>
            </p>`
    }

    else if (value.toLowerCase() == "story 2") {
        document.getElementById("c0").innerHTML = `
            <h1>Clue-2</h1>
            <p
            style="display: flex; flex-direction:column;justify-content:center;align-items:center;color: white;font-size: 40px;">
            <a href="case2.pdf" style="color: white;">Case-File</a>
            </p>`
    }

    else if (value.toLowerCase() == "story 3") {
        document.getElementById("c0").innerHTML = `
            <h1>Clue-3</h1>
            <p
            style="display: flex; flex-direction:column;justify-content:center;align-items:center;color: white;font-size: 40px;">
            <a href="case3.pdf" style="color: white;">Case-File</a>
            </p>`
    }

    else {
        alert("Wrong Password. try again")
    }
}