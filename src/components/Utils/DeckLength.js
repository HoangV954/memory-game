const getDeckLength = (difficulty) => {
    let DeckLength = 0

    switch (difficulty) {
        case 'easy':
            DeckLength = 3;
            break;
        case 'medium':
            DeckLength = 4;
            break;
        case 'hard':
            DeckLength = 5;
            break;
        default:
            break;
    }

    return DeckLength

}

export default getDeckLength