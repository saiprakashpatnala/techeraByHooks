import {useState, useEffect} from 'react'

import Loader from 'react-loader-spinner'

import CourseItem from '../CourseItem'

import {
  LoaderContainer,
  FailureContainer,
  FailImg,
  FailureHeading,
  FailurePara,
  Button,
  SuccessContainer,
  SuccessListElement,
  Heading,
} from './style'

import './index.css'

import Header from '../Header'

const apiStatus = {
  initial: 'initial',
  progress: 'progress',
  success: 'success',
  fail: 'fail',
}

const Home = () => {
  const [apiResponse, setApiResponse] = useState({status: apiStatus.initial})
  const [responseData, setData] = useState([])

  useEffect(() => {
    setApiResponse({status: apiStatus.progress})
    const getData = async () => {
      const url = 'https://apis.ccbp.in/te/courses'
      const options = {
        method: 'GET',
      }
      const response = await fetch(url, options)
      const data = await response.json()
      if (response.ok) {
        setApiResponse({status: apiStatus.success})
        const formatData = data.courses.map(each => ({
          id: each.id,
          name: each.name,
          logoUrl: each.logo_url,
        }))
        setData(formatData)
      } else {
        setApiResponse({status: apiStatus.fail})
      }
    }
    getData()
  }, [])

  const loadingView = () => (
    <LoaderContainer testid="loader">
      <Loader type="ThreeDots" color="#4656a1" height={50} width={50} />
    </LoaderContainer>
  )
  const successView = () => (
    <SuccessContainer>
      <Heading>Courses</Heading>
      <SuccessListElement>
        {responseData.map(each => (
          <CourseItem details={each} key={each.id} />
        ))}
      </SuccessListElement>
    </SuccessContainer>
  )
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

export default Home
