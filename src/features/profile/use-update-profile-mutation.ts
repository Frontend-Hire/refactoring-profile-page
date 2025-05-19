import { useMutation, useQueryClient } from '@tanstack/react-query';
import { saveProfile } from './api';

export default function useUpdateProfileMutation({
  onSuccess,
}: {
  onSuccess?: () => void;
}) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: saveProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile'] });
      onSuccess?.();
    },
  });
}
