//import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
///import Navbar from './components/layout/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/layout/Navbar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Footer from './components/layout/Footer';
import NotFound from './components/NotFound';
import Login from './components/Login';
import UserHome from './components/UserHome';
import AdminHome from './components/AdminHome';
import Forgotpass from './components/Forgotpass';
import Otp from './components/Otp';
import Resetpass from './components/Resetpass';
import Signup from './components/Signup';
import AddCategory from './components/AddCategory';
import CatView from './components/CatView';
import AddProduct from './components/AddProduct';
import ProductView from './components/ProductView';
import FeedbackView from './components/FeedbackView';
import SendOrder from './components/SendOrder';
import MyOrder from './components/MyOrder';
import PayBill from './components/PayBill';
import Feedback from './components/Feedback';
import CatWise from './components/CatWise';
import PaymentView from './components/PaymentView';
import ViewCustomer from './components/ViewCustomer';

function App() {
  return (
    <Router>
    <div className="App">
     
      <Navbar></Navbar>
      
      <Switch>
         <Route exact path="/" component={Home}></Route>
         <Route exact path="/about" component={About}></Route>
         <Route exact path="/contact" component={Contact}></Route>
         <Route exact path="/login" component={Login}></Route>
         <Route exact path="/userhome" component={UserHome}></Route>
         <Route exact path="/adminhome" component={AdminHome}></Route>
         <Route exact path="/forgotpass" component={Forgotpass}></Route>
         <Route exact path="/otp" component={Otp}></Route>
         <Route exact path="/resetpass" component={Resetpass}></Route>
         <Route exact path="/signup" component={Signup}></Route>
         <Route exact path="/addcat" component={AddCategory}></Route>
         <Route exact path="/catview" component={CatView}></Route>
         <Route exact path="/addproduct" component={AddProduct}></Route>
         <Route exact path="/productview" component={ProductView}></Route>
         <Route exact path="/feedbackview" component={FeedbackView}></Route>
         <Route exact path="/sendorder/:id" component={SendOrder}></Route>
         <Route exact path="/myorder" component={MyOrder}></Route>
         <Route exact path="/paybill/:id/:price" component={PayBill}></Route>
         <Route exact path="/feedback" component={Feedback}></Route>
         <Route exact path="/cat_wise_menu/:cat" component={CatWise}></Route>
         <Route exact path="/paymentview" component={PaymentView}></Route>
         <Route exact path="/viewcustomer/:user_id" component={ViewCustomer}></Route>
         <Route component={NotFound}></Route>
     </Switch>
     <Footer></Footer>

   
        
    </div> 
    </Router>
  );
}

export default App;
