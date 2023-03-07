import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Loading from '../Loading';
import Breadcrumbs from '../Breadcrums';
import ProductListItem from '../ProductListItem';
import NotFound from '../NotFound';

export default function ProductList() {
    const [items, setItems] = useState<any>([]);
    const [categories, setCategories] = useState<any>({});
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const location = useLocation();

    useEffect(() => {
        loadProductsFromServer()
    }, [])

    const loadProductsFromServer = (): void => {
        const queryParam = location.search.substring(3);
        console.log('queryparams', queryParam)
        setIsLoading(true);
        //this.setState({ isLoading: true });
        
        axios.get(`http://localhost:5001/api/items?q=${queryParam}`)
        .then((res) => {
            setItems(res.data.items);
            setCategories(res.data.categories);
            setIsLoading(false);
        });
    }

    return (
        <>
            {isLoading && (<Loading />)}
            {isLoading || (
                <section>
                    {categories.path_from_root ? (
                        <Breadcrumbs
                            categories={categories.path_from_root}
                        />
                    ) : ''}
                    <section className="item-results">
                        {items.map((item: any) => (
                            <ProductListItem key={item.id} item={item} />
                        ))}
                        {(items.length === 0) && <NotFound />}
                    </section>
                </section>
            )}
        </>
    )
}


// export default class ProductList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { items: [], categories: {}, isLoading: false };
//   }

//   componentDidMount() {
//     this.loadProductsFromServer();
//   }

//   loadProductsFromServer() {
//     const queryParam = this.props.location.search.substring(3);
//     this.setState({ isLoading: true });

//     axios.get(`http://localhost:8080/api/items?q=${queryParam}`)
//       .then((res) => {
//         this.setState({
//           items: res.data.items,
//           categories: res.data.categories,
//           isLoading: false
//         });
//       });
//   }

//   render() {
//     if (!this.state.isLoading) {
//       return (
    //     <section>
    //       {this.state.categories.path_from_root ? (
    //         <Breadcrumbs
    //           categories={this.state.categories.path_from_root}
    //         />
    //       ) : ''}
    //       <section className="item-results">
    //         {this.state.items.map(item => (
    //           <ProductListItem key={item.id} item={item} />
    //         ))}
    //         {(this.state.items.length === 0) && <NotFound />}
    //       </section>
    //     </section>
    //   );
    // }
//     return <Loading />;
//   }
// }
