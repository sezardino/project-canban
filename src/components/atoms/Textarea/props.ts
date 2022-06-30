import { HTMLProps } from 'react';

export interface TextareaProps extends HTMLProps<HTMLTextAreaElement> {
  label?: string;
}
