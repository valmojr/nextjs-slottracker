'use client';
import { useContext } from 'react';
import { ProfileContext, ProfileContextProps } from '../context/Context';

export default function DashboardPage() {
  const { profile } = useContext(ProfileContext) as ProfileContextProps;
  return (
    <>
      <h1>Dashboard Page</h1>
      <h2>{profile?.username}</h2>
    </>
  );
}
