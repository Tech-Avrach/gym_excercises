import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { excerciseOption, fetchData, youtubeOption} from '../utils/fetchData'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import { useMyContext } from '../context/contex'
import SimilarExcercises from '../components/SimilarExcercises'

const ExcerciseDetail = () => {
  const [excerciseDetail, setExcerciseDetail] = useState({})
  const { id } = useParams();
  const {setVideos, setTargetMuscleExercises } = useMyContext();
  window.scrollTo({top: 0, left:100, behavior:'smooth'})

  useEffect(() => {
    // window.scrollTo({top: 0, left:100, behavior:'smooth'})
    // console.log(exceiciseVideos.length)
     setVideos([])
     setTargetMuscleExercises([])
    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

      const excerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,excerciseOption);

      // console.log(excerciseDetailData)

      // console.log('detail', excerciseDetailData.target);

      setExcerciseDetail(excerciseDetailData)

      const excerciseVideoData = await fetchData(`${youtubeSearchUrl}/search?query=${excerciseDetailData.name}`,youtubeOption);

        setVideos(excerciseVideoData.contents)

        const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${excerciseDetailData.target}`, excerciseOption)
        setTargetMuscleExercises(targetMuscleExercisesData);
        // console.log('working',targetMuscleExercisesData);



    }
    fetchExercisesData()
  },[id])


  return (
    <Box>
      <Detail excerciseDetail={excerciseDetail} />
      <ExerciseVideos name={excerciseDetail.name} />
      <SimilarExcercises/>
    </Box>
  )
}

export default ExcerciseDetail