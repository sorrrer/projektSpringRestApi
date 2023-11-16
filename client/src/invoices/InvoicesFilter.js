import React from 'react';
import InputSelect from '../components/InputSelect';
import InputField from '../components/InputField';

const InvoicesFilter = (props) => {

    const handleChange = (e) => {
        props.handleChange(e);
    };

    const handleSubmit = (e) => {
        props.handleSubmit(e);
    };

    const filter = props.filter;

    return (
        <div class="row">
            <div class="col">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col">
                            <InputSelect
                                name="buyerID"
                                items={props.buyerList}
                                handleChange={handleChange}
                                label="Kupující"
                                prompt="nevybrán"
                                value={filter.buyerID}
                            />
                        </div>
                        <div className="col">
                            <InputSelect
                                name="sellerID"
                                items={props.sellerList}
                                handleChange={handleChange}
                                label="Prodávající"
                                prompt="nevybrán"
                                value={filter.sellerID}
                            />
                        </div>
                     
                        <div className="col">
                            <InputField
                                type="text"
                                min="1"
                                name="product"
                                items={props.productList}
                                handleChange={handleChange}
                                label="Název produktu"
                                prompt="žádný produkt"
                                value={filter.product}
                            />
                        </div>
                    </div>
            
                    <div className="row">
                        <div className="col">
                            <InputField
                                type="number"
                                min="0"
                                name="minPrice"
                                handleChange={handleChange}
                                label="minimální cena"
                                prompt="neuvedena"
                                value={filter.minPrice ? filter.minPrice : ''}
                            />
                        </div>
            
                        <div className="col">
                            <InputField
                                type="number"
                                min="0"
                                name="maxPrice"
                                handleChange={handleChange}
                                label="maximální cena"
                                prompt="neuvedena"
                                value={filter.maxPrice ? filter.maxPrice : ''}
                            />
                        </div>
            
                        <div className="col">
                            <InputField
                                type="number"
                                min="1"
                                name="limit"
                                handleChange={handleChange}
                                label="Limit počtu faktur"
                                prompt="neuveden"
                                value={filter.limit ? filter.limit : ''}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <input
                                type="submit"
                                className="btn btn-outline-primary float-right mt-2"
                                value={props.confirm}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>    
    );
};

export default InvoicesFilter;
