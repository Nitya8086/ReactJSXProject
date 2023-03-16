import React from 'react';

import Card from '../UI/Card';
import classes from './UsersList.module.css';

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user,key) => (
          <li key={user.id}>
          {key}. <span>{user.name} ({user.age} years old)</span> - {user.college}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
