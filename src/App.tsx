import { useEffect, useState } from 'react';
import './App.css';

type Profile = {
  firstName: string;
  lastName: string;
  age: number;
  companyName: string;
};

function App() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState<Profile>({
    firstName: '',
    lastName: '',
    age: 0,
    companyName: '',
  });

  useEffect(() => {
    setTimeout(() => {
      const fakeData: Profile = {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        companyName: 'OpenAI',
      };
      setProfile(fakeData);
      setFormData(fakeData);
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSave = () => {
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
          <div className='profile-form'>
            <label>
              First Name:
              <input
                name='firstName'
                value={formData.firstName}
                onChange={handleChange}
              />
            </label>
            <label>
              Last Name:
              <input
                name='lastName'
                value={formData.lastName}
                onChange={handleChange}
              />
            </label>
            <label>
              Age:
              <input
                name='age'
                type='number'
                value={formData.age}
                onChange={handleChange}
              />
            </label>
            <label>
              Company Name:
              <input
                name='companyName'
                value={formData.companyName}
                onChange={handleChange}
              />
            </label>
            <button onClick={handleSave}>Save</button>
          </div>
        ) : (
          <div className='profile-display'>
            <p>
              <strong>First Name:</strong> {profile.firstName}
            </p>
            <p>
              <strong>Last Name:</strong> {profile.lastName}
            </p>
            <p>
              <strong>Age:</strong> {profile.age}
            </p>
            <p>
              <strong>Company:</strong> {profile.companyName}
            </p>
            <button onClick={() => setEditMode(true)}>Edit Profile</button>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
