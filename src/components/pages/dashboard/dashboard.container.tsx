import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addBloodCount, getBloodCounts } from "../../../state/actions/blood-count.actions";
import BloodCountDashboard from "./dashboard.component";

const mapStateToProps = (state: any) => {
  return {
    summaries: state.bloodCounts
  };
};

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({ addBloodCount, getBloodCounts }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BloodCountDashboard);
