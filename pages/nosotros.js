import React from 'react';
import Link from 'next/link'

const Nosotros = () => {

    let number1 = 1;
    let number2 = 2;

    return ( 
        <div>
            <h1>Nosotros</h1>

            <Link href="/producto/[productoId]" as={`/producto/${number1}`} >Producto 1</Link>
            <br/>
            <Link href="/producto/[productoId]" as={`/producto/${number2}`} >Producto 2</Link>
        </div>
     );
}
 
export default Nosotros;