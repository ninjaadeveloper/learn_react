import React from 'react'
import user from '/user.webp'

// export default function Profile(props) {
//     return (
//         <>
//             <img src={props.profile} alt="User Image" height="100" width="auto" />
//             <h1>Name: {props.myname}</h1> 
//             <h2>Age: {props.age}</h2>
//             <h2>City: {props.city}</h2>
//         </>
//     )
// }


// export default function Profile({myname="Rizwan",age}) {
//     return (
//         <>
//             <h1>Name: {myname}</h1> 
//             <h2>Age: {age}</h2>
//         </>
//     )
// }

// export default function Profile({ props }) {
//     const { myname, age } = props
//     return (
//         <>
//             <h1>Name: {myname}</h1>
//             <h2>Age: {age}</h2>
//         </>
//     )
// }



export default function Profile() {

    const user = {
        name: 'Hedy Lamarr',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmEoEy40ys-CmkI_JCQYhKGrjA0AD2ObIWQpoZBQBNaw&s',
        imageSize: 90,
    };

    return (
        <>
            <h1>{user.name}</h1>
            <img
                className="avatar"
                src={user.imageUrl}
                alt={'Photo of ' + user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }}
            />
        </>
    )
}