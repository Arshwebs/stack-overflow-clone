import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppLayout from "./components/ui/AppLayout";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <div className="m-auto h-full">
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={true} />
        <AppLayout />
      </QueryClientProvider>
    </div>
  );
}

export default App;
