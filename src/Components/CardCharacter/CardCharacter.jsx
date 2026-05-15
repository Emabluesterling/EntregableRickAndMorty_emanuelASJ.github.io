import React from 'react'
import { useNavigate } from 'react-router-dom'

import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Chip,
    Stack
} from '@mui/material'

const CardCharacter = ({
    id,
    image,
    name,
    species,
    status,
    gender
}) => {
    const navigate = useNavigate()
    return (


        <Card

            onClick={() => navigate(`/characters/${id}`)}

            sx={{

                width: 300,

                borderRadius: 4,

                backgroundColor: '#169d09',

                color: 'white',

                cursor: 'pointer',

                transition: '0.3s',

                '&:hover': {

                    transform: 'scale(1.03)',

                    boxShadow: '0px 0px 20px #c8ff00'
                }
            }}
        >

            <CardMedia
                component="img"
                height="300"
                image={image}
                alt={name}
            />

            <CardContent>

                <Typography
                    variant="h5"
                    sx={{ fontWeight: 'bold', mb: 2 }}
                    sx={{
                        color: '#e3e3d7',
                        fontWeight: 'bold'
                    }}
                >
                    {name}
                </Typography>
                <br />

                <Stack spacing={1}>

                    <Chip
                        label={`Species: ${species}`}
                        sx={{
                            backgroundColor: '#c8ff00',
                            color: '#000',
                            fontWeight: 'bold'
                        }}
                    />

                    <Chip
                        label={`Status: ${status}`}
                        sx={{
                            backgroundColor: '#ffff00',
                            color: '#000',
                            fontWeight: 'bold'
                        }}
                    />

                    <Chip
                        label={`Gender: ${gender}`}
                        sx={{
                            backgroundColor: '#32CD32',
                            color: '#000',
                            fontWeight: 'bold'
                        }}
                    />

                </Stack>

            </CardContent>

        </Card>
    )
}

export default CardCharacter
