import React from 'react';
import './shop-page.styles.scss';
import SHOP_DATA from './shopdata';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            collections:SHOP_DATA
        }
    }
    render(){
        const {collections}=this.state;
        return(
            <div className='shop-page'>
                {
                    collections.map(({id,...otherscollectionprops})=>(
                        <CollectionPreview key={id} {...otherscollectionprops}/>
                    ))
                }

            </div>
        )
    }
}
export default ShopPage;