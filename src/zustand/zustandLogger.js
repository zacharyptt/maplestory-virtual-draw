import differ from 'deep-diff';
const dictionary = {
    E: {
        color: '#2196F3',
        text: 'CHANGED:',
    },
    N: {
        color: '#4CAF50',
        text: 'ADDED:',
    },
    D: {
        color: '#F44336',
        text: 'DELETED:',
    },
    A: {
        color: '#2196F3',
        text: 'ARRAY:',
    },
};
function render(diff) {
    const {kind, path, lhs, rhs, index, item} = diff;

    switch (kind) {
        case 'E':
            return [path.join('.'), lhs, '→', rhs];
        case 'N':
            return [path.join('.'), rhs];
        case 'D':
            return [path.join('.')];
        case 'A':
            return [`${path.join('.')}[${index}]`, item];
        default:
            return [];
    }
}
function style(kind) {
    return `color: ${dictionary[kind].color}; font-weight: bold`;
}
const zustandLogger = (config) => (set, get, api) =>
    config(
        (...args) => {
            if (process.env.NODE_ENV === 'development') {
                const prevState = get();
                console.groupCollapsed('zustand store change');
                console.log('%c prev state', 'color: #9E9E9E;font-weight: bold;', prevState);
                console.log('%c args', 'color: #03A9F4;font-weight: bold;', args);
                set(...args);
                const newState = get();
                console.log('%c next state', 'color: #4CAF50;font-weight: bold;', newState);
                console.groupCollapsed('diff');
                const diff = differ(prevState, newState);
                if (diff) {
                    diff.forEach((elem) => {
                        const {kind} = elem;
                        const output = render(elem);

                        console.log(`%c ${dictionary[kind].text}`, style(kind), ...output);
                    });
                } else {
                    console.log('—— no diff ——');
                }
                console.groupEnd();
                console.groupEnd();
            } else {
                set(...args);
            }
        },
        get,
        api
    );
export default zustandLogger;
