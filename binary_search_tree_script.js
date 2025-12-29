const treeCanvas = document.getElementById("treeCanvas");
const treeCanvasContext = treeCanvas.getContext("2d");

treeCanvasContext.strokeStyle = "black";
treeCanvasContext.lineWidth = 5;


treeCanvasContext.beginPath();

treeCanvasContext.arc(300, 300, 50, 0, Math.PI * 2);

treeCanvasContext.stroke();



treeCanvasContext.beginPath();

treeCanvasContext.arc(150, 450, 50, 0, Math.PI * 2);

treeCanvasContext.stroke();



treeCanvasContext.beginPath();

treeCanvasContext.moveTo(250, 350);

treeCanvasContext.lineTo(200, 400);
treeCanvasContext.stroke();