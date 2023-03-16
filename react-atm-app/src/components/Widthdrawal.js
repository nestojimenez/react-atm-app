import { useState } from 'react'
import BankIntro from '../images/bankintro.jpeg'

import { useHistory } from 'react-router-dom';

const Widthdrawal = ({amount, setAmount}) => {

    const history = useHistory();

    const moveToHome = () =>{
        history.push('/home');
    }

const [selectAmount, setSelectAmount] = useState(false);

let amountTotake = 0;

//On/Off input for selectAmount
const inputSelectAmount = () => {
  setSelectAmount(!selectAmount);
}

const withdrawal = (amountWithdrawal) =>{
    if(amountWithdrawal < amount){
        console.log(amountWithdrawal)
        setAmount(amount -= Number(amountWithdrawal));
        console.log(amount);
        alert(`Take your cash: ${amountWithdrawal} your new balance is ${amount}` )
    }else{
        alert(`Not enough founds your balance is ${amount}` )
    }
    
}

const handleChange = (e)=>{
    amountTotake = Number(e.target.value);
}

  return (
    <div className="container-fluid bg-dark home" style = {{height:"100vh"}}>
        
        <div className='row justify-content-center'>
            <div className="col-3">

                <div class="d-grid gap-2 mt-5">
                    <button type="button" className="btn btn-primary btn-lg mt-5" onClick={() => withdrawal(100)}>$100.00 USD</button>
                    <button type="button" className="btn btn-primary btn-lg mt-5" onClick={() => withdrawal(200)}>$200.00 USD</button>
                    <button type="button" className="btn btn-primary btn-lg mt-5" onClick={() => withdrawal(500)}>$500.00 USD</button>
                </div>
                           
            </div>

            <div className="col-6">
                <h1 className="text-uppercase text-bg-dark text-center mt-5">Tijuana Bank Withdrawal</h1> 
                <img className="mx-auto d-block mt-5" src={BankIntro} alt="" />

                {selectAmount && <div class="input-group mt-5">
                      <span class="input-group-text">$</span>
                      <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" onChange={handleChange}/>
                      <span class="input-group-text">.00 <button className="btn btn-primary" onClick={() => withdrawal(amountTotake)}>Enter</button></span>
                    </div>}
            </div> 

            <div className="col-3">

                <div className="d-grid gap-2 mt-5">
                    <button type="button" className="btn btn-primary btn-lg mt-5" onClick={() => withdrawal(500)}>$1000.00 USD</button>
                    <button type="button" className="btn btn-primary btn-lg mt-5" onClick={inputSelectAmount}>Select Amount</button>
                    <button type="button" className="btn btn-primary btn-lg mt-5" onClick={moveToHome}>Home</button>
                    
                </div>

            </div>  
            
                
        </div>
    </div>
  )
}

export default Widthdrawal
