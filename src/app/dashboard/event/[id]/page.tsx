import { Suspense } from 'react';

interface EventPageProps {
  params: {
    id: string;
  };
}

export default function EventPage({ params }: EventPageProps) {
  const { id } = params;

  return (
    <Suspense fallback={<p>Carrendo em suspense</p>}>
        <h1>Event id: {id}</h1>
    </Suspense>
  );
}
