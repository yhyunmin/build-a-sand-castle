import { FolderIcon } from 'lucide-react';

export const Recursive = () =>{
  return (
  <>
    <div className="p-8 max-w-sm mx-auto">
      <ul>
        <li className="my-1.5">
          <span className="flex items-center gap-1.5">
          <FolderIcon className="size-6 text-sky-500"/>
            Home
          </span>
        </li>
      </ul>
    </div>
  </>
  )
}
