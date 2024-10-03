import { ProviderContexts, AppRouter } from "./index";
import { ToastContainer } from "react-toastify";
const App = () => {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={1500}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        theme="light"
      />
      <ProviderContexts>
        <AppRouter />
      </ProviderContexts>
    </>
  );
};

export default App;
