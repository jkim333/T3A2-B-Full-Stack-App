import { render, screen } from '@testing-library/react';
import App from './App';
import Brand from './components/brand'





//home page

test('renders Brand component', () => {
    render(<Brand/>)
    const brandname = screen.getByText(/Xero fitness/);
    expect(brandname).toBeInTheDocument();
})