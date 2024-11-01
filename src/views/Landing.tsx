import { IonPage } from '@ionic/react'
import React from 'react'
import Hero from '../components/landing/Hero'
import Navbar from '../components/landing/Navbar'

const Landing: React.FC = () => {
    return(
        <IonPage>
            <div>
                <Navbar />
                <Hero />
            </div>
        </IonPage>
    )
}

export default Landing