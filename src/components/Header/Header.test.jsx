import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { AuthProvider } from '../../contexts/AuthContext'
import Header from './Header'

function renderizarHeader() { 
    render(
        <MemoryRouter>
            <AuthProvider>
                <Header tema="light" aoAlterarTema={() => {}} />
            </AuthProvider>
        </MemoryRouter>
    )
}

describe('Header', () => {
    beforeEach(() => localStorage.clear())

    it('mostra o link Entrar quando ninguem esta logado', () => {
        renderizarHeader()
        expect(screen.getByText('Entrar')).toBeInTheDocument()
    })

    it('mostra a saudacao quando ha usuario salvo no localStorage', () => {
        localStorage.setItem('usuario', JSON.stringify({ nome: 'Maria' }))
        renderizarHeader()
        expect(screen.getByText(/Maria/)).toBeInTheDocument()
    })
})