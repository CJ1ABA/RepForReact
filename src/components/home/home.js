import { connect } from 'react-redux';
import { SimpleMenu } from '../../components';
import { Start } from '../../components';
import { ClickTheCheckBox, UCheckbox } from '../../store';
import { makeStyles } from '@material-ui/core';
import '../CSS/App.css';

function Home({ visible, actionClick }) {
    const useStyles = makeStyles((theme) => {
        return {
            root: {
                flexGrow: 1,
                background: theme.light.color,
            },
        }
    })
    const style = useStyles();
    return (
        <div className={style.root}>
            <div className="topMenu">
                <SimpleMenu disable={visible} />
                <UCheckbox actionClick={actionClick} checked={visible} />
            </div>
            <hr />
            <Start className={'home-header'} mainTitle={"Let's send a message! Powered by:"} />
        </div >
    )
}

function mapStateToProps(state) {
    return {
        visible: state.profile.isVisible
    }
};
function mapDispatchToProps(dispatch) {
    return {
        actionClick: () => dispatch(ClickTheCheckBox())
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
