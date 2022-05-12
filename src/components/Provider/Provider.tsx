import { FC, ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

interface IProviderProps {
  children: ReactNode;
}

const queryClient = new QueryClient();

const Provider: FC<IProviderProps> = ({ children }) => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </BrowserRouter>
  );
};

export default Provider;
