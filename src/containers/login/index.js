// redux dependencies
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//page
import { Home } from "../../views/home";

//Store function
import { AC_LOGIN } from '../../store/AuthenticationReducer/action';

//React router dom
import { withRouter } from "react-router-dom"; 

const mapStateToProps = state => {
    return {
        authentication : state.authentication
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            userLogin : AC_LOGIN
        },
        dispatch
    );
};

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Home)
);
