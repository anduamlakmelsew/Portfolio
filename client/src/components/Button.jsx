import { Loader2 } from 'lucide-react';

const Button = ({ 
  children, 
  variant = 'primary', 
  isLoading = false, 
  disabled = false,
  className = '',
  ...props 
}) => {
  const baseStyles = 'px-6 py-3 rounded-lg transition-all duration-200 font-medium inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg',
    secondary: 'bg-gray-700 hover:bg-gray-600 text-white hover:shadow-lg',
    outline: 'border-2 border-blue-600 text-blue-500 hover:bg-blue-600 hover:text-white',
    danger: 'bg-red-600 hover:bg-red-700 text-white hover:shadow-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <Loader2 className="mr-2 animate-spin" size={20} />}
      {children}
    </button>
  );
};

export default Button;
