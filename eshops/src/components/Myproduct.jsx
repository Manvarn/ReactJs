const Myproduct =(props)=>{
    console.log(props)
    let {id,title,image,price,description,category,rating} = props.items  //object destructuring
    return (
        // <div key={props.items.id}>
        //         <h1>title :{props.items.title}</h1>
        //         <img src={props.items.image} alt="" height={300} width={300} />
        //         <h3>price :{props.items.price}</h3>
        //         <h3>description :{props.items.description}</h3>
        //         <h3>category :{props.items.category}</h3>
        //         <h2>rating:{props.items.rating.rate}</h2>    
        //         <h2>count :{props.items.rating.count}</h2>
        // </div>
        <div key={id}>
            
                <h1>title :{title}</h1>
                <img src={image} alt="" height={300} width={300} />
                <h3>price :{price}</h3>
                <h3>description :{description}</h3>
                <h3>category :{category}</h3>
                <h2>rating:{rating.rate}</h2>
                <h2>count :{rating.count}</h2>
        </div>
    );
}
export default Myproduct;   