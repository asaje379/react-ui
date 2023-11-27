import { Badge } from './components';
import Carousel from './components/atoms/carousel/Carousel';
import { Icon } from './components/atoms/icons/Icon';
import { Image } from './components/atoms/images/Image';
import { Divider } from './components/atoms/separators/Divider';

import img1 from './assets/images/bg1.jpeg';
import img2 from './assets/images/bg2.jpeg';
import img3 from './assets/images/bg3.jpeg';
import img4 from './assets/images/bg4.jpeg';
import img5 from './assets/images/bg5.jpeg';

function App() {
  return (
    <div>
      <div className="tw-text-2xl tw-bold">Title</div>
      <Badge value={1} position="br">
        <Image src="/src/assets/images/cindy.png" />
      </Badge>

      <p>
        Hello <Icon name="search" size={48} />
        <Icon name="search" type="round" size={48} /> <Divider offset={10} />
        <div className="flex">
          <Icon name="search" type="sharp" size={48} />
          <Divider direction="vertical" />
        </div>
        <Image
          src="/src/assets/images/mountains.png"
          className="aspect-video"
        />
      </p>

      <Carousel imgs={[img1, img2, img3, img4, img5]} animationDuration={5} />
    </div>
  );
}

export default App;
