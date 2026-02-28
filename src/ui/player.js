import { TwistyPlayer } from "https://cdn.cubing.net/v0/js/cubing/twisty";

export function renderCube(alg, container) {
    container.innerHTML = "";

    const player = new TwistyPlayer({
        puzzle: "3x3x3",
        experimentalSetupAlg: alg,
        hintFacelets: "none",
        background: "none"
    });

    container.appendChild(player);
}

export function displayAlg(alg, container) {
    container.innerHTML = alg;
}