export interface F2LCase {
    name: string;
    alg: string;
}

const cases: F2LCase[] = [
    {
        name: 'UL4a',
        alg: "U (R U' R')",
    },
    {
        name: 'UL2a',
        alg: "y' (R' U' R)",
    },
    {
        name: 'UR1a',
        alg: "y' U' (R' U R)",
    },
    {
        name: 'UR3b',
        alg: "(R U R')",
    },
    {
        name: 'UL3b',
        alg: "U' (R U' R' U) y' (R' U' R)",
    },
    {
        name: 'UL4b',
        alg: "U' (R U2' R' U) y' (R' U' R)",
    },
    {
        name: 'UL1a',
        alg: "y' U (R' U R U') (R' U' R)",
    },
    {
        name: 'UR2b',
        alg: "U' (R U R' U) (R U R')",
    },
    {
        name: 'UR1b',
        alg: "R' U2' R2 U R2' U R",
    },
    {
        name: 'UR4a',
        alg: "U' (R U' R' U) (R U R')",
    },
    {
        name: 'UL3a',
        alg: "(U' R U R') U2 (R U' R')",
    },
    {
        name: 'UL2a',
        alg: "U' (R U2' R') U2 (R U' R')",
    },
    {
        name: 'UR2a',
        alg: "y' (U R' U' R) U2' (R' U R)",
    },
    {
        name: 'UR3a',
        alg: "y' U (R' U2 R) U2' (R' U R)",
    },
    {
        name: 'UU3a',
        alg: "U (R U2 R') U (R U' R')",
    },
    {
        name: 'UU2a',
        alg: "U2 (R U R' U) (R U' R')",
    },
    {
        name: 'UU2b',
        alg: "y' U' (R' U2 R) U' (R' U R)",
    },
    {
        name: 'UU3b',
        alg: "y' U2 (R' U' R) U' (R' U R)",
    },
    {
        name: 'UL1b',
        alg: "y' (R' U R) U2' y (R U R')",
    },
    {
        name: 'UU4a',
        alg: "(R U2 R') U' (R U R')",
    },
    {
        name: 'UU1b',
        alg: "U (R U' R' U') (R U' R' U) (R U' R')",
    },
    {
        name: 'UR4b',
        alg: "(R U' R' U2) y' (R' U' R)",
    },
    {
        name: 'UU1a',
        alg: "y' (R' U2 R) U (R' U' R)",
    },
    {
        name: 'UU4b',
        alg: "y' U' (R' U R U) (R' U R U') (R' U R)",
    },
    {
        name: 'DD1a',
        alg: "U (R U' R') U' (F' U F)",
    },
    {
        name: 'DR1a',
        alg: "y' (R' U R U') (R' U R)",
    },
    {
        name: 'DR4a',
        alg: "(R U R' U') (R U R')",
    },
    {
        name: 'DD4a',
        alg: "U' F' (R U R' U') R' F R",
    },
    {
        name: 'DL4a',
        alg: "(R U' R' U) (R U' R')",
    },
    {
        name: 'DL1a',
        alg: "y' (R' U' R U) (R' U' R)",
    },
    {
        name: 'UR5b',
        alg: "U (F' U' F) U' (R U R')",
    },
];

export default cases;
