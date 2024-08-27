import { useContext } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { AuthContext } from "../../providers/AuthProvider";


const Blog = () => {
    const { dark, setDark } = useContext(AuthContext);

    const containerStyle = {
        backgroundColor: dark ? '#333333' : '#ffffff',
        color: dark ? '#ffffff' : '#333333',
    };
    return (
        <div style={containerStyle} className="p-14">
            <SectionTitle heading={"Blog"} subHeading={"Understanding Controlled and Uncontrolled Components in React"}></SectionTitle>
            <h1>blog</h1> <br />

            <h2 className="text-2xl">Understanding Controlled and Uncontrolled Components in React</h2>
            <br />
            <p>In React, managing the state of form inputs is crucial for building dynamic and interactive user interfaces. React offers two primary ways to handle form data: controlled and uncontrolled components. This article will explore the differences between these two approaches and provide insights into when to use each one.

            </p>
            <h2>Why Use PropTypes?</h2><br />
            <li>
                <ol><span className="font-bold">Early Bug Detection:</span> Early Bug Detection: Catch errors during development rather than runtime.</ol>
                <ol><span className="font-bold">Self-Documentation:</span>  Provides clear expectations for how components should be used.</ol>
                <ol><span className="font-bold">Improved Code Quality:</span> Encourages proper data handling practices.</ol>
            </li>
            <h2>Controlled Components</h2>
            <p>Controlled components are input elements whose values are controlled by React's state. The form data is handled by the component’s state, making React the “single source of truth.”</p>

            <h2>Benefits:</h2>
            <li>
                <ul>Easier to enforce validation.</ul>
                <ul>More predictable and easier to debug, as the state is always synchronized with the UI.</ul>
            </li>
            <h1>Uncontrolled Components</h1>
            <p>Uncontrolled components are input elements that manage their own state internally. The form data is handled by the DOM itself rather than React.</p>

            <h2>Benefits:</h2>
            <li>
                <ul>Simpler to set up, especially for forms with minimal state management.</ul>
                <ul>Can be useful for scenarios where React’s state management is unnecessary.</ul>
            </li>


        </div>
    );
};

export default Blog;