import { connect } from "react-redux";
import * as selectors from "./selectors";
import * as actions from "./actions";
import MyInvestments from "./myInvestments";

const mapStateToProps = (state) => {
  const myInvestments = selectors.getMyInvestments(state);

  return {
    myInvestments,
  };
};

const mapDispatchToProps = {
  onGetMyInvestments: actions.fetchMyInvestments,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyInvestments);
