// Helper to create a lighter tint of a color
export const lightenColor = (color: string, amount: number = 0.85): string => {
  // Handle RGB color
  const rgbMatch = color.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
  if (rgbMatch) {
    const r = parseInt(rgbMatch[1]);
    const g = parseInt(rgbMatch[2]);
    const b = parseInt(rgbMatch[3]);

    // Lighten by mixing with white
    const newR = Math.floor(r + (255 - r) * amount);
    const newG = Math.floor(g + (255 - g) * amount);
    const newB = Math.floor(b + (255 - b) * amount);

    return `rgb(${newR}, ${newG}, ${newB})`;
  }

  // Handle HSL color
  const hslMatch = color.match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);
  if (hslMatch) {
    const hue = hslMatch[1];
    const saturation = hslMatch[2];
    const lightness = Math.min(
      95,
      parseInt(hslMatch[3]) + (100 - parseInt(hslMatch[3])) * amount,
    );
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }

  return color;
};
