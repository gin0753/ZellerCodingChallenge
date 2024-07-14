import React, { useState } from 'react';
import List from './List';
import Type from './Type';
import type { CustomerInfo, UserType } from '../../types/index';
import { fetchCustomers } from '../../apis/customerApi';
import { useQuery } from 'react-query';
import { Box, CircularProgress } from '@mui/material';

export default function UserInfo() {
  const [role, setRole] = useState<UserType>();
  const { data: clientList, isLoading, error } = useQuery({
    queryKey: ['launches'],
    queryFn: fetchCustomers,
    staleTime: Infinity
  });
  const items: CustomerInfo[] = clientList?.listZellerCustomers.items || [];
  const props = {
    role,
    items
  }
  
  const renderPage = (children: JSX.Element) => {
    return (
      <Box className="flex items-center justify-center h-screen sm:h-[calc(100vh_-_1rem)]">
        {children}
      </Box>
    )
  }
  if (error instanceof Error) return renderPage(<pre data-testid="cypress-userInfo-error">{error.message}</pre>);

  return (
    <div className="container bg-black flex justify-center p-2">
      <div className="w-full sm:w-3/5 bg-white flex flex-wrap justify-center overflow-y-auto">
        {isLoading ? 
        renderPage(<CircularProgress />)
        : 
        <div className="w-4/5 p-10 h-screen sm:h-[calc(100vh_-_1rem)]">        
          <Type setRole={setRole}/>
          <List {...props} />
        </div>}
      </div>
    </div>
  )
}
