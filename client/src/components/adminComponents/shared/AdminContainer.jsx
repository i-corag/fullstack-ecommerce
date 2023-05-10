import { useParams } from 'react-router-dom';
import AdminBrandList from '../brands/AdminBrandList';
import AdminCategoryList from '../categories/AdminCategoryList';
import AdminProductList from '../products/AdminProductList';
import AdminUserList from '../users/AdminUserList';
import AdminOrderList from '../orders/AdminOrderList';

const AdminContainer = () => {
    const { adminId } = useParams();

    switch (adminId) {
        case 'brands':
            return <AdminBrandList />
        case 'categories':
            return <AdminCategoryList />
        case 'products':
            return <AdminProductList />
        case 'users':
            return <AdminUserList />
        case 'orders':
            return <AdminOrderList />
    }
}

export default AdminContainer

