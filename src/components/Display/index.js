import React from 'react';

import { Container } from './styles';

export default function Display({ value, ...rest }) {
  return <Container {...rest}>{value}</Container>;
}
