import { Play } from 'react-feather';
import Button from './Button';

const bg_url =
  'https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/library_hero.jpg?t=1628200840';

const logo_url =
  'https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/logo.png?t=1628200840';
// const logo_url =
//   'https://cdn.cloudflare.steamstatic.com/steam/apps/1593500/logo.png?t=1634741856';

export default function HeroGame() {
  return (
    <div className="relative h-[60vh] -z-10 shadow-xl overflow-x-hidden">
      <div
        className="h-full w-screen bg-cover bg-center flex flex-col-reverse"
        style={{ backgroundImage: `url(${bg_url})` }}
      >
        <div className="flex flex-row justify-between h-1/4 z-10 ">
          {/* Play button */}
          <div className="flex flex-col-reverse ml-8 mb-6">
            <Button>
              <Play className="h-5 w-5 mr-1" />
              <span>PLAY</span>
            </Button>
          </div>
          {/* Game logo */}
          <div className="flex justify-end flex-grow h-full">
            <div className="w-1/3 mr-5 mb-2 mt-auto">
              <img
                src={logo_url}
                alt=""
                className="object-scale-down max-h-60"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
