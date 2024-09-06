const FormInput = ({ ...props }) => {
    return (
        <input className="border border-secondary py-2 px-4 bg-background outline-none focus:border-white" {...props} />
    );
};

export default FormInput;