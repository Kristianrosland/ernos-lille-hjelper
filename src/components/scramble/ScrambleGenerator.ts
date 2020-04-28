import Cube from 'cubejs';

Cube.initSolver();

export const generate = (): string => {
    return Cube.scramble();
};
