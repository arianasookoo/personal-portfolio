const variants = {
  border: 'bg-transparent text-black border border-black',
  green: 'bg-green text-pearl border-green',
}

export default function Button({ variant = 'border', className = '', children, ...props }) {
  return (
    <button
      className={`rounded-[10px] px-[10px] py-[5px] text-base m-[5px] border ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
