import Part from "./Part";

const Content = ({course}) => {
    console.log(course);
    let parts = course.parts;
    console.log(parts);
    return (
        <div>
        <hr />
        <p>Content.js toimii.</p>
        <ul>
            {parts.map(part =>
                <Part key={part.id} part={part} />
            )}
            {/* <Part course={course} osa="0" /> */}
            </ul>
        </div>
    );
}

export default Content;