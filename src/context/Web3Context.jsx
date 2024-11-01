import React from 'react'

const Web3Context = React.createContext()

export const useWeb3 = () => {
    return React.useContext(Web3Context)
}

const Web3ContextProvider = ({children}) => {
    const [web3Instance, setWeb3Instance] = React.useState()
    const [contractInstance, setContractInstance] = React.useState()

    const values = { web3Instance, setWeb3Instance, contractInstance, setContractInstance}
    return(
        <Web3Context.Provider value={values}>
            {children}
        </Web3Context.Provider>
    )
}

export default Web3ContextProvider