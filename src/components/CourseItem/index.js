import {Link} from 'react-router-dom'
import {CourseList, Logo, Name} from './styled'

import './index.css'

const CourseItem = props => {
  const {details} = props
  const {id, name, logoUrl} = details
  return (
    <CourseList>
      <Link className="link-ele" to={`/courses/${id}`}>
        <Logo src={logoUrl} alt={name} />
        <Name>{name}</Name>
      </Link>
    </CourseList>
  )
}

export default CourseItem
