// app/questions/page.js
'use client';
import { useRouter } from 'next/router';

export default function QuestionsPage() {
  const router = useRouter();

  if (router.isReady) {
    const contactId = router.query.id;

    return (
      <div>
        <h1>Questions for Contact ID: {contactId}</h1>
        {/* Render different questions or content based on contactId */}
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}