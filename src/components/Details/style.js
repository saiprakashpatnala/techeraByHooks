import styled from 'styled-components'

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 20px;
`

export const CourseIMg = styled.img`
  height: 250px;
  width: 300px;
  margin-right: 20px;
`

export const CourseName = styled.h1`
  color: #1e293b;
  font-size: 36px;
  font-family: 'Roboto';
`

export const Description = styled.p`
  color: #64748b;
  font-size: 20px;
  font-family: 'Roboto';
`

export default DetailsContainer
