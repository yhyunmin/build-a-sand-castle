import { FolderIcon } from 'lucide-react';

export const Recursive = () => {
  const folders = [
    { name: 'Movies', folders: [{ name: 'Action' }, { name: 'Comedy' }] },
    { name: 'Music' },
    { name: 'Pictures' },
    { name: 'Documents' },
  ];
  return (
    <>
      <div className="p-8 max-w-sm mx-auto">
        <ul>
          <li className="my-1.5">
            <span className="flex items-center gap-1.5">
              <FolderIcon className="size-6 text-sky-500" />
              Home
            </span>
            <ul className="pl-6">
              {folders.map((folder) => (
                <li className="my-1.5" key={folder.name}>
                  <span className="flex items-center gap-1.5">
                    <FolderIcon className="size-6 text-sky-500" />
                    {folder.name}
                  </span>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};
