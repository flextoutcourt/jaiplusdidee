import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

export default function WeaponItem({weapon}: any) {
  return (
    <div className={classNames(
        "bg-gray-200 rounded-lg p-2",
        weapon.deleted && "bg-red-300"
    )}>
        <div className="flex flex-col">
            <Link to={`/weapons/${weapon.uuid}`}>
                <p className="font-extrabold">{weapon.name}</p>
            </Link>
            <p className="cursor-pointer text-gray-500 mt-2" onClick={() => navigator.clipboard.writeText(weapon.uuid)}>{weapon.uuid}</p>
            <div className="border-t-2 border-gray-800 pt-2 mt-2">
                Evidence in {weapon.Evidence.length} case{weapon.Evidence.length !== 1 && 's'}
            </div>
        </div>
    </div>
  );
}
