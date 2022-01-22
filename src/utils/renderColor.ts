export const renderColor = (priority: number) => {
    switch (priority) {
        case 0:
            return '#F56236';
        case 1:
            return '#FCE788';
        case 2:
            return '#88FCA3';
        default:
            return 'white';
    }
};
