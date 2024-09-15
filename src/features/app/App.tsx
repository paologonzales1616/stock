import { ReactNode } from "react";
import { ErrorBoundary } from "..";
import Header from "../../components/header/Header";
import SearchModal from "../../components/searchModal/SearchModal";

function App({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <SearchModal />
      <ErrorBoundary>{children}</ErrorBoundary>
    </>
  );
}

export default App;
