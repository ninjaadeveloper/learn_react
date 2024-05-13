import React from 'react'
import Admin from './Admin'
import Employee from './Employee'

// export default function User() {

//     return (
//         <>
//             <Admin />
//             <Employee />
//             </>
//     )
// }

// export default function User() {
//     var a = 0
//     if (a == 1) {
//         return (<Admin />)
//     } else {
//         return (<Employee />)
//     }
// }

// export default function User() {

//     var user = prompt("Enter your designation")
//     var compnent;

//     if (user == 'admin') {
//         compnent = <Admin />
//     } else if (user == 'employee') {
//         compnent = <Employee />
//     } else {
//         compnent = 'Default Component'
//     }


//     return (
//         <>
//             {compnent}
//         </>
//     )

// }

export default function User() {

    // var user = prompt("Enter your designation")
    var user = "admin"
    // var component = user == "admin" ? <Admin/> : <Employee/>
    var component = user == "admin" ? <Admin/> : user == "Employee" ? <Employee/> : <h1>Other</h1>
 


    return (
        <>
            {component}
        </>
    )

}