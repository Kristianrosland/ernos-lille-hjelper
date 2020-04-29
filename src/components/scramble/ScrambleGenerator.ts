import Cube from 'cubejs';

Cube.initSolver();

export const generate = (): string => {
    return Cube.scramble();
};

export const getCubeFrontFace = (scramble: string) => {
    const cube = new Cube();
    cube.move(scramble.replace(/-/g, ' '));

    return cube.asString().substring(18, 27);
};
