import { FolderIcon } from 'lucide-react';

export const Recursive = () => {
  const folders = ['Movies', 'Music', 'Pictures'];
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
              <li className="my-1.5">
                <span className="flex items-center gap-1.5">
                  <FolderIcon className="size-6 text-sky-500" />
                  Movies
                </span>
              </li>
              <li className="my-1.5">
                <span className="flex items-center gap-1.5">
                  <FolderIcon className="size-6 text-sky-500" />
                  Music
                </span>
              </li>
              <li className="my-1.5">
                <span className="flex items-center gap-1.5">
                  <FolderIcon className="size-6 text-sky-500" />
                  Pictures
                </span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};
