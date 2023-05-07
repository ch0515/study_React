import { Component } from 'react';

class Counter extends Component{
    state = {
        number: 0,
        fixedNumber: 0
    };
    render(){
        const { number, fixedNumber } = this.state; //state를 조회할때는 this.state로 조회
        return(
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값: {fixedNumber}</h2>
                <button
                //onClick을 통해 버튼이 클릭되었을 때 호출할 함수 지정
                onClick={() => {
                    //this.setState를 사용해 state에 새로운 값 넣기
                    this.setState(prevState => {
                        return{
                            number: prevState.number + 1
                        };
                    });// 위, 아래 둘다 같은 기능을 함
                    this.setState(prevState => ({
                        number: prevState.number + 1
                    }));
                }}
                >
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;