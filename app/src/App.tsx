import React from 'react';
import Card from './components/Card/Card';
import Chart from './components/Chart/Chart';
import BasicTable from './components/BasicTable/BasicTable';

function App() {
  return (
    <div>
      <Card title={'test'} count={20} subText={'subText'} subTextNum={55} />
      {/* <Chart width={800} /> */}
      <BasicTable />
    </div>
  );
}

export default App;
