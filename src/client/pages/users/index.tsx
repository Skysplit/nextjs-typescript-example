import React, { Fragment, SFC, Component } from 'react';
import request from 'superagent';
import { Link } from '@app/next/routes';
import { UserProps } from '@app/client/components/User';
import UsersList from '@app/client/components/UserList';

type Props = {
  users: UserProps[],
};

export default class UsersPage extends Component<Props> {
  static async getInitialProps() {
    const response = await request.get('http://localhost:8000/api/users');
    const users: UserProps[] = response.body;
    return { users };
  }
  render() {
    return (
      <div>
        <h1 style={{ color: 'red' }}>Users list</h1>
        <UsersList users={this.props.users} />
        <hr/>
        <Link route="home">
          <a>Go to homepage</a>
        </Link>
      </div>
    );
  }
}
