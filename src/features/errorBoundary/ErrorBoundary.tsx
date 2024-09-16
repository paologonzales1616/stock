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
      <div
        className="mb-4 text-sm text-red-700 bg-red-100 rounded-lg max-w-lg mx-auto shadow-md p-6 mt-2"
        role="alert"
      >
        <span className="font-medium">Error:</span> Unfortunately, we're having
        a few technical issues and are unable to continue with your application.
        Please try again later.
        <button
          type="button"
          onClick={this.refreshApp}
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
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
