import ExploreContainer from "./ExploreContainer";
import { getRooms } from "../../../redux/roomsSlice";
import { connect } from "react-redux";

function mapDispatchToProps(dispatch) {
  return {
    getRooms: () => dispatch(getRooms()),
  };
}

function mapStateToProps(state) {
  return state.roomsReducer.explore;
}

export default connect(mapStateToProps, mapDispatchToProps)(ExploreContainer);
