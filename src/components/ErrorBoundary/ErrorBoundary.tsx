import { Component, ErrorInfo, ReactNode } from "react";

interface IErrorBoundryProps {
  children: ReactNode;
}

interface IErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<IErrorBoundryProps, IErrorBoundaryState> {
  public state: IErrorBoundaryState = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): IErrorBoundaryState {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <h1>Sorry.. there was an error</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
