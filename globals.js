const svg = document.getElementById("bars")
const colors={
    default: "#6299f1",//blue
    comparing: "#6cda7a",//green
    swaped:"#b577e7",//purple
    found: "#dd5b5b", //red
    black: "black"
}
ANIMATION_SPEED_MS = 2000
// let dataArr = [266, 107, 263, 105, 284, 275, 74, 215, 152, 225, 108, 136, 187, 144, 207, 152, 292, 235, 61, 113, 225, 126, 185, 166, 197, 225, 266, 141, 14, 236, 56, 10, 194, 149, 179, 113, 299, 63, 171, 107, 88, 253, 265, 90, 54, 205, 212, 260, 105, 192, 7, 91, 146, 24, 157, 30, 173, 34, 236, 27, 155, 20, 43, 190, 121, 249, 236, 117, 69, 299, 283, 88, 202, 10, 176, 16, 70, 164, 230, 11, 144, 147, 25, 83, 252, 66, 47, 0, 160, 109, 172, 62, 120, 211, 234, 285, 182, 44, 183, 276]
const X = 12
const WIDTH = 5