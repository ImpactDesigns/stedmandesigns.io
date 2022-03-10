import React, { useState } from 'react'

export const UserContext = React.createContext()

export default function AppContext({ children }) {
    const [isFlyoutOpen, setIsFlyoutOpen] = useState(false)

    return (
        <UserContext.Provider value={[isFlyoutOpen, setIsFlyoutOpen]}>
            { children }
        </UserContext.Provider>
    )
}