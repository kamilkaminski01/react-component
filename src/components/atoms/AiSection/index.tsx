import './style.scss'
import SparklesIcon from 'assets/icons/sparkles-icon.svg'
import PurpleSparklesIcon from 'assets/icons/sparkles-icon-purple.svg'
import PurpleTagIcon from 'assets/icons/tag-purple-icon.svg'

const AiSection = () => {
  return (
    <div className="ai-section">
      <div className="ai-section__header">
        <img src={SparklesIcon} className="purple" /> CMS AI
      </div>
      <div className="ai-section__item">
        <img src={PurpleSparklesIcon} /> Analizuj tekst
      </div>
      <div className="ai-section__item">
        <img src={PurpleTagIcon} /> Najbardziej popularne tagi
      </div>
    </div>
  )
}

export default AiSection
