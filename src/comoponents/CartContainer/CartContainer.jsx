import About from "../About/About";
import Cart from "../Cart/Cart";


const CartContainer = ({isActive, handleIsActiveState}) => {
    return (
        <div>
            <h2 className="text-3xl font-bold">Cart Container</h2>

            <div className='flex justify-between mt-8'>
                <button className={`${isActive.cart ? "px-6 py-2 rounded-lg text-xl font-bold bg-blue-600 text-white" : "px-6 py-2 rounded-lg bg-slate-300 text-xl font-bold"}`} onClick={() => handleIsActiveState("cart")}>Cart</button>
                <button className={`${isActive.cart ? "px-6 py-2 rounded-lg bg-slate-300 text-xl font-bold" : "px-6 py-2 rounded-lg text-xl font-bold bg-blue-600 text-white"}`} onClick={() => handleIsActiveState("about")}>About</button>
            </div>

            {
                isActive.cart ? <Cart></Cart> : <About></About>
            }
        </div>
    );
};

export default CartContainer;