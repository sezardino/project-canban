import cn from 'classnames';
import { ToastProps } from './props';

import { ToastTypes } from '@/common';
import { Text } from '@/components/atoms';

import { ReactComponent as SuccessIcon } from '@/assets/icons/checkmark.svg';
import { ReactComponent as WarningIcon } from '@/assets/icons/exclamation.svg';
import { ReactComponent as ErrorIcon } from '@/assets/icons/fire.svg';
import { ReactComponent as InfoIcon } from '@/assets/icons/info.svg';

export const Toast: React.FC<ToastProps> = (props) => {
  const { className, type, message, ...rest } = props;

  const toastHeadings = {
    [ToastTypes.SUCCESS]: 'Success',
    [ToastTypes.ERROR]: 'Error',
    [ToastTypes.WARNING]: 'Warning',
    [ToastTypes.INFO]: 'Info',
  };

  const toastIcon = {
    [ToastTypes.SUCCESS]: SuccessIcon,
    [ToastTypes.ERROR]: ErrorIcon,
    [ToastTypes.WARNING]: WarningIcon,
    [ToastTypes.INFO]: InfoIcon,
  };

  const toastBg = {
    [ToastTypes.SUCCESS]: 'bg-green-500',
    [ToastTypes.ERROR]: 'bg-red-500',
    [ToastTypes.WARNING]: 'bg-yellow-500',
    [ToastTypes.INFO]: 'bg-blue-500',
  };

  const Icon = toastIcon[type];
  const bg = toastBg[type];

  return (
    <div {...rest} className={cn(className, 'bg-white rounded-lg shadow-md flex overflow-hidden')}>
      <div className={cn('flex justify-center items-center w-1/4', bg)}>
        <Icon width="32" height="32" />
      </div>
      <div className="p-5 w-3/4">
        <Text size="xl" weight="semibold">
          {toastHeadings[type]}
        </Text>
        <Text size="lg">{message}</Text>
      </div>
    </div>
  );
};
