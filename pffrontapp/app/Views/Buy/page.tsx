import Cards from '@/app/components/Cards/Cards';
import Link from 'next/link';
import React from 'react'

const page = () => {
    const properties = [
        {
          "Días": 30,
          "Tipo": "Compra",
          "Imagenes": [
            "https://media.istockphoto.com/id/1282518866/es/foto/representaci%C3%B3n-en-3d-de-la-casa-moderna-en-estilo-lujoso.jpg?s=612x612&w=0&k=20&c=EzPRo8zu8lnbMvW74tkywaLRb5gkLlsfNj0V6ZftYj4="
          ],
          "Titulo": "Casa en Buenos Aires",
          "Pais": "Argentina",
          "Ciudad": "Buenos Aires",
          "Calle": "Avenida Principal",
          "Numero": "456",
          "Piso": 1,
          "NumeroDepto": "A",
          "Precio": {
            "Monto": 250000,
            "Moneda": "USD"
          },
          "Descripcion": "Amplia casa en el corazón de Buenos Aires con jardín y garaje. 4 habitaciones, 2 baños y cocina moderna."
        },
        {
          "Días": 30,
          "Tipo": "Compra",
          "Imagenes": [
            "https://livingkits.com/wp-content/uploads/2021/03/capellania-exterior-1080x675-1.jpg",
          ],
          "Titulo": "Casa en Córdoba",
          "Pais": "Argentina",
          "Ciudad": "Córdoba",
          "Calle": "Calle Tranquila",
          "Numero": "789",
          "Piso": 1,
          "NumeroDepto": "B",
          "Precio": {
            "Monto": 180000,
            "Moneda": "USD"
          },
          "Descripcion": "Encantadora casa en Córdoba con amplio patio y piscina. 3 habitaciones, 2 baños y sala de estar luminosa."
        },
        {
          "Días": 30,
          "Tipo": "Compra",
          "Imagenes": [
            "https://www.planosdecasas3d.com/wp-content/uploads/2017/12/casa-moderna-de-4-dormitorios.jpg",
          ],
          "Titulo": "Casa en Mendoza",
          "Pais": "Argentina",
          "Ciudad": "Mendoza",
          "Calle": "Calle de la Montaña",
          "Numero": "123",
          "Piso": 2,
          "NumeroDepto": "C",
          "Precio": {
            "Monto": 220000,
            "Moneda": "USD"
          },
          "Descripcion": "Moderna casa en Mendoza con vistas a la montaña. 2 habitaciones, 2 baños y cocina equipada."
        },
        {
          "Días": 30,
          "Tipo": "Compra",
          "Imagenes": [
            "https://i.pinimg.com/564x/ed/b1/a3/edb1a3ad47d3410c0581f2685ea5bc57.jpg"
          ],
          "Titulo": "Casa en Rosario",
          "Pais": "Argentina",
          "Ciudad": "Rosario",
          "Calle": "Avenida Central",
          "Numero": "567",
          "Piso": 1,
          "NumeroDepto": "D",
          "Precio": {
            "Monto": 195000,
            "Moneda": "USD"
          },
          "Descripcion": "Elegante casa en Rosario con jardín y garaje. 4 habitaciones, 3 baños y sala de juegos."
        },
        {
          "Días": 30,
          "Tipo": "Compra",
          "Imagenes": [
            "https://i.pinimg.com/474x/ff/f8/94/fff8945a0c476cdd12e06c8a07dcc8f1.jpg"
          ],
          "Titulo": "Casa en La Plata",
          "Pais": "Argentina",
          "Ciudad": "La Plata",
          "Calle": "Calle Tranquila",
          "Numero": "890",
          "Piso": 1,
          "NumeroDepto": "E",
          "Precio": {
            "Monto": 210000,
            "Moneda": "USD"
          },
          "Descripcion": "Encantadora casa en La Plata con patio y zona de barbacoa. 3 habitaciones, 2 baños y amplio comedor."
        }
      ];

    return (
        <div>

<button>
        <Link href="/Views/home">Home</Link>
      </button>

<Cards properties={properties} />

        </div>
    )
}

export default page