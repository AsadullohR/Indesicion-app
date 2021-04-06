console.log('App.js is running!');

// JSX - JavaScript XML

const appInfo = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of the computer.',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if (option) {
        appInfo.options.push(option);
        e.target.elements.option.value = '';
        renderIndesicionApp();
    }
}

const onRemoveClicked = () => {
    appInfo.options = [];
    renderIndesicionApp();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * appInfo.options.length);
    const option = appInfo.options[randomNum];
    alert(option);
}

const appRoot = document.getElementById('app');
const numbers = [55, 101, 10]

const renderIndesicionApp = () => {
    const template = (
        <div>
            <h1>{appInfo.title}</h1>
            {appInfo.subtitle && <p>{appInfo.subtitle}</p>}
            <p>{appInfo.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled={appInfo.options.length === 0} onClick={onMakeDecision}>What should I do ?</button>
            <button onClick={onRemoveClicked}>Remove All</button>
            <ul>
                {
                    appInfo.options.map((item, i, arr) => {
                        return <li key={i}>{item}</li>
                    })
                }
            </ul>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

renderIndesicionApp();



// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
//     console.log('addOne', count);
// }

// const minusOne = () => {
//     count--;
//     renderCounterApp()
//     console.log('minusOne', count);
// }

// const reset = () => {
//     count = 0;
//     renderCounterApp();
//     console.log('reset', count);
// }





// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>reset</button>

//         </div>
//     )
// }
// renderCounterApp();