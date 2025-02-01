// import React, { useEffect, useState } from 'react'

// const Report = () => {
//     const [apidata , setApidata] = useState([])

//     const getdata = async()=>{

//         const data = await fetch("http://localhost:3000/Signup");

//         const res = await data.json();
//         setApidata(res)
//         console.loh("api calling for signup")
//         console.log(res)

//     }

//     useEffect(()=>{
//         getdata()
//     },[])
//   return (


//     <div>

//        {
//         apidata.mao((item)=>(
//             <div>
//   <h1>{item}</h1>
//                 </div>
//         ))
//        }
      
//     </div>
//   )
// }

// export default Report
import React, { useEffect, useState } from 'react';

const Report = () => {
    const [users, setUsers] = useState([]); // State for users
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state

    // Fetch data from the backend
    const fetchUsers = async () => {
        try {
            const response = await fetch('https://client-communication-and-feedback.onrender.com/api/users'); // Replace with your API URL
            if (!response.ok) {
                throw new Error('Failed to fetch users');
            }
            const data = await response.json();
            setUsers(data); // Update state with users
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    // Fetch users on component mount
    useEffect(() => {
        fetchUsers();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Signup Data</h1>
            {users.length > 0 ? (
                <table border="1">
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user._id}>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div>No users found.</div>
            )}
        </div>
    );
};

export default Report;
