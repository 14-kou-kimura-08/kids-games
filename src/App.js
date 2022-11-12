import './App.css';
import { useState } from 'react';
import items from './Items';

function App() {
  const [count, setCount] = useState(0);
  const [isDisplay, setIsDisplay] = useState(false);
  const [item, setItem] = useState(items[0]);

  function showAnswer() {
    setIsDisplay(true);
  }

  function hideAnswer() {
    setIsDisplay(false);
  }

  function nextItem() {
    let nextCount;

    if (items.length - 1 === count) {
      nextCount = 0;
    } else {
      nextCount = count + 1;
    }
    setCount(nextCount);
    setItem(items[nextCount]);
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
      <img src={item.imageUrl} className="image" alt={item.name} />
      <div className="answer">
        {isDisplay && item.name}
      </div>
      <Button />
    </div>
  );
}

export default App;
