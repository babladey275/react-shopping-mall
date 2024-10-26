

const SingleProduct = ({product}) => {
    const {name, image, description, price} = product;
    return (
        <div className="space-y-4 mr-4 mt-6 p-4 border-2 shadow-lg rounded-2xl text-center">
            <img className="w-full h-80 rounded-xl" src={image} alt="" />
            <p className="text-3xl font-bold">{name}</p>
            <p className="text-gray-700 text-xl">{description}</p>
            <p>Price: ${price}</p>

            <button className="px-6 py-4 bg-slate-200 rounded-xl font-bold">Add To Cart</button>
        </div>
    );
};

export default SingleProduct;