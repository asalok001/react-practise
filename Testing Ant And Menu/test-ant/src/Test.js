let internalState;
let renderAgain;

const setState = (updateFn) => {
    internalState = updateFn(internalState);
    renderAgain();
};

const useState = (defaultState) => {
    console.log('default state', defaultState);
    if (!internalState) {
        internalState = defaultState;
    }
    return [internalState, setState];
};

const render = (component, node) => {
    const { handleClick } = component();
    // node.innerHTML = html;
    renderAgain = () => render(component, node);
    return handleClick;
};

// test:

const MyComponent = () => {
    const [x, setX] = useState(1);
    console.log('in render:', x); // ✅

    const handleClick = () => {
        setX(current => current + 1);
        console.log('in handler/effect/Promise/setTimeout:', x); // ❌ NOT updated
    };

    return (
        <div>
            <button onClick={handleClick}>{x}</button>
        </div>
    );
};

const triggerClick = () => render(MyComponent, document.getElementById('root'));
triggerClick();
triggerClick();
triggerClick();
