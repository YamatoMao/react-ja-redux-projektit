import Part from "./Part";

const Content = ({course}) => {
    return (
        <div>
        <hr />
        <p>Content.js toimii.</p>
            <Part course={course} osa='0'/>
            <Part course={course} osa='1'/>
            <Part course={course} osa='2'/>
        </div>
    );
}

export default Content;