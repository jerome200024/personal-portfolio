

export const Button = ({className, size ="default", children}) => {
    const baseClasses = "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25";

    const sizeClasses = {
        sm: "px-3 py-1 text-sm",
        default: "px-4 py-2 text-base",
        lg: "px-5 py-3 text-lg",

    };

    const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;

    return (
        <button className={classes}>
            <span className="relative flex items-center justify-center gap-2">{children}</span>
        </button>
    );
};
