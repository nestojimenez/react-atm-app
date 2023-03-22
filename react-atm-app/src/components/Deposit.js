import BankIntro from '../images/bankintro.jpeg'
import { useHistory } from 'react-router-dom';
import {useFormik} from 'formik'

const Deposit = ({setDeposit}) => {

    const history = useHistory();
    let amountDeposit = 0;

    const moveToHome = () =>{
        history.push('/home');
    }

    const formik = useFormik(
        
        {        
        initialValues: {
            amount:'100'
        },
        onSubmit: values =>{
            console.log('fomr: ', values);
            amountDeposit = Number(values.amount);
            console.log('My deposit: ',amountDeposit);
            setDeposit(amountDeposit);
        },
        validate: values =>{
            let errors = {};
            if(!values.amount) errors.name = 'Required';
           
            if(!isNumber(values.amount) && values.amount) errors.name= 'Please enter a number'
            
            return errors;
        }
    })

    
    function isNumber(value) {
        console.log(/^-?\d+$/.test(value));
        return /^-?\d+$/.test(value);
    }

  return (
    <div className="container-fluid bg-dark home" style = {{height:"100vh"}}>
        
        <div className='row justify-content-center'>
            <div className="col-3"></div>

            <div className="col-6">
                <h1 className="text-uppercase text-bg-dark text-center mt-5">Tijuana Bank Withdrawal</h1> 
                <img className="mx-auto d-block mt-5" src={BankIntro} alt="" />
                <form onSubmit={formik.handleSubmit}>
                    <div class="input-group mt-5">
                        <span className="input-group-text">$</span>
                        <input name='amount' type="text" className="form-control" aria-label="Amount (to the nearest dollar)" onChange={formik.handleChange} value={formik.values.amount}/>
                        <span className="input-group-text">.00 <button type="submit" className="btn btn-primary">Enter</button></span>
                    </div>
                    {formik.errors.name ? <h3 className='mt-5 text-center' style={{color: 'red'}}>{formik.errors.name}</h3>: null}
                </form>
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
