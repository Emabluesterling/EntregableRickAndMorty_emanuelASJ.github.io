import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import {
    Box,
    Typography,
    CircularProgress,
    Paper
} from '@mui/material'

import ErrorIcon from '@mui/icons-material/Error'

const Error = ({ code = 404 }) => {

    const [seg, setSeg] = useState(6)

    const navigate = useNavigate()

    useEffect(() => {

        const timer = setTimeout(() => {

            setSeg(seg - 1)

            if (seg === 1) {

                navigate('/')
            }

        }, 1000)

        return () => clearTimeout(timer)

    }, [seg, navigate])

    // TIPOS DE ERROR

    let title = ''
    let message = ''
    let color = ''

    switch (code) {

        case 404:

            title = '404'

            message = 'Page Not Found'

            color = '#39ff14'

            break

        case 500:

            title = '500'

            message = 'Internal Server Error'

            color = '#ff5252'

            break

        case 403:

            title = '403'

            message = 'Access Denied'

            color = '#ff9800'

            break

        default:

            title = 'Error'

            message = 'Unexpected Error'

            color = '#00e5ff'
    }

    return (

        <Box
            sx={{
                minHeight: '90vh',

                display: 'flex',

                justifyContent: 'center',

                alignItems: 'center',

                padding: 3,

                background: `
                    linear-gradient(
                        135deg,
                        #cdea59,
                        #31775c,
                        #29904d
                    )
                `
            }}
        >

            <Paper
                elevation={10}

                sx={{

                    width: {
                        xs: '100%',
                        sm: 450
                    },

                    padding: 5,

                    borderRadius: 5,

                    textAlign: 'center',

                    background: `
                        linear-gradient(
                            180deg,
                            #939340,
                            #111827
                        )
                    `,

                    color: 'white',

                    border: `2px solid ${color}`,

                    boxShadow: `0px 0px 25px ${color}`
                }}
            >

                <ErrorIcon
                    sx={{
                        fontSize: 90,
                        color: color,
                        marginBottom: 2
                    }}
                />

                <Typography
                    variant="h2"

                    sx={{
                        fontWeight: 'bold',
                        color: color
                    }}
                >
                    {title}
                </Typography>

                <Typography
                    variant="h5"

                    sx={{
                        marginTop: 1,
                        color: '#e0ff4f'
                    }}
                >
                    {message}
                </Typography>

                <Box
                    sx={{
                        marginTop: 4,

                        display: 'flex',

                        flexDirection: 'column',

                        alignItems: 'center',

                        gap: 2
                    }}
                >

                    <CircularProgress
                        value={(seg / 6) * 100}

                        variant="determinate"

                        size={80}

                        sx={{
                            color: color
                        }}
                    />

                    <Typography
                        variant="body1"

                        sx={{
                            fontSize: '1.1rem'
                        }}
                    >
                        Será redireccionado en {seg} segundos
                    </Typography>

                </Box>

            </Paper>

        </Box>
    )
}

export default Error