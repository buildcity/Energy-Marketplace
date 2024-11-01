import { Redirect, Route } from 'react-router-dom';
import { 
    IonApp, 
    IonRouterOutlet,
    setupIonicReact 
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

//TailwindCSS
import './index.css'

//Views
import Landing from './views/Landing';
import Dashboard from './views/Dashboard';
import Auth from './views/Auth';
import MyAccount from './views/MyAccount';
import MyWallet from './views/MyWallet';
import Web3Connect from './views/Web3Connect.jsx';
import Web3ContextProvider from './context/Web3Context';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <Web3ContextProvider>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/" component={Landing}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/auth" component={Auth} />
          <Route path="/account" component={MyAccount} />
          <Route path="/wallet" component={MyWallet} />
          <Route path="/connect" component={Web3Connect} />
          <Route exact path="/">
            <Redirect to="/landing" />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </Web3ContextProvider>
  </IonApp>
);

export default App;
