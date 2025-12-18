import {createMemoryHistory, MemoryHistory} from 'history';
import {withHistory, withStore} from '../../utils/mock-component.tsx';
import App from './app.tsx';
import {AppRoute} from '../../const.ts';
import {makeFakeStore} from '../../utils/mock.ts';
import {render, screen} from '@testing-library/react';

describe('Application Routing', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render "Main" when user navigate to "/"', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());
    mockHistory.push(AppRoute.Main);

    render(withStoreComponent);

    expect(screen.getByText(/No places to stay available/i)).toBeInTheDocument();
  });


});
