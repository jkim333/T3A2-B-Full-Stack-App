import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import App from './App';
import Navbar from './components/navbar'




//brandname
test('renders the Xero fitness brand name', () => {
    render(<Navbar/>)
    const element = screen.getByTestId('brandname')
    expect(element).toHaveTextContent('Xero fitness');
})


function fetchData(){
    const result = await fetch("http://localhost:3002/")
    const data = await result.json()
    return data
}

test('fetches exercise list from backend server',()=>{
     
     
})


