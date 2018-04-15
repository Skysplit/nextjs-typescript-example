import React, { Component } from 'react';
import { Link } from '@app/next/routes';

type Props = {
  url: {
    query: { id: number },
  },
};

type InitialParams = {
  query: {
    id: number,
  },
};

export default class UserView extends Component<Props> {
  static async getInitialProps({ query }: InitialParams) {
    return {
      lorem: query.id,
    };
  }

  render() {
    const { url } = this.props;

    return (
      <div>
        Browsing user with id <strong>{url.query.id}</strong>

        <p>
          <Link route="users.index">
            <a>Go back</a>
          </Link>
        </p>
      </div>
    );
  }
}
