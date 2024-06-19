import React from 'react';
import { Link } from 'react-router-dom';
import { CarType } from '../types/CarType';

export default function CarItem({item}: {item: CarType}) {
  return (
    <div className="bg-gray-200 rounded-lg p-2">
        <div className="flex flex-col gap-2">
            <Link to={`/car/${item.uuid}`} className="font-extrabold">{item.brand} {item.model}</Link>
            <p className="text-gray-600">{item.immat}</p>
        </div>
    </div>
  );
}
