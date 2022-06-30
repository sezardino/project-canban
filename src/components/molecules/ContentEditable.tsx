import { cloneElement, ReactElement, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

import { Button, Textarea, Input } from '@/components';

import { ReactComponent as CheckIcon } from '@/assets/icons/check.svg';
import { ReactComponent as CrossIcon } from '@/assets/icons/cross.svg';
import { useForm } from 'react-hook-form';

export interface ContentEditableProps extends React.HTMLProps<HTMLDivElement> {
  text: string;
  type?: 'input' | 'textarea';
  submitHandler: (text: string) => void;
  children: ReactElement;
}

type Inputs = {
  text: string;
};

export const ContentEditable: React.FC<ContentEditableProps> = (props) => {
  const { submitHandler, type = 'input', text, children, ...rest } = props;
  const { register, handleSubmit } = useForm<Inputs>();
  const [isEditing, setIsEditing] = useState(false);

  const keyDownHandler = (evt: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    evt.stopPropagation();
    if (evt.key !== 'Escape') {
      return;
    }

    setIsEditing(false);
  };

  const onSubmit = (args: Inputs) => {
    setIsEditing(false);
    if (args.text === text) {
      return;
    }

    submitHandler(args.text);
  };

  const child = cloneElement(children, { onClick: () => setIsEditing(true) });

  const inputProps = {
    ...register('text'),
    defaultValue: text,
    onKeyDown: keyDownHandler,
  };

  const editForm = (
    <form className="w-full relative" onSubmit={handleSubmit(onSubmit)}>
      {type === 'textarea' ? <Textarea {...inputProps} /> : null}
      {type === 'input' ? <Input {...inputProps} {...register('text')} /> : null}
      <div className="flex justify-end gap-1 absolute right-0">
        <Button size="xs" color="info" type="submit" variant="outlined" aria-label="save changes">
          <CheckIcon />
        </Button>
        <Button
          size="xs"
          color="danger"
          variant="outlined"
          type="button"
          aria-label="cancel changes"
          onClick={() => setIsEditing(false)}
        >
          <CrossIcon />
        </Button>
      </div>
    </form>
  );

  return (
    <div {...rest} className={classNames(rest.className, 'cursor-pointer')}>
      {!isEditing ? child : null}
      {isEditing ? editForm : null}
    </div>
  );
};
