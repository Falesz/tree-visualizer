const treeCanvas = document.getElementById("treeCanvas");
const treeCanvasContext = treeCanvas.getContext("2d");

const addNodeButton = document.getElementById("addNodeButton");
const nodeInput = document.getElementById("nodeInput");

treeCanvasContext.strokeStyle = "black";
treeCanvasContext.lineWidth = 5;

treeCanvasContext.fillStyle = "black";
treeCanvasContext.font = "42px Arial";
treeCanvasContext.textAlign = "center";
treeCanvasContext.textBaseline = "middle";


treeCanvasContext.beginPath();
treeCanvasContext.arc(300, 300, 50, 0, Math.PI * 2);
treeCanvasContext.stroke();
treeCanvasContext.fillText("3", 300, 300);



treeCanvasContext.beginPath();
treeCanvasContext.arc(150, 450, 50, 0, Math.PI * 2);
treeCanvasContext.stroke();
treeCanvasContext.fillText("5", 150, 450);



treeCanvasContext.beginPath();
treeCanvasContext.moveTo(250, 350);
treeCanvasContext.lineTo(200, 400);
treeCanvasContext.stroke();

addNodeButton.addEventListener("click", () => { console.log(nodeInput.value); });