import { TextareaProps } from './props';
import cn from 'classnames';

export const Textarea: React.FC<TextareaProps> = (props) => {
  const { className, label, ...rest } = props;
  return (
    <label className={cn(className)}>
      <span className="form-label inline-block mb-2 text-gray-700">{label}</span>
      <textarea
        {...rest}
        className="
        block
        w-full
        h-48
        m-0
        px-3 py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition ease-in-out
        resize-none
        disabled:opacity-50
        focus:text-gray-700 focus:bg-white focus:border-primary-600 focus:outline-none
      "
      />
    </label>
  );
};
