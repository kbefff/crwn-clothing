import { createSelector } from 'reselect';

const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackers: 3,
    womens: 4,
    mens: 5
} //pass in url string and use as dynmaic value

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollection = collectionUrlParam => 
createSelector(
    [selectCollections],
    collections => collections.find(
        collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
)