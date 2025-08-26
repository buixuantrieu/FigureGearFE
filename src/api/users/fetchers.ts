import { axiosPublic } from '..';
import { IRegisterDTO } from './type';

export const register = async (payload: IRegisterDTO) => {
  const response = await axiosPublic.post('/User/Register', payload);
  return response.data;
};