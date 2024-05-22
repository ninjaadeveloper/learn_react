import React, { useState, useEffect } from 'react'

export default function User() {

    const [myUser, setUser] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                return res.json();
            }).then((data) => {
                setUser(data);
            })
    }, []);

    // console.log(myUser)


    return (
        <>
            <table border={1}>
                <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                </tr>

                {myUser.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                    </tr>
                ))}
            </table>


        </>
    )
}
