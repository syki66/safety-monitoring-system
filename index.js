const myParent = document.querySelector('.main_2');
for (let i=0; i<34; i++){
    let myDiv = document.createElement("div");
    let color = ['#03A6F3','#F29848','#FF2020'];
    myDiv.innerHTML = `
        <div>기울기${i}</div>
        <div style="color:${color[Math.floor(Math.random() * 3)]};">기울기 X: ${i/100}, Y: ${i/100}</div>
        <div>수신시각 : ${i}일 전</div>
        `;
    myDiv.setAttribute('onclick', 'openDialogBox()');
    myParent.appendChild(myDiv);
}

function openDialogBox(){
    if (confirm("센서에 대한 데이터를 조회하시겠습니까?")){
        window.open("./popup.html", "popup", "width=1700, height=520");
    }
}