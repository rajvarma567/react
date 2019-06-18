import React from 'react';

export class Product extends React.Component{
    render(){
        return (
            <div className="col-md-4">
                <div className="card text-center">
                    <div className="card-header">
                        {this.props.data.id}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.data.name}</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <button className="btn btn-primary" onClick = {
                                    ()=>{
                                        console.log('came after the button is clicked.. ')
                                       this.props.click(this.props.data);

                                    }
                                }>Detailsssssssss</button>
                         <input type="number" onChange={(event)=> {
  this.props.onChange(event.target.value);
                 }
                }
      />
                    </div>
                    <div className="card-footer text-muted">
                        {this.props.data.team}
                    </div>
                </div>
            </div>
            
        );
    }
}