import {render } from  '@testing-library/react';
import { MemoryRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { UserProvider } from '../../context/UserContext';
import Header from './Header';

jest.mock('../../context/UserContext')
jest.mock('../../services/users.js')

describe('Header component test', () => {
  
    it('renders the top nav header', () => {
       const { container } = render(
            <MemoryRouter>
                <UserProvider>
                     <Header/>
                </UserProvider>
            </MemoryRouter>
        );
        expect(container).toMatchSnapshot();
         
    })

})