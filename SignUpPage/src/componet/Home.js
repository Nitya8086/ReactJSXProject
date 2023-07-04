import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Home.css';

export const toastify = (e) =>{
  toast.success(e)
  console.log("toastyfy call hua");
}
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
