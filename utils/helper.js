export const getTextColor = (color) => {
    const hexColor = color?.startsWith('#') ? color?.slice(1) : color;
    const r = parseInt(hexColor.substring(0, 2), 16);
    const g = parseInt(hexColor.substring(2, 4), 16);
    const b = parseInt(hexColor.substring(4, 6), 16);
    const brightness = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    return brightness < 128 ? '#FFFFFF' : '#000000';
};