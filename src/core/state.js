export const state = {
    mode: "all",
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