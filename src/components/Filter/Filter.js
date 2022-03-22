import './filter.css'
const Filter = () => {
    return (
        <aside className="filter-section">
            <div className="filter-head">
                <h3>Filter</h3>
                <button className="btn btn-ghost">Clear</button>
            </div>
            <div>
                <h3 className="fw-bold text-large">Price</h3>
                <ul className="text-sm filter-lists slider">
                    <span>&#8377;1</span>
                    <li><input type="range" min="1" max="1000" /></li>
                    <span>&#8377;1000</span>
                </ul>
            </div>
            <div>
                <h3 className="fw-bold text-large">Category</h3>
                <ul className="text-sm filter-lists">
                    <li><input type="checkbox" /> Breads</li>
                    <li><input type="checkbox" /> Coffee</li>
                    <li><input type="checkbox" /> Chocolates</li>
                    <li><input type="checkbox" /> Spreads & Jam</li>
                    <li><input type="checkbox" /> Pasta & Noodles</li>

                </ul>
            </div>
            <div>
                <h3 className="fw-bold text-large">Ratings</h3>
                <ul className="text-sm filter-lists">
                    <li><input type="radio" name="rating" /> 4 Stars & Above</li>
                    <li><input type="radio" name="rating" /> 3 Stars & Above </li>
                    <li><input type="radio" name="rating" /> 2 Stars & Above</li>
                    <li><input type="radio" name="rating" /> 1 Stars & Above</li>

                </ul>
            </div>
            <div>
                <h3 className="fw-bold text-large">Sort By</h3>
                <ul className="text-sm filter-lists">
                    <li><input type="radio" name="sort" /> Price - Low to High</li>
                    <li><input type="radio" name="sort" /> Price - High to Low</li>

                </ul>
            </div>
        </aside>
    )
}

export { Filter }
