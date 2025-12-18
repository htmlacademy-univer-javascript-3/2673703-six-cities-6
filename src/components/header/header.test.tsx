import {withHistory, withStore} from '../../utils/mock-component.tsx';
import Header from './header.tsx';
import {render, screen} from '@testing-library/react';
import {makeFakeStore} from '../../utils/mock.ts';


describe('Component: Header', () => {
  it('should render correctly', () => {
    const withHistoryComponent = withHistory(<Header />);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());

    render(withStoreComponent);

    expect(screen.getByText('Sign in')).toBeInTheDocument();
  });
});
