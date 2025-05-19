import type { ProfileType } from './types';

export async function fetchProfile() {
  const data: ProfileType = await fetch('http://localhost:9000/profile').then(
    (res) => res.json()
  );

  return data;
}

export async function saveProfile(updatedProfile: ProfileType) {
  const data: ProfileType = await fetch('http://localhost:9000/profile', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedProfile),
  }).then((res) => res.json());

  return data;
}
