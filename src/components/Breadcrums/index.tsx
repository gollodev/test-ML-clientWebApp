import React from 'react'

export default function Breadcrums({ categories }: any) {
    return (
        <section className="meli-breadcrum-list">
            {categories.map((category: any) => <span key={category.id} className="meli-breadcrum-list-item">{category.name}</span>)}
        </section>
    );
}
