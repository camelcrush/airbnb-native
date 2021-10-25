import { connect } from "react-redux";
import MapContainer from "./MapContainer";

function mapStateToProps(state) {
  return { rooms: state.roomsReducer.explore.rooms };
}

export default connect(mapStateToProps)(MapContainer);
