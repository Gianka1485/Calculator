import './App.css';
import Button from './components/Button';
import Display from './components/Display';
import { useState } from 'react';
import { evaluate } from 'mathjs';

const App = () => {
  const [input, setInput] = useState('');

  const buttons = [<img src='./icons/delete.svg' alt='Delete'/>, '%', <>X<span>x</span></>, <>√x</>, '/', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', 'C', 0, '.', '='];

  const addInput = i => {
    if (i === buttons[2]) i = '^';
    if (i === buttons[3] && input[input.length - 1] === '(')  i = '';
    else if (i === buttons[3]) i = 'sqrt(';
    if (i !== 'sqrt(' && isNaN(i) && (input === '' || input[input.length - 1] === i)) i = '';
    if (input.length >= 16) i = '';
    return setInput(input + i);
  }

  const control = c => {
    switch (c) {
      case buttons[0]: return () => setInput(input.slice(0, -1));
      case 'C': return () => setInput('');
      case '=': return () => setInput(input.includes('sqrt(') ? evaluate(input + ')').toString() : evaluate(input).toString());
      default: return () => addInput(c);
    }
  }
  
  const special = i => {
    switch (i) {
      case buttons[0]: return 'delete';
      case buttons[2]: return 'operator exponent';
      case buttons[3]: return 'operator root-operator';
      case '=' : return 'equals';
      case '.': return 'decimal';
      case 'C' : return 'special';
      default: return isNaN(i) ? 'operator' : '';
    }
  }

  return (
    <div className='App'>
      <div className='calculator'>
        <Display result={ input }/>
        { buttons.map(i => <Button clickControl={ control(i) }
          special={ special(i) }>
            { i }
          </Button>
        ) }
      </div>
    </div>
  );
}

export default App;