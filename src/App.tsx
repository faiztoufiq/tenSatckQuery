import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TenStackQuery from "./tenStackQuery/page";
const newQuery = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={newQuery}>
      <TenStackQuery />
    </QueryClientProvider>
  );
}

export default App;
