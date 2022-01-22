import { Message } from '../../../Api';
export type ColumnProps = {
    titleMessage: string;
    message: Message[];
    messageType: 'error' | 'warning' | 'info';
    priority: 0 | 1 | 2;
};
