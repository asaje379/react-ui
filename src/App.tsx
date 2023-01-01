import { Icon } from "./components/atoms/icons/Icon";
import { Image } from "./components/atoms/images/Image";
import { Divider } from "./components/atoms/separators/Divider";

function App() {
  return (
    <div>
      <div className="text-2xl bold">Title</div>
      <Image src="/src/assets/images/cindy.png" />

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
    </div>
  );
}

export default App;
