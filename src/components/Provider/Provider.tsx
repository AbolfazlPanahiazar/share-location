import { FC, ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import "leaflet/dist/leaflet.css";

import ErrorBoundary from "components/ErrorBoundary/ErrorBoundary";

interface IProviderProps {
  children: ReactNode;
}

const queryClient = new QueryClient();

const Provider: FC<IProviderProps> = ({ children }) => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default Provider;
