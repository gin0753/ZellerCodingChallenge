import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import UserInfo from './pages/UserInfo/UserInfo.tsx'

export default function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <UserInfo />
    </QueryClientProvider>
  )
}
