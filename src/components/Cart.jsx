import CartCount from "./cart/CartCount";
import CartEmpty from "./cart/CartEmpty";
import CartItem from "./cart/CartItem";

const Cart = () => {
  return (
    <>
      <div
        className={`fixed top-0 left-0 buttom-0 right-0 w-full h-screen blur-effect-theme opacity-100 z-[250]  `}
      >
        <div
          className={`blur-effect-theme h-screen max-w-xl w-full absolute right-0 `}
        >
          <CartCount />
          <CartEmpty />
          <CartItem />
        </div>
      </div>
    </>
  );
};

export default Cart;
