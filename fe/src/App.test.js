import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen, fireEvent} from '@testing-library/react';
import App from './App';
import Navbar from './components/navbar'
import TestRenderer from 'react-test-renderer'; // ES6
import Input from './components/input';
import ExerciseDisplay from './components/exercise';
import Search from './pages/Exercise';
import WeightEntry from './components/input'
import Mainhome from './pages/Home';




//brandname
// test('renders the Xero fitness brand name', () => {
//     render(<Navbar/>)
//     const element = screen.getByTestId('brandname')
//     expect(element).toHaveTextContent('Xero fitness');
// })


// function fetchData(){
//     const result = await fetch("http://localhost:3002/")
//     const data = await result.json()
//     return data
// }

// test('fetches exercise list',()=>{
//      const data = await fetchData()
//      expect(data).toContain('Abs')
     
// })
it('renders correctly', () => {
    const tree = TestRenderer
      .create(<Search/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Input should not be null', () => {
      render(<Mainhome/>)
    const input = screen.getByTestId('weight-input')
    fireEvent.change(input)
    expect(input.value).not.toBeNull();
  })