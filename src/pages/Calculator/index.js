import React, { useState } from 'react';

import { Container } from './styles';
import Button from '~/components/Button';
import Display from '~/components/Display';

const inicialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
};

export default function Calculator() {
  const [calculator, setCalculator] = useState(inicialState);
  function clearMemory() {
    setCalculator(inicialState);
  }
  function setOperation(operation) {
    if (calculator.current === 0) {
      setCalculator({
        ...calculator,
        current: 1,
        operation,
        clearDisplay: true,
      });
    } else {
      const equals = operation === '=';
      const values = [...calculator.values];
      switch (calculator.operation) {
        case '+':
          values[0] += values[1];
          values[1] = 0;
          break;
        case '-':
          values[0] -= values[1];
          values[1] = 0;
          break;
        case '*':
          values[0] *= values[1];
          values[1] = 0;
          break;

        case '/':
          values[0] /= values[1];
          values[1] = 0;
          break;

        default:
          break;
      }
      setCalculator({
        displayValue: values[0],
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: true,
        values,
      });
    }
  }

  function addNunber(number) {
    if (number === '.' && calculator.displayValue.includes('.')) {
      return;
    }
    const clearDisplay =
      calculator.displayValue === '0' || calculator.clearDisplay;
    const currentValue = clearDisplay ? '' : calculator.displayValue;
    const displayValue = currentValue + number;
    const values = [...calculator.values];
    if (number !== '.') {
      const i = calculator.current;
      const newValue = parseFloat(displayValue);
      values[i] = newValue;
    }
    setCalculator({ ...calculator, displayValue, clearDisplay: false, values });
  }

  return (
    <Container>
      <Display value={calculator.displayValue} />
      <Button click={clearMemory} label="AC" mesclar={3} />
      <Button click={setOperation} label="/" operator />
      <Button click={addNunber} label="7" />
      <Button click={addNunber} label="8" />
      <Button click={addNunber} label="9" />
      <Button click={setOperation} label="*" operator />
      <Button click={addNunber} label="4" />
      <Button click={addNunber} label="5" />
      <Button click={addNunber} label="6" />
      <Button click={setOperation} label="-" operator />
      <Button click={addNunber} label="1" />
      <Button click={addNunber} label="2" />
      <Button click={addNunber} label="3" />
      <Button click={setOperation} label="+" operator />
      <Button click={addNunber} label="0" mesclar={2} />
      <Button click={addNunber} label="." />
      <Button click={setOperation} label="=" operator />
    </Container>
  );
}
