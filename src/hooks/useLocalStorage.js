import { useReducer, useEffect } from 'react'

export function useLocalStorage(key, reducer, initialValue) {
  // inicializa state con el valor de la key en local storage si existe o con initialValue
  let initialState = initialValue

  const storedValue = localStorage.getItem(key)
  
  if (storedValue !== null) {
    try {
      initialState = JSON.parse(storedValue)
    } catch (error) {
      console.error('Error parsing localStorage value:', error)
    }
  }
  
  const [state, dispatch] = useReducer(reducer, initialState)

  // cada que cambia key o state, actualiza el state en localStorage
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, dispatch]
}
