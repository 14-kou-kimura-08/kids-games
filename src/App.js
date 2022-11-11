import './App.css';
import { useState } from 'react';
import items from './items.json';


function App() {
  const [count, setCount] = useState(0);
  const [isDisplay, setIsDisplay] = useState(false);

  // NOTE: 重み付けをしてソートすることでランダムに並べ替えている
  items = items.map(function(item){return [item, Math.random()]})
    .sort(function(previousItem, nextItem){return previousItem[1] - nextItem[1]})
    .map(function(item){return item[0]});

  function showAnswer() {
    setIsDisplay(true);
  }

  function hideAnswer() {
    setIsDisplay(false);
  }

  function nextItem() {
    hideAnswer();
    if (items.length - 1 === count) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
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
      <img src={items[count].imageUrl} className="image" alt={items[count].name} />
      <div className="answer">
        {isDisplay && items[count].name}
      </div>
      <Button />
    </div>
  );
}

export default App;
