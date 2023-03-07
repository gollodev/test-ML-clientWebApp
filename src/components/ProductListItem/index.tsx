import { useNavigate } from 'react-router-dom';

export default function ProductListItem({ item }: any) {
    const navigate = useNavigate();

    const formatCurrency = (price: number): string => {
        return price.toLocaleString('es-AR', { 
            style: 'currency', 
            currency: item.currency_id
        });
    }

    return (
        <>
            <div className="product_list_item__container">
                <div className="product_list_item__table" onClick={() => navigate(`/items/${item.id}`)}>
                    <div className="product_list_item__image">
                        <img src={item.thumbnail} alt={item.thumbnail_id} />
                    </div>
                    <div className="product_list_item__details">
                        <div className="product_list_item__price">
                            <span>{formatCurrency(item.price)}</span>
                        </div>
                        <div className="product_list_item__title">
                            <span>{item.title}</span>
                        </div>
                    </div>
                </div>
                <div className="product_list_item__table_location">
                    <span>{item.seller_address.state.name}</span>
                </div>
            </div>
        </>
    )
}