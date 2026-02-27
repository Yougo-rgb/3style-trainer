import { Alg } from "https://cdn.cubing.net/v0/js/cubing/alg";

export function solveScramble(scramble) {
    cubeSolver.initialize('kociemba');
    const solution = cubeSolver.solve(scramble, 'kociemba');

    return solution;
}

export function invertScramble(scramble) {
    const alg = new Alg(scramble);

    let inverted = alg.invert().simplify({ cancel: true }).toString();
    inverted = inverted.replace(/2'/g, "2");

    return inverted;
}