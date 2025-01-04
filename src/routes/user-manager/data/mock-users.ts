import { User } from '../types';

export const mockManagers: User[] = [
  { 
    id: '1', 
    email: 'manager1@company.com', 
    firstName: 'John', 
    lastName: 'Doe', 
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  { 
    id: '2', 
    email: 'manager2@company.com', 
    firstName: 'Jane', 
    lastName: 'Smith', 
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }
];

export const mockAssistants: User[] = [
  { 
    id: '1', 
    email: 'assistant1@company.com', 
    firstName: 'Alice', 
    lastName: 'Johnson', 
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  { 
    id: '2', 
    email: 'assistant2@company.com', 
    firstName: 'Bob', 
    lastName: 'Wilson', 
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }
];