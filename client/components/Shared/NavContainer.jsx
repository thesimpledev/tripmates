import { connect } from 'react-redux';
import Nav from './Nav';
import { logout } from '../../actions/session_actions';

const mapStateToProps = state => ({
  session: state.session
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);