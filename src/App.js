import React from 'react';
import CalcButton from './CalcButton';
import './App.css';
import logo from './logo.svg';

class App extends React.Component {
    state = {
        result: '',
        checkNextDigit: false,
        showError: false
    };

    isNumeric = (value) => {
        return !isNaN(value) && !isNaN(parseFloat(value));
    };

    reset = () => {
        this.setState({
            result: '',
            showError: false
        })
    }

    handleClick = (e) => {
        e.preventDefault();
        const handlerValue = e.target.value;
        let result = this.state.result;

        if ('=' === handlerValue) {
            try {
                result = eval(this.state.result);
            } catch (e) {
                this.setState({
                    showError: true
                })
                result = '';
            }
            this.setState({
                checkNextDigit: true
            })
        } else if ('C' === handlerValue) {
            this.reset();
        } else if ('<' === handlerValue) {
            result = result.substr(0, result.length - 1);
        } else {
            if (this.state.showError) {
                this.reset();
            }
            if (this.state.checkNextDigit) {
                if (this.isNumeric(handlerValue)) {
                    result = handlerValue;
                } else {
                    result += handlerValue;
                }
                this.setState({
                    checkNextDigit: false
                })
            } else {
                result += handlerValue;
            }
        }
        this.setState({
            result
        })
    };

    render() {
        return (
            <div>
                <div id="calculator-container" role="calculator-container" className="ui grid">
                    <div className="eight wide column">
                        <img id="logo" alt="Equal Experts" src={logo}/>
                    </div>
                    <div className="eight wide column">
                        <h3 id="title">A simple calculator</h3>
                    </div>
                    <div className="sixteen wide column">
                        <div id="result" className="ui input">
                            <input type="text" alt="operation result" value={this.state.result} readOnly={true}/>
                        </div>
                        <p className={this.state.showError ? 'visible-error' : 'hidden-error'}>Incorrect expression</p>
                    </div>
                    <CalcButton text="C" handler={this.handleClick}/>
                    <CalcButton text="<" handler={this.handleClick}/>
                    <CalcButton text="%" handler={this.handleClick}/>
                    <CalcButton text="/" handler={this.handleClick}/>
                    <CalcButton text="7" handler={this.handleClick}/>
                    <CalcButton text="8" handler={this.handleClick}/>
                    <CalcButton text="9" handler={this.handleClick}/>
                    <CalcButton text="*" handler={this.handleClick}/>
                    <CalcButton text="4" handler={this.handleClick}/>
                    <CalcButton text="5" handler={this.handleClick}/>
                    <CalcButton text="6" handler={this.handleClick}/>
                    <CalcButton text="-" handler={this.handleClick}/>
                    <CalcButton text="1" handler={this.handleClick}/>
                    <CalcButton text="2" handler={this.handleClick}/>
                    <CalcButton text="3" handler={this.handleClick}/>
                    <CalcButton text="+" handler={this.handleClick}/>
                    <div className="four wide column"></div>
                    <CalcButton text="0" handler={this.handleClick}/>
                    <CalcButton text="." handler={this.handleClick}/>
                    <CalcButton text="=" handler={this.handleClick}/>
                </div>
            </div>
        )
    }
}

export default App;
