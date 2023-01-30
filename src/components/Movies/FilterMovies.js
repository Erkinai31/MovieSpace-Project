export const FilterMovies = (props) => {

    function onFilterValueChanged(event){
        props.filterValueSelected(event.target.value)
    }
    

    return (
        <div className="filter_area">
            <select name='isAvailable' onChange={onFilterValueChanged} class="form-control" id="exampleFormControlSelect1">
                <option value='genre'>All</option>
                <option value='Drama'>Drama</option>
                <option value='Crime'>Crime</option>
                <option value='Comedy'>Comedy</option>
                <option value='Romance'>Romance</option>
                <option value='Documentary'>Documentary</option>
            </select>
        </div>
        
    );
}