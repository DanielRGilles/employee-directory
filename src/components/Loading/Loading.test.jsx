import {render} from  '@testing-library/react';
import { MemoryRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { UserProvider } from '../../context/UserContext';
import Loading from './Loading';

jest.mock('../../context/UserContext')
jest.mock('../../services/users.js')

describe('Loading component test', () => {
  
    it('renders the Loading spinner', () => {
       const { container } = render(
            <MemoryRouter>
                <UserProvider>
                     <Loading/>
                </UserProvider>
            </MemoryRouter>
        );
        expect(container).toMatchSnapshot();
         
    })

})