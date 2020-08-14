import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionsLoaded } from '../../../redux/shop/shop.selector';

import WithSpinner from '../../with-spinner/with-spinner.component';
import CollectionPage from '../collection/collection.component';

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionsLoaded(state),
});

const CollectionPageContainer = compose(
	connect(mapStateToProps),
	WithSpinner
)(CollectionPage);

export default CollectionPageContainer;