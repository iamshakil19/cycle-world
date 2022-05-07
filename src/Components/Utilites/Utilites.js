const descriptionSliceText = (text) => {
    return text.length < 60 ? text : text.slice(0, 60) + "...";
};
const nameSliceText = (text) => {
    return text.length < 30 ? text : text.slice(0, 30) + "...";
};

export {
    descriptionSliceText,
    nameSliceText
}