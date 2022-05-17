import React,{useEffect, useState} from 'react';
import {ethers} from 'ethers';
import {contractABI, contractAddress} from '../utils/constants';

export const TransactionContext = React.createContext();

const {ethereum} = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

     return transactionContract;
}

export const TransactionProvider = ({children}) => {
 const [currentAccount, setCurrentAccount] = useState("");
 const [formData,setFormData] = useState({addressTo: '', amount: '', keyword: '', message: ''});
 const [isLoading, setIsLoading] = useState(false);
 const [transactionCount, setTransactionCount] = useState(localStorage.getItem('transactionCount'));
 const [transactions, setTransactions] = useState([]);

 const handleChange = (e,name) => {
    setFormData((prevState) => ({...prevState, [name] : e.target.value}))
 }  

 const getAllTransactions = async () => {
     try{
        if(!ethereum) return alert("Please install metamask");
        const transactionsContract = getEthereumContract();
        const availableTransactions = await transactionsContract.getAllTransactions();

        const structuredTransactins = availableTransactions.map((transaction) => ({
            addressTo: transaction.receiver,
            addressFrom: transaction.sender,
            timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
            message: transaction.message,
            keyword: transaction.keyword,
            amount: parseInt(transaction.amount._hex) / (10 ** 18)
        }))
        console.log(structuredTransactins);
        setTransactions(structuredTransactins)
     }
     catch(e){
        console.log(e);
     }
 }

 const checkIfWalletIsConnected = async () => {
     try{
        if(!ethereum) return alert("Please install metamask");
        const accounts = await ethereum.request({method: 'eth_accounts'});
   
        if(accounts.length){
            setCurrentAccount(accounts[0]);
            getAllTransactions();
       }
       else{
           console.log("No accounts found");
       }
     }
     catch(e){
        console.log(e);
        throw new Error("No ethereum object.")
     }
     
 }
 const checkIfTransactionExists = async () => {
    try{
        const transactionsContract = getEthereumContract();
        const transactionCount = await transactionsContract.getTransactionCount();

        window.localStorage.setItem('transactionCount', transactionCount);
    }
    catch(e){
        console.log(e);
        throw new Error("No ethereum object.")
    }
}

 const connectWallet = async () => {
    try{
     if(!ethereum) return alert("Please install metamask");
     const accounts = await ethereum.request({method: 'eth_requestAccounts'});
     if(accounts.length){
         setCurrentAccount(accounts[0])
        }
    }
    catch(e){
     console.log(e);
     throw new Error("No ethereum object.")
    }
 }

 const sendTransaction = async () => {
     try{
        if(!ethereum) return alert("Please install metamask");
        
        const {addressTo, amount, keyword, message} = formData;
        const transactionsContract = getEthereumContract();

        const parsedAmount = ethers.utils.parseEther(amount);

        await ethereum.request({
            method: 'eth_sendTransaction',
            params: [{
                from : currentAccount,
                to: addressTo,
                gas: '0x5208', // 21000 GWEI,
                value: parsedAmount._hex // 0.00001
            }]
      });
      const transactionHash = await transactionsContract.addToBlockChain(addressTo, parsedAmount, message,keyword);
      setIsLoading(true);
      console.log("Loading - "+transactionHash.hash);
      await transactionHash.wait();
      setIsLoading(false);
      console.log(`Success - ${transactionHash.hash}`);

      const transactionCount = await transactionsContract.getTransactionCount();
      setTransactionCount(transactionCount.toNumber());
     }
     catch(error){
        console.log(error)
     }
 }
 useEffect(() => {
    checkIfWalletIsConnected();
    checkIfTransactionExists();
 },[])
 return (
     <TransactionContext.Provider value={{connectWallet, currentAccount, formData, handleChange, sendTransaction,transactions, isLoading}}>
         {children}
     </TransactionContext.Provider>
 )
}