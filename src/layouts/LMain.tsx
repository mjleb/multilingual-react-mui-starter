import { ReactNode } from 'react';
import { Box, Container } from '@mui/material';

interface ILMainProps {
  children: ReactNode; // Указываем, что children может быть любым узлом React
}

const LMain: React.FC<ILMainProps> = ({ children }) => {
  return (
    <>
      <div>
        <Box
          id="hero"
          sx={(theme) => ({
            width: '100%',
            backgroundRepeat: 'no-repeat',

            backgroundImage: 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',
            ...theme.applyStyles('dark', {
              backgroundImage: 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
            }),
          })}
        >
          <Container
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              pt: { xs: 14, sm: 20 },
              pb: { xs: 8, sm: 12 },
            }}
          >
            {children}
          </Container>
        </Box>
      </div>
    </>
  );
};

export default LMain;
