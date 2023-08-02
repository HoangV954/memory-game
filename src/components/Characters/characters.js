import uniquid from "uniqid";
import wardImg from "../../assets/images/Cards/Ward.jpg"
import edeaImg from "../../assets/images/Cards/Edea.png"
import irvineImg from "../../assets/images/Cards/Irvine.png"
import lagunaImg from "../../assets/images/Cards/Laguna.jpg"
import quistisImg from "../../assets/images/Cards/Quistis.png"
import rinoaImg from "../../assets/images/Cards/Rinoa.png"
import seiferImg from "../../assets/images/Cards/Seifer.png"
import selphieImg from "../../assets/images/Cards/Selphie.jpg"
import squallImg from "../../assets/images/Cards/Squall.jpg"
import zellImg from "../../assets/images/Cards/Zell.jpg"

const characters = [
    {
        id: uniquid(),
        name: "Ward Zabac",
        img: wardImg,
        clicked: false
    },
    {
        id: uniquid(),
        name: "Edea Kramer",
        img: edeaImg,
        clicked: false
    },
    {
        id: uniquid(),
        name: "Irvine Kinneas",
        img: irvineImg,
        clicked: false
    },
    {
        id: uniquid(),
        name: "Laguna Loire",
        img: lagunaImg,
        clicked: false
    },
    {
        id: uniquid(),
        name: "Quistis Trepe",
        img: quistisImg,
        clicked: false
    },
    {
        id: uniquid(),
        name: "Rinoa Heartily",
        img: rinoaImg,
        clicked: false
    },
    {
        id: uniquid(),
        name: "Seifer Almasy",
        img: seiferImg,
        clicked: false
    },
    {
        id: uniquid(),
        name: "Selphie Tilmitt",
        img: selphieImg,
        clicked: false
    },
    {
        id: uniquid(),
        name: "Squall Leonhart",
        img: squallImg,
        clicked: false
    },
    {
        id: uniquid(),
        name: "Zell Dincht",
        img: zellImg,
        clicked: false
    }
]


const getChars = (length) => {

    let charArr = [];

    for (let i = 0; i < length; i += 1) {
        let randomNum;
        let selected = false;
        while (!selected) /* Always true since its !false. Loop not stopping until the condition (charArr has an unique char) */ {
            randomNum = Math.floor(Math.random() * characters.length);
            if (!charArr.includes(characters[randomNum])) {
                selected = true /* Reset the loop by giving it a true value, thus making !selected false (halting while condition) */
            }
        }
        charArr.push(characters[randomNum])

    }

    return charArr;
}


const setEasy = getChars(5)
const setMedium = getChars(7)
const setHard = getChars(10)

/* Initiate the above 3 so that the deck maintains its card content instead of running it anew everytime (injecting func directly into case) */

const getCharsBasedOnDifficulty = (difficulty) => {
    switch (difficulty) {
        case 'easy':
            return setEasy;
        case 'medium':
            return setMedium;
        case 'hard':
            return setHard;
        default:
            break;
    }
}
/* Leave func that modify arr here for ease of access */
const allCharClicked = (cardList) => {
    return cardList.every((c) => c.clicked === true)
}

const resetChars = () => {
    characters.forEach((c) => {
        c.clicked = false
    })
}

export { characters, getCharsBasedOnDifficulty, allCharClicked, resetChars }