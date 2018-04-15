import React, { SFC } from 'react';
import { Link } from '@app/next/routes';

const contact: SFC = () => (
  <div>
    <h1>
      Contact page!
    </h1>
    <p>
      <Link route="home">
        <a>Back to home page</a>
      </Link>
    </p>
  </div>
);

export default contact;
