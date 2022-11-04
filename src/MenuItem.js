const MenuItem = ({title,price,img,desc}) => {
    return (  
        <div className="menu-item mb-24 d-flex">
            <div className="img-container d-flex mr-12">
                <img src={img} alt={title} />
            </div>


            <div className="info">
                <div className="d-flex space-between align-center dotted">
                    <h4 className="l-spacing1">{title}</h4>
                    <h4 className="price">${price}</h4>
                </div>

                <p className="item-info fs-15 padB-10 padT-10">{desc}</p>
            </div>
        </div>
    );
}
 
export default MenuItem;