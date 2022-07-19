import {useState, useEffect} from 'react'

import Loader from 'react-loader-spinner'

import Header from '../Header'

import Details from '../Details'

import {
  LoaderContainer,
  FailureContainer,
  FailImg,
  FailureHeading,
  FailurePara,
  Button,
} from './style'

const apiStatus = {
  initial: 'initial',
  progress: 'progress',
  success: 'success',
  fail: 'fail',
}

const CourseItemDetails = () => {
  const [apiResponse, setApiResponse] = useState({status: apiStatus.initial})
  const [course, setCourse] = useState({})

  useEffect(() => {
    setApiResponse({status: apiStatus.progress})
    const getCourseDetails = async props => {
      const {match} = props
      const {params} = match
      const {id} = params
      const url = `https://apis.ccbp.in/te/courses/${id}`
      const options = {
        method: 'GET',
      }
      const response = await fetch(url, options)
      const data = await response.json()

      if (response.ok) {
        setApiResponse({status: apiStatus.success})
        const updateCourse = {
          id: data.course_details.id,
          name: data.course_details.name,
          imageUrl: data.course_details.image_url,
          description: data.course_details.description,
        }
        setCourse(updateCourse)
      } else {
        setApiResponse({status: apiStatus.fail})
      }
    }
    getCourseDetails()
  }, [])

  const loadingView = () => (
    <LoaderContainer testid="loader">
      <Loader type="ThreeDots" color="#4656a1" height={50} width={50} />
    </LoaderContainer>
  )
  const successView = () => <Details courseDetails={course} />

  const failureView = () => (
    <FailureContainer>
      <FailImg
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png "
        alt="failure view"
      />
      <FailureHeading>Oops! Something Went Wrong</FailureHeading>
      <FailurePara>We cannot seen to find the page looking for</FailurePara>
      <Button>Retry</Button>
    </FailureContainer>
  )

  const renderFinalUI = () => {
    const {status} = apiResponse
    switch (status) {
      case apiStatus.progress:
        return loadingView()
      case apiStatus.success:
        return successView()
      case apiStatus.fail:
        return failureView()
      default:
        return null
    }
  }

  return (
    <div>
      <Header />
      {renderFinalUI()}
    </div>
  )
}

export default CourseItemDetails
