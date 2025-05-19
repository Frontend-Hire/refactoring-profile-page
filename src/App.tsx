import { useEffect, useState } from 'react';
import './App.css';
import ProfileDisplay from './features/profile/profile-display';
import ProfileForm from './features/profile/profile-form';
import type { ProfileType } from './features/profile/types';

function App() {
  const [profile, setProfile] = useState<ProfileType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const fakeData: ProfileType = {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        companyName: 'OpenAI',
      };
      setProfile(fakeData);
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleSave = (formData: ProfileType) => {
    setTimeout(() => {
      setProfile(formData);
      setEditMode(false);
    }, 1000);
  };

  if (!profile || isLoading) return <p>Loading profile...</p>;

  return (
    <main>
      <section className='section'>
        <h1>Profile Page</h1>
        {editMode ? (
          <ProfileForm initialFormData={profile} handleSave={handleSave} />
        ) : (
          <ProfileDisplay profile={profile} setEditMode={setEditMode} />
        )}
      </section>
    </main>
  );
}

export default App;
