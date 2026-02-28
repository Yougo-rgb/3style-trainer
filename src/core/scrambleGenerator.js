import { state } from "./state.js";
import { getRandomCommByMode } from "./commutatorEngine.js";
import { solveScramble, invertScramble} from "./solver.js";

export function generateTrainingScramble(edgeCount = 5, cornerCount = 3) {
    if (edgeCount > 5) edgeCount = 5;
    if (cornerCount > 3) cornerCount = 3;
    resetScramble();

    if (state.mode === "edges" || state.mode === "all") {
        generateEdgeScramble(edgeCount);
    }
    if (state.mode === "corners" || state.mode === "all") {
        generateCornerScramble(cornerCount);
    }

    state.shortScramble = solveScramble(state.scramble);

    return state.shortScramble.trim();
}

function generateEdgeScramble(count) {
    for (let i = 0; i < count; i++) {
        const comm = getRandomCommByMode(state.edgeBuffer, "edges")
        if (!comm) break;
    }

    return state.scramble.trim();
}

function generateCornerScramble(count) {
    for (let i = 0; i < count; i++) {
        const comm = getRandomCommByMode(state.cornerBuffer, "corners")
        if (!comm) break;
    }

    return state.scramble.trim();
}

export function resetScramble() {
    state.scramble = "";
    state.shortScramble = "";
    state.scrambleComms = [];
    state.excludes.clear();
}