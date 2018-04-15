import React, { SFC } from 'react';
import { Link } from '@app/next/routes';

const index: SFC = () => (
  <div>
    Hello world
    <p>
      <Link route="contact">
        <a>Go to contact</a>
      </Link>
    </p>
    <p>
      <Link route="users.index">
        <a>Go to users</a>
      </Link>
    </p>
  </div>
);

export default index;
