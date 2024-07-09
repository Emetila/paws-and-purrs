import style from './input.style.module.css';

export const CustomInput = (props) => {
    return (<>
    <div className={style['input']}>
        {/* <label>"Email address or username"</label> */}
        <input {...props} className={style['input-field']} />
    </div>
    </>)
}