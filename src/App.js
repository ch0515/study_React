import './App.css';

function App() {
  const name = '리액트';
  const style = {
    //background-color는 backgroundColor와 같이 -가 사라지고 카멜 표기법으로 작성
    backgroundColor: 'black',
    color: 'aqua',
    fontsize: '48px',
    fontWeight: 'bold',
    padding: 16 //단위 생략시 px 지정
  };
  return <div style={style}>{name} </div>;
}

export default App;
