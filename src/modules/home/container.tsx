import { connect } from "react-redux";
import * as selectors from "./selectors";
import * as actions from "./actions";
import Home from "./home";

const mapStateToProps = (state, ownProps) => {
  const popularHouses = selectors.getPopularHouses(state);

  return {
    popularHouses,
  };
};

const mapDispatchToProps = {
  onGetPopularHouses: actions.fetchPopularHouses,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
