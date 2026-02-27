import { loadCommutators } from "./core/commutatorEngine.js";
import { generateTrainingScramble } from "./core/scrambleGenerator.js";
import { renderCube, displayAlg } from "./ui/player.js";
import { state } from "./core/state.js";

async function init() {
    const [edges, corner] = await Promise.all([
        fetch("data/commutator/edges.json").then(r => r.json()),
        fetch("data/commutator/corners.json").then(r => r.json())
    ]);

    loadCommutators(edges, corner);

    const scramble = generateTrainingScramble(5);

    renderCube(scramble, document.getElementById("cube"));
    displayAlg(scramble, document.getElementById("scramble"));
}

init();