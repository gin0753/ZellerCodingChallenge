import React, { type ChangeEvent } from 'react';
import { 
  Divider,
  FormControl, 
  FormControlLabel, 
  Radio, 
  RadioGroup
 } from '@mui/material';
import type { UserType } from '../../types';

export default function Type(props: { setRole: React.Dispatch<React.SetStateAction<UserType | undefined>>}) {
  const {
    setRole
  } = props;
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRole(e.target.value as UserType);
  }

  return (
    <>
      <h2 className="text-xl font-semibold">User Types</h2>
      <FormControl className="w-full">
        <RadioGroup
          className="my-8"
          onChange={handleChange}
          name="radio-buttons-group"
        >
          <FormControlLabel value="Admin" control={<Radio />} label="Admin" className="hover:bg-sky-50 rounded" />
          <FormControlLabel value="Manager" control={<Radio />} label="Manager" className="hover:bg-sky-50 rounded" />
        </RadioGroup>
      </FormControl>
      <Divider sx={{ borderBottomWidth: 2 }}/>
    </>
  )
}
