"use client"
import React, { ReactNode } from 'react';
import { useMediaQuery, Typography } from '@mui/material';


type MobileCheckProps = {
    children: ReactNode;
  };

const MobileCheck: React.FC<MobileCheckProps> = ({ children }) => {
  const isMobile = useMediaQuery('(max-width:600px)');

  if (isMobile) {
    return <Typography>Please visit this site with a desktop browser</Typography>;
  }

  return <>{children}</>;
};

export default MobileCheck;
