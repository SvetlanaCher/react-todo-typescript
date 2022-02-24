import React from 'react'
import { useHistory } from 'react-router-dom'

export const AboutPage: React.FC = () => {
    const history = useHistory()
    
    return (
        <>
        <h1>Страница информации</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis necessitatibus illo rem explicabo debitis quaerat id fugiat cumque sint delectus!</p>
        <button className='btn' onClick={() => history.push('/')}>Обратно к списку дел</button>
        </>
    )
}