import cases from './algorithms/cases';

export const reverse = (alg: string) => {
    const rev = alg
        .split('')
        .reverse()
        .join('');
    let result = '';

    let addDouble = false;
    for (let i = 0; i < rev.length; i++) {
        const ch = rev.charAt(i);
        if (ch === "'") {
            const nextCh = rev.charAt(i + 1);
            if (nextCh === '2') {
                result += rev.charAt(i + 2) + '2';
                i += 2;
            } else {
                result += nextCh;
                i++;
            }
            continue;
        } else if (ch === '(' || ch === ')') {
            continue;
        } else if (ch === ' ') {
            result += ch;
        } else if (ch === '2') {
            addDouble = true;
        } else {
            result += ch + (addDouble ? '2' : '') + `'`;
            if (addDouble) {
                addDouble = false;
            }
        }
    }

    const lastChar = result.charAt(result.length - 1);
    if (lastChar === 'y') {
        return result.substring(0, result.length - 1);
    } else if (lastChar === `'` && result.charAt(result.length - 2) === 'y') {
        return result.substring(0, result.length - 2);
    }

    return result;
};

const algCases = cases.filter(c => c.alg !== undefined);

export const randomCase = () => algCases[Math.floor(Math.random() * algCases.length)];
