import React from 'react';
import Card from './components/Card/Card';
import Chart from './components/Chart/Chart';

function App() {
  return (
    <div>
      <Card title={'test'} count={20} subText={'subText'} subTextNum={55} />
      <Chart width={800} />
    </div>
  );
}

export default App;
