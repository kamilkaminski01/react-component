import './style.scss'
import InfoIcon from 'assets/icons/info-icon.svg'
import ChatIcon from 'assets/icons/chat-icon.svg'
import SettingsIcon from 'assets/icons/settings-icon.svg'
import TagIcon from 'assets/icons/tag-icon.svg'
import AddIcon from 'assets/icons/add-icon.svg'

const SideMenu = () => {
  return (
    <div className="side-menu">
      <img src={InfoIcon} />
      <img src={ChatIcon} />
      <img src={SettingsIcon} />
      <img src={TagIcon} />
      <img src={AddIcon} />
    </div>
  )
}

export default SideMenu
