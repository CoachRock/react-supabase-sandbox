"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useState } from 'react';
import type { User } from '../types';

interface UserTableProps {
  users: User[];
  onEdit: (user: User) => void;
}

export function UserTable({ users, onEdit }: UserTableProps) {
  const [deleteHover, setDeleteHover] = useState<string | null>(null);

  return (
    <div className="overflow-hidden rounded-lg border">
      <Table>
        <TableHeader className="bg-black dark:bg-[#ABABAB] rounded-t-md">
          <TableRow className="hover:bg-transparent">
            <TableHead className="w-[300px] text-white dark:text-black font-semibold">Name</TableHead>
            <TableHead className="text-white dark:text-black font-semibold">E-Mail Address</TableHead>
            <TableHead className="text-white dark:text-black font-semibold text-center">Status</TableHead>
            <TableHead className="w-[200px] text-center text-white dark:text-black font-semibold">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id} className="h-12">
              <TableCell className="py-2">
                <div className="flex items-center gap-3">
                  {user.status === 'active' && (
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user.avatar} alt={`${user.firstName} ${user.lastName}`} />
                      <AvatarFallback>{user.firstName[0]}{user.lastName[0]}</AvatarFallback>
                    </Avatar>
                  )}
                  <span>{user.lastName}, {user.firstName}</span>
                </div>
              </TableCell>
              <TableCell className="py-2">{user.email}</TableCell>
              <TableCell className="py-2 text-center">
                <Badge className={
                  user.status === 'active' 
                    ? 'bg-green-500 hover:bg-green-600' 
                    : 'bg-yellow-500 hover:bg-yellow-600'
                }>
                  {user.status === 'active' ? 'Active' : 'Invite Sent'}
                </Badge>
              </TableCell>
              <TableCell className="py-2">
                <div className="flex justify-center items-center gap-2">
                  <Button
                    size="sm"
                    className="bg-blue-500 hover:bg-blue-600 text-white dark:text-white"
                    onClick={() => onEdit(user)}
                  >
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    className={`bg-blue-500 text-white dark:text-white transition-colors duration-200 ${
                      deleteHover === user.id ? 'bg-red-500 hover:bg-red-600' : 'hover:bg-blue-600'
                    }`}
                    onMouseEnter={() => setDeleteHover(user.id)}
                    onMouseLeave={() => setDeleteHover(null)}
                    onClick={() => console.log('Delete user:', user.id)}
                  >
                    Delete
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}