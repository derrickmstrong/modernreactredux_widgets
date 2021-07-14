import React from 'react';
import Accordion from './components/Accordion';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front-end Javascript framework',
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library amongst engineers',
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components',
  },
];

const App = () => {  
  return (
    <div className='ui styled accordion'>
      <Accordion items={items} />
    </div>
  );
};

export default App;
