import {render } from  '@testing-library/react';
import { MemoryRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { UserProvider } from '../../context/UserContext';

import UserForm from './UserForm';

jest.mock('../../context/UserContext')
jest.mock('../../services/users.js')

describe('User form component test', () => {
  
    it('renders the form', () => {
       const { container } = render(
            <MemoryRouter>
                <UserProvider>
                     <UserForm/>
                </UserProvider>
            </MemoryRouter>
        );
        expect(container).toMatchSnapshot();
         
    })

})