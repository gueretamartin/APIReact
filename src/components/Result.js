import React from 'react';
import Imagen from './Image'
import Pagination from './Pagination'

class Result extends React.Component{

    showImages = () => {
         
        const imagenes = this.props.imagenes;
        if (imagenes.length === 0 ) return null ; 
        // console.log(imagenes);
        return(<React.Fragment>
            <div className = "col-12 p-5 row">
                {imagenes.map(img => (

                        <Imagen key= {img.id} image = {img} />

                )) }
            </div>
            <Pagination
            prev = {this.props.prev}
            next = {this.props.next}
            />
        </React.Fragment>); 
            
    };

    render(){
        return(

       <React.Fragment>
            { this.showImages() }
       </React.Fragment>

        )
    }
}

export default Result