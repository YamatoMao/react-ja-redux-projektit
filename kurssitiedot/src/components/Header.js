import Content from "./Content";

const Header = ({course}) => {
    return (
        <div>
        <hr />
        <p>Header.js toimii.</p>
            <h1>{course.name}</h1>
            <Content course={course} />
        </div>
    );
}

export default Header;