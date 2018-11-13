import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addBloodCount } from "../../../../state/actions/blood-count.actions";
import AddBloodCount from "./add-blood-count.component";

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({ addBloodCount }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(AddBloodCount);
