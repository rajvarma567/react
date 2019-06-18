import React, {Component} from 'react';
import { Product } from './Product';


export class ProductList extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            selectedProducts:[],
            counter: 2,
            products:[   
                {
                    id:1,
                    name:'Vivo',
                    price:15000
                },
                {
                    id:2,
                    name:'Samsung',
                    price:20000
                },
                {
                    id:3,
                    name:'I-Phone',
                    price:40000
                }
            ]
        };
    }

 handleSubmit(data){
        this.setState(
        {
               selectedProducts: this.state.selectedProducts.concat([data]),
            products:this.state.products.filter(selectedProduct => data.id !== selectedProduct.id)
        }
        );     

    }
    handleChange(num){
        this.setState({
            counter: this.state.counter + Number("num")
        })
        console.log(this.state.counter)
    }
    render(){
                return (
                <div className="row">
                   <h1>Number of Products : {this.state.products.length}</h1>
                   {
                       this.state.products.map(product =>
                        <Product key={product.id} data = {product} click={this.handleSubmit}
                        onChange={this.handleChange}/>
                    )}
                </div>
            );
    }
}