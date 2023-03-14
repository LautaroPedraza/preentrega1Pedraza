import { BrowserRouter } from "react-router-dom";
import { ItemListContainer } from "./componentes/ItemListContainer/ItemListContainer";
import NavBar from "./componentes/NavBar/NavBar";

function App() {
  const greeting = [
    "Bienvenido a mi tienda",
  ]
  
    return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBar />
        <Main />
        <Footer />
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;