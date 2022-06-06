import { blue, pink } from '@mui/material/colors';
import ImagemFundo from '../Assets/bg-intro-desktop.png';

const useStyles = () => ({
  titulo: {
    fontWeight: 'bold',
    color: '#ffffff',
  },
  imagemFundo: {
    backgroundColor: pink[300],
    backgroundImage: `url(${ImagemFundo})`,
    backgroundRepeat: 'no-repeat',
  },
  container: {
    padding: [0,15, 0, 15]
  },
  text: {
    color: '#ffffff',
  },
});

export default useStyles;
