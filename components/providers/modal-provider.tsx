'use client';

import { useEffect, useState } from 'react';

import { CreateServerModal } from '@/components/modals/create-server-modal';
import { InviteModal } from '@/components/modals/invite-modal';
import { EditServerModal } from '@/components/modals/edit-server-modal';

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
      <InviteModal />
      <EditServerModal />
    </>
  );
};
