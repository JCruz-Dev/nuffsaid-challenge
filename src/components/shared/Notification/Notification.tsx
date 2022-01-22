import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { FC } from 'react';
import { NotificationProps } from './type';

const Notification: FC<NotificationProps> = ({
    message,
    open,
    customClose,
}) => {
    function Alert(props: any) {
        return <MuiAlert elevation={6} variant='filled' {...props} />;
    }
    return (
        <Snackbar
            open={open}
            autoHideDuration={2000}
            onClose={customClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            key={'top,right'}
        >
            <Alert onClose={customClose} severity='error'>
                {message}
            </Alert>
        </Snackbar>
    );
};

export default Notification;
