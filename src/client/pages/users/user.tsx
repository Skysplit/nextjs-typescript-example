import React, { Component, Fragment } from 'react';
import request from 'superagent';
import { Link } from '@app/next/routes';
import { UserProps } from '@app/client/components/User';

type Props = {
  user: UserProps,
};

type InitialParams = {
  query: { id: number },
};

export default class UserView extends Component<Props> {
  static async getInitialProps({ query }: InitialParams) {
    const response = await request.get(`http://localhost:8000/api/users/${query.id}`);
    const user: UserProps = response.body;
    return { user };
  }

  render() {
    const { user } = this.props;

    return (
      <Fragment>
        <div>
          User ID:{' '}
          <strong>{user.id}</strong>
        </div>
        <div>
          User Name:{' '}
          <strong>{user.name}</strong>
        </div>

        <p>
          <Link route="users.index">
            <a>Go back to users list</a>
          </Link>
        </p>
      </Fragment>
    );
  }
}
