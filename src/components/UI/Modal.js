import ReactDom from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = (props) => {
    return <div  onClick={props.hideCart} className={classes.backdrop}></div>
};

const Overlay = (props) => {
    return (
    <div className={classes.modal}>
        <div>{props.children}</div>
    </div>)
};


const Modal = (props) => {
    return <>
        {ReactDom.createPortal(<Backdrop  hideCart={props.hideCart} />, document.getElementById('overlay'))}
        {ReactDom.createPortal(<Overlay> {props.children} </Overlay>  , document.getElementById('overlay'))}
    </>
}

export default Modal;