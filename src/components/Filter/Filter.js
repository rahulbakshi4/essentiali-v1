import { BREADS, CHOCOLATES, CLEAR, COFFEE, HIGH_TO_LOW, LOW_TO_HIGH, PASTA_AND_NOODLES, PRICE_CHANGE, RATING, SPREADS_AND_JAM } from '../../constants/filterConstant'
import { useProductList } from '../../context/product-context'
import './filter.css'
const Filter = () => {
    const { state, dispatch } = useProductList()
    return (
        <aside className="filter-section">
            <div className="filter-head">
                <h3>Filter</h3>
                <button onClick={() => dispatch({ type: CLEAR })} className="btn btn-ghost">Clear</button>
            </div>
            <div>
                <h3 className="fw-bold text-large">Price</h3>
                <ul className="text-sm filter-lists slider">
                    <span>&#8377;1</span>
                    <li><input onChange={(e) => dispatch({ type: PRICE_CHANGE, payload: e.target.value })} type="range" min="1" value={state.priceValue} max="400" /></li>
                    <span>&#8377;400</span>
                </ul>
            </div>
            <div>
                <h3 className="fw-bold text-large">Sort By</h3>
                <ul className="text-sm filter-lists">
                    <li>
                        <label onClick={() => dispatch({ type: LOW_TO_HIGH })}><input checked={state.sortBy === LOW_TO_HIGH ? true : false} type="radio" name="sort" /> Price - Low to High</label>
                    </li>
                    <li>
                        <label onClick={() => dispatch({ type: HIGH_TO_LOW })}><input checked={state.sortBy === HIGH_TO_LOW ? true : false} type="radio" name="sort" /> Price - High to Low</label>
                    </li>

                </ul>
            </div>
            <div>
                <h3 className="fw-bold text-large">Category</h3>
                <ul className="text-sm filter-lists">
                    <li>
                        <label >
                            <input type="checkbox" checked={state.categories.breads || ''} onChange={(e) => dispatch({ type: BREADS })} /> Breads
                        </label>
                    </li>
                    <li>
                        <label >
                            <input type="checkbox" checked={state.categories.coffee || ''} onChange={(e) => dispatch({ type: COFFEE })} /> Coffee
                        </label>
                    </li>
                    <li>
                        <label >
                            <input type="checkbox" checked={state.categories.chocolates || ''} onChange={(e) => dispatch({ type: CHOCOLATES })} /> Chocolates
                        </label>
                    </li>
                    <li>
                        <label >
                            <input type="checkbox" checked={state.categories.spreads_jam || ''} onChange={(e) => dispatch({ type: SPREADS_AND_JAM })} /> Spreads & Jam
                        </label>
                    </li>
                    <li>
                        <label >
                            <input type="checkbox" checked={state.categories.pasta_noodles || ''} onChange={(e) => dispatch({ type: PASTA_AND_NOODLES })} /> Pasta & Noodles
                        </label>
                    </li>

                </ul>
            </div>
            <div>
                <h3 className="fw-bold text-large">Ratings</h3>
                <ul className="text-sm filter-lists">
                    <li>
                        <label>
                            <input type="radio" value={4} checked={state.rating === '4' ? true : false} onChange={(e) => dispatch({
                                type: RATING, payload: e.target.value
                            })} name="rating" /> 4 Stars & Above
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="radio" value={3} checked={state.rating === '3' ? true : false} onChange={(e) => dispatch({
                                type: RATING, payload: e.target.value
                            })} name="rating" /> 3 Stars & Above
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="radio" value={2} checked={state.rating === '2' ? true : false} onChange={(e) => dispatch({
                                type: RATING, payload: e.target.value
                            })} name="rating" /> 2 Stars & Above
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="radio" value={1} checked={state.rating === '1' ? true : false} onChange={(e) => dispatch({
                                type: RATING, payload: e.target.value
                            })} name="rating" /> 1 Stars & Above
                        </label>
                    </li>

                </ul>
            </div>

        </aside>
    )
}

export { Filter }
