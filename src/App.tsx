import Todos from "./components/Todos/Todos";
import Header from "./components/Header/Header";
import NewTodo from "./components/NewTodo/NewTodo";
import { AppWrapper, AppContent } from "./StyleApp";
import TodosContextProvider from "./store/todos-context";

function App() {
  return (
    <TodosContextProvider>
      <AppWrapper>
        <AppContent>
          <Header />
          <NewTodo />
          <Todos />
        </AppContent>
      </AppWrapper>
    </TodosContextProvider>
  );
}

export default App;
