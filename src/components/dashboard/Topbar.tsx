import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faConciergeBell, faHistory, faUserAlt, faWallet } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router'

const Topbar: React.FC = () => {

    const history = useHistory()

    return(
        <nav className="flex text-green-400 justify-between items-center px-8 py-4">
            <div className="flex items-center space-x-4 rounded-full bg-gray-900 py-2 px-4">
                <FontAwesomeIcon 
                    icon={faWallet}
                    className="text-2xl"
                    onClick={() => history.push('/wallet')}
                />
                <p className="text-gray-100 font-mono">15</p>
            </div>
            <div className="flex items-center space-x-4 rounded-full bg-gray-900 py-2 px-4">
                <FontAwesomeIcon 
                    icon={faHistory}
                    className="text-2xl"
                />
            </div>
        </nav>
    )
}

export default Topbar