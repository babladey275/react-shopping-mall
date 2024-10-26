import { useEffect, useState } from "react";
import SingleProduct from "../SingleProduct/SingleProduct";

const Allproducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() =>{
        fetch('shop.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl font-bold">All Products</h1>
            <div className="md:grid md:grid-cols-2">
                {
                    products.map((product) => <SingleProduct key={product.id} product={product}></SingleProduct>)
                }
            </div>
        </div>
    );
};

export default Allproducts;