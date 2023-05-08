import { useSearchParams } from "react-router-dom";

const ProductSort = () => {

    const [search, setSearch] = useSearchParams(); //sort by name by default but is not an option

    const onSortChange = (e) => {
        const sortBy = e.target.value
        search.set('sort', sortBy);
        setSearch(search, { replace: true });
    }

    return (
        <div className='h-9 flex items-center relative border border-kD rounded'>
            <select
                className='text-kD focus:ring-0 focus:ring-offset-0 focus:ring-inset-0'
                onChange={onSortChange}
                defaultValue={''}
                name="sort"
                id="sort">
                <option value="">Sort by</option>
                <option value="lowestPriceFirst" >lowest price</option>
                <option value="highestPriceFirst" >highest price</option>
            </select>
        </div>
    )
}

export default ProductSort