import { faArrowAltCircleUp, faCarAlt, faClock, faDirections, faEllipsisV, faTint, faTintSlash, faWater } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

interface TripInfoProps {
    category: string,
    distance: string,
    duration: string,
    carbonConsumption: string,
}

const TripInfo: React.FC<TripInfoProps> = ({
    category, 
    carbonConsumption, 
    distance, 
    duration
}) => {

    const [logo, setLogo] = React.useState('')

    return(
        <div className="bg-gray-900 rounded-md font-mono text-gray-800 px-6 py-4 text-green-500 space-y-4">
            <div className="flex items-center justify-between space-x-8">
                <div>
                    <FontAwesomeIcon icon={faCarAlt} className="text-gray-400"/>
                </div>
                <div>
                    <FontAwesomeIcon icon={faEllipsisV} className="text-gray-200"/>
                </div>
            </div>
            <div>
                <h1 className="font-bold text-green-100 text-lg">{category}</h1>
            </div>
            <div className="space-y-4">
                <div className="flex items-center justify-between space-x-6">
                    <FontAwesomeIcon icon={faTintSlash} className="text-red-400"/>
                    <p className="text-xs text-green-200">{carbonConsumption}</p>
                </div>
                <div className="flex items-center justify-between space-x-6">
                    <FontAwesomeIcon icon={faClock} className="text-yellow-400"/>
                    <p className="text-xs text-green-200">{duration}</p>
                </div>
                <div className="flex items-center justify-between space-x-6">
                    <FontAwesomeIcon icon={faDirections} className="text-blue-400"/>
                    <p className="text-xs text-green-200">{distance}</p>
                </div>
            </div>
        </div>
    )
}

export default TripInfo