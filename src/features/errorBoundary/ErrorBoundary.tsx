import React from "react";

interface IErrorBoundaryProps {
  children: React.ReactNode;
}

interface IErrorBoundaryState {
  errorInfo: Error | null;
}

class ErrorBoundary extends React.Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  public state = {
    errorInfo: null,
  };

  public componentDidCatch(error: Error | null) {
    this.setState({
      errorInfo: error,
    });
  }

  public render() {
    if (!this.state.errorInfo) {
      return this.props.children;
    }

    return (
      <div>
        <h2>Sorry, something went wrong</h2>
        <p>
          Unfortunately, we're having a few technical issues and are unable to
          continue with your application. Please try again later.
        </p>
        <br />
        <button type="button" onClick={this.refreshApp}>
          Try again
        </button>
      </div>
    );
  }

  private refreshApp = () => {
    window.location.reload();
  };
}

export default ErrorBoundary;
