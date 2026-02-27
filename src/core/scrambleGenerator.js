import { state } from "./state.js";
import { getRandomComm } from "./commutatorEngine.js";
import { solveScramble, invertScramble} from "./solver.js";

export function generateTrainingScramble(count = 5) {
    resetScramble();
    let buffer;

    if (state.mode === "edges") {
        buffer = state.edgeBuffer;
    } else {
        buffer = state.cornerBuffer;
    }

    for (let i = 0; i < count; i++) {
        const comm = getRandomComm(state.buffer, "edge")
        if (!comm) break;
    }

    state.shortScramble = solveScramble(state.scramble);

    return state.shortScramble.trim();
}

export function resetScramble() {
    state.scramble = "";
    state.shortScramble = "";
    state.scrambleComms = [];
    state.ban.clear();
}