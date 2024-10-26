import PropTypes from "prop-types";


const Navbar = ({selectedProducts}) => {
    return (
        <div className="bg-orange-100 py-10 border-b-2 mb-10">
            <div className="w-11/12 mx-auto flex justify-between">
                <div>
                    <h2 className="text-3xl font-bold">logo</h2>
                </div>
                <div className="text-2xl font-bold flex gap-6">
                    <p>Home</p>
                    <p>Product</p>
                    <p>Cart: {selectedProducts.length}</p>
                    <p>$500</p>
                </div>
            </div>
        </div>
    );
};

Navbar.propTypes = {
    selectedProducts: PropTypes.array
}

export default Navbar;