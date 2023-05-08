import { useProducts } from '../../hooks/useProduct.js';
import { Link, useParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import Loading from '../Loading/index.jsx';
import ErrorMsg from '../ErrorMsg/index.jsx';
import GoBack from '../GoBack/index.jsx';
import ProductSearch from './ProductSearch.jsx';
import ProductSort from './ProductSort.jsx';

const ProductList = () => {
    const getProducts = useProducts();
    const products = getProducts.data ?? [];
    //const { data: products = [], isLoading, isError, error } = useGetProducts()


    const { categoryId } = useParams();
    const category = products.filter((product) => product.Category.name == categoryId);


    return (
        <section>
            {getProducts.isLoading && <Loading />}
            {getProducts.isError && <ErrorMsg error={getProducts.error.message} />}
            <Link onClick={() => navigate(-1)}><GoBack /></Link>
            <div className='w-4/5 mx-auto mt-20 flex items-center justify-center gap-2 md:justify-end'>
                <ProductSearch />
                <ProductSort />
            </div>
            {(categoryId) ?
                <ul className='w-4/5 mx-auto my-8 flex flex-wrap justify-start items-center gap-6 md:my-10'>
                    {category.map((product) => {
                        return <ProductCard key={product.id} product={product} />
                    })}
                </ul> :
                <ul className='w-4/5 mx-auto my-8 flex flex-wrap justify-start items-center gap-6 md:my-10'>
                    {products.map(product => {
                        return <ProductCard key={product.id} product={product} />
                    })}
                </ul>
            }
        </section>
    )
};

export default ProductList