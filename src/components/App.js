import React, { Fragment, useState } from 'react';
import Main from './Main';
import SearchInput from './SearchInput';
import '../css/App.css';
import store from '../data.json';

function App() {
  const [data, setData] = useState(store);

  return (
    <Fragment>
      <SearchInput data={data} changeData={setData} />
      <Main info={data} />
    </Fragment>
  );
}

export default App;
