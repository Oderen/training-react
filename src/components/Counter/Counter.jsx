import React from 'react';
import css from './Counter.module.css';

export default class Counter extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             value: 5
//         };
//   }
    
    static deffaultProps = {
        value: 0
    };

    // static propTypes = {};
    
    state = {
        value: 0
    };


  increase = (event) => {
    //   console.log('Increase');

      this.setState(prevState => ({
          value: prevState.value + 1
      }))
      
      const current = event.target;

      setTimeout(() => {
          console.log(current);
      }, 1000
      );
    }
    
    decrease = (event) => {
        // console.log('Decrease');

           this.setState(prevState => ({
          value: prevState.value - 1
      }))
    }

  render() {
    return (
      <div className={css.div}>
        <button
          type="button"
          className={css.button}
          onClick={this.decrease}
        >
          Decrease
            </button>
            <span className={css.span}>{this.state.value}</span>
            <button
                type="button"
                className={css.button}
                onClick={this.increase}
            >Increase</button>
      </div>
    );
  }
}
