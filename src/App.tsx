import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes } from "./pages/Routes";
import { PageLayout } from "./pages/PageLayout";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PageLayout>
        <Routes />
      </PageLayout>
    </QueryClientProvider>
  );
}

export default App;
