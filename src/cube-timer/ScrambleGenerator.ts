import Cube from 'cubejs';

Cube.initSolver();

export const generate = (): string => {
    const cube = Cube.random();

    return cube
        .solve()
        .split(' ')
        .slice(0, 20)
        .join(' ');
};
