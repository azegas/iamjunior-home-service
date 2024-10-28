import '../../styles/global.scss';

// primarily curious about printing out the error message is the fact that vercel/json-server does not work on mobile for some reason
const Error = ({ message, whatTriedToReact }) => {
    return <div className="center" >Error: {whatTriedToReact} - {message}</div>;
}

export default Error;