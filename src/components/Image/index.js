import styles from './Image.module.css';

const Image = (props) => {
    return <img className={styles['main']} {...props}/>;
}

export default Image;