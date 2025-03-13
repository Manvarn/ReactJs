const Myproduct = (props)=>{
    console.log(props)
    let {id,title,image,price,description,category,rating} = props.items
    return( 
        <div key={props.items.id}>
            <h1>title :{props.items.title}</h1>
            <img src={props.items.image} alt="" height={300} width={300} />
            <h2>price :{props.items.price}</h2>
            <h3>description :{props.items.description}</h3>
            <h3>category :{props.items.category}</h3>
            <h3>rating :{props.items.rating.rate}</h3>
            <h3>count :{props.items.rating.count}</h3>

        </div>  
    );
}
export default Myproduct;
