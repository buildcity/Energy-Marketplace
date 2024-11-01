import { faArrowLeft, faLeaf } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useHistory } from 'react-router'
import { data } from '../../data'

const WalletHeader: React.FC = () => {

    const history = useHistory()

    return(
    <React.Fragment>
        <nav className="flex items-center text-green-400 font-mono px-8 py-4 justify-between">
            <div>
                <FontAwesomeIcon 
                    icon={faArrowLeft} 
                    className="text-xl mt-4"
                    onClick={() => history.goBack()}
                />
            </div>
        </nav>
        <header className="px-10 py-4 font-mono text-green-400">
            <h1 className="text-center text-2xl bg-gray-900 py-2">{data[0].firstName}'s Wallet</h1>
        </header>
    </React.Fragment>
    )
}

export default WalletHeader