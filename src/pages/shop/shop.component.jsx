import React from 'react';



import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
const ShopPage =({ collections }) => (
    <div className ='shop-page'>
        {
            collections.map(({id, ...otherColletionProps}) => (
                <CollectionsOverview key ={id}{...otherColletionProps} />
            ))
        }
    </div>
);


export default ShopPage;