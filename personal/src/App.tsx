import React from 'react';
import styled from 'styled-components';
// interface Props {
//   onPress: any;
//   src: any;
//   width: string;
//   height: string;
// }

// const Container = styled.div<Props>`
//   width: ${p => p.width};
//   height: ${p => p.height};
// `;

const Container = styled.div`
  width: 200px;
  height: 200px;
`;

function App() {
  return (
    <Container/>
  );
}

export default App;
