import Home from '@/pages'
import { render, screen } from '@testing-library/react'

describe('Home', () => {
  it('should render properly', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { name: /hello bileto/i })).toBeInTheDocument()
  })
})
