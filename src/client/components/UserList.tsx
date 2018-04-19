import React, { Fragment, SFC } from 'react';
import User, { UserProps } from './User';

export type UserListProps = {
  users: UserProps[],
};

const UserList: SFC<UserListProps> = props => (
  <Fragment>
    {props.users.map(user => (
      <User key={user.id} {...user} />
    ))}
  </Fragment>
);

export default UserList;
