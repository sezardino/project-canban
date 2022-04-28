import { Component, ErrorInfo } from 'react';
import { ErrorTemplate, DefaultLayout } from '@/components';
import { ErrorWrapperProps } from './props';

interface State {
  hasError: boolean;
}

export class ErrorWrapper extends Component<ErrorWrapperProps, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <DefaultLayout>
          <ErrorTemplate status={500} description="Oops, Something went, wrong" />
        </DefaultLayout>
      );
    }

    return this.props.children;
  }
}
