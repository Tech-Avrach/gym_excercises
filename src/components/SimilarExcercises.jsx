import React from 'react'
import { useMyContext } from '../context/contex' 
import { Typography, Box, Stack } from '@mui/material';
import { HorizontalScrollbar } from './HorizontalScrollbar'
import Loader from './Loader'

function SimilarExcercises() {
    const {targetMuscleExercises, setEquipmentExercises} = useMyContext()
    // console.log('similar',targetMuscleExercises)

  return (
    <>
    <Box sx={{mt: { lg:'100px', xs:'0' }}} >
    <Typography 
    sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} 
    color="#000" mb="33px"
    >
      Similar{' '}
      <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>
        Target Muscle{' '}
      </span> 
      exercises
  </Typography>
  <Stack direction='row' sx={{p:'2', position:'relative'}}>
    {targetMuscleExercises.length > 0 ? <HorizontalScrollbar data={targetMuscleExercises}/>
      : <Loader />}
  </Stack>
  </Box>

  </>
  )
}

export default SimilarExcercises