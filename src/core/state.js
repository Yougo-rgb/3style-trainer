export const state = {
    mode: "edges",
    edgeBuffer: "UF",
    cornerBuffer: "UFR",
    buffer: "UF",
    ban: new Set(),
    scramble: "",
    shortScramble: "",
    scrambleComms: [],
    commutators: {
        edges: [],
        corner: []
    }
};