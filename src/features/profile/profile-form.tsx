import { useState } from 'react';
import type { ProfileType } from './types';

export default function ProfileForm({
  initialFormData,
  handleSave,
}: {
  initialFormData: ProfileType;
  handleSave: (formData: ProfileType) => void;
}) {
  const [formData, setFormData] = useState<ProfileType>({
    ...initialFormData,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className='profile-form'>
      <label htmlFor='firstName'>First Name:</label>
      <input
        type='text'
        id='firstName'
        name='firstName'
        value={formData.firstName}
        onChange={handleChange}
      />
      <label htmlFor='lastName'>Last Name:</label>
      <input
        type='text'
        id='lastName'
        name='lastName'
        value={formData.lastName}
        onChange={handleChange}
      />
      <label htmlFor='age'>Age:</label>
      <input
        type='number'
        id='age'
        name='age'
        value={formData.age}
        onChange={handleChange}
      />
      <label htmlFor='companyName'>Company:</label>
      <input
        type='text'
        id='companyName'
        name='companyName'
        value={formData.companyName}
        onChange={handleChange}
      />
      <button onClick={() => handleSave(formData)}>Save</button>
    </div>
  );
}
