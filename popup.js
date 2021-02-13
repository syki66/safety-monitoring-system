function makeList(j){
    const myParent = document.querySelector('.list');
    for (let i=0; i<10; i++){
        let myDiv = document.createElement("div");

        if (i % 10 == 0){
            myDiv.innerText = Math.floor(Math.random() * 10);
        }
        else if (i % 10 == 1){
            myDiv.innerText = "INCLINOMETER";
        }
        else if (i % 10 == 2){
            myDiv.innerText = Math.floor(Math.random() * 10) / 10;
        }
        else if (i % 10 == 3){
            myDiv.innerText = Math.floor(Math.random() * 10) / 10;
        }
        else if (i % 10 == 4){
            myDiv.innerText = "null";
        }
        else if (i % 10 == 5){
            myDiv.innerText = Math.ceil(Math.random() * -10);
        }
        else if (i % 10 == 6){
            myDiv.innerText = Math.floor(Math.random() * 10) / 100;
        }
        else if (i % 10 == 7){
            myDiv.innerText = 0;
        }
        else if (i % 10 == 8){
            const date = new Date(1612981548000 + 118640000 * j);
            const year = date.getFullYear();
            const month = date.getMonth();
            const day = date.getDate();

            myDiv.innerText = `${year}-${month}-${day}`;
        }
        else if (i % 10 == 9){
            myDiv.innerText = "Align Zero";
        }

        myParent.appendChild(myDiv);
    }
}

for (let j=0; j<30; j++){
    makeList(j);
}