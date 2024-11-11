export const generateCards = (array: Array<any>) => {
    const values = array;
    const cards = [...values, ...values].sort(() => Math.random() - 0.5);
    return cards.map((value, index) => ({ id: index.toString(), value, flipped: false, matched: false }));
};