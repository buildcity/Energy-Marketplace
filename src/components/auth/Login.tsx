import React from 'react'
import { useHistory } from 'react-router'

const Login: React.FC = () => {

    const history = useHistory()

    const gotoDashboard = () => {
        history.push('/dashboard')
    }
    
    return(
        <section className="space-y-8">
            <div className="flex flex-col space-y-2 font-mono text-green-400">
                <label htmlFor="email">Email</label>
                <input 
                    type="text" 
                    className="px-3 py-2 text-lg focus:outline-none bg-gray-900 rounded-md" 
                    placeholder="john.doe@email.com"
                />
            </div>
            <div className="flex flex-col space-y-2 font-mono text-green-400">
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    className="px-3 py-2 text-lg focus:outline-none bg-gray-900 rounded-md" 
                    placeholder="*********"
                />
            </div>
            <div className="flex justify-center font-mono">
                    <button 
                        className="p-2 bg-gray-900 text-green-400 w-full"
                        onClick={gotoDashboard}
                    >
                        LOGIN
                    </button>
                </div>
        </section>
    )
}

export default Login