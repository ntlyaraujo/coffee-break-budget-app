import { AlertTriangle, RefreshCw } from "lucide-react";
import { Button } from "@heroui/button";
import { useNavigate, useLocation } from "@tanstack/react-router";

interface ErrorFallbackProps {
  error?: Error;
  resetError?: () => void;
}

const ErrorFallback = ({ error, resetError }: ErrorFallbackProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleReload = () => {
    if (resetError) {
      resetError();
    } else {
      navigate({
        to: location.pathname,
        replace: true,
        reloadDocument: true,
      });
    }
  };

  const handleGoHome = () => {
    navigate({
      to: "/",
      reloadDocument: true,
    });
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="flex justify-center">
          <div className="rounded-full bg-danger/10 dark:bg-danger/20 p-4">
            <AlertTriangle className="w-12 h-12 text-danger" />
          </div>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground">
            Something went wrong
          </h1>
          <p className="text-default-500">
            We encountered an unexpected error. Don't worry, it's not your
            fault!
          </p>
        </div>

        {error && (
          <div className="bg-default-100 dark:bg-default-50 rounded-lg p-4 text-left">
            <p className="text-sm font-semibold text-default-700 dark:text-default-300 mb-1">
              Error details:
            </p>
            <p className="text-xs text-default-600 dark:text-default-400 font-mono break-all">
              {error.message || "An unknown error occurred"}
            </p>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            color="primary"
            variant="solid"
            onPress={handleReload}
            startContent={<RefreshCw className="w-4 h-4" />}
            className="w-full sm:w-auto"
          >
            Try again
          </Button>
          <Button color="primary" variant="solid" onPress={handleGoHome}>
            Go home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorFallback;
