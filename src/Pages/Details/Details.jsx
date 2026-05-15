import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Chip,
  Stack,
  Box,
  CircularProgress
} from '@mui/material'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'

const Details = () => {

  const { id } = useParams()
  const navigate = useNavigate()

  const [character, setCharacter] = useState(null)

  useEffect(() => {

    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(res => res.json())
      .then(data => setCharacter(data))

  }, [id])

  return (

    <Box
      sx={{
        minHeight: '70vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 3,

        background: `
          linear-gradient(
            135deg,
            #72d557,
            #e0e62e,
            #1b4332
          )
        `
      }}
    >

      {character ? (

        <Card
          sx={{

            width: {
              xs: '100%',
              sm: 500,
              md: 700
            },

            display: 'flex',

            flexDirection: {
              xs: 'column',
              md: 'row'
            },

            borderRadius: 5,

            overflow: 'hidden',

            background: `
              linear-gradient(
                180deg,
                #1f2937,
                #202711
              )
            `,

            boxShadow: '0px 0px 25px #f3ff14'
          }}
        >

          <CardMedia
            component="img"
            image={character.image}
            alt={character.name}

            sx={{
              width: {
                xs: '100%',
                md: '50%'
              },

              height: {
                xs: 350,
                md: 'auto'
              },

              objectFit: 'cover'
            }}
          />

          <CardContent
            sx={{
              flex: 1,
              color: 'white',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: 2
            }}
          >

            <Typography
              variant="h4"
              sx={{
                fontWeight: 'bold',
                color: '#c6ff00'
              }}
            >
              {character.name}
            </Typography>

            <Stack spacing={2}>

              <Chip
                label={`Species: ${character.species}`}
                sx={{
                  backgroundColor: '#39ff14',
                  color: '#000',
                  fontWeight: 'bold'
                }}
              />

              <Chip
                label={`Status: ${character.status}`}
                sx={{
                  backgroundColor: '#e0ff4f',
                  color: '#000',
                  fontWeight: 'bold'
                }}
              />

              <Chip
                label={`Gender: ${character.gender}`}
                sx={{
                  backgroundColor: '#00e5ff',
                  color: '#000',
                  fontWeight: 'bold'
                }}
              />

            </Stack>

            <Button
              variant="contained"
              startIcon={<ArrowBackIcon />}

              onClick={() => navigate(-1)}

              sx={{
                marginTop: 3,

                backgroundColor: '#39ff14',

                color: '#000',

                fontWeight: 'bold',

                '&:hover': {
                  backgroundColor: '#c6ff00'
                }
              }}
            >
              Volver
            </Button>

          </CardContent>

        </Card>

      ) : (

        <CircularProgress
          sx={{
            color: '#39ff14'
          }}
        />

      )}

    </Box>
  )
}

export default Details
