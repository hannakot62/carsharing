import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { myRoutes } from './routes'
import SignIn from '../pages/SignIn/SignIn'
import { useSelector } from 'react-redux'

const AppRouter = () => {
    const navigate = useNavigate()
    const role = useSelector((state: any) => state.user.role)
    useEffect(() => {
        switch (role) {
            case 0: {
                navigate('/startUser')
                break
            }
            case 1: {
                navigate('/startAdmin')
                break
            }
            case -1: {
                navigate('/')
                break
            }
        }
    }, [useSelector((state: any) => state.user)])

    return (
        <Routes>
            {myRoutes.map(route => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={<route.component />}
                />
            ))}
            <Route path="/*" element={<SignIn />} />
        </Routes>
    )
}

export default AppRouter
