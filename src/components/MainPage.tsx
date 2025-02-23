import Stepper from './Stepper';
import backgroundImage from '../assets/images/bg-image.jpg'; // Import the image
import Header from './Header';
import Footer from './Footer';
import SiteInfo from './SiteInfo';

function MainPage() {
  return (
    <div className="flex flex-col min-h-screen w-full items-center p-4">
      <div
        className="fixed inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/[0.6]"></div>
      </div>
      <Header />
      <main className="grow relative flex flex-col w-full py-8">
        <div className="flex flex-col md:flex-row w-full grow max-w-xl md:max-w-[1500px] mx-auto gap-12 items-center">
          <SiteInfo />
          <Stepper />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default MainPage;