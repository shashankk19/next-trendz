// import {BsSearch} from 'react-icons/bs'

import './index.css'

const FiltersGroup = props => {
  const renderRatingsFiltersList = () => {
    const {ratingsList} = props
    return ratingsList.map(eachRating => {
      const {changeRating, activeRatingId} = props
      const onClickRatingItem = () => {
        changeRating(eachRating.ratingId)
      }
      const ratingClassName =
        activeRatingId === eachRating.ratingId
          ? `and-up active-rating`
          : `and-up`
      return (
        <li
          className="rating-item"
          key={eachRating.ratingId}
          onClick={onClickRatingItem}
        >
          <img
            src={eachRating.imageUrl}
            alt={`rating ${eachRating.ratingId}`}
            className="rating-img"
          />
          <p className={ratingClassName}>& up</p>
        </li>
      )
    })
  }
  const renderRatingsFilters = () => (
    <div>
      <h1 className="rating-heading">Rating</h1>
      <ul className="ratings-list">{renderRatingsFiltersList()}</ul>
    </div>
  )
  const renderCategoryList = () => {
    const {categoryOptions} = props
    return categoryOptions.map(category => {
      const {changeCategory, activeCategoryId} = props
      const onClickCategoryItem = () => {
        changeCategory(category.categoryId)
      }
      const isActive = category.categoryId === activeCategoryId
      const categoryClassName = isActive
        ? `category-name active-category-name`
        : `category-name`
      return (
        <li
          className="category-item"
          onClick={onClickCategoryItem}
          key={category.categoryId}
        >
          <p className={categoryClassName}>{category.name}</p>
        </li>
      )
    })
  }
  const renderProductCategories = () => (
    <>
      <h1 className="category-heading">Category</h1>
      <ul className="categories-list">{renderCategoryList()}</ul>
    </>
  )

  const onEnterSearchInput = event => {
    const {enterSearchInput} = props
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  const {updateSearchInput} = props
  const onChangeSearchInput = event => {
    updateSearchInput(event)
  }

  const renderSearchInput = () => {
    const {searchInput} = props

    return (
      <div className="search-input-container">
        <input
          value={searchInput}
          type="search"
          className="search-input"
          placeholder="Search"
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
        />
        {/* <BsSearch className="search-icon" /> */}
      </div>
    )
  }
  const {clearFilters} = props
  return (
    <div className="filters-group-container">
      <div>
        {renderSearchInput()}
        {renderProductCategories()}
        {renderRatingsFilters()}
        <button
          type="button"
          className="clear-filters-btn"
          onClick={clearFilters}
        >
          Clear Filters
        </button>
      </div>
    </div>
  )
}

export default FiltersGroup
