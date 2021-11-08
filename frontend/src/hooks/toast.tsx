import React, {createContext, useContext, useCallback} from 'react';

import ToastContainer from '../components/ToastContainer';

interface ToastContextDate{
  addToast(): void;
  removeToast(): void;
}

const toastContext = createContext<ToastContextDate>({} as ToastContextDate);

const ToastProvider: React.FC = ({children}) => {

  const addToast = useCallback(() => {
    console.log('addToast')
  }, [])

  const removeToast = useCallback(() => {
    console.log('removeToast')
  }, [])

  return(
    <toastContext.Provider value={{addToast, removeToast}}>
      {children}
      <ToastContainer/>
    </toastContext.Provider>
  );
}

function useToast(): ToastContextDate{
  const context = useContext(toastContext);

  if(!context){
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}

export {ToastProvider, useToast};