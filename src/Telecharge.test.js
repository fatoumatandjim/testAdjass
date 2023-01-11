import { render, screen } from '@testing-library/react';
import Telecharge from './Telecharge';

describe("<Telecharge/>", () => {
 
  test('display telecharge un modele de fichier dajustement', () => {
    render(<Telecharge/>);
 
    const title =screen.getByText(/Telecharger un modele de fichier d'ajustement /i);
    expect(title).toBeInTheDocument();
  })

test('renders learn react link', () => {
  render(<Telecharge />);
  const linkElement = screen.getByText(/ici/i);
  expect(linkElement).toBeInTheDocument();
});


});