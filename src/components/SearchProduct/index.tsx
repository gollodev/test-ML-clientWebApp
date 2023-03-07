import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from '../Loading';
import Breadcrumbs from '../Breadcrums';

export default function SearchProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState<any>({});
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        loadProductFromServer();
    }, [])

    const loadProductFromServer = (): void => {
        setIsLoading(true);
        axios.get(`http://localhost:5001/api/items/${id}`)
        .then((res) => {
            setIsLoading(false);
            setProduct(res.data);
        })
    }

    return (
        <>
            {isLoading && (<Loading/>)}
            {product.item && (
                <section>
                    <div className="body-content">
                        <section>
                        {/* <Breadcrumb categories={this.state.product.categories} /> */}
                        {product.categories ? (
                            <Breadcrumbs
                            categories={product.categories}
                            />
                        ) : ''}
                        </section>
                        <section className="product-body">
                        <div className="product-image">
                            <img
                                src={product.item.picture.secure_url}
                                alt="Imagen del Producto"
                            />
                        </div>
                        <div className="product-resume">
                            <div>
                            <small className="product-usage">
                                {product.item.condition === 'new'
                                ? 'Nuevo'
                                : 'Usado'}
                                <span>&nbsp;-&nbsp;</span>
                                {product.item.sold_quantity}
                                {' '}
                                vendidos
                            </small>
                            </div>
                            <p className="product-title">
                            {product.item.title}
                            </p>
                            <h2 className="product-resume__h2">
                            <span>{product.item.price.amount}</span>
                            <span className="meli-supra">
                                {product.item.price.decimals.toFixed(2)}
                            </span>
                            </h2>
                            <button type="button" className="product-resume__button">
                                Comprar
                            </button>
                        </div>
                        </section>
                    </div>
                    <div>
                        <div className="product-description">
                        <h3 className="description__h3">Descripción del producto</h3>
                        <p className="description__p">
                            {product.item.description}
                        </p>
                        </div>
                    </div>
                </section>
            )}
        </>
    )
}