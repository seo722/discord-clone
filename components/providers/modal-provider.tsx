'use client';

import { CreateServerModal } from '@/components/modals/create-server-modal';

import { useEffect, useState } from 'react';

export const ModalProvider = () => {
  const [ismounted, setismounted] = useState(false);

  useEffect(() => {
    setismounted(true);
  }, []);

  if (!ismounted) {
    return null;
  }

  return (
    <>
      <CreateServerModal />
    </>
  );
};
