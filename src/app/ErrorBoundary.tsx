import { Component, ErrorInfo, ReactNode } from 'react';
/**
 * The state type for the ErrorBoundary component.
 * @typedef {Object}  ErrorBoundaryProps
 * @property {ReactNode} children - The child components wrapped by the ErrorBoundary.
 * @property {ReactNode} [fallback] - An optional fallback UI to display when an error occurs.
 */
export interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}
/**
 * The state type for the ErrorBoundary component.
 * @typedef {Object} ErrorBoundaryState
 * @property {boolean} hasError - Indicates whether an error has occurred in the component.
 * @property {Error | null} error - Contains the error object if an error occurred, otherwise null.
 */
export interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}
/**
 * A React component that acts as an error boundary to catch JavaScript errors
 * in the component tree and display a fallback UI instead of crashing the application.
 *
 * @template ErrorBoundaryProps - The props for the ErrorBoundary component.
 * @template ErrorBoundaryState - The state for the ErrorBoundary component.
 *
 * @property {ReactNode} children - The child components wrapped by the ErrorBoundary.
 * @property {ReactNode} [fallback] - An optional fallback UI to display when an error occurs.
 *
 * @example
 * // Usage with a fallback UI
 * <ErrorBoundary fallback={<h1>Something went wrong</h1>}>
 *   <MyComponent />
 * </ErrorBoundary>
 *
 * @example
 * // Usage without a fallback UI (default fallback will be used)
 * <ErrorBoundary>
 *   <MyComponent />
 * </ErrorBoundary>
 */
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  /**
   * ErrorBoundary component constructor that initializes the state.
   *
   * @param {ErrorBoundaryProps} props - The props for the ErrorBoundary component.
   * @param {boolean} props.hasError - Indicates whether an error has occurred in the component.
   * @param {Error | null} props.error - Contains the error object if an error occurred, otherwise null.
   */
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }
  /**
   * This method is called when an error is caught in a child component.
   * It updates the component's state to reflect that an error has occurred.
   *
   * @param {Error} error - The error that was thrown by the child component.
   * @returns {ErrorBoundaryState} The new state of the component, indicating an error has occurred.
   */
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }
  /**
   * Invoked after an error has been thrown in a descendant component. Can be used for logging
   * error details or performing side effects.
   *
   * @param {Error} error - The error thrown by a descendant component.
   * @param {ErrorInfo} errorInfo - Additional error details including component stack trace.
   */
  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }
  /**
   * Renders the fallback UI if an error has been caught. Otherwise, renders the child components.
   *
   * @returns {ReactNode} The rendered UI based on the error state.
   */
  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div>
            <h1>Something went wrong.</h1>
            <p>{this.state.error?.message}</p>
          </div>
        )
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
