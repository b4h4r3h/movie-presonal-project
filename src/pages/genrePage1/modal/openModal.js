// import * as ReactDOM from 'react-dom';
// import { IsOpenStyle } from "./openModalStyle";
// import { SearchBoxGlobal } from '../../../utils/search/style';
// import { CloseOutlined } from '@ant-design/icons';
// const IsOpen = ({ value, onChange, close, submit, title }) => {
//     return ReactDOM.createPortal(
//         <SearchBoxGlobal>
//             <IsOpenStyle>
//                 <div className='modal-bg'>
//                     <div className="modal-content">
//                         <div className='modal-head'>
//                             <p className='modal-title'>{title}</p>
//                             <div>
//                                 <button className='close-btn' onClick={close}><CloseOutlined style={{ fontSize: '16px', color: 'red' }} /></button>
//                             </div>
//                         </div>
//                         <div className='edit-input-btn'>
//                             <input
//                                 className='search-box'
//                                 value={value}
//                                 onChange={onChange}
//                             ></input>
//                             <button className='primary-btn' onClick={submit}>edit</button>
//                         </div>
//                     </div>
//                 </div>
//             </IsOpenStyle>
//         </SearchBoxGlobal>,
//         document.getElementById('portal')
//     )
// }
// export default IsOpen;