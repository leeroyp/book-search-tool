import { QueryClient, QueryClientProvider } from "react-query";
import BookSearch from "./components/FetchBooks/FetchBooks"


const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BookSearch />
    </QueryClientProvider>
  );

}
