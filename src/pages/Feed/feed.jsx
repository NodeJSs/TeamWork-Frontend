import React from 'react'
import FormInput from '../../component/formInput/formInput'
import PostContainer from '../../component/post-container/post-container'
import { FaChevronDown} from 'react-icons/fa';
import {connect} from 'react-redux'
import { selectFeedItems} from '../../redux/feed/feed.selector'
import {createStructuredSelector} from 'reselect';
const Feed = ({feeds}) => (
  <div>
    <FormInput placeholder='Search' searchInput />
    <hr />

    <p className='big'>Recent <FaChevronDown className='icon-small' /></p>
    {
      feeds.map(feed =>
        <PostContainer feed={feed} key ={feed.id} />)
    }
  

  </div>
)

const mapStateToProp = createStructuredSelector({
feeds: selectFeedItems
})
export default connect(mapStateToProp)(Feed)
