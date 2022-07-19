import styled from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px;
  background-color: #ffffff;
`

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`

export const SuccessListElement = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding-left: 0px;
`
export const Heading = styled.h1`
  color: #1e293b;
  font-size: 32px;
  font-weight: bold;
`

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
`

export const FailImg = styled.img`
  height: 120px;
  width: 250px;
`

export const FailureHeading = styled.h1`
  color: #1e293b;
  font-size: 35px;
  font-family: 'Roboto';
`

export const FailurePara = styled.p`
  color: #64748b;
  font-size: 15px;
  font-family: 'Roboto';
`

export const Button = styled.button`
  background-color: #4656a1;
  color: #ffffff;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  border: none;
  border-radius: 5px;
`
export default SuccessContainer
