import { Heading } from '../../components/Heading';
import { Base } from '../Base';
import { mockBase } from '../Base/mock';
import * as Styled from './styles';

function Home() {
  return <Base {...mockBase} />;
}

export default Home;
