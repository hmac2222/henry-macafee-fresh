"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const IndexPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Always do navigations after the first render
    router.push('/step/0');
  }, []);

  // Render nothing here, we're just redirecting.
  return null;
};

export default IndexPage;
