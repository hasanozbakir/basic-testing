// Uncomment the code below and write your tests
import axios from 'axios';
import { throttledGetDataFromApi } from './index';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('throttledGetDataFromApi', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.useRealTimers(); 
  });

  test('should create instance with provided base url', async () => {
    // Write your test here
    
  });

  test('should perform request to correct provided url', async () => {
    // Write your test here
    const relativePath = '/posts/1';
    const mockData = { id: 1, title: 'Test Post' };
    mockedAxios.create.mockReturnThis(); 
    mockedAxios.get.mockResolvedValue({ data: mockData }); 

    const result = await throttledGetDataFromApi(relativePath);

    expect(mockedAxios.get).toHaveBeenCalledWith(relativePath);
    expect(result).toEqual(mockData);
  });

  test('should return response data', async () => {
    // Write your test here
    
  });
});
