import { MdSearch } from "react-icons/md";
import { useSearchParams } from "react-router-dom";


const ProductSearch = () => {

    const [search, setSearch] = useSearchParams();

    const onSearchChange = (e) => {
        e.preventDefault();
        const text = e.target.value
        if (text.length === 0) {
            search.delete('query');
            setSearch(search, { replace: true })
        } else {
            search.set('query', text);
            setSearch(search, { replace: true })
        }
    }

    return (
        <div className='h-9 flex items-center relative border border-kD rounded'>
            <input
                className='w-4/5 text-kD placeholder-kD px-2 ring-0 focus:ring-0'
                onChange={onSearchChange}
                defaultValue={search.get('query') ?? ''}
                id='search'
                name='search'
                placeholder="Search" />
            <MdSearch className='absolute right-2.5 text-kD' />
        </div>
    )
}

export default ProductSearch