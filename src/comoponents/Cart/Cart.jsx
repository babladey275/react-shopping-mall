import PropTypes from 'prop-types';

const Cart = ({selectedProducts, handleDelete}) => {
    // console.log(selectedProducts);
    return (
        <div>
            
            {
                selectedProducts.map((product) => (
                    <div key={product.id} className='border-2 p-2 m-2 rounded-xl'>
                        <div className='flex justify-between gap-6'>
                        <img className='w-20 h-20' src={product.image} alt="" />
                        <p className='font-bold'>{product.name}</p>
                        <button className='px-4 my-4 bg-red-600 rounded-xl font-bold'
                        onClick={() => handleDelete(product.id)}>Delete</button>
                    </div>
                    </div>
                ))
            }
        </div>
    );
};

Cart.propTypes = {
    selectedProducts: PropTypes.array,
    handleDelete: PropTypes.func
}

export default Cart;