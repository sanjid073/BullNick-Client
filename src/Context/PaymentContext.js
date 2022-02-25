import React, { useContext } from 'react';
const PaymentContext = React.createContext();

export const usePayment = () => useContext(PaymentContext);

const PaymentProvider = ({ children }) => {
    const [payment, setPayment] = React.useState(null);
    
    return (
        <PaymentContext.Provider value={{payment,setPayment}}>
            {children}
        </PaymentContext.Provider>
    );
};

export default PaymentProvider;