import React, { SFC } from 'react';
import User, { UserProps } from './User';

export type UserListProps = {
  users: UserProps[],
};

const UserListProps: SFC<UserListProps> = props => (
  <>
    {props.users.map(user => (
      <User key={user.id} {...user} />
    ))}
  </>
);

export default UserListProps;
