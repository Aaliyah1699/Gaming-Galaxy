import { Alert } from 'react-bootstrap';

const Message = ({ variant, children }) => {
    return (
        <Alert variant={variant} className='orbitron'>
            {children}
        </Alert>
    );
};

Message.defaultProps = {
    variant: 'info',
};

export default Message;
