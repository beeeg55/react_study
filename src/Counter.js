import { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0,
  };
  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값 : {fixedNumber}</h2>
        <button
          // onClick 을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.
          onClick={() => {
            this.setState((prevState) => {
              //this.setstate를 사용하여 state에 새로운 값을 넣을 수 있습니다.
              return {
                number: prevState.number + 1,
              };
            });
            // 위 코드와  아래코드는 동일한  기능이다.
            this.setState((prevState) => ({
              number: prevState.number + 1,
            }));
          }}
        >
          + 1
        </button>
      </div>
    );
  }
}

export default Counter;
