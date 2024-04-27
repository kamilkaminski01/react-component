import './style.scss'
import FilledInfoIcon from 'assets/icons/filled-info-icon.svg'
import { InfoSectionProps } from './interface'
import classNames from 'classnames'

const InfoSection = ({ tagsAmount }: InfoSectionProps) => {
  const isPositive = tagsAmount >= 4
  const className = isPositive ? 'indicator__status--positive' : 'indicator__status--negative'

  const renderTagsAdvancement = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <li
        key={index}
        className={classNames('indicator__status-amount', {
          [className]: index < tagsAmount
        })}
      />
    ))
  }

  return (
    <div className="info-section">
      <div className="info-section__indicator">
        <span className={`info-section__indicator-title ${className}`}>
          {isPositive ? 'Dobrze' : 'Słabo'}
        </span>{' '}
        <ul className="indicator__status">{renderTagsAdvancement()}</ul>
      </div>
      {tagsAmount < 5 && (
        <div className="info-section__tags-info">
          <img src={FilledInfoIcon} />{' '}
          {`Zbyt mało tagów. Dodaj jeszcze ${5 - tagsAmount} aby poprawić
          widoczność artykułu`}
        </div>
      )}
    </div>
  )
}

export default InfoSection
