import React from 'react'
import { IonPage } from '@ionic/react'
import { Plugins } from '@capacitor/core'
import Topbar from '../components/dashboard/Topbar'
import StatusCard from '../components/dashboard/StatusCard'
import MyTrips from '../components/dashboard/MyTrips'
import BottomTabs from '../components/dashboard/BottomTabs'


const Dashboard: React.FC = () => {
    
    const getLocation = async () => {
        try {
            var pos = await Plugins.Geolocation.getCurrentPosition()
            console.log(pos)
        }
        catch(err){
            console.error(err)
        }
    }

    React.useEffect(() => {
        getLocation()
    }, [])

    return(
        <IonPage>
            <div className="min-h-screen">
                <Topbar/>
                <StatusCard/>
                <MyTrips />
                <BottomTabs/>
            </div>
        </IonPage>
    )
}

export default Dashboard