import BankIntro from '../images/bankintro.jpeg'
import React from "react"
import {useHistory} from 'react-router-dom'

const Home = () => {

    const history = useHistory();

    const moveToWithdrawal = () =>{
        history.push('/withdrawal')
    }
    const moveToDiposit = () =>{
        history.push('/deposit')
    }
    const moveToBalance = () =>{
        history.push('/balance')
    }

  return (
    <div className="container-fluid bg-dark home" style = {{height:"100vh"}}>
        
        <div className='row justify-content-center'>
            <div className="col-3">
                <div class="d-grid gap-2 mt-5">
                    <button type="button" className="btn btn-primary btn-lg mt-5" onClick={moveToWithdrawal}>Withdrawal</button>
                    <button type="button" className="btn btn-primary btn-lg mt-5" onClick={moveToDiposit}>Deposit</button>
                    <button type="button" className="btn btn-primary btn-lg mt-5" onClick={moveToBalance}>Balance</button>
                </div>                           
            </div>

            <div className="col-6">
                <h1 className="text-uppercase text-bg-dark text-center mt-5">Tijuana Bank</h1> 
                <img className="mx-auto d-block mt-5" src={BankIntro} alt="" />
            </div> 

            <div className="col-3">
                <div className="d-grid gap-2 mt-5">
                    <button type="button" className="btn btn-primary btn-lg mt-5">Transfer</button>
                    <button type="button" className="btn btn-primary btn-lg mt-5">Payment Services</button>
                    <button type="button" className="btn btn-primary btn-lg mt-5">Other Services</button>
                </div>
            </div>      
        </div>
    </div>
  )
}

export default Home
