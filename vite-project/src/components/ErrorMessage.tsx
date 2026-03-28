interface Iprops {
    message: string;
};

const ErrorMessage = ({ message }: Iprops) => {
    return (message ? <span className="block text-red-500 font-semibold text-sm">{message}</span> : null);
};

export default ErrorMessage;