import { Business } from '@/components/business/types';
import { formatErrorMessage } from '@/utils/utils';

const fetchBusinesses = async (): Promise<Business[]> => {
  const isProd = import.meta.env.VITE_PROD === 'true';
  const apiUrl = `${isProd ? import.meta.env.VITE_SERVER_URL_PROD : import.meta.env.VITE_SERVER_URL}api/businesses`;

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const businessesData: Partial<Business>[] = await response.json();

    if (!businessesData || businessesData.length === 0) {
      throw new Error('Businesses not found');
    }

    return businessesData as Business[];
  } catch (error) {
    const errorMessage = formatErrorMessage(error);
    throw new Error(errorMessage);
  }
};

export default fetchBusinesses;
