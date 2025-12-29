// ---------------------------------------------------------------------------------------------------------
// Declarations and initializations

const treeCanvas = document.getElementById("treeCanvas");
const treeCanvasContext = treeCanvas.getContext("2d");

const addNodeButton = document.getElementById("addNodeButton");
const nodeInput = document.getElementById("nodeInput");

// ---------------------------------------------------------------------------------------------------------
// Style functions

function setGlobalDrawingStyle(canvasContext) {
    canvasContext.strokeStyle = "black";
    canvasContext.lineWidth = 5;

    canvasContext.fillStyle = "black";
    canvasContext.font = "42px Arial";
    canvasContext.textAlign = "center";
    canvasContext.textBaseline = "middle";
}

// ---------------------------------------------------------------------------------------------------------
// Drawing functions

function drawNode(centerX, centerY, nodeKey) {
    treeCanvasContext.beginPath();
    treeCanvasContext.arc(centerX, centerY, 50, 0, Math.PI * 2);
    treeCanvasContext.stroke();
    treeCanvasContext.fillText(nodeKey, centerX, centerY);
}

function drawEdge(fromX, fromY, toX, toY) {
    treeCanvasContext.beginPath();
    treeCanvasContext.moveTo(fromX, fromY);
    treeCanvasContext.lineTo(toX, toY);
    treeCanvasContext.stroke();
}

// ---------------------------------------------------------------------------------------------------------
// Event listeners

addNodeButton.addEventListener("click", () => { console.log(nodeInput.value); });

// ---------------------------------------------------------------------------------------------------------
// Main script

setGlobalDrawingStyle(treeCanvasContext);

drawNode(300, 300, "3");
drawNode(150, 450, "5");
drawEdge(250, 350, 200, 400);