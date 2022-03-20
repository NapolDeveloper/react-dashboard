import React from 'react';
import styled, { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { StyledEngineProvider, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';

import Sidebar from './components/Sidebar/Sidebar';
import theme from './theme';

// pages
import Dashboard from './pages/Dashboard';
import Favorites from './pages/Favorites';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  background-color: lightblue;
  padding: 20px;
`;

const Content = styled.div`
  /* background-color: #a9ffc1; */
  flex: 7; // sidebar = flex 1
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 20px 0;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <StyledThemeProvider theme={theme}>
        <MuiThemeProvider theme={theme}>
          <BrowserRouter>
            <Container>
              <GlobalStyle />
              <Sidebar />
              <Content>
                <Routes>
                  <Route path='/dashboard' element={<Dashboard />} />
                  <Route path='/favorites' element={<Favorites />} />
                  <Route path='/signin' element={<SignIn />} />
                  <Route path='/signup' element={<SignUp />} />
                </Routes>
              </Content>
            </Container>
          </BrowserRouter>
        </MuiThemeProvider>
      </StyledThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
