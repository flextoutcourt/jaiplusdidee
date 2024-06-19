import classNames from 'classnames';
import React from 'react';

export default function LicenceItem({licence}: any) {
  return (
    <div className={classNames(
        "bg-gray-200 rounded-lg p-2",
        licence.deleted && "bg-red-300"
    )}>
        <div className="flex flex-col">
            <p className="font-extrabold">{licence.type}</p>
            <p className="text-gray-600">{licence.DeliveredBy.Civilian.firstname} {licence.DeliveredBy.Civilian.lastname} (#{licence.DeliveredBy.matricule})</p>
        </div>
    </div>
  );
}
