import './NewProduct.css';
import ProductForm from './ProductForm';

function NewProduct(props)
{
    function printProductData2(data)
    {
        console.log("inside newProduct");
        console.log(data);
        //calling parent function
        props.printProductFunc(data);
    }

    return(
        <div className='new-product'>
            <ProductForm printProduct={printProductData2}></ProductForm>
        </div>
        
    );

}

export default NewProduct;