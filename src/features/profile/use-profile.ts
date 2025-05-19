import { useQuery } from '@tanstack/react-query';
import { fetchProfile } from './api';

export default function useProfile() {
  return useQuery({
    queryKey: ['profile'],
    queryFn: fetchProfile,
  });
}
