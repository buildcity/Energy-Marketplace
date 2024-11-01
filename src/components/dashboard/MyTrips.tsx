import { faBiking, faCar, faClock, faTintSlash } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { data } from '../../data'
import TripInfo from './TripInfo'

const MyTrips: React.FC = () => {
    return(
        <section className="px-10 py-4 flex mt-4">
            <div className="flex overflow-auto space-x-4">
                {
                    data[0].trips.map((trip, index) => {
                        return <TripInfo 
                            category={trip.category}
                            carbonConsumption={trip.carbonConsumption}
                            distance={trip.distance}
                            duration={trip.duration}
                            key={index}
                        />
                    })
                }
            </div>
        </section>
    )
}

export default MyTrips