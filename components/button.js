"use client";

const Button = ({
  onClick,
  children,
  className = "",
  icon,
  variant = "primary",
}) => {
  const baseStyles =
    "flex items-center px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50";
  const variants = {
    primary:
      "bg-orange-500 text-white hover:bg-orange-600 focus:ring-orange-400",
    secondary:
      "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
