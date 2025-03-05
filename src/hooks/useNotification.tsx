import { Marathon } from '@/model/marathon';
import useSWR from 'swr';

export default function useNotification() {
  const { data: notification, isLoading, error, mutate } = useSWR<Marathon[]>('/api/notification');

  return { notification, isLoading, error };
}