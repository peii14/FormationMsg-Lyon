import Navbar from '../components/Navbar'
import Footer from './Footer';

const Layout: React.FC<{}>  = ({ children }) => {
  return (
    <>
    <Navbar />
    <div className='min-h-screen'>
        {children}
    </div>
    <Footer/>
    </>
  );
};
export default Layout;