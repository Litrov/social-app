import classes from './MyPosts.module.css';

function MyPosts(props) {
    return (
        <div className={classes.MyPosts}>
            <div>{props.message}</div>
            <div>

            </div>
        </div>
    );
}

export default MyPosts;
