import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Home.css';


const Home = () => {

  return (
    <div>
      <ToastContainer/>
      <h1>Welcome To Our Home Page</h1>
         <h2 className='home'>🙏 </h2>
    </div>
  );
};
export default Home;
