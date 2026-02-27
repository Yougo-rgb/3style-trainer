import { state } from "./state.js";

export function loadCommutators(edges, corners) {
    state.commutators.edges = edges;
    state.commutators.corners = corners;
}

export function getRandomComm(buffer, mode) {
    const list = state.commutators[state.mode];

    const filtered = list.filter(e =>
        e.target.includes(buffer) &&
        [...state.ban].every(p => !e.target.includes(p))
    );
    
    if (!filtered.length) return null;

    const comm = filtered[Math.floor(Math.random() * filtered.length)];

    if (mode === "edge"){
        comm.target.forEach(e => {
            if (
                e !== buffer &&
                e !== inverseEdge(buffer)
            ) {
                const id = edgeId(e);
                if (!state.ban.has(id)) state.ban.add(id);
            }
        });
    } else {
        // TODO
    }

    state.scrambleComms.push(comm);
    state.scramble += comm.algorithm + " ";
    
    return comm;
}

function inverseEdge(edge) {
    return edge[1] + edge[0];
}

function edgeId(edge) {
    return edge.split("").sort().join("");
}