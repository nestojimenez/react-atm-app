import BankIntro from '../images/bankintro.jpeg'
import { useHistory } from 'react-router-dom';

const Deposit = ({setDeposit}) => {

    const history = useHistory();
    let amountDeposit = 0;

    const moveToHome = () =>{
        history.push('/home');
    }

    const handleChange = (e)=>{
        amountDeposit = Number(e.target.value);
    }

  return (
    <div className="container-fluid bg-dark home" style = {{height:"100vh"}}>
        
        <div className='row justify-content-center'>
            <div className="col-3"></div>

            <div className="col-6">
                <h1 className="text-uppercase text-bg-dark text-center mt-5">Tijuana Bank Withdrawal</h1> 
                <img className="mx-auto d-block mt-5" src={BankIntro} alt="" />

                <div class="input-group mt-5">
                    <span className="input-group-text">$</span>
                    <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" onChange={handleChange}/>
                    <span className="input-group-text">.00 <button className="btn btn-primary" onClick={() => setDeposit(amountDeposit)}>Enter</button></span>
                </div>
                <h3 className="text-uppercase text-bg-dark text-center mt-5">Please enter de amount to deposit</h3> 
            </div> 
                
            <div className="col-3">
                <button type="button" className="btn btn-primary btn-lg mt-5" onClick={moveToHome}>Home</button>
            </div>  
            
                
        </div>
    </div>
  )
}

export default Deposit
