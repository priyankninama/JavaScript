let words =
    [
        {
            jumbled: 'tac',
            correct: 'cat'
        },
        {
            jumbled: 'kema',
            correct: 'make'
        },
        {
            jumbled: 'paelp',
            correct: 'apple'
        },
        {
            jumbled: 'mcrhpnoeoi',
            correct: 'microphone'
        },
        {
            jumbled: 'odwr',
            correct: 'word'
        },
        {
            jumbled: 'emga',
            correct: 'game'
        },
        {
            jumbled: 'ytdoa',
            correct: 'today'
        },
        {
            jumbled: 'siumc',
            correct: 'music'
        },
        {
            jumbled: 'oedn',
            correct: 'node'
        },
        {
            jumbled: 'oatrnhe',
            correct: 'another'
        },
        {
            jumbled: 'muljbe',
            correct: 'jumble'
        },
        {
            jumbled: 'pxeemal',
            correct: 'example'
        }
    ]

let currentword = 0;
let score = 0

display = () => {

    document.querySelector("#i1").innerText =
        words[currentword].jumbled;
    document.querySelector('#score').innerHTML = score;

}

display()

checkanswer = () => {
    let answer = document.querySelector('#inp').value;
    if (answer.toLowerCase() === words[currentword].correct.toLowerCase()) {
        score++
    }

    if (currentword == words.length - 1) {
        alert("Final Score " + score)
        location.reload()
    }
    else {
        currentword++
        display()

        document.querySelector('#inp').value = '';
    }
}
