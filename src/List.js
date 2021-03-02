import React from 'react';
import ListHeader from './components/headers/ListHeader';

function List(props) {
  console.log(props);
  return (
    <>
      <ListHeader />
      <h1>This is the List page for {props.match.params.slug}</h1>;
    </>
  );
}

export default List;
