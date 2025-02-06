export const Colors = () => {
    const theme = "dark"
    const themeColors = {
        dark: {
            bg1: "bg-[#1d1d1d]", // Primary color 1
            bg2: "bg-[#2b2b2b]", // Primary color 1
            SubtleColor : "#5e5e5e"
        },
        light: {
            bg1: "bg-white",
            bg2: "bg-white",
            SubtleColor : "#5e5e5e"
        }
    };
    return themeColors[theme]
}