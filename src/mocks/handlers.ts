import { http, HttpResponse, delay } from 'msw';
import type { ProfileType } from '../features/profile/types';

const FAKE_PROFILE: ProfileType = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  companyName: 'OpenAI',
};

export const handlers = [
  http.get('http://localhost:9000/profile', () => {
    return HttpResponse.json(FAKE_PROFILE, { status: 200 });
  }),

  http.patch('http://localhost:9000/profile', async ({ request }) => {
    const updatedProfile = (await request.json()) as ProfileType;

    FAKE_PROFILE.firstName = updatedProfile.firstName;
    FAKE_PROFILE.lastName = updatedProfile.lastName;
    FAKE_PROFILE.age = updatedProfile.age;
    FAKE_PROFILE.companyName = updatedProfile.companyName;

    await delay(); // Simulates a network delay

    return HttpResponse.json(FAKE_PROFILE, { status: 200 });
  }),
];
