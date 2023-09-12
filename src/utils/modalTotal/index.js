import * as ReactDOM from 'react-dom';
import { IsOpenStyle } from '../../pages/genrePage1/modal/openModalStyle';
import { CloseOutlined } from '@ant-design/icons';
import { SearchBoxGlobal } from '../search/style';
const ModalTotal = ({ head, children, onClick }) => {
    return ReactDOM.createPortal(
        <SearchBoxGlobal>
            <IsOpenStyle>
                <div className='modal-bg'>
                    <div className="modal-content">
                        <div className='modal-head'>
                            <p className='modal-title'>{head}</p>
                            <button className='close-btn' onClick={onClick}><CloseOutlined style={{fontSize: '16px', color: 'red'}}/></button>
                        </div>
                        {children}
                    </div>
                </div>
            </IsOpenStyle>
        </SearchBoxGlobal>,
        document.getElementById('portal')
    )
}
export default ModalTotal;
