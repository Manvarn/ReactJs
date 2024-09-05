import PropTypes from 'prop-types'

function UserGreeting(props){
    // if(props.isLoggedIn){
    //     return <h2>Welcome {props.username}</h2>
    // }
    // else{
    //     return <h2>Please log in to Continue</h2>
    // }


    const welcomemessage = <h2 className="welcome-message">
                            Welcome {props.username}
                            </h2>

    const loginprompt =    <h2 className="login-prompt">
                            Please log in to Continue
                            </h2>


    return(props.isLoggedIn ? welcomemeassage : loginprompt);

    // return(props.isLoggedIn ?   <h2 className="welcome-message">Welcome {props.username}</h2> : 
    //                             <h2 className="login-prompt">Please log in to Continue</h2>);
}

// UserGreeting.PropTypes = {
//     isLoggedIn : PropTypes.bool,
//     username:PropTypes.string,
// }
// UserGreeting.defaultProps = {
//     isLoggedIn : false,
//     username : "Guest",
// }

export default UserGreeting