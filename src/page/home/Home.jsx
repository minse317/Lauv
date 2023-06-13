import React, { useState, useEffect } from 'react';
import * as S from './Home.module';
import lauvImage from './img/lauv.png';

const Home = () => {
  const txt = 'Welcome to\nLauv site!';
  const [text, setText] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setText(text + txt[count]);
      setCount(count + 1);
    }, 100);
    if (count === txt.length) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  });

  return (
    <S.MainContainer>
      <S.WelcomeText>
        {text.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </S.WelcomeText>
      <S.Box />
      <S.LauvImg src={lauvImage} />
    </S.MainContainer>
  );
};

export default Home;
