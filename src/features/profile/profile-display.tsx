import type { ProfileType } from './types';

export default function ProfileDisplay({
  profile,
  setEditMode,
}: {
  profile: ProfileType;
  setEditMode: (value: boolean) => void;
}) {
  return (
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
  );
}
