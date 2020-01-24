import React from 'react';

import { Container } from './styles';

export default function Button({ label, click, ...rest }) {
  return (
    <Container onClick={() => click(label)} {...rest}>
      {label}
    </Container>
  );
}
