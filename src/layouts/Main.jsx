import {Header} from "../components/Header";
import {Footer} from "../components/Footer";

export const Main = (props) => {
    return (
        <div className="container">
            <Header></Header>
            {props.children}
            <Footer></Footer>
        </div>

    );
}