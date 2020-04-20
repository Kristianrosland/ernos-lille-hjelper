import seedrandom, { prng } from 'seedrandom';

type Face = 'R' | 'L' | 'U' | 'D' | 'F' | 'B';
const allFaces: Face[] = ['R', 'L', 'U', 'D', 'F', 'B'];

interface Turn {
    multiplier: number;
    face: Face;
    prime: boolean;
}

export const generate = (seed: string): string => {
    const random = seedrandom(seed);

    const turns = Array(5000)
        .fill(null)
        .map(_ => getRandomTurn(random));

    const joinedTurns = joinTurns(turns);

    return joinedTurns
        .slice(0, 20)
        .map(turn => `${turn.face}${turn.multiplier !== 1 ? turn.multiplier : ''}${turn.prime ? "'" : ''}`)
        .join(' ');
};

const joinTurns = (turns: Turn[]) => {
    const trackingMap: Map<Face, boolean> = getEmptyTrackingMap();
    let joinedTurns: Turn[] = [];

    for (const turn of turns) {
        if (trackingMap.get(turn.face)) {
            // Denne kan fint legges til uten å backtracke
            joinedTurns.push(turn);

            // Oppdaterer faces som nå kan legges til uten å backtracke
            facesAffectedByTurning(turn.face).forEach(f => trackingMap.set(f, true));

            // Setter dette facet til backtrack false
            trackingMap.set(turn.face, false);
        } else {
            // Denne kan ikke legges til og må backtrackes for å oppdatere siste turn av samme face
            for (let i = joinedTurns.length - 1; i >= 0; i--) {
                const other = joinedTurns[i];
                if (other.face === turn.face) {
                    other.multiplier += other.prime === turn.prime ? 1 : -1;

                    if (other.multiplier === 0) {
                        joinedTurns = joinedTurns.slice(0, i - 1);
                    }
                    break;
                }
            }
        }
    }

    const filteredJoinedTurns = joinedTurns
        .filter(t => t.multiplier !== 2 && t.multiplier !== 0)
        .map(t => {
            let multiplier = t.multiplier;
            let prime = t.prime;

            if (multiplier < 0) {
                multiplier = -multiplier;
                prime = !prime;
            }

            multiplier %= 2;
            return { face: t.face, multiplier, prime };
        });

    return filteredJoinedTurns;
};

const getEmptyTrackingMap = () => {
    const keyValuePairs: [Face, boolean][] = allFaces.map(t => {
        return [t as Face, true];
    });

    return new Map(keyValuePairs);
};

const getRandomTurn = (random: prng): Turn => {
    const prime = random() > 0.5;

    let letter: Face;
    const r = random();

    if (r <= 0.1667) {
        letter = 'R';
    } else if (r <= 0.333) {
        letter = 'L';
    } else if (r <= 0.5) {
        letter = 'U';
    } else if (r <= 0.667) {
        letter = 'D';
    } else if (r <= 0.833) {
        letter = 'F';
    } else {
        letter = 'B';
    }

    return { prime, multiplier: 1, face: letter };
};

const facesAffectedByTurning = (face: Face) => {
    switch (face) {
        case 'R':
        case 'L':
            return allFaces.filter(f => f !== 'R' && f !== 'L');
        case 'U':
        case 'D':
            return allFaces.filter(f => f !== 'U' && f !== 'D');
        case 'F':
        case 'B':
            return allFaces.filter(f => f !== 'F' && f !== 'B');
    }
};
