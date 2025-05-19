import { useEffect, useState } from 'react';
import './App.css';
import { fetchProfile, saveProfile } from './features/profile/api';
import ProfileDisplay from './features/profile/profile-display';
import ProfileForm from './features/profile/profile-form';
import type { ProfileType } from './features/profile/types';

function App() {
  const [profile, setProfile] = useState<ProfileType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    fetchProfile().then((data) => {
      setProfile(data);
      setIsLoading(false);
    });
  }, []);

  const handleSave = (formData: ProfileType) => {
    setIsLoading(true);
    saveProfile(formData).then((savedData) => {
      setProfile(savedData);
      setEditMode(false);
      setIsLoading(false);
    });
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
