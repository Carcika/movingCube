const movingCube = document.getElementById("moving-cube")
const leftBtn = document.getElementById("left")
const rightBtn = document.getElementById("right")
const topBtn = document.getElementById("top")
const bottomBtn = document.getElementById("bottom")
const cube = document.getElementById("cube")

var left = 100
var right = 0
var topp = 100
var bottom = 0

rightBtn.addEventListener("click", function() {
    left = left + 50
    movingCube.style.left = left + "px"
})
leftBtn.addEventListener("click", function() {
    left = left - 50
    movingCube.style.left = left + "px"
})
topBtn.addEventListener("click", function() {
    topp = topp - 50
    movingCube.style.top = topp + "px"
})
bottomBtn.addEventListener("click", function() {
    topp = topp + 50
    movingCube.style.top = topp + "px"
})

movingCube.style.left = left + "px"
movingCube.style.right = right + "px"
movingCube.style.top = topp+ "px"
movingCube.style.bottom = bottom+ "px"