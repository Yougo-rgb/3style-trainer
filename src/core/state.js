export const state = {
    mode: "corners",
    edgeBuffer: "UF",
    cornerBuffer: "UFR",
    buffer: "UF",
    ban: new Set(),
    scramble: "",
    shortScramble: "",
    scrambleComms: [],
    commutators: {
        edges: [],
        corners: []
    }
};