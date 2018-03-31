import React, { Component } from 'react';
import { Link } from '@app/server/routes';

type Props = {
  url: {
    query: { id: number },
  },
};

// We cannot do import React, { Component } due to TS module interop
// It kinda sucks
export default class UserView extends React.Component<Props> {
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
