import { Route } from "react-router-dom"

import Home from './pages/Home';
import Login from './pages/Login';
import AuthGuard from "./components/AuthGuard";

export const UnAuthRoutes = [
    <Route index key='login' path='/login' element={<AuthGuard component={<Login/>} authed={false} />} />
]

export const AuthRoutes = [
    <Route index key='home' path='/' element={<AuthGuard component={<Home/>} />} />
]
