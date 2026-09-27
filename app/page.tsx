import StudentCard from '@/components/StudentCard';

export default function Home() {
  return (
    <main className="bg-gray-100 flex items-center justify-center min-h-screen">
      <StudentCard 
        name="Chris Mary B. Mariscotes"
        course="BSIT"
        year="2nd Year"
      />
    </main>
  );
}