import './index.css'

const TabItem = props => {
  const {text, getCategory, activeTabId} = props
  const {tabId, displayText} = text

  const selectCategory = () => {
    getCategory(tabId)
  }

  const result = activeTabId === tabId ? 'active-button' : ''

  return (
    <li className="tab-list">
      <button
        className={`button ${result}`}
        type="button"
        onClick={selectCategory}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
