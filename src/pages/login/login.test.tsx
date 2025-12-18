import {withHistory, withStore} from '../../utils/mock-component.tsx';
import Login from './login.tsx';
import {screen, render} from '@testing-library/react';
import {makeFakeStore} from '../../utils/mock.ts';
import userEvent from '@testing-library/user-event';

describe('Component: Login', () => {
  it('should render correctly', () => {
    const withHistoryComponent = withHistory(<Login />);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());


    render(withStoreComponent);


    expect(
      screen.getByRole('heading', { name: /Sign in/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('button', { name: /Sign in/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByText(/Password/i)).toBeInTheDocument();
  });

  it('should render correctly when user enter login and password', async () => {
    const loginElementTestId = 'loginElement';
    const passwordElementTestId = 'passwordElement';

    const expectedLoginValue = 'kats@gmail.com';
    const expectedPasswordValue = '1TEST2';

    const withHistoryComponent = withHistory(<Login />);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());

    render(withStoreComponent);

    await userEvent.type(
      screen.getByTestId(loginElementTestId),
      expectedLoginValue,
    );
    await userEvent.type(
      screen.getByTestId(passwordElementTestId),
      expectedPasswordValue,
    );

    expect(screen.getByDisplayValue(expectedLoginValue)).toBeInTheDocument();
    expect(screen.getByDisplayValue(expectedPasswordValue)).toBeInTheDocument();
  });
});
