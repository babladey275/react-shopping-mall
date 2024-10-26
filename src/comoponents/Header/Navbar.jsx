import PropTypes from "prop-types";


const Navbar = ({selectedProducts, price}) => {
    return (
        <div className="bg-orange-50 py-10 mb-10">
            <div className="w-11/12 mx-auto flex justify-between">
                <div>
                    <h2 className="text-3xl font-bold">ShopSphere</h2>
                </div>
                <div className="text-xl font-bold flex gap-6">
                    <p>Home</p>
                    <p>Product</p>
                    <p>Cart: {selectedProducts.length}</p>
                    <p>${price}</p>
                </div>
            </div>
        </div>
    );
};

Navbar.propTypes = {
    selectedProducts: PropTypes.array,
    price: PropTypes.number
}

export default Navbar;