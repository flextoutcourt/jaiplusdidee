import classNames from 'classnames';
import React from 'react';
import {motion} from "framer-motion"

export default function BackupItem({backup}: any) {
  return (
    <motion.div className={classNames(
        backup.type === 1 ? 'bg-green-200':
        backup.type === 2 ? 'bg-orange-200 ':
        backup.type === 3 ? "bg-red-200" : 'bg-gray-200',
        "p-2 rounded-lg shadow-md relative flex items-end justify-between"
    )}
      initial={{opacity:0, right: -100, scale: 0.75}}
      animate={{opacity:1, right:0, scale: 1}}
      transition={{duration: 0.5}}
    >
        <div className="flex flex-col">
            <p className="text-sm font-bold">Backup DOA (#15)</p>
            <p className="text-xs">{backup.titre}</p>
        </div>
        <p>Reese Kronos #113</p>
    </motion.div>
  );
}
