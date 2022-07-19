import {DetailsContainer, CourseIMg, CourseName, Description} from './style'

const Details = props => {
  const {courseDetails} = props
  const {name, description, imageUrl} = courseDetails
  return (
    <DetailsContainer>
      <CourseIMg src={imageUrl} alt={name} />
      <div>
        <CourseName>{name}</CourseName>
        <Description>{description}</Description>
      </div>
    </DetailsContainer>
  )
}

export default Details
