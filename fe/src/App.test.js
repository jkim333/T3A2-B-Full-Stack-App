import { render, screen } from '@testing-library/react';
import App from './App';
import Navbar from './components/navbar';





//home page

test('renders the Xero fitness brand name', () => {
    const{getByText} = render(<Navbar/>)
    const brandname = getByText(/Xero fitness/)
    expect(brandname).toBeInTheDocument();
})