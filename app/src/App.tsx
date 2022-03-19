import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';

import Sidebar from './components/Sidebar/Sidebar';
import theme from './theme';

// pages
import Dashboard from './pages/Dashboard';
import Favorites from './pages/Favorites';
import SignIn from './pages/SignIn';

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
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Container>
          <GlobalStyle />
          <Sidebar />
          <Content>
            <Routes>
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/favorites' element={<Favorites />} />
              <Route path='/signin' element={<SignIn />} />
            </Routes>
          </Content>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
