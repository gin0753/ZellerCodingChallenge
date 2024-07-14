import React, { memo } from 'react';
import { Avatar, Divider } from '@mui/material';
import { blue } from '@mui/material/colors';
import type { CustomerInfo, UserType } from '../../types';

const List = memo((props: { role: UserType | undefined, items: CustomerInfo[]}) => {
  const {
    role,
    items
  } = props;

  const renderInfo = (item: CustomerInfo) => {
      return (
        <div data-testid="cypress-userList-list" key={item.id} className="flex items-center gap-2 my-8">
          <Avatar 
            data-testid="cypress-userList-avatar"
            variant="rounded" 
            alt={`client ${item.name}'s initial`} 
            sx={{ bgcolor: blue[100] }}
          >
            {item.name.charAt(0)}
          </Avatar>
          <div>
            <h2>{item.name}</h2>
            <p className="text-xs text-slate-400">{role}</p>
          </div>
        </div>
      )
  };

  return (
    <>
      {role ? 
        <>
          <h2 data-testid="cypress-userList-title" className="text-xl font-semibold mt-6">{`${role} Users`}</h2>
          {items?.filter((item: CustomerInfo) => item.role === role.toUpperCase()).map(i => renderInfo(i))}
          <Divider sx={{ borderBottomWidth: 2 }}/>
        </> 
      : null}
    </>
  )
})

export default List;