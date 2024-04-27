import './style.scss'
import TagForm from 'components/organisms/TagForm'
import SideMenu from 'components/atoms/SideMenu'

const Menu = () => {
  return (
    <div className="menu">
      <SideMenu />
      <TagForm />
    </div>
  )
}

export default Menu
