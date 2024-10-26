import PropTypes from "prop-types";
import About from "../About/About";
import Cart from "../Cart/Cart";


const CartContainer = ({isActive, handleIsActiveState, selectedProducts}) => {
    return (
        <div className="md:w1/3">
            <h2 className="text-3xl font-bold">Cart Container</h2>

            <div className='flex justify-between mt-8'>
                <button className={`${isActive.cart ? "px-6 py-2 rounded-lg text-xl font-bold bg-blue-600 text-white" : "px-6 py-2 rounded-lg bg-slate-300 text-xl font-bold"}`} onClick={() => handleIsActiveState("cart")}>Cart</button>
                <button className={`${isActive.cart ? "px-6 py-2 rounded-lg bg-slate-300 text-xl font-bold" : "px-6 py-2 rounded-lg text-xl font-bold bg-blue-600 text-white"}`} onClick={() => handleIsActiveState("about")}>About</button>
            </div>

            {
                isActive.cart ? <Cart selectedProducts={selectedProducts}></Cart> : <About></About>
            }
        </div>
    );
};

CartContainer.propTypes = {
    selectedProducts: PropTypes.array,
    isActive: PropTypes.object,
    handleIsActiveState: PropTypes.func
}

export default CartContainer;