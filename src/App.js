import Header from "./Components/Header/Header"
import ItemsList from './../src/Components/ItemsList/ItemsList';
import Intro from './Components/Intro/Intro';
import Image from './Components/Image/Image';
import CartModal from './Components/CartModal/CartModal';
import { CartProvider } from './../src/Store/cart-context';

function App() {
  return (
    <CartProvider>
      <div>
        <Header />
        <Image />
        <Intro />
        <ItemsList />
        <CartModal />
      </div>
    </CartProvider>
  );
}

export default App;
