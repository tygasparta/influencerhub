import React from 'react';
import { useNavigate } from 'react-router-dom';

const lessons = [
  {
    title: 'Lesson 1 - Types of Nouns - examples, differences etc.',
    audio: '/English Lessons/Lesson 1 - Types of Nouns - examples, differences etc.mp3',
  },
  {
    title: 'Pronouns Lesson - subject and object for 1st, 2nd & 3rd',
    doc: '/English Lessons/Pronouns Lesson - subject and object for 1st, 2nd & 3rd.pdf',
    notes: `SUBJECT PRONOUNS (used as the subject of a sentence):\n\n1. First Person\n   - Singular: I\n   - Plural: We\n   - Example: "I am going to the store."\n   - Example: "We are working on a project."\n\n2. Second Person\n   - Singular/Plural: You\n   - Example: "You are my best friend."\n\n3. Third Person\n   - Singular: He / She / It\n   - Plural: They\n   - Example: "He is reading a book."\n   - Example: "They are coming over tonight."\n\nOBJECT PRONOUNS (used as the object of a verb or preposition):\n\n1. First Person\n   - Singular: Me\n   - Plural: Us\n   - Example: "She gave me a gift."\n   - Example: "They invited us to the party."\n\n2. Second Person\n   - Singular/Plural: You\n   - Example: "I will help you with your homework."\n\n3. Third Person\n   - Singular: Him / Her / It\n   - Plural: Them\n   - Example: "I saw him at the park."\n   - Example: "She gave them a warm welcome."`,
  },
  {
    title: 'Pronouns Lesson - the 8 types, examples, brief descriptions',
    audio: '/English Lessons/Pronouns Lesson - the 8 types, examples, brief descriptions etc.mp3',
  },
  {
    title: 'The 8 Parts of Speech in English Language',
    doc: '/English Lessons/The 8 Parts of Speech in English Language.pdf',
  },
  {
    title: 'The 8 Parts of Speech in English',
    audio: '/English Lessons/The 8 Parts of Speech in English.mp3',
    notes: `In the English language, there are Eight Parts of Speech namely:\n\n1. Noun (names a person, place, thing, or idea)\n   - Example: cat, city, happiness\n\n2. Pronoun (replaces a noun)\n   - Example: he, she, it, they\n\n3. Verb (describes an action or state)\n   - Example: run, jump, is\n\n4. Adjective (describes or modifies a noun)\n   - Example: happy, blue, large\n\n5. Adverb (describes or modifies a verb, adjective, or other adverb)\n   - Example: quickly, very, well\n\n6. Preposition (shows the relationship between a noun/pronoun and other words)\n   - Example: in, on, under, between\n\n7. Conjunction (connects words, phrases, or clauses)\n   - Example: and, but, or, because\n\n8. Interjection (expresses strong emotion or surprise)\n   - Example: Wow! Oh! Help!\n\nThese parts of speech help structure sentences and convey meaning in communication.`,
  },
];

const Lessons = () => {
  const navigate = useNavigate();
  return (
    <section className="py-16 min-h-screen bg-muted/50">
      <div className="container mx-auto px-4 max-w-2xl">
        <button
          onClick={() => navigate('/')}
          className="mb-6 flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
          aria-label="Go to Home"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M4.5 10.5V21h15V10.5" />
          </svg>
          Home
        </button>
        <h2 className="text-4xl font-bold text-center mb-10">English Lessons</h2>
        <ul className="space-y-8">
          {lessons.map((lesson, idx) => (
            <li key={idx} className="bg-white rounded-xl shadow p-6 flex flex-col gap-2">
              <div className="font-bold text-lg mb-2">{lesson.title}</div>
              {lesson.doc && (
                <a href={lesson.doc} download className="text-blue-600 underline">Download Lesson Document</a>
              )}
              {lesson.audio && (
                <audio controls className="w-full mt-2">
                  <source src={lesson.audio} type="audio/mp3" />
                  Your browser does not support the audio element.
                </audio>
              )}
              {lesson.notes && (
                <pre className="bg-gray-100 rounded p-4 text-sm overflow-x-auto whitespace-pre-wrap mt-2">{lesson.notes}</pre>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Lessons; 