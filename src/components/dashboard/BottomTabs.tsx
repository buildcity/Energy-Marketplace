import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown, faHome, faSearchLocation, faUser } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router'

const BottomTabs: React.FC = () => {
    const history = useHistory()

    return(
        <footer className="absolute bottom-0 bg-gray-900 w-full p-2 py-3 text-green-100">
            <div className="px-8 my-2 flex justify-between">
                <div>
                    <FontAwesomeIcon icon={faHome} className="text-2xl"/>
                </div>
                <div>
                    <FontAwesomeIcon icon={faSearchLocation} className="text-2xl"/>
                </div>
                <div>
                    <FontAwesomeIcon icon={faCartArrowDown} className="text-2xl"/>
                </div>
                <div>
                    <FontAwesomeIcon icon={faUser} className="text-2xl" onClick={() => history.push('/account')}/>
                </div>
            </div>
        </footer>
    )
}

export default BottomTabs