function SkillItem(props){
    const {count_stars} = props

    function generateStars(num){
        let array = []
        for(let i = 0; i < 10; i++){
           if (num > i){
            array.push('fa fa-star active')
           } else {
            array.push('')
           }
        }
        return array
    }
    let round = Math.round(count_stars)
    let stars_data = generateStars(round)

    return (
        <div className='skill_elem'>
            <div className='stars_wrapper'>
                {stars_data.map(elem => <span className={elem}></span>)}
            </div>
        </div>
    )
}  

export default SkillItem