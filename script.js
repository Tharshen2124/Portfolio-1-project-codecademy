let word1 = ['The boys', 'We', 'They', "The girls"];
let word2 = ['love', 'hate', 'prefer'];
let word3 = ['playing', 'cooking', 'eating'];


function getFirstWord (word1) {
    const firstWord = word1[Math.floor(Math.random()*4)];
    return firstWord;
}

const getSecondWord = word2 => {
    const secondWord = word2[Math.floor(Math.random()*2)];
    return secondWord;
}

const getThirdWord = word3 => word3[Math.floor(Math.random()*2)];

const ThirdWord = getThirdWord(word3);

const getLastWord = ThirdWord => {
    let lastWord;
    let choice1 = ['football', 'rugby', 'basketball'];
    let choice2 = ['burgers', 'french fries', 'fried chicken'];
    if(ThirdWord === 'playing') {
        lastWord = choice1[Math.floor(Math.random()*2)];
    } else if (ThirdWord === 'cooking' || ThirdWord === 'eating') { 
        lastWord = choice2[Math.floor(Math.random()*2)];
    }

    return lastWord;
}

const arrayForSentence = [getFirstWord(word1), getSecondWord(word2), ThirdWord, getLastWord(ThirdWord)];

let sentenceFix1 = arrayForSentence.toString();

let sentenceFix2 = sentenceFix1.replace(/,/g, ' ');

console.log(sentenceFix2);

console.log("hello");