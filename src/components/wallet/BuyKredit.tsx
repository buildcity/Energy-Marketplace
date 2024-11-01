import React from 'react'
import { useHistory } from 'react-router'
import Web3 from 'web3'
import { useWeb3 } from '../../context/Web3Context'

interface BuyKreditProps {
    web3Instance: Web3
}

const BuyKredit: React.FC<BuyKreditProps> = ({web3Instance}) => {
    const history = useHistory()
    const { contractInstance } = useWeb3()

    React.useEffect(() => {
        // console.log(contractInstance.defaultBlock)
    },[contractInstance])

    const buyKredits = async () => {
        var accounts = await web3Instance.eth.getAccounts()
        console.log(accounts[0])
    }

    if(!web3Instance){
        return(
            <button 
                onClick={() => history.push('/connect')} 
                className="bg-gray-900 px-3 py-2 rounded-md border border-gray-800 w-full"
            >
                Connect to Web3
            </button>
        )
    }
    else {
        return(
            <div className="space-y-16">
                <div className="w-full space-y-4">
                <h1 className="text-center">Enter no of kredits</h1>
                    <input 
                        type="text" 
                        className="w-full py-2 px-4 bg-gray-900"
                        placeholder="12 Kredits"
                    />
                </div>
                <div className="flex items-center justify-evenly">
                    <div>
                        <button onClick={buyKredits} className="bg-gray-900 border border-gray-800 p-2 rounded-md">Buy K's</button>
                    </div>
                    <div>
                        <button className="bg-gray-900 border border-green-400 p-2 rounded-md">Sell K's</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default BuyKredit