import './App.css';
import { useState } from 'react';
import items from './Items';

function App() {
  const [count, setCount] = useState(0);
  const [isDisplay, setIsDisplay] = useState(false);

  function showAnswer() {
    setIsDisplay(true);
  }

  function hideAnswer() {
    setIsDisplay(false);
  }

  function nextItem() {
    if (items.length - 1 === count) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
    hideAnswer();
  }

  function Button() {
    if (isDisplay) {
      return (
        <button className="next-button" onClick={nextItem}>
          つぎはな〜んだ？
        </button>
      )
    } else {
      return (
        <button className="answer-button" onClick={showAnswer}>
          こたえをみる
        </button>
      )
    };
  }

  return (
    <div className="App">
      <div className="question">これ、な〜んだ？</div>
      {items.map((item, index) => {
        return <div key={index} style={{ display: index === count ? 'block' : 'none'}}>
        <img src={item.imageUrl} className="image" alt={item.name} />
          <div className="answer">
            {isDisplay && item.name}
          </div>
        </div>
      })}
      
      <Button />
    </div>
  );
}

export default App;
