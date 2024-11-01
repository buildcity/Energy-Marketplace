import React from 'react'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IonPage } from '@ionic/react'
import { useHistory } from 'react-router'

import Web3 from 'web3'
import Portis from '@portis/web3'
import { useWeb3 } from '../context/Web3Context'

import Karbonize from '../contracts/Karbonize.json'

const Web3Connect = () => {

    const history = useHistory()
    const { setWeb3Instance, setContractInstance } = useWeb3()
    
    const connectToPortis = async () => {
        const portis = new Portis('b358dd9f-7a6a-4c26-948b-a79c29d3fa59', 'maticMumbai')
        const web3 = new Web3(portis.provider)
        // var web3 = new Web3('http://localhost:9545')
        setWeb3Instance(web3)
        var accounts = await web3.eth.getAccounts()
        console.log(accounts[0])

        var contractInstance = new web3.eth.Contract(Karbonize.abi, Karbonize.networks[5777].address)
        console.log(contractInstance)

        setContractInstance(contractInstance)

        if(accounts !== null){
            history.push('/wallet')
        }
    }
    
    return(
        <IonPage>
            <div>
                <nav className="flex items-center text-green-400 font-mono px-8 py-4 justify-between">
                    <div>
                        <FontAwesomeIcon 
                        icon={faArrowLeft} 
                        className="text-xl mt-4"
                        onClick={() => history.goBack()}
                        />
                    </div>
                </nav>
                <section className="flex justify-center font-mono text-green-500 px-10 py-4">
                    <div className="w-full space-y-8">
                        <button onClick={connectToPortis} className="bg-gray-900 p-2 rounded-md w-full border border-green-800">Connect to Portis</button>
                        <button className="bg-gray-900 p-2 rounded-md w-full">Connect to Arkane</button>
                        <button className="bg-gray-900 p-2 rounded-md w-full">Connect to Coinbase</button>
                    </div>
                </section>
            </div>
        </IonPage>
    )
}

export default Web3Connect