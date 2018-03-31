import React, { SFC } from 'react';
import { Link } from '@app/server/routes';

const users: SFC = () => (
  <>
    <p>
      <Link route="users.view" params={{ id: 1 }}>
        <a>Go to first user</a>
      </Link>
    </p>
    <p>
      <Link route="home">
        <a>Go to homepage</a>
      </Link>
    </p>
  </>
);

export default users;
