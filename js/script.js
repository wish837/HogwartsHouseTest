const main = document.querySelector("#main");
const test = document.querySelector("#test");
const result = document.querySelector("#result");

const endPoint = 12;
const select = [];

function calResult() {
    var pointArray = [
        { name: 'gryffindor', value: 0, key: 0 },
        { name: 'hufflepuff', value: 0, key: 1 },
        { name: 'ravenclaw', value: 0, key: 2 },
        { name: 'slytherin', value: 0, key: 3 }, 
    ]
    for(let i = 0; i < endPoint; i++) {
        var target = qnaList[i].a[select[i]];
        for (let j = 0; j < target.length; j++) {
            for (let k = 0; k < pointArray.length; k++) {
                if(target.type[j] === pointArray[k].name) {
                    pointArray[k].value += 1;
                }
            }
        }
    }
}

function goTest() {
    main.style.WebkitAnimation = "fadeOut 1s";
    main.style.animation = "fadeOut 1s";
    setTimeout(() => {
        test.style.WebkitAnimation = "fadeIn 1s";
        test.style.animation = "fadeIn 1s";
        setTimeout(() => {
            main.style.display = "none";
            test.style.display = "block";
        }, 450)
        let qIdx = 0;
        goNext(qIdx);
    }, 450);
}

function addAnswer(answerText, qIdx, idx) {
    var a = document.querySelector('#answerBox');
    var answer = document.createElement('button');
    answer.classList.add('answer-list');
    answer.classList.add('fadeIn');
    a.appendChild(answer);
    answer.innerHTML = answerText;
    answer.addEventListener("click", function() {
        var children = document.querySelectorAll('.answer-list');
        for (let i = 0; i < children.length; i++) {
            children[i].disabled = true;
            children[i].style.WebkitAnimation = "fadeOut 1s";
            children[i].style.animation = "fadeOut 1s";
        }
        setTimeout(() => {
            select[qIdx] = idx;
            for(let i = 0; i < children.length; i++) {
                children[i].style.display = 'none';
            }
            goNext(++qIdx);
        }, 450)
    }, false);
}

function goNext(qIdx) {
    var mainImg = document.querySelector("#mainImg");
    if (qIdx+1 === endPoint) {
        mainImg.style.WebkitAnimation = "fadeOut 1s";
        mainImg.style.animation = "fadeOut 1s";
        setTimeout(() => {
            mainImg.style.display = "none";
        }, 450);
        goResult();
        return;
    }
    var q = document.querySelector('#questionBox');
    q.innerHTML = qnaList[qIdx].q;
    for (let i in qnaList[qIdx].a) {
        addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
    }
    var status = document.querySelector('#statusBar');
    status.style.width = (100/endPoint) * (qIdx+1) + '%';
}

function goResult() {
    test.style.WebkitAnimation = "fadeOut 1s";
    test.style.animation = "fadeOut 1s";
    setTimeout(() => {
        result.style.WebkitAnimation = "fadeIn 1s";
        result.style.animation = "fadeIn 1s";
        setTimeout(() => {
            test.style.display = "none";
            result.style.display = "block";
        }, 450)
    });
}