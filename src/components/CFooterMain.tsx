import { Container, Typography } from '@mui/material';
import { StyledFooter } from '../app/themeMUI';
import Link from '@mui/material/Link';

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
        © {new Date().getFullYear()}{' '}
        <Link href="https://github.com/mjleb" color="inherit" variant="body2">
          github.com/mjleb
        </Link>
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
