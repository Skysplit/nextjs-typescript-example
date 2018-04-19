import React from 'react';
import { shallow } from 'enzyme';
import UserList from '@app/client/components/UserList';
import { UserProps } from '@app/client/components/User';

describe('<UserList />', () => {
  test('test stub', () => {
    const users: UserProps[] = [
      { id: 1, name: 'foo' },
      { id: 2, name: 'bar' },
    ];
    const component = shallow(<UserList users={users} />);
    expect(component).toMatchSnapshot();
  });
});
