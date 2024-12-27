import { ReactNode } from 'react';
import { Box, Container } from '@mui/material';
import CHeaderMain from '../components/CHeaderMain';
import CFooterMain from '../components/CFooterMain';
import { StyledLMainBox, StyledLMainContainer } from '../app/themeMUI';

interface ILMainProps {
  children: ReactNode;
}

const LMain: React.FC<ILMainProps> = ({ children }) => {
  return (
    <>
      <CHeaderMain />
      <Box
        sx={{
          ...StyledLMainBox,
        }}
      >
        <Container
          sx={{
            ...StyledLMainContainer,
          }}
        >
          {children}
        </Container>
        <CFooterMain />
      </Box>
    </>
  );
};

export default LMain;
