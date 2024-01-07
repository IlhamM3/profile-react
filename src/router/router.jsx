import { Routes, Route } from 'react-router-dom';
import Homepage from '../pages/homepage.jsx';
import Blog from '../pages/blog.jsx';
import Kontak from '../pages/kontak.jsx';
import Portofolio from '../pages/portofolio.jsx';
import NotFound from '../pages/notfound.jsx';
import Cekadmin from '../pages/cekadmin.jsx';
import Tambahdata from '../pages/tambahdata.jsx';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/portofolio" element={<Portofolio />} />
      <Route path="/kontak" element={<Kontak />} />
      <Route path="/admin" element={<Cekadmin />} />
      <Route path="/admin/tambahdata" element={<Tambahdata />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
