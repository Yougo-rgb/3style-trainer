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
        comm.target.forEach( e=> {
            const allBuffers = edge_piece_converter[buffer];

            if (!allBuffers.includes(e)) {
                if (!state.ban.has(e)) state.ban.add(e);
            }
        });
    } 
    if (mode === "corner") {
        comm.target.forEach( e=> {
            const allBuffers = corner_piece_converter[buffer];

            if (!allBuffers.includes(e)) {
                if (!state.ban.has(e)) state.ban.add(e);
            }
        });
    }

    state.scrambleComms.push(comm);
    state.scramble += comm.algorithm + " ";
    
    return comm;
}

const edge_piece_converter = {
    "UB": ["UB", "BU"],
    "BU": ["BU", "UB"],

    "UR": ["UR", "RU"],
    "RU": ["RU", "UR"],

    "UF": ["UF", "FU"],
    "FU": ["FU", "UF"],

    "UL": ["UL", "LU"],
    "LU": ["LU", "UL"],

    "LF": ["LF", "FL"],
    "FL": ["FL", "LF"],

    "LD": ["LD", "DL"],
    "DL": ["DL", "LD"],

    "LB": ["LB", "BL"],
    "BL": ["BL", "LB"],

    "FR": ["FR", "RF"],
    "RF": ["RF", "FR"],

    "FD": ["FD", "DF"],
    "DF": ["DF", "FD"],

    "RB": ["RB", "BR"],
    "BR": ["BR", "RB"],

    "RD": ["RD", "DR"],
    "DR": ["DR", "RD"],

    "BD": ["BD", "DB"],
    "DB": ["DB", "BD"],
}

const corner_piece_converter = {
    "UBL": ["UBL", "LUB", "BUL"],
    "LUB": ["LUB", "BUL", "UBL"],
    "BUL": ["BUL", "UBL", "LUB"],

    "UBR": ["UBR", "BUR", "RUB"],
    "BUR": ["BUR", "RUB", "UBR"],
    "RUB": ["RUB", "UBR", "BUR"],

    "UFR": ["UFR", "RUF", "FUR"],
    "RUF": ["RUF", "FUR", "UFR"],
    "FUR": ["FUR", "UFR", "RUF"],

    "UFL": ["UFL", "FUL", "LUF"],
    "FUL": ["FUL", "LUF", "UFL"],
    "LUF": ["LUF", "UFL", "FUL"],

    "DFL": ["DFL", "LDF", "FDL"],
    "LDF": ["LDF", "FDL", "DFL"],
    "FDL": ["FDL", "DFL", "LDF"],

    "DFR": ["DFR", "FDR", "RDF"],
    "FDR": ["FDR", "RDF", "DFR"],
    "RDF": ["RDF", "DFR", "FDR"],

    "DBR": ["DBR", "RDB", "BDR"],
    "RDB": ["RDB", "BDR", "DBR"],
    "BDR": ["BDR", "DBR", "RDB"],

    "DBL": ["DBL", "BDL", "LDB"],
    "BDL": ["BDL", "LDB", "DBL"],
    "LDB": ["LDB", "DBL", "BDL"],
}