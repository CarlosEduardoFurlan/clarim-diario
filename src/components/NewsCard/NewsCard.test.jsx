import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import NewsCard from './NewsCard'

describe('NewsCard', () => {
    it('mostra a categoria e o titulo recebidos por props', () => {
        render(
            <MemoryRouter>
                <NewsCard 
                    id={1}
                    categoria="Cidade"
                    titulo="Metro tera horario estendido"
                />
            </MemoryRouter>
        )
        
        expect(screen.getByText('Cidade')).toBeInTheDocument()
        expect(screen.getByText('Metro tera horario estendido')).toBeInTheDocument()
    })
})