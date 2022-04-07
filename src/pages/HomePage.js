import React from "react";
import ListCategory from "../components/ListCategory";
import Sliders from "../components/Slider";

import "./main.scss";

function HomePage() {
    // const { currentPage, setCurrentPage } = useContext(AppContext);
    // useEffect(() => {
    //   props.callbackFunc(HOME_PAGE);
    //   setCurrentPage(HOME_PAGE);
    // });

    return (
        <div>
            <div className="content">
                <Sliders />
                <ListCategory />
            </div>
        </div>
    );
}

export default HomePage;
