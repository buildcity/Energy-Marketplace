import { IonPage } from '@ionic/react'
import React from 'react'
import Login from '../components/auth/Login'
import Navbar from '../components/landing/Navbar'

const Auth: React.FC = () => {
    return(
        <IonPage>
            <div className="flex flex-col h-screen w-screen">
                <Navbar />
                <div className="flex items-center justify-center h-full">
                    <Login />
                </div>
            </div>
        </IonPage>
    )
}

export default Auth