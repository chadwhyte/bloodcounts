import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import { terms } from "../../../locale/terms";
import { addBloodCount, getBloodCounts } from "../../../state/actions/blood-count.actions";
import BloodCountDashboard from "./dashboard.component";

// const mapConfigToProps = () => {
//   return terms;
// };

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
  // mapConfigToProps
)(BloodCountDashboard);
