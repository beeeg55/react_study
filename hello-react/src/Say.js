import { useState } from 'react';

const Say = () => {
  const [message, setMessage] = useState('');
  const onClickA = () => setMessage('김단비');
  const onClickB = () => setMessage('최재웅');
  const [color, setColor] = useState('blue');

  // state 를 사용할땐 반드시 setstate, usestate를 통해 전달받는 세터 함수를 사용해야한다.
  // 함수 컴포넌트 usestate를 더 권장한다. 코드 간결 + 훅 사용 가능
  return (
    <div>
      <button onClick={onClickA}>천사</button>
      <button onClick={onClickB}>악마</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: 'green' }} onClick={() => setColor('green')}>
        초록색으로 변경
      </button>
    </div>
  );
};

export default Say;
