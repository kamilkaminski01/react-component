import './style.scss'
import SelectForm from 'components/molecules/SelectForm'
import SideMenu from 'components/atoms/SideMenu'

const Menu = () => {
  return (
    <div className="menu">
      <SideMenu />
      <SelectForm />
    </div>
  )
}

export default Menu
