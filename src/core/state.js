export const state = {
    mode: "edges",
    edgeBuffer: "UF",
    cornerBuffer: "UFR",
    excludes: new Set(),
    scramble: "",
    shortScramble: "",
    scrambleComms: [],
    commutators: {
        edges: [],
        corners: []
    }
};