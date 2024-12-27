import { Container, Typography } from '@mui/material';
import { StyledFooter } from '../app/themeMUI';

const CFooterMain: React.FC = () => {
  function Copyright() {
    return (
      <Typography
        variant="body2"
        align="center"
        sx={{
          color: 'text.secondary',
        }}
      >
        © 2023 - {new Date().getFullYear()}
      </Typography>
    );
  }
  return (
    <>
      <Container>
        <StyledFooter variant="dense" disableGutters>
          <Copyright />
        </StyledFooter>
      </Container>
    </>
  );
};

export default CFooterMain;
