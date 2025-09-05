import { axiosPublic } from '..';
import { ILoginDTO, IRegisterDTO } from './type';

export const register = async (payload: IRegisterDTO) => {
  const response = await axiosPublic.post('/User/Register', payload);
  return response.data;
};

export const login = async (payload: ILoginDTO) => {
  const response = await axiosPublic.post('User/Login', payload);
  return response.data;
}

export const confirmEmail = async (token: string) => {
  const response = await axiosPublic.get('User/Confirm-email', {
    params: {
      token
    }
  });
  return response.data;
}