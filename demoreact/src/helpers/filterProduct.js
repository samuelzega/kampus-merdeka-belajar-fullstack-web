export default ({array, minValue}) => {
    return  array.filter(item => item.price > minValue)
}