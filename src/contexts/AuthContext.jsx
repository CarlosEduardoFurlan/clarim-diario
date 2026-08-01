 import { createContext, useContext, useState } from "react";

 const AuthContext = createContext(null);

 export function AuthProvider ({ children }) {
    const [usuario, setUsuario] = useState(() => {
        const salvo = localStorage.getItem('usuario')
        return salvo ? JSON.parse(salvo) : null
    })

    function login(email, senha) {
        if(email === 'jonah@clarim.com' && senha === 'odeioaranha123') {
            const dados = { nome: 'J. Jonah Jameson', email}
            setUsuario(dados)
            localStorage.setItem('usuario', JSON.stringify(dados))
            return
        }

        throw new Error('E-mail ou senha incorretos.')
    }

    function logout() {
        setUsuario(null)
        localStorage.removeItem('usuario')
    }

    return (
        <AuthContext.Provider value= {{ usuario, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
 }

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
    const contexto = useContext(AuthContext)
    if(!contexto) {
        throw new Error('useAuth deve ser usado dentro de <AuthProvider>')
    }

    return contexto
}