import React from 'react'
import { IonButton } from '@ionic/react'
import { useIonRouter } from '@ionic/react'
import environment from '../../assets/environment.svg'

const Hero: React.FC = () => {
    const router = useIonRouter()
    
    const gotoAuth = () => {
        router.push('/auth')
    }
        
    return(
        <section className="px-8 py-4 font-mono text-green-600 overflow-hidden space-y-12">
            <div className="flex justify-center">
                <img src={environment} alt="" className="h-64 w-64"/>
            </div>
            <div>
                <h1 className="text-gray-300 text-center text-lg mx-3">
                    Decentralized Personal Energy Trading
                </h1>
            </div>
            <div className="flex justify-center">
                <IonButton 
                    className="p-2 bg-green-600 text-gray-300"
                    onClick={gotoAuth}
                >
                    Get Started
                </IonButton>
            </div>
        </section>
    )
}

export default Hero