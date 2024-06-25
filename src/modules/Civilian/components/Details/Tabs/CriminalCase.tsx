import React from 'react';
import useCivilian from '../../../hooks/useCivilian';
import { groupByKey } from '../../../../core/utils/functions';
import { Disclosure, DisclosureButton, DisclosurePanel, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import { CriminalRecord } from '@prisma/client';

export default function CriminalCase() {

    const {civilian} = useCivilian();

  return (
    <>
        {civilian && civilian.CriminalCase ? Object.entries(groupByKey(civilian?.CriminalCase?.Records, 'caseId')).map(([key, items]) => (
            <Disclosure>
            {({open}) => (
                <div className="relative">
                <DisclosureButton className="sticky top-0 flex items-center gap-2 bg-indigo-200 w-full p-2 mb-2 rounded-lg z-20">
                    <p className="text-indigo-600 font-extrabold">{items[0].Case.name.toLocaleUpperCase()}</p>
                    <ChevronDownIcon className={classNames("w-5 duration-200 text-indigo-600", open && 'rotate-180')} />
                </DisclosureButton>
                <Transition
                    show={open}
                    enter="transition-all ease-in-out duration-200 origin-top"
                    enterFrom="scale-y-50 opacity-0"
                    enterTo='scale-y-100 opacity-100'
                    leave='transition-all ease-in duration-200 origin-top'
                    leaveFrom='scale-y-100 opacity-100'
                    leaveTo='scale-y-50 opacity-0'
                >
                    <DisclosurePanel>
                    <div className="grid grid-cols-1 gap-2">
                        {items.map((item: CriminalRecord) => (
                        <div className={
                            classNames(
                            "bg-gray-200 rounded-lg p-2",
                            item.deleted && 'bg-red-200'
                            )
                        }>
                            <p className="font-extrabold">{item.reason.toLocaleUpperCase()}</p>
                            <p className="text-xs text-gray-500">
                            {item.content}
                            </p>
                        </div>
                        ))}
                    </div>
                    </DisclosurePanel>
                </Transition>
                </div>
            )}
            </Disclosure>
            )) : 
            <div>
                <p className="font-extrabold uppercase text-center">This user doesn't have a criminal case</p>
            </div>
            }
    </>
  );
}
