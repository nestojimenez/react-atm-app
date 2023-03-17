import {useState} from 'react'

const useBalance = () => {
    const [amount, setAmount] = useState(100);

    const setDeposit = (transactionMoney) => {setAmount(amount + transactionMoney)};

    const setWithdrawal = (transactionMoney) => {
        if(transactionMoney < amount){            
            setAmount(amount - transactionMoney)
            alert(`Take your cash: ${transactionMoney} your new balance is ${amount-transactionMoney}` )
        }else{
            alert(`Not enough founds your balance is ${amount}` )
        }
        
    };

    return [
        amount,
        setDeposit,
        setWithdrawal
    ]
}

export default useBalance
