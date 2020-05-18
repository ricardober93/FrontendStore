import React, { useEffect } from 'react';
import { useRouter } from 'next/router'

const ProductoId = () => {

    const router = useRouter();
    const { query: { productoId } } = router;
    const { query } = router;

    /* console.log('router', router);
    console.log('query', query)
    console.log('ProductoId', productoId) */

    useEffect(() => {
        if(productoId){
            console.log('router', router);
            console.log('query', query)
            console.log('ProductoId', productoId)
        }
    }, [productoId])

    return ( 
        <div>
            <h1>[ProductoId] {productoId}</h1>
        </div>
     );
}
 
export default ProductoId