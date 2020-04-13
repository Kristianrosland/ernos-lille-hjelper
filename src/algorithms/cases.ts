import DD1a from './cases/DD1a.png';
import DD4a from './cases/DD4a.png';
import DD5b from './cases/DD5b.png';
import DR5a from './cases/DR5a.png';
import UL1a from './cases/UL1a.png';
import UL5a from './cases/UL5a.png';
import UL5b from './cases/UL5b.png';
import UR1b from './cases/UR1b.png';
import UR5a from './cases/UR5a.png';
import UR5b from './cases/UR5b.png';
import UU4b from './cases/UU4b.png';

export interface F2LCase {
    src: string;
    name: string;
    alg: string;
}

const cases: F2LCase[] = [
    {
        src: UL1a,
        name: 'UL1a',
        alg: "y' U (R' U R U') (R' U' R)",
    },
    {
        src: UR1b,
        name: 'UR1b',
        alg: "y' U (R' U2 R) U' y (R U R')",
    },
    {
        src: UU4b,
        name: 'UU4b',
        alg: "y' U' (R' U R U) (R' U R U') (R' U R)",
    },
    {
        src: UL5a,
        name: 'UL5a',
        alg: "(U' R U' R') U2 (R U' R')",
    },
    {
        src: UL5b,
        name: 'UL5b',
        alg: "(U' R U R') U y' (R' U' R)",
    },
    {
        src: DD1a,
        name: 'DD1a',
        alg: "U (R U' R') U' (F' U F)",
    },
    {
        src: UR5a,
        name: 'UR5a',
        alg: "U (R U R') U2 (R U R')",
    },
    {
        src: UR5b,
        name: 'UR5b',
        alg: "U (F' U' F) U' (R U R')",
    },
    {
        src: DR5a,
        name: 'DR5a',
        alg: "(R U' R' U) (R U2' R') U (R U' R')",
    },
    {
        src: DD5b,
        name: 'DD5b',
        alg: '',
    },
    {
        src: DD4a,
        name: 'DD4a',
        alg: "U' F' (R U R' U') R' F R",
    },
];

export default cases;
