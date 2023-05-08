import { useParams } from 'react-router-dom';
import AdminBrandList from '../brands/AdminBrandList';
import AdminCategoryList from '../categories/AdminCategoryList';
import AdminProductList from '../products/AdminProductList';
import AdminUserList from '../users/AdminUserList';

const AdminContainer = () => {
    const { adminId } = useParams();
    console.log(adminId)

    if (adminId == 'brands') {
        return <AdminBrandList />
    }
    if (adminId == 'categories') {
        return <AdminCategoryList />
    }
    if (adminId === 'products') {
        return <AdminProductList />
    }
    if (adminId === 'users') {
        return <AdminUserList />
    }
}

export default AdminContainer