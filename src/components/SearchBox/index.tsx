import { MouseEvent, KeyboardEvent, ChangeEvent, useState } from 'react';
import logoML from '../../assets/Logo_ML.png';
import searchIcon from '../../assets/ic_Search.png';

export default function SearchBox() {
    const [searchInput, setSearchInput] = useState<any>('');

    const onClickHandler = (e: MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        searchItems(searchInput);
    }
        
    const onKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
        if (e.key == 'Enter') {
            searchItems(searchInput);
        }
    }
        
    const searchItems = (value: string): void => {
        window.location = `/items?q=${searchInput}`;
        history.push(`/items?q=${searchInput}`);
    }

    return (
        <div className="header">
            <div className="header__container">
                <img
                    src={logoML}
                    className="header__logo"
                    alt="logo Mercado Libre"
                />
            <div className="search">
                <input
                    type="text"
                    className="search__input"
                    placeholder="Nunca dejes de buscar"
                    value={searchInput}
                    onChange={(e: ChangeEvent<HTMLInputElement>): void => setSearchInput(e.target.value)}
                    onKeyDown={onKeyDown}
                />
                    <button type="submit" className="search__button" onClick={onClickHandler}>
                        <img src={searchIcon} alt="Boton buscar" />
                    </button>
                </div>
            </div>
        </div>
    )
}

// import React from 'react';
// // import { browserRouter } from 'react-router';


// export default class SearchBox extends React.Component {
//   constructor() {
//     super();
//     this.onClickHandler = this.onClickHandler.bind(this);
//     this.onKeyDown = this.onKeyDown.bind(this);
//     this.searchItems = this.searchItems.bind(this);
//   }

//   onClickHandler(e) {
//     e.preventDefault();
//     this.searchItems();
//   }

//   onKeyDown(e) {
//     if (e.keyCode == 13) {
//       this.searchItems();
//     }
//   }

//   searchItems() {
//     const query = document.querySelector('.search__input').value;
//     window.location = `/items?q=${query}`;
//     //  history.push(`/items?q=${query}`);
//   }

//   render() {
//     return (
//       <div className="header">
//         <div className="header__container">
//           <img
//             src={logoML}
//             className="header__logo"
//             alt="logo Mercado Libre"
//           />
//           <div className="search">
//             <input
//               type="text"
//               className="search__input"
//               placeholder="Nunca dejes de buscar"
//               onKeyDown={this.onKeyDown}
//             />
//             <button type="submit" className="search__button" onClick={this.onClickHandler}>
//               <img src={searchIcon} alt="Boton buscar" />
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
