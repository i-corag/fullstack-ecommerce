import { NavLink } from "react-router-dom"

const Admin = () => {

    return (
        <section className="max-w-screen mx-2 my-12 flex flex-col md:w-4/5 md:mx-auto">
            <ul className='flex flex-col items-center justify-center gap-4 md:justify-center md:gap-6'>
                <li>
                    <NavLink to='/admin/brands'>
                        <button className='kH2 text-kD'>BRANDS</button>
                    </NavLink>

                </li>
                <li>
                    <NavLink to='/admin/categories'>
                        <button className='kH2 text-kD'>CATEGORIES</button>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/admin/products'>
                        <button className='kH2 text-kD'>PRODUCTS</button>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/admin/users'>
                        <button className='kH2 text-kD'>USERS</button>
                    </NavLink>
                </li>

            </ul>
        </section>
    )
}

export default Admin