'use client';

import { FileText, FileImage } from 'lucide-react';
import { Button } from '@/components/ui/button';

const RecentOrder = ({ files }: { files: { id: string; name: string; type: string; size: string; date: string }[] }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Recent Order</h3>
        <Button variant="outline" size="sm" className="text-gray-800 border border-gray-300">See more</Button>
      </div>

      <div className="w-full overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-500 text-sm border-b">
              <th className="pb-2">File Name</th>
              <th className="pb-2">Date</th>
              <th className="pb-2 text-right">Size</th>
            </tr>
          </thead>
          <tbody>
            {files.map((file) => (
              <FileRow key={file.id} file={file} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const FileRow = ({ file }: { file: { name: string; type: string; size: string; date: string } }) => {
  const getFileIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return <FileText className="text-red-500" />;
      case 'xd':
        return <FileImage className="text-pink-500" />;
      case 'figma':
        return <FileImage className="text-purple-500" />;
      case 'mp3':
        return <FileImage className="text-orange-500" />;
      case 'excel':
        return <FileText className="text-green-500" />;
      default:
        return <FileText className="text-blue-500" />;
    }
  };

  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="py-3 flex items-center gap-3">
        <span className="w-8 h-8 flex items-center justify-center">{getFileIcon(file.type)}</span>
        <span className="font-medium">{file.name}</span>
      </td>
      <td className="py-3 text-gray-500">{file.date}</td>
      <td className="py-3 text-right text-gray-500">{file.size}</td>
    </tr>
  );
};

export default RecentOrder;
