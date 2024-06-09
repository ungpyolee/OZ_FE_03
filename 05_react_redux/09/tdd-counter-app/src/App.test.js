import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

test('초기 카운트는 0이다', () => {
  render(<App />)
  expect(screen.getByText(/카운트: 0/i)).toBeInTheDocument()
})

test('"증가" 버튼을 클릭하면 카운트가 1 증가한다.', () => {
  render(<App />)
  fireEvent.click(screen.getByText(/증가/i))
  expect(screen.getByText(/카운트: 1/i)).toBeInTheDocument()
})

test('"감소" 버튼을 클릭하면 카운트가 1 감소한다', () => {
  render(<App />)
  fireEvent.click(screen.getByText(/감소/i))
  expect(screen.getByText(/카운트: -1/i)).toBeInTheDocument()
})
