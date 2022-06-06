import React from "react";
import Content from "./Content";
import {connect} from "react-redux";
import {getStatus, getUserProfile, savePhoto, updateStatus} from "../../redux/profile-reducer.tsx";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return (
            <Content {...this.props}
                     isOwner={!this.props.match.params.userId}
                     profile={this.props.profile} status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     savePhoto={this.props.savePhoto}/>
        )
    }
}


let mapStateToProps = (state) => ({
    profile: state.PostsPage.profile,
    status: state.PostsPage.status
});

export default compose(
    connect(mapStateToProps, {getUserProfile, savePhoto, getStatus, updateStatus}),
    withRouter,
    //withAuthRedirect
)(ProfileContainer);