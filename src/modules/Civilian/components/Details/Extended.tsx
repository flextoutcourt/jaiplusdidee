import { Disclosure, DisclosureButton, DisclosurePanel, Tab, TabGroup, TabList, TabPanel, TabPanels, Transition } from '@headlessui/react';
import { ChevronDoubleDownIcon, ChevronDownIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { CriminalRecord } from '@prisma/client';
import classNames from 'classnames';
import { Fragment, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { User } from '../../../auth/types/AuthType';
import CarList from '../../../cars/components/CarList';
import Button from '../../../core/design-system/Button';
import useNavbarContext from '../../../core/hooks/useNavbarContext';
import { fetcher, groupByKey } from '../../../core/utils/functions';
import LicenceList from '../../../licences/components/LicenceList';
import WeaponList from '../../../weapons/components/WeaponList';

import { FaGun, FaCar, FaFolderOpen } from "react-icons/fa6";
import { TbCertificate } from "react-icons/tb";


const items = [
  {
    title: 'Licences',
    icon: <TbCertificate />
  },
  {
    title: 'Weapons',
    icon: <FaGun />
  },
  {
    title: 'Cars',
    icon: <FaCar />
  },
  {
    title: 'Testimonies',
    icon: <FaFolderOpen />
  }
]

export default function ExtendedDetails() {

    const {id} = useParams();
    const {setTitle, wanted, setWanted} = useNavbarContext();

    const {data} = useSWR<User>(`/api/civilians/${id}`, fetcher);

    useEffect(() => {
        if(data){
            setTitle(`${data.firstname} ${data.lastname}`)
        }
        setWanted(false)
    }, [data])

  return (
    <div className="flex flex-col relative">
      <TabGroup>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-3 lg:col-span-1 bg-white p-4 rounded-lg shadow-lg max-h-80">
            <div className="relative">
              <img src="https://picsum.photos/500/250" alt="" className="rounded-lg w-full max-h-24" />
              <img src="https://picsum.photos/96" alt="" className="rounded-full ring-4 ring-white mx-auto -mt-12 z-50 relative" />
            </div>
            <div className="flex w-full items-center justify-center gap-2 my-2">
              <p className="font-extrabold text-center text-md xl:text-xl">{data?.firstname} {data?.lastname}</p>
              {/* <CheckCircleIcon className="h-6 text-green-500" /> */}
              <XCircleIcon className="h-6 text-red-500" />
            </div>
            <p className="text-center my-2 hidden xl:block">{data?.alias && `(${data?.alias})`}</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mt-4 font-extrabold">
              <div className="flex lg:block justify-center text-center gap-4">
                <p className="text-indigo-500">{data?.Car.length ?? 0}</p>
                <p>Car{data?.Car.length !== 1 && "s"}</p>
              </div>
              <div className="flex lg:block justify-center text-center gap-4">
                <p className="text-indigo-500">{data?.Licence.length ?? 0}</p>
                <p>Licence{data?.Licence.length !== 1 && "s"}</p>
              </div>
              <div className="flex lg:block justify-center text-center gap-4">
                <p className="text-indigo-500">{data?.Weapon.length ?? 0}</p>
                <p>Weapon{data?.Weapon.length !== 1 && "s"}</p>
              </div>
              <div className="flex lg:block justify-center text-center gap-4">
                <p className="text-indigo-500">{(data?.CriminalCase && data?.CriminalCase?.Records?.length) ?? "0"}</p>
                <p>Records</p>
              </div>
            </div>
          </div>
          <div className="col-span-3 lg:col-span-2 bg-white rounded-lg shadow-lg max-h-80 overflow-auto">
            <div className="grid grid-cols-1 gap-2 mb-2 p-4">
              {data && data.CriminalCase ? Object.entries(groupByKey(data?.CriminalCase?.Records, 'caseId')).map(([key, items]) => (
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
            </div>
          </div>
          <div className="col-span-3 bg-white rounded-lg shadow-lg">
            <TabList className="flex justify-evenly gap-4">
              {items.map((item) => (
                <Tab as={Fragment}>
                  {({hover, selected}) => (
                    <div className="flex flex-col p-2 w-full">
                      <button className={classNames(
                        hover && "text-white bg-indigo-500",
                        selected && 'bg-indigo-500 text-white focus:ring-none focus:outline-none',
                        "p-2 rounded-lg outline-none flex items-center justify-center gap-2"
                      )}>
                        {item.icon}
                        {item.title}
                      </button>
                    </div>
                  )}
                </Tab>
              ))}
            </TabList>
          </div>
          <div className="col-span-3 bg-white rounded-lg shadow-lg p-3">
            <TabPanels>
              <TabPanel>
                {data && <LicenceList items={data?.Licence} />}
              </TabPanel>
              <TabPanel>
                {data && <WeaponList items={data?.Weapon} />}
              </TabPanel>
              <TabPanel>
                {data && <CarList items={data?.Car} />} 
              </TabPanel>
              <TabPanel>
                Testimonies
              </TabPanel>
            </TabPanels>
          </div>
        </div>
        <div className="absolute -top-2 -left-2">
          <Button variant='delete' onClick={() => setWanted(!wanted)}>{wanted ? "Revoke ": 'Issue an'} arrest warrant</Button>
        </div>
      </TabGroup>
    </div>
  );
}
