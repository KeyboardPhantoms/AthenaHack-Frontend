const DisplayCard = ({ item, price, beforePrice, discount }) => {
    return (
        <div>
            <div><img src={item.image} alt="" /></div>
            <div>
                <div style={{ fontSize: '1.25rem', fontWeight: '600' }}>{item.name}</div>
                <div>
                    <strike>{beforePrice}</strike>&nbsp;
                    <span>{price}</span>
                </div>
                <div>{item.author}</div>
                <div>{item.genre}</div>
                <div>{item.description}</div>
                <div>Buy</div>
                <div>Rent</div>
            </div>
        </div>
    );
};

export default DisplayCard;