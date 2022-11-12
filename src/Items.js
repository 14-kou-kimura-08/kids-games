import data from './data.json';

function Items() {
    // NOTE: 初回レンダー時のみ実行
    // TODO: もっと良い書き方があるとおもう
    return data.map(function(item){return [item, Math.random()]})
        .sort(function(previousItem, nextItem){return previousItem[1] - nextItem[1]})
        .map(function(item){return item[0]});
}

export default Items();