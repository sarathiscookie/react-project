import React, {useState} from 'react'

import AddUser from './AddUser';

import UserList from './UserList';

export default function User() {
    const [usersList, setUsersList] = useState([]);

    const addUserHandler = usersList => {
        setUsersList((prevUsers) => {
            return [usersList, ...prevUsers];
        });
    };

    return (
        <div>
            <AddUser onAddUser={addUserHandler}/>
            <UserList users={usersList}/>
        </div>
    )
}
