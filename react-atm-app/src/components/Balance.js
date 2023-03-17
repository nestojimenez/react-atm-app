import BankIntro from '../images/bankintro.jpeg'
import { useHistory } from 'react-router-dom';

const Balance = ({amount}) => {

    const history = useHistory();

    const moveToHome = () =>{
        history.push('/home');
    }

  return (
    <div className="container-fluid bg-dark home" style = {{height:"100vh"}}>
        
        <div className='row justify-content-center'>
            <div className="col-3">
                                         
            </div>

            <div className="col-6">
                <h1 className="text-uppercase text-bg-dark text-center mt-5">Tijuana Bank Balance</h1> 
                <img className="mx-auto d-block mt-5" src={BankIntro} alt="" />
                <h3 className="text-uppercase text-bg-dark text-center mt-5">This is your Balance: $ {amount}</h3> 
            </div> 

            <div className="col-3">
                <button type="button" className="btn btn-primary btn-lg mt-5" onClick={moveToHome}>Home</button>
            </div>      
        </div>
    </div>
  )
}

export default Balance
