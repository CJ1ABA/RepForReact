import { connect } from 'react-redux';
import { SimpleMenu } from '../../components';
import { Start } from '../../components';
import { ClickTheCheckBox } from '../../store';
import { makeStyles } from '@material-ui/core';
import { UCheckbox } from '../Check-Box'
import '../CSS/App.css';

const useStyles = makeStyles((theme) => {
    return {
        root: {
            maxHeight: '100vh',
            overflow: 'hidden',
            flexGrow: 1,
            background: theme.light.color,
        },
    }
})
function Home({ visible, actionClick, isLoggedIn, session }) {
    const style = useStyles();
    console.log(isLoggedIn)
    return (
        <div className={style.root}>
            <div className="topMenu">
                <SimpleMenu disable={!visible} />
                <UCheckbox actionClick={actionClick} checked={!visible} isLoggedIn={isLoggedIn} session={session} />
            </div>
            <hr />
            <Start className={'home-header'} mainTitle={"Please SIGN-IN or SIGN-UP! Powered by:"} />
        </div >
    )
}

function mapStateToProps(state) {
    return {
        visible: state.profile.isVisible,
        isLoggedIn: state.session.sessionWait
    }
};
function mapDispatchToProps(dispatch) {
    return {
        actionClick: () => dispatch(ClickTheCheckBox())
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
