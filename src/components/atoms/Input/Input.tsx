import { InputProps } from './props';
import cn from 'classnames';

export const Input: React.FC<InputProps> = (props) => {
  const { label, className, size = 'md', helperText = '', ...rest } = props;

  const defaultStyles = `
    block
    w-full
    rounded
    font-normal
    transition ease-in-out
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
    disabled:text-gray-700 disabled:bg-gray-100
  `;

  const sizeStyles = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-3 py-1.5 text-base',
    lg: 'px-4 py-2 text-xl',
  };

  const helper = helperText ? (
    <span className="text-sm text-gray-500 mt-1 absolute left-0 animate-show">{helperText}</span>
  ) : (
    ''
  );

  return (
    <label className={cn('relative block', className)}>
      <span className="inline-block mb-2 text-gray-700">{label}</span>
      <input {...rest} className={cn(defaultStyles, sizeStyles[size])} />
      {helper}
    </label>
  );
};
