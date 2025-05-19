import { useState } from 'react';
import type { ProfileType } from './types';
import useUpdateProfileMutation from './use-update-profile-mutation';

export default function ProfileForm({
  initialFormData,
  onSave,
}: {
  initialFormData: ProfileType;
  onSave: () => void;
}) {
  const { mutate, isPending } = useUpdateProfileMutation({
    onSuccess: () => {
      onSave();
    },
  });

  const [formData, setFormData] = useState<ProfileType>({
    ...initialFormData,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    mutate(formData);
  };

  return (
    <form onSubmit={handleSave} className='profile-form'>
      <label htmlFor='firstName'>First Name:</label>
      <input
        type='text'
        id='firstName'
        name='firstName'
        required
        value={formData.firstName}
        onChange={handleChange}
      />
      <label htmlFor='lastName'>Last Name:</label>
      <input
        type='text'
        id='lastName'
        name='lastName'
        required
        value={formData.lastName}
        onChange={handleChange}
      />
      <label htmlFor='age'>Age:</label>
      <input
        type='number'
        id='age'
        name='age'
        required
        value={formData.age}
        onChange={handleChange}
      />
      <label htmlFor='companyName'>Company (Optional):</label>
      <input
        type='text'
        id='companyName'
        name='companyName'
        value={formData.companyName}
        onChange={handleChange}
      />
      <button disabled={isPending} type='submit'>
        Save
      </button>
    </form>
  );
}
