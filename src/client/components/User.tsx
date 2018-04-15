import React, { SFC } from 'react';
import { Link } from '@app/next/routes';

export type UserProps = {
  id: number,
  name: string,
};

const User: SFC<UserProps> = props => (
  <div>
    <hr/>
    <h3>{props.name}</h3>
    <Link route="users.view" params={{ id: props.id }}>
      <a>View profile</a>
    </Link>
  </div>
);

export default User;
