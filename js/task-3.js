function getElementWidth(content, padding, border) {
    // Перетворити значення на числа, відкидаючи "px" з кінця кожного значення
    const contentWidth = parseFloat(content);
    const paddingWidth = parseFloat(padding);
    const borderWidth = parseFloat(border);

    // Обчислити загальну ширину елемента
    const totalWidth = contentWidth + 2 * paddingWidth + 2 * borderWidth;

    // Повертає загальну ширину елемента
    return totalWidth;
}



console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200







// Або скорочена версія
// /function getElementWidth(content, padding, border) {
//     return Number.parseFloat(content) + (Number.parseFloat(padding) *2) + (Number.parseFloat(border) *2)
// }
// console.log(getElementWidth("50px", "8px", "4px")); // 74
// console.log(getElementWidth("60px", "12px", "8.5px")); // 101
// console.log(getElementWidth("200px", "0px", "0px")); // 200