import React, { useState } from 'react';
import { User } from '../../../auth/types/AuthType';
import Button from '../../../core/design-system/Button';
import { ChatBubbleOvalLeftEllipsisIcon, CheckIcon, ClipboardDocumentCheckIcon, EyeIcon, FolderIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import useSelected from '../../../core/hooks/useSelected';
import { Link } from 'react-router-dom';
import { Delete, Reintegrate } from '../../services/CivilianServices';
import { mutate } from 'swr';
import { FaGun, FaCar, FaFolderOpen } from "react-icons/fa6";
import { TbCertificate } from "react-icons/tb";
import { toast } from 'react-toastify';

interface DetailProps {
    civilian: User;
}

export default function Small({civilian}: DetailProps) {

    const {selected, setSelected} = useSelected();

    const handleChange = (e: any) => {
        if(e.target.checked){
            setSelected((old: User[]) => [...old, civilian]);
        }else{
            setSelected((old: User[]) => old.filter(item => item.uuid !== civilian.uuid))
        }
    }

    const isSelected = () => {
        return selected.find((item: User) => item.uuid === civilian.uuid)
    }

    const deleteItem = (e: any) => {
        Delete(civilian).then(() => {
            mutate('/api/civilians');
            toast.success("Agent successfully deleted")
        })
    }

  return (
    <div className={classNames(
        "rounded-lg shadow-md p-4 relative flex flex-col gap-4",
        isSelected() && "ring ring-indigo-500",
        civilian.deleted ? 'bg-red-300' : 'bg-white'
    )}>
        <p>{civilian.firstname} {civilian.lastname} <small>({civilian.alias})</small></p>
        <img src="https://picsum.photos/500" className="w-full aspect-video rounded-lg" />
        <div className="flex gap-4 text-indigo-500 font-bold">
            <div className="flex gap-2">
                <FaFolderOpen className="h-4" />
                <span className="text-xs">{civilian?.CriminalCase?.Records?.length ?? 0}</span>
            </div>
            <div className="flex gap-2">
                <TbCertificate className="h-4" />
                <span className="text-xs">{civilian?.Licence?.length ?? 0}</span>
            </div>
            <div className="flex gap-2">
                <FaGun className="h-4" />
                <span className="text-xs">{civilian?.Weapon?.length ?? 0}</span>
            </div>
            <div className="flex gap-2">
                <FaCar className="h-4" />
                <span className="text-xs">{civilian?.Car?.length ?? 0}</span>
            </div>
        </div>
        <div className="flex justify-between gap-2">
            <Button>
                <Link to={`/civilians/${civilian.uuid}`}>
                    <EyeIcon className="h-4" />
                    <span className="hidden 2xl:block">View</span>
                </Link>
            </Button>
            <Button variant='delete' onClick={deleteItem} >
                <TrashIcon className="h-4" />
                <span className="hidden 2xl:block">Delete</span>
            </Button>
        </div>
        <input type='checkbox' onChange={handleChange} checked={isSelected()} className="h-4 w-4 rounded border-gray-300 accent-indigo-600 focus:ring-indigo-600 absolute -top-1 -left-1" />
    </div>
  );
}
