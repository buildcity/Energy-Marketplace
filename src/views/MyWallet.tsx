import { IonPage } from '@ionic/react'
import React from 'react'
import WalletHeader from '../components/wallet/WalletHeader'
import WalletInfo from '../components/wallet/WalletInfo'
import { data } from '../data'

const MyWallet: React.FC = () => {
    return(
        <IonPage>
            <div className="h-screen w-screen">
                <WalletHeader />
                <WalletInfo />
            </div>
        </IonPage>
    )
}

export default MyWallet