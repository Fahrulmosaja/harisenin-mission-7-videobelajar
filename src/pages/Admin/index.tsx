import { useEffect } from "react";
import AdminLayout from "../../components/layouts/AdminLayout";
import AdminElements from "../../components/views/AdminElements";
import { getProductCoursesById } from "../../libs/axios/services/productServices";


const AdminPage = () => {

  return (
    <AdminLayout title="VideoBelajar | Admin">
      <AdminElements />
    </AdminLayout>
  );
};

export default AdminPage;