function Button({ children, className, ...props }) {
  return (
    <button
      className={`bg-stone-600 transition-all ease-linear duration-100 text-white rounded px-4 py-2 hover:bg-stone-500 hover:shadow-md ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
