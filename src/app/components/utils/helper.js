export const getTextColor = (color) => {
  // Get text color
  const hexColor = color?.startsWith("#") ? color?.slice(1) : color; // Remove # from color
  const r = parseInt(hexColor.substring(0, 2), 16); // Get red value
  const g = parseInt(hexColor.substring(2, 4), 16); // Get green value
  const b = parseInt(hexColor.substring(4, 6), 16); // Get blue value
  const brightness = 0.2126 * r + 0.7152 * g + 0.0722 * b; // Calculate brightness
  return brightness < 128 ? "#FFFFFF" : "#000000"; // Return text color
};

