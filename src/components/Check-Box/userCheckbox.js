import { firebaseApp } from '../../api';
import { Loader } from '../logo/loader';
export function UCheckbox({ actionClick, checked, isLoggedIn, session }) {
    return (
        < div
            style={{
                flexGrow: '1',
                justifyContent: 'space-around',
                alignItems: 'center',
                display: 'flex',
                color: '#61dafb',
                width: '33%',
            }}
        >
            <label>
                <input type="checkbox" style={{ marginRight: '8px' }} onClick={actionClick} checked={!checked} />Нажимая ЗДЕСЬ Вы получаете доступность кнопки меню.</label>
            {!isLoggedIn ? (session?.email && (
                <p style={{ cursor: 'pointer', color: '#61dafb', fontSize: '18px' }}
                    onClick={function () { firebaseApp.auth().signOut() }} > Выход({session.email})</p>)) : <Loader />}


        </div >
    )
}