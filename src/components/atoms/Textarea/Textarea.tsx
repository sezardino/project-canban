import { TextareaProps } from './props';
import cn from 'classnames';
import { forwardRef } from 'react';

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
  const { className, label, ...rest } = props;
  return (
    <label className={cn(className)}>
      {label ? <span className="form-label inline-block mb-2 text-gray-700">{label}</span> : null}
      <textarea
        {...rest}
        ref={ref}
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
});
