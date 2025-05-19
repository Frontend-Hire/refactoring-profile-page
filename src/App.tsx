import { useState } from 'react';
import './App.css';
import ProfileDisplay from './features/profile/profile-display';
import ProfileForm from './features/profile/profile-form';
import useProfile from './features/profile/use-profile';

function App() {
  const [editMode, setEditMode] = useState(false);
  const { data: profile, isLoading, isError } = useProfile();

  if (isLoading) return <p>Loading profile...</p>;

  if (!profile) return <p>No profile found</p>;

  if (isError) return <p>Error loading profile</p>;

  const onSave = () => {
    setEditMode(false);
  };

  const onEnableEditMode = () => {
    setEditMode(true);
  };

  return (
    <main>
      <section className='section'>
        <h1>Profile Page</h1>
        {editMode ? (
          <ProfileForm initialFormData={profile} onSave={onSave} />
        ) : (
          <ProfileDisplay
            profile={profile}
            onEnableEditMode={onEnableEditMode}
          />
        )}
      </section>
    </main>
  );
}

export default App;
