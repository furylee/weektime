import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// // import A from './demo'
// //
// //
// class App extends Component {
//
//     state = {
//         a: 1
//     }
//
//     bls=()=>{
//         console.log(123);}
//
//     render() {
//         return (
//             <div className="App">
//                 <header className="App-header">
//                     <img src={logo} className="App-logo" alt="logo" />
//                     <p>
//                         Edit <code>src/App.js</code> and save to reload.
//                     </p>
//                     <a
//                         className="App-link"
//                         href="https://reactjs.org"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                     >
//                         Learn React
//                         {this.props.name}
//                     </a>
//                     <a onClick={this.props.click}>haha</a>
//                     {this.props.children}
//                 </header>
//             </div>
//         );
//     }
// }
//
// //
// // // export default App;
// //
// // export default A(App)
//
// class A extends Component {
//     render() {
//         return <div>这是一个hello word组件{this.props.children}</div>
//     }
// }
//
// function B(Comp) {
//     return class C extends Comp {
//
//         state = {
//             b: 2
//         }
//
//         componentDidMount() {
//             console.log("这是高阶组件的生命周期")
//         }
//
//         click = () => {
//             console.log(this);
//             alert(1)
//         };
//
//         render() {
//             return <Comp click={this.click} name="lee">123 <div onClick={this.bls}>6</div> </Comp>
//         }
//     }
// }
//
// export default B(App)

class ListOfWords extends React.PureComponent {
    render() {
        return <div>{this.props.words.join(',')}</div>;
    }
}

export default class WordAdder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            words: ['marklar']
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // This section is bad style and causes a bug
        const words = this.state.words; // 会更新
        // const words = this.state.words.slice(0); // 不会更新
        words.push('marklar');
        this.setState({words});
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <button onClick={this.handleClick}>click</button>
                <ListOfWords words={this.state.words} />
            </div>
        );
    }
}