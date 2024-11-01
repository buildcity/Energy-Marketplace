import { faClock, faDirections, faUserClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { data } from '../../data'

const StatusCard: React.FC = () => {

    return(
        <section className="font-mono text-green-500 px-10 py-4">
            <div className="flex justify-center">
                <div className="bg-gray-900 rounded-full px-8 py-4 h-48 w-64">
                    <h1 className="text-center text-green-300 mt-4">hello, { data[0].firstName} </h1>
                    <div className="space-y-2">
                        <h1 className="flex justify-center mt-4 text-gray-100 text-5xl">
                            {data[0].carbonUsed} 
                            <span className="text-xl mt-4 text-green-400"> 
                                {" "}/{data[0].carbonAllowance}
                            </span>
                            <p className="text-center text-xs text-gray-300 mt-6 ml-2">kgCO2</p>   
                        </h1>
                    </div>
                    <div className="mt-4 flex justify-evenly">
                        <div className="flex items-center space-x-2">
                            <FontAwesomeIcon icon={faClock}/>
                            <p className="text-xs text-gray-300">{data[0].travelTime} H</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FontAwesomeIcon icon={faDirections}/>
                            <p className="text-xs text-gray-300">{data[0].totalDistance} KM</p>
                        </div>
                    </div>
                </div> 
            </div>
        </section>
    )
}

export default StatusCard