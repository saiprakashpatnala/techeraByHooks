import {NotFoundContainer, NotFoundImg, NotFoundHeading} from './style'

import Header from '../Header'

const NotFound = () => (
  <div>
    <Header />
    <NotFoundContainer>
      <NotFoundImg
        src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png "
        alt="not found"
      />
      <NotFoundHeading>Page Not Found!!!!</NotFoundHeading>
    </NotFoundContainer>
  </div>
)

export default NotFound
