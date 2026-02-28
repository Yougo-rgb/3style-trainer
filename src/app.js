import { loadCommutators } from "./core/commutatorEngine.js";
import { generateTrainingScramble } from "./core/scrambleGenerator.js";
import { renderCube, displayAlg } from "./ui/player.js";
import { state } from "./core/state.js";
import { cornerBuffers, edgeBuffers } from "./core/buffer.js";

async function init() {
    document.getElementById("newScramble").onclick = start;

    document.getElementById("edgeMode").onclick = swicthToEdgeMode;
    document.getElementById("cornerMode").onclick = swicthToCornerMode;
    document.getElementById("allMode").onclick = swicthToAllMode;

    document.getElementById("hideCube").onclick = hideCube;
    document.getElementById("hideLeftPanel").onclick = hideSettings;

    addOptions(document.getElementById("edgeBufferSelect"), edgeBuffers);
    addOptions(document.getElementById("cornerBufferSelect"), cornerBuffers);

    const [edges, corners] = await Promise.all([
        fetch("data/commutator/edges.json").then(r => r.json()),
        fetch("data/commutator/corners.json").then(r => r.json())
    ]);

    loadCommutators(edges, corners);
    
    start()
}

function start() {
    const scramble = generateTrainingScramble(5, 3);

    renderCube(scramble, document.getElementById("cube"));
    displayAlg(scramble, document.getElementById("scramble"));
}

function swicthToEdgeMode() {
    document.getElementById("edgeMode").classList.add("selectedMode");
    document.getElementById("cornerMode").classList.remove("selectedMode");
    document.getElementById("allMode").classList.remove("selectedMode");
    state.mode = "edges"
    start()
}

function swicthToCornerMode() {
    document.getElementById("edgeMode").classList.remove("selectedMode");
    document.getElementById("cornerMode").classList.add("selectedMode");
    document.getElementById("allMode").classList.remove("selectedMode");
    state.mode = "corners"
    start()
}

function swicthToAllMode() {
    document.getElementById("edgeMode").classList.remove("selectedMode");
    document.getElementById("cornerMode").classList.remove("selectedMode");
    document.getElementById("allMode").classList.add("selectedMode");
    state.mode = "all"
    start()
}

function hideCube() {
    let cube = document.getElementById("cube");

    if (cube.style.visibility !== "hidden") {
        cube.style.visibility = "hidden";
    } else {
        cube.style.visibility = "visible";
    }
}

function hideSettings() {
    let settings = document.getElementById("leftPanel");
    
    if (settings.style.visibility !== "hidden") {
        settings.style.visibility = "hidden";
    } else {
        settings.style.visibility = "visible";
    }
}

function addOptions(element, array) {
    array.forEach(e => {
        const option = document.createElement("option");
        option.value = e;
        option.textContent = e;
        element.appendChild(option);
    });
}

init();

document.getElementById("edgeBufferSelect").addEventListener("change", (e) => {
    state.edgeBuffer = e.target.value;
    start();
});

document.getElementById("cornerBufferSelect").addEventListener("change", (e) => {
    state.cornerBuffer = e.target.value;
    start();
});