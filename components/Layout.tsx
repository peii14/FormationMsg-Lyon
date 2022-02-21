import Navbar from '../components/Navbar'

const Layout: React.FC<{}>  = ({ children }) => {
  return (
    <>
    <Navbar />
    <div className='min-h-screen'>
        {children}
    </div>
    </>
  );
};
export default Layout;