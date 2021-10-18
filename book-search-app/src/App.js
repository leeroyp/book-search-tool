import { QueryClient, QueryClientProvider } from "react-query";
import BookSearch from "./components/FetchBooks/Index"

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BookSearch />
    </QueryClientProvider>
  );
}
