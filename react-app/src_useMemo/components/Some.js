import React from 'react';

const Some = (props) => {
  console.log('some执行');
  return (
    <h2>
      some ------- {props.a + props.b}
    </h2>
  );
};

export default Some;
