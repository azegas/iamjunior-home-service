import '../../styles/global.scss';

const Error = ({ message, whatTriedToReact }) => {
    return <div className="center" >Error: {whatTriedToReact} - {message}</div>;
}

export default Error;