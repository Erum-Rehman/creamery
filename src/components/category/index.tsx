import React from "react";
import './index.scss';
import categories from "../../mock/categories";

export default function Category() {
    return (
        <>
            <div className="App">
                <div className="body">
                    <div className="container-category">
                        <div className="row-category">
                            {
                                categories.map(category => <div className="category">
                                    {<div>
                                        <img src={`/${category.image}`} alt="Category Image" />
                                    </div>}
                                    <h5 className="category-title">{category.name}</h5>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}