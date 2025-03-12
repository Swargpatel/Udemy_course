import React from 'react'

function UserProfile(props) {
    return (
        <div style={{border: '1px solid #ccc' ,padding:'20px' ,margin:'20px'}}>
            <h2>User Profile</h2>
            <p>
                <b>Name</b>: {props.Name}
            </p>

            <p>
                <b>Email</b>: {props.Email}
            </p>

            <p>
                <b>Location</b>: {props.Location}
            </p>

            <p>
            <b>About</b>: {props.About}
        </p>
        </div>
    )
}

export default UserProfile