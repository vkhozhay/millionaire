import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import getAllQuestions from './store/reducers/questions/questionsThunks';
import AppRouter from './components/AppRouter/AppRouter';
import './App.scss';

const App:FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllQuestions());
  }, []);

  return (
    <HashRouter>
      <AppRouter />
    </HashRouter>
  );
};

export default App;
